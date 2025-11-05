import React, {JSX} from 'react'

type IconProps = {
    icon: JSX.Element
    size?: string
    color?: string
    gradient?: boolean
}

export default function Icon({
                                 icon,
                                 size = '1.5em',
                                 color = 'currentColor',
                                 gradient = false
                             }: IconProps) {

    return (
        <span
            style={{
                width: size,
                height: size,
                display: 'inline-block',
                color,
            }}
            className={gradient ? 'icon-gradient' : ''}
            aria-hidden="true"
        >
      {icon}
    </span>
    )
}
