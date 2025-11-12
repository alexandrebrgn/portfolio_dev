'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'theme-light' | 'theme-dark'>('theme-dark')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const stored = localStorage.getItem('theme') as 'theme-light' | 'theme-dark' | null
        if (stored) {
            setTheme(stored)
            if (stored === 'theme-dark') {
                document.documentElement.classList.add('theme-dark')
            } else {
                document.documentElement.classList.remove('theme-dark')
            }
        } else {
            // Valeur par défaut
            document.documentElement.classList.add('theme-dark')
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'theme-dark' ? 'theme-light' : 'theme-dark'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        document.documentElement.classList.toggle('theme-dark')
    }

    // Ne pas rendre le bouton avant le montage pour éviter le flash
    if (!mounted) {
        return (
            <button aria-label="Toggle theme" className="theme-toggle-button">
                🌙
            </button>
        )
    }

    return (
        <button onClick={toggleTheme} aria-label="Toggle theme" className="theme-toggle-button">
            {theme === 'theme-dark' ? '🌙' : '☀️'}
        </button>
    )
}