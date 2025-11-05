'use client'

import React, { useRef } from 'react'

type SmartCardProps = {
    src: string
    alt?: string
    className?: string
}

export default function MyCard({ src, alt = 'Image', className = '' }: SmartCardProps) {
    const boundingRef = useRef<DOMRect | null>(null)
    const cardRef = useRef<HTMLDivElement>(null)

    const handleMouseEnter = (ev: React.MouseEvent<HTMLDivElement>) => {
        boundingRef.current = ev.currentTarget.getBoundingClientRect()
    }

    const handleMouseMove = (ev: React.MouseEvent<HTMLDivElement>) => {
        if (!boundingRef.current || !cardRef.current) return

        const x = ev.clientX - boundingRef.current.left
        const y = ev.clientY - boundingRef.current.top
        const yPercentage = x / boundingRef.current.width
        const xPercentage = y / boundingRef.current.height
        const xRotation = (xPercentage - 0.5) * 20
        const yRotation = (0.5 - yPercentage) * 20

        cardRef.current.style.setProperty('--x-rotation', `${xRotation}deg`)
        cardRef.current.style.setProperty('--y-rotation', `${yRotation}deg`)
        cardRef.current.style.setProperty('--scale', '1.03')
    }

    const handleMouseLeave = () => {
        if (!cardRef.current) return
        cardRef.current.style.setProperty('--x-rotation', '0deg')
        cardRef.current.style.setProperty('--y-rotation', '0deg')
        cardRef.current.style.setProperty('--scale', '1')
    }

    return (
        <div className="flex flex-col [perspective:1200px]">
            <div
                ref={cardRef}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className={`overflow-hidden rounded-4xl transition-transform duration-300 ease-out ${className}
                border-white border-4 `}
                style={{
                    transformStyle: 'preserve-3d',
                    transform: 'scale(var(--scale)) rotateX(var(--x-rotation)) rotateY(var(--y-rotation))',
                    '--x-rotation': '0deg',
                    '--y-rotation': '0deg',
                    '--scale': '1',
                } as React.CSSProperties}
            >
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover block"
                />
            </div>
        </div>
    )
}
