import * as React from "react";

export type IconName = "logo" | "search" | "play" | "close" | "menu" | 
"fav" | "chevron-right" | "chevron-left" | "star" | "video" | "face" | 
"calendar" | "back";

type Props = React.SVGProps<SVGSVGElement> & {
    name: IconName;
};

export const Icon: React.FC<Props> = ({ name, className, ...props }) => {

    switch (name) {
        case 'logo': return (<LogoIcon className={className} {...props} />);
        case 'search': return (<SearchIcon className={className} {...props} />);
        case 'play': return (<PlayIcon className={className} {...props} />);
        case 'close': return (<CloseIcon className={className} {...props} />);
        case 'menu': return (<MenuIcon className={className} {...props} />);
        case 'fav': return (<FavoriteIcon className={className} {...props} />);
        case 'chevron-right': return (<ChevronRightIcon className={className} {...props} />);
        case 'chevron-left': return (<ChevronLeftIcon className={className} {...props} />);
        case 'star': return (<StarIcon className={className} {...props} />);
        case 'video': return (<VideoIcon className={className} {...props} />);
        case 'face': return (<FaceIcon className={className} {...props} />);
        case 'calendar': return (<CalendarIcon className={className} {...props} />);
        case 'back': return (<BackIcon className={className} {...props} />);
    }
};

const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => {
    return (
        <svg width="130" height="40" viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
            <path d="M33.3334 10.0001H24.0234L27.845 6.17844L25.4884 3.82178L20 9.31011L14.5117 3.82178L12.155 6.17844L15.9767 10.0001H6.66671C4.82837 10.0001 3.33337 11.4951 3.33337 13.3334V31.6668C3.33337 33.5051 4.82837 35.0001 6.66671 35.0001H33.3334C35.1717 35.0001 36.6667 33.5051 36.6667 31.6668V13.3334C36.6667 11.4951 35.1717 10.0001 33.3334 10.0001Z" fill="#FDFDFD" />
            <path d="M70.8844 10.1458V30H66.9022V17.0862L61.5831 30H58.568L53.2204 17.0862V30H49.2382V10.1458H53.7609L60.0755 24.9084L66.3902 10.1458H70.8844ZM80.6811 30.256C79.164 30.256 77.7987 29.9241 76.5851 29.2604C75.3715 28.5778 74.4138 27.6201 73.7122 26.3876C73.0295 25.155 72.6882 23.7327 72.6882 22.1209C72.6882 20.509 73.039 19.0868 73.7406 17.8542C74.4612 16.6216 75.4378 15.6735 76.6704 15.0098C77.903 14.3271 79.2778 13.9858 80.7949 13.9858C82.3119 13.9858 83.6867 14.3271 84.9193 15.0098C86.1519 15.6735 87.119 16.6216 87.8206 17.8542C88.5412 19.0868 88.9015 20.509 88.9015 22.1209C88.9015 23.7327 88.5318 25.155 87.7922 26.3876C87.0716 27.6201 86.0855 28.5778 84.834 29.2604C83.6014 29.9241 82.2171 30.256 80.6811 30.256ZM80.6811 26.7858C81.4017 26.7858 82.0749 26.6151 82.7006 26.2738C83.3454 25.9135 83.8574 25.3825 84.2366 24.6809C84.6159 23.9793 84.8055 23.1259 84.8055 22.1209C84.8055 20.6228 84.4073 19.4756 83.6109 18.6791C82.8334 17.8637 81.8758 17.456 80.738 17.456C79.6002 17.456 78.6426 17.8637 77.8651 18.6791C77.1066 19.4756 76.7273 20.6228 76.7273 22.1209C76.7273 23.619 77.0971 24.7757 77.8366 25.5911C78.5952 26.3876 79.5433 26.7858 80.6811 26.7858ZM97.2555 26.3307L101.238 14.2418H105.476L99.6449 30H94.8093L89.0066 14.2418H93.2733L97.2555 26.3307ZM108.594 12.3644C107.893 12.3644 107.305 12.1464 106.831 11.7102C106.376 11.2551 106.148 10.6957 106.148 10.032C106.148 9.3683 106.376 8.81837 106.831 8.38222C107.305 7.92711 107.893 7.69955 108.594 7.69955C109.296 7.69955 109.874 7.92711 110.33 8.38222C110.804 8.81837 111.041 9.3683 111.041 10.032C111.041 10.6957 110.804 11.2551 110.33 11.7102C109.874 12.1464 109.296 12.3644 108.594 12.3644ZM110.557 14.2418V30H106.575V14.2418H110.557ZM128.003 21.7796C128.003 22.3484 127.965 22.8604 127.889 23.3156H116.369C116.464 24.4533 116.862 25.3446 117.564 25.9893C118.265 26.6341 119.128 26.9564 120.152 26.9564C121.631 26.9564 122.684 26.3212 123.309 25.0507H127.604C127.149 26.5677 126.277 27.8193 124.988 28.8053C123.698 29.7724 122.115 30.256 120.237 30.256C118.72 30.256 117.355 29.9241 116.141 29.2604C114.947 28.5778 114.008 27.6201 113.325 26.3876C112.662 25.155 112.33 23.7327 112.33 22.1209C112.33 20.4901 112.662 19.0584 113.325 17.8258C113.989 16.5932 114.918 15.645 116.113 14.9813C117.308 14.3176 118.682 13.9858 120.237 13.9858C121.735 13.9858 123.072 14.3081 124.248 14.9529C125.443 15.5976 126.362 16.5173 127.007 17.712C127.671 18.8877 128.003 20.2436 128.003 21.7796ZM123.878 20.6418C123.859 19.6178 123.489 18.8024 122.769 18.1956C122.048 17.5698 121.166 17.2569 120.124 17.2569C119.137 17.2569 118.303 17.5603 117.62 18.1671C116.957 18.755 116.549 19.5799 116.397 20.6418H123.878Z" fill="#FDFDFD" />
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
        <svg width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            xmlns="http://www.w3.org/2000/svg"
            className={className} {...props}>
            <path d="M13 1L1 13M1 1L13 13" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
            <path d="M21 7.75H3C2.59 7.75 2.25 7.41 2.25 7C2.25 6.59 2.59 6.25 3 6.25H21C21.41 6.25 21.75 6.59 21.75 7C21.75 7.41 21.41 7.75 21 7.75Z" fill="#FDFDFD" />
            <path d="M21 12.75H3C2.59 12.75 2.25 12.41 2.25 12C2.25 11.59 2.59 11.25 3 11.25H21C21.41 11.25 21.75 11.59 21.75 12C21.75 12.41 21.41 12.75 21 12.75Z" fill="#FDFDFD" />
            <path d="M21 17.75H3C2.59 17.75 2.25 17.41 2.25 17C2.25 16.59 2.59 16.25 3 16.25H21C21.41 16.25 21.75 16.59 21.75 17C21.75 17.41 21.41 17.75 21 17.75Z" fill="#FDFDFD" />
        </svg>

    )
}


const FavoriteIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => {
    return (
        <svg viewBox="0 0 24 24"
            className={className}

            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            {...props}
            xmlns="http://www.w3.org/2000/svg">
            <path d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69001C2 5.60001 4.49 3.10001 7.56 3.10001C9.38 3.10001 10.99 3.98001 12 5.34001C13.01 3.98001 14.63 3.10001 16.44 3.10001C19.51 3.10001 22 5.60001 22 8.69001C22 15.69 15.52 19.82 12.62 20.81Z"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}


const ChevronRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => {
    return (
        <svg width="9" height="14" viewBox="0 0 9 14" fill="none"
            stroke="currentColor"
            strokeWidth="2" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
            <path d="M1.16667 12.8334L7 7.00002L1.16667 1.16669" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}


const ChevronLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => {
    return (
        <svg width="9" height="14" viewBox="0 0 9 14"
            fill="none"
            stroke="currentColor" xmlns="http://www.w3.org/2000/svg" className={className} {...props}>
            <path d="M1.16667 12.8334L7 7.00002L1.16667 1.16669" stroke-linecap="round" stroke-linejoin="round" transform="translate(9 0) scale(-1 1)" />
        </svg>
    )
}

const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
    className,
    ...props
}) => {
    return (
        <svg
            viewBox="0 0 28 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <path
                d="M12.2289 1.77499C12.8507 0.741682 14.3488 0.741682 14.9707 1.77499L18.0779 6.9382C18.3013 7.30942 18.6657 7.57417 19.0878 7.67192L24.9585 9.03159C26.1334 9.3037 26.5963 10.7284 25.8058 11.6392L21.8555 16.1899C21.5715 16.5171 21.4323 16.9454 21.4697 17.3771L21.9907 23.3806C22.095 24.5821 20.8831 25.4626 19.7726 24.9922L14.2239 22.6415C13.825 22.4725 13.3746 22.4725 12.9756 22.6415L7.42695 24.9922C6.31649 25.4626 5.10452 24.5821 5.20879 23.3806L5.72982 17.3771C5.76728 16.9454 5.62809 16.5171 5.34408 16.1899L1.39378 11.6392C0.603204 10.7284 1.06613 9.3037 2.24104 9.03159L8.11173 7.67192C8.53382 7.57417 8.89821 7.30942 9.12162 6.9382L12.2289 1.77499Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
            />
        </svg>
    );
};


const VideoIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => {
    return (
        <svg viewBox="0 0 32 32" aria-hidden="true"
            className={className}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            {...props}
            xmlns="http://www.w3.org/2000/svg">
            <path d="M28.2002 8.22668C27.6535 7.93334 26.5068 7.62668 24.9468 8.72001L22.9868 10.1067C22.8402 5.96001 21.0402 4.33334 16.6668 4.33334H8.66683C4.10683 4.33334 2.3335 6.10668 2.3335 10.6667V21.3333C2.3335 24.4 4.00016 27.6667 8.66683 27.6667H16.6668C21.0402 27.6667 22.8402 26.04 22.9868 21.8933L24.9468 23.28C25.7735 23.8667 26.4935 24.0533 27.0668 24.0533C27.5602 24.0533 27.9468 23.9067 28.2002 23.7733C28.7468 23.4933 29.6668 22.7333 29.6668 20.8267V11.1733C29.6668 9.26668 28.7468 8.50668 28.2002 8.22668ZM14.6668 15.1733C13.2935 15.1733 12.1602 14.0533 12.1602 12.6667C12.1602 11.28 13.2935 10.16 14.6668 10.16C16.0402 10.16 17.1735 11.28 17.1735 12.6667C17.1735 14.0533 16.0402 15.1733 14.6668 15.1733Z" fill="#FDFDFD" />
        </svg>


    )
}

const FaceIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => {
    return (
        <svg className={className}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            {...props}
            viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.5865 2.66666H10.4132C5.55984 2.66666 2.6665 5.55999 2.6665 10.4133V21.5733C2.6665 26.44 5.55984 29.3333 10.4132 29.3333H21.5732C26.4265 29.3333 29.3198 26.44 29.3198 21.5867V10.4133C29.3332 5.55999 26.4398 2.66666 21.5865 2.66666ZM11.3332 8.50666C12.7065 8.50666 13.8398 9.62666 13.8398 11.0133C13.8398 12.4 12.7198 13.52 11.3332 13.52C9.9465 13.52 8.8265 12.3733 8.8265 11C8.8265 9.62666 9.95984 8.50666 11.3332 8.50666ZM15.9998 25.44C12.4132 25.44 9.49317 22.52 9.49317 18.9333C9.49317 18 10.2532 17.2267 11.1865 17.2267H20.7865C21.7198 17.2267 22.4798 17.9867 22.4798 18.9333C22.5065 22.52 19.5865 25.44 15.9998 25.44ZM20.6665 13.4933C19.2932 13.4933 18.1598 12.3733 18.1598 10.9867C18.1598 9.59999 19.2798 8.47999 20.6665 8.47999C22.0532 8.47999 23.1732 9.59999 23.1732 10.9867C23.1732 12.3733 22.0398 13.4933 20.6665 13.4933Z" fill="#FDFDFD" />
        </svg>
    )
}


const CalendarIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => {
    return (
        <svg className={className}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            {...props}
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 2V5" stroke="#FDFDFD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M16 2V5" stroke="#FDFDFD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.5 9.09H20.5" stroke="#FDFDFD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#FDFDFD" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.6947 13.7H15.7037" stroke="#FDFDFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15.6947 16.7H15.7037" stroke="#FDFDFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11.9955 13.7H12.0045" stroke="#FDFDFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M11.9955 16.7H12.0045" stroke="#FDFDFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.29431 13.7H8.30329" stroke="#FDFDFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.29431 16.7H8.30329" stroke="#FDFDFD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}


const BackIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({ className, ...props }) => {
    return (
        <svg viewBox="0 0 24 24"
            className={className}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            {...props}
            xmlns="http://www.w3.org/2000/svg">
            <path d="M9.56945 18.82C9.37945 18.82 9.18945 18.75 9.03945 18.6L2.96945 12.53C2.67945 12.24 2.67945 11.76 2.96945 11.47L9.03945 5.4C9.32945 5.11 9.80945 5.11 10.0995 5.4C10.3895 5.69 10.3895 6.17 10.0995 6.46L4.55945 12L10.0995 17.54C10.3895 17.83 10.3895 18.31 10.0995 18.6C9.95945 18.75 9.75945 18.82 9.56945 18.82Z" fill="#FDFDFD" />
            <path d="M20.4999 12.75H3.66992C3.25992 12.75 2.91992 12.41 2.91992 12C2.91992 11.59 3.25992 11.25 3.66992 11.25H20.4999C20.9099 11.25 21.2499 11.59 21.2499 12C21.2499 12.41 20.9099 12.75 20.4999 12.75Z" fill="#FDFDFD" />
        </svg>

    )
}








