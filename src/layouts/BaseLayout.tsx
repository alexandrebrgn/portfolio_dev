import '@/app/globals.css'
import '@/styles/BaseLayout.css'
import React from "react"
import Navbar from '@/components/custom/Navbar'

type BaseLayoutProps = {
    title?: string,
    description?: string,
    children?: React.ReactNode,
}

export default function BaseLayout({title, description, children}: BaseLayoutProps) {
    return (
        <div>
            <div className="stack backgrounds">
                <Navbar/>
                <div className="px-12 lg:px-36">
                    <div className="max-w-1/2">
                        <h1>{title}</h1>
                        <p className="text-xl text-[var(--gray-300)]">{description}</p>
                    </div>
                    {children}
                </div>
                {/*<Footer/>*/}
            </div>
        </div>
    )
}