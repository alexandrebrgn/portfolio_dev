'use client'

import '@/app/globals.css'
import '@/styles/BaseLayout.css'
import type {Metadata} from "next"
import React from "react"
import Navbar from '@/components/custom/Navbar'

export const metadata: Metadata = {
    title: 'Mon Portfolio',
    description: 'Découvrez mes projet'
}

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

            <script
                dangerouslySetInnerHTML={{
                    __html: `
              addEventListener('load', () => {
                document.documentElement.classList.add('loaded');
              });
            `,
                }}
            />
        </div>
    )
}