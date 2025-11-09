'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
    const [theme, setTheme] = useState<'theme-light' | 'theme-dark'>('theme-dark')

    useEffect(() => {
        const stored = localStorage.getItem('theme')
        if (stored === 'theme-dark') {
            document.documentElement.classList.add('theme-dark')
            setTheme('theme-dark')
        }
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === 'theme-light' ? 'theme-dark' : 'theme-light'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
        document.documentElement.classList.toggle('theme-dark')
    }

    return (
        <button onClick={toggleTheme} aria-label="Toggle theme" className="theme-toggle-button">
            {theme === 'theme-dark' ? '🌙' : '☀️'}
        </button>
    )
}
