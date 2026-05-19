import '@/app/globals.css'
import '@/styles/BaseLayout.css'
import React from "react"
import Navbar from '@/components/custom/Navbar'
import Footer from "@/components/custom/Footer";

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
                <div className="px-16 lg:px-32 2xl:px-80 pb-8 lg:pb-16 2xl:pb-36">
                    {title && (
                        <div className="flex flex-col pb-10">
                            <h1 className="text-3xl lg:text-5xl">{title}</h1>
                            <p className=" text-lg lg:text-xl text-[var(--gray-300)]">{description}</p>
                        </div>
                    )}
                    {children}
                </div>
                <Footer/>
            </div>
        </div>
    )
}