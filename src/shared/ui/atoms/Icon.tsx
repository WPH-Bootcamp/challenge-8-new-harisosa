import * as React from "react";

type IconName = "logo" | "search" | "play" | "close" | "menu";

type Props = React.SVGProps<SVGSVGElement> & {
    name: IconName;
};

export const Icon: React.FC<Props> = ({ name, className, ...props }) => {

    switch (name) {
        case 'logo': return (<LogoIcon className={className} {...props} />);
        case 'search': return (<SearchIcon className={className} {...props} />);
        case 'play': return (<PlayIcon className={className} {...props} />)
        case 'close': return (<CloseIcon className={className} {...props} />)
        case 'menu': return (<MenuIcon className={className} {...props} />)
    }
};

const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
            <path d="M33.3334 9.99999H24.0234L27.845 6.17832L25.4884 3.82166L20 9.30999L14.5117 3.82166L12.155 6.17832L15.9767 9.99999H6.66671C4.82837 9.99999 3.33337 11.495 3.33337 13.3333V31.6667C3.33337 33.505 4.82837 35 6.66671 35H33.3334C35.1717 35 36.6667 33.505 36.6667 31.6667V13.3333C36.6667 11.495 35.1717 9.99999 33.3334 9.99999Z" fill="#FDFDFD" />
        </svg>
    )
}

const SearchIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => {
    return (
        <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className={className}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            {...props}
        >
            <path d="M21 21l-4.3-4.3" />
            <circle cx="11" cy="11" r="7" />
        </svg>
    )
}

const PlayIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
            <path d="M9 7.5v9l8-4.5-8-4.5Z" />
        </svg>
    )
}

const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => {
    return (
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
            <path d="M13 1L1 13M1 1L13 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
            <path d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z" fill="#FDFDFD" />
            <path d="M21 12.75H3C2.59 12.75 2.25 12.41 2.25 12C2.25 11.59 2.59 11.25 3 11.25H21C21.41 11.25 21.75 11.59 21.75 12C21.75 12.41 21.41 12.75 21 12.75Z" fill="#FDFDFD" />
            <path d="M21 17.75H3C2.59 17.75 2.25 17.41 2.25 17C2.25 16.59 2.59 16.25 3 16.25H21C21.41 16.25 21.75 16.59 21.75 17C21.75 17.41 21.41 17.75 21 17.75Z" fill="#FDFDFD" />
        </svg>

    )
}

