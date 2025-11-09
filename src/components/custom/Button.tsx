import {ReactElement} from "react";

type ButtonProps = {
    text: string,
    link?: string,
    icon?: ReactElement,
    gradient?: boolean
    className?: string,
}

export default function Button({text, link, icon, gradient = false, className}: ButtonProps) {
    let a_classes = `flex items-center justify-center gap-2 py-2 px-4 rounded-4xl ${className}`
    if (gradient) {
        a_classes += ` bg-gradient-orange`
    } else {
        a_classes += ` bg-(--accent-regular)`
    }

    return (
        <a href={link} className={a_classes}>
            <div className="text-white center">{icon}</div>
            <p className="text-white font-semibold">{text}</p>
        </a>
    )
}