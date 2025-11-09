'use client'

import {useEffect, useState} from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import Icon from './Icon'
import '@/styles/nav.css'
import ThemeToggle from './ThemeToggle'
import {BrandSpotify, BrandLinkedin, BrandGithub, BrandInstagram, Menu} from "@mynaui/icons-react"
import {GoTerminal} from 'react-icons/go';

const textLinks = [
    {label: 'Accueil', href: '/'},
    {label: 'Compétences', href: '/skills/'},
    {label: 'Projets', href: '/work/'},
    {label: 'À propos', href: '/about/'}
]

const iconLinks = [
    {label: 'LinkedIn', href: 'https://www.linkedin.com/in/alexandre-bourguignon-2782b9273/', icon: <BrandLinkedin/>},
    {label: 'GitHub', href: 'https://github.com/alexandrebrgn', icon: <BrandGithub/>},
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/alex.brgn?utm_source=qr&igsh=MW80YnQ5Z3hibXh5YQ==',
        icon: <BrandInstagram/>
    },
    {
        label: 'Spotify',
        href: 'https://open.spotify.com/user/317zyqc4t6dezvqoutu7c3jjxgyi?si=Kl-h5J7fSeagWmvWjIKFnw',
        icon: <BrandSpotify/>
    }
]

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [isLargeScreen, setIsLargeScreen] = useState(true)
    const pathname = usePathname()

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 50em)')
        const handleChange = (e: MediaQueryListEvent) => setIsLargeScreen(e.matches)
        setIsLargeScreen(mediaQuery.matches)
        mediaQuery.addEventListener('change', handleChange)
        return () => mediaQuery.removeEventListener('change', handleChange)
    }, [])

    const isActive = (href: string) =>
        pathname === href || (href !== '/' && pathname.startsWith(href))

    return (
        <nav className="relative z-[9999] font-brand font-medium mb-14">
            <div className="menu-header flex justify-between items-center gap-2 px-6 py-6">
                <Link href="/" className="site-title flex items-center gap-2 text-gray-100 no-underline">
                    <Icon icon={<GoTerminal size={"full"}/>} color="var(--accent-regular)" size="1.6em" gradient/>
                    Alexandre Bourguignon
                </Link>
                {!isLargeScreen && (
                    <button
                        className="menu-button"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className="sr-only">Menu</span>
                        <Icon icon={<Menu size={"full"}/>}/>
                    </button>
                )}
            </div>

            {(menuOpen || isLargeScreen) && (
                <div className={`menu-content ${isLargeScreen ? 'grid grid-cols-[1fr_auto_1fr]' : ''}`}>
                    <ul className="nav-items">
                        {textLinks.map(({label, href}) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`link ${isActive(href) ? 'active' : ''}`}
                                    aria-current={isActive(href) ? 'page' : undefined}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="menu-footer">
                        <div className="socials">
                            {iconLinks.map(({href, icon, label}) => (
                                <a key={label} href={href} className="social" aria-label={label}>
                                    {icon}
                                </a>
                            ))}
                        </div>
                        <div className="theme-toggle">
                            <ThemeToggle/>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}
