import * as React from "react";
import { type SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
    size?: number;
};

export const FacebookLogo: React.FC<IconSvgProps> = ({
    size = 24,
    width,
    height,
    ...props
}) => {
    return (
        <svg
            height={size || height}
            viewBox="0 0 36 36"
            width={size || width}
            fill="url(#a)"
            {...props}
        >
            <defs>
                <linearGradient x1="50%" x2="50%" y1="97.078%" y2="0%" id="a">
                    <stop offset="0%" stopColor="#0062E0" />
                    <stop offset="100%" stopColor="#19AFFF" />
                </linearGradient>
            </defs>
            <path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z" />
            <path
                fill="#FFF"
                d="m25 23 .8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"
            />
        </svg>
    );
};
export const Behance: React.FC<IconSvgProps> = ({
    size = 24,
    width,
    height,
    ...props
}) => {
    return (
        <svg
            height={size || height}
            viewBox="0 0 24 24"
            width={size || width}
            fill="currentColor"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.5 19C1.67157 19 1 18.3284 1 17.5V6.5C1 5.67157 1.67157 5 2.5 5H8C13 5 13 11.5 10 11.5C13 11.5 14 19 8 19H2.5ZM4.5 11C4.22386 11 4 10.7761 4 10.5V7.5C4 7.22386 4.22386 7 4.5 7H7C7 7 9 7 9 9C9 11 7 11 7 11H4.5ZM4.5 13C4.22386 13 4 13.2239 4 13.5V16.5C4 16.7761 4.22386 17 4.5 17H8C8 17 9.5 17 9.5 15C9.5 13 8 13 8 13H4.5Z"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.499 14.0034C22.3279 14.0034 23.0212 13.3199 22.8522 12.5085C21.6065 6.52886 12.9128 7.08088 13 14.0034C13.0665 19.2762 20.4344 20.9671 22.6038 16.1898C22.9485 15.4308 22.1747 14.9997 21.5372 14.9997C20.9706 14.9997 20.5313 15.5223 20.1693 15.9582C19.1272 17.2132 15.9628 17.1221 15.5449 14.5142C15.5005 14.2375 15.7304 14.0034 16.0106 14.0034H21.499ZM15.8184 11.9997C15.671 11.9997 15.5758 11.8453 15.6545 11.7207C16.7141 10.0424 19.2614 10.0605 20.3398 11.7189C20.4207 11.8434 20.3257 11.9997 20.1772 11.9997H15.8184Z"
            />
            <path d="M16 6C15.4477 6 15 6.44772 15 7C15 7.55228 15.4477 8 16 8H20C20.5523 8 21 7.55228 21 7C21 6.44772 20.5523 6 20 6H16Z" />
        </svg>
    );
};

export const Shadcnui = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width="1em"
        height="1em"
        stroke="currentColor"
        {...props}
    >
        <path fill="none" d="M0 0h256v256H0z" />
        <path
            fill="none"
            strokeWidth={25}
            strokeLinecap="round"
            d="M208 128l-80 80M192 40L40 192"
        />
    </svg>
);
export const DaisyUI = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        {...props}
    >
        <rect
            width={512}
            height={256}
            x={256}
            y={670.72}
            fill="currentColor"
            rx={128}
        />
        <circle cx={512} cy={353.28} r={256} fill="#fff" />
        <circle
            cx={512}
            cy={353.28}
            r={261}
            stroke="#000"
            strokeOpacity={0.2}
            strokeWidth={10}
        />
        <circle cx={512} cy={353.28} r={114.688} fill="#FF9903" />
    </svg>
);
export const HeroUI = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 74 74"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="none"
        {...props}
    >
        <path
            fill="#ffff"
            d="M54.35.083H19.566C8.76.083 0 8.843 0 19.649v34.783C0 65.239 8.76 74 19.566 74H54.35c10.806 0 19.566-8.76 19.566-19.566V19.648C73.916 8.843 65.156.083 54.35.083Z"
        />
        <path
            fill="currentColor"
            d="M50.638 52.566V21.201h3.877v31.365h-3.877ZM31.731 53.22c-2.425 0-4.567-.501-6.425-1.503a11.087 11.087 0 0 1-4.378-4.204c-1.046-1.815-1.569-3.942-1.569-6.382V21.223l3.921-.022v19.604c0 1.48.247 2.773.74 3.877.509 1.089 1.177 1.996 2.005 2.722a8.61 8.61 0 0 0 2.722 1.634 9.039 9.039 0 0 0 2.984.523 8.773 8.773 0 0 0 3.006-.545 8.5 8.5 0 0 0 2.723-1.612c.827-.726 1.488-1.64 1.982-2.744.493-1.104.74-2.389.74-3.855V21.2h3.921v19.93c0 2.425-.53 4.545-1.59 6.36a10.893 10.893 0 0 1-4.356 4.226c-1.859 1.002-4 1.503-6.426 1.503Z"
        />
    </svg>
);

