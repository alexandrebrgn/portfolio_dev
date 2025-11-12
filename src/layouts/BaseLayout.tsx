import '@/app/globals.css'
import '@/styles/BaseLayout.css'
import React from "react"
import Navbar from '@/components/custom/Navbar'

export default function BaseLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="stack backgrounds">
                <Navbar/>
                <div className="px-36">
                    {children}
                </div>
                {/*<Footer/>*/}
            </div>
        </div>
    )
}