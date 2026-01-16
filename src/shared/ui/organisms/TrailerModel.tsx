import React, { useEffect, useMemo, useState } from "react";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";

type TrailerModalProps = {
    open: boolean;
    onClose: () => void;
    videoId: string | null;
    isLoading?: boolean;
};

export const TrailerModal: React.FC<TrailerModalProps> = ({ open, onClose, videoId, isLoading }) => {
    if (!open) return null;

    // key berubah kalau video berubah → reset internal state
    const k = `${videoId ?? "none"}`;

    return (
        <TrailerModalImp
            key={k}
            onClose={onClose}
            videoId={videoId}
            isLoading={isLoading}
        />
    );
};

type TrailerModalImpProps = {
    onClose: () => void;
    videoId: string | null;
    isLoading?: boolean;
};

const TrailerModalImp: React.FC<TrailerModalImpProps> = ({ onClose, videoId, isLoading }) => {
    const [showFallback, setShowFallback] = useState(false);

    const embedUrl = useMemo(() => {
        if (!videoId) return "";
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
    }, [videoId]);

    const watchUrl = useMemo(() => {
        if (!videoId) return "";
        return `https://www.youtube.com/watch?v=${videoId}`;
    }, [videoId]);

    // show fallback hint after 2s (no synchronous reset needed)
    useEffect(() => {
        if (!videoId) return;
        const t = window.setTimeout(() => setShowFallback(true), 2000);
        return () => window.clearTimeout(t);
    }, [videoId]);

    // ESC close
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-999 grid place-items-center bg-black/70 p-4"
            onClick={onClose}
        >
            <div
                className="w-full max-w-3xl overflow-hidden rounded-2xl bg-black"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between gap-3 p-3">
                    <div className="flex items-center gap-3">
                        {videoId && (
                            <a
                                className="text-xs text-white/70 underline hover:text-white"
                                href={watchUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Open in YouTube
                            </a>
                        )}
                        {videoId && showFallback && (
                            <span className="text-xs text-white/50">
                                Kalau video error di modal, buka lewat link YouTube.
                            </span>
                        )}
                    </div>

                    <Button variant="custom" onClick={onClose}>
                        <Icon name="close" />
                    </Button>
                </div>
                <div className="aspect-video w-full bg-black">
                    {isLoading ? (
                        <div className="grid h-full w-full place-items-center text-white/70">
                            Loading trailer...
                        </div>
                    ) : !videoId ? (
                        <div className="grid h-full w-full place-items-center text-white/70">
                            Trailer tidak tersedia.
                        </div>
                    ) : (
                        <iframe
                            key={videoId}
                            className="h-full w-full"
                            src={embedUrl}
                            title="Trailer"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            referrerPolicy="strict-origin-when-cross-origin"
                        />
                    )}
                </div>


            </div>
        </div>
    );
};