export const TailwindCSS = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 262 33"
        width="1em"
        height="1em"
        {...props}
    >
        <path
            fill="#38BDF8"
            fillRule="evenodd"
            d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2Z"
            clipRule="evenodd"
        />
        <path
            className="fill-current"
            fillRule="evenodd"
            d="M80.996 13.652h-4.712v9.12c0 2.432 1.596 2.394 4.712 2.242V28.7c-6.308.76-8.816-.988-8.816-5.928v-9.12h-3.496V9.7h3.496V4.596l4.104-1.216V9.7h4.712v3.952ZM98.958 9.7h4.104v19h-4.104v-2.736c-1.444 2.014-3.686 3.23-6.65 3.23-5.168 0-9.462-4.37-9.462-9.994 0-5.662 4.294-9.994 9.462-9.994 2.964 0 5.206 1.216 6.65 3.192V9.7Zm-6.004 15.58c3.42 0 6.004-2.546 6.004-6.08 0-3.534-2.584-6.08-6.004-6.08-3.42 0-6.004 2.546-6.004 6.08 0 3.534 2.584 6.08 6.004 6.08Zm16.948-18.43c-1.444 0-2.622-1.216-2.622-2.622a2.627 2.627 0 0 1 2.622-2.622 2.629 2.629 0 0 1 2.622 2.622c0 1.406-1.178 2.622-2.622 2.622ZM107.85 28.7v-19h4.104v19h-4.104Zm8.854 0V.96h4.104V28.7h-4.104Zm30.742-19h4.332l-5.966 19h-4.028l-3.952-12.806-3.99 12.806h-4.028l-5.966-19h4.332l3.686 13.11 3.99-13.11h3.914l3.952 13.11 3.724-13.11Zm9.424-2.85c-1.444 0-2.622-1.216-2.622-2.622a2.627 2.627 0 0 1 2.622-2.622 2.629 2.629 0 0 1 2.622 2.622c0 1.406-1.178 2.622-2.622 2.622Zm-2.052 21.85v-19h4.104v19h-4.104Zm18.848-19.494c4.256 0 7.296 2.888 7.296 7.828V28.7h-4.104V17.452c0-2.888-1.672-4.408-4.256-4.408-2.698 0-4.826 1.596-4.826 5.472V28.7h-4.104v-19h4.104v2.432c1.254-1.976 3.306-2.926 5.89-2.926ZM200.418 2.1h4.104v26.6h-4.104v-2.736c-1.444 2.014-3.686 3.23-6.65 3.23-5.168 0-9.462-4.37-9.462-9.994 0-5.662 4.294-9.994 9.462-9.994 2.964 0 5.206 1.216 6.65 3.192V2.1Zm-6.004 23.18c3.42 0 6.004-2.546 6.004-6.08 0-3.534-2.584-6.08-6.004-6.08-3.42 0-6.004 2.546-6.004 6.08 0 3.534 2.584 6.08 6.004 6.08Zm23.864 3.914c-5.738 0-10.032-4.37-10.032-9.994 0-5.662 4.294-9.994 10.032-9.994 3.724 0 6.954 1.938 8.474 4.902l-3.534 2.052c-.836-1.786-2.698-2.926-4.978-2.926-3.344 0-5.89 2.546-5.89 5.966 0 3.42 2.546 5.966 5.89 5.966 2.28 0 4.142-1.178 5.054-2.926l3.534 2.014c-1.596 3.002-4.826 4.94-8.55 4.94Zm15.314-14.25c0 3.458 10.222 1.368 10.222 8.398 0 3.8-3.306 5.852-7.41 5.852-3.8 0-6.536-1.71-7.752-4.446l3.534-2.052c.608 1.71 2.128 2.736 4.218 2.736 1.824 0 3.23-.608 3.23-2.128 0-3.382-10.222-1.482-10.222-8.284 0-3.572 3.078-5.814 6.954-5.814 3.116 0 5.7 1.444 7.03 3.952l-3.458 1.938c-.684-1.482-2.014-2.166-3.572-2.166-1.482 0-2.774.646-2.774 2.014Zm17.518 0c0 3.458 10.222 1.368 10.222 8.398 0 3.8-3.306 5.852-7.41 5.852-3.8 0-6.536-1.71-7.752-4.446l3.534-2.052c.608 1.71 2.128 2.736 4.218 2.736 1.824 0 3.23-.608 3.23-2.128 0-3.382-10.222-1.482-10.222-8.284 0-3.572 3.078-5.814 6.954-5.814 3.116 0 5.7 1.444 7.03 3.952l-3.458 1.938c-.684-1.482-2.014-2.166-3.572-2.166-1.482 0-2.774.646-2.774 2.014Z"
            clipRule="evenodd"
        />
    </svg>
);
