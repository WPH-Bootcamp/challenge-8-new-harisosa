import { Icon } from "../atoms/Icon";

export const Footer: React.FC = () => {
    const copyrightText = "Copyright ©2025 Movie Explorer";

    return (
        <footer className="w-full border-t border-white/5 bg-black px-10 lg:px-35">
            <div className="mx-auto flex h-20 items-center justify-between">
                <div className="flex items-center text-white">
                    <Icon name="logo"/>
                </div>

                <div className="text-sm text-white/40">{copyrightText}</div>
            </div>
        </footer>
    );
};
