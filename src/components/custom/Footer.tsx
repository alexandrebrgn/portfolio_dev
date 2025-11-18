"use client";
import {useEffect, useState} from "react";
import {cn, getLastCommitDate} from "@/lib/utils";

function capitalizeWords(str: string) {
    return str
        .split(" ")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
}

type LastCommitDateType = {
    className?: string | undefined;
}

function LastCommitDate({className = ""}: LastCommitDateType) {
    const [date, setDate] = useState<string | null>(null);

    useEffect(() => {
        let mounted = true;
        getLastCommitDate().then((d) => {
            if (mounted) setDate(d);
        });
        return () => {
            mounted = false;
        };
    }, []);

    // Formatter la date en "Lundi 23 Novembre 2025"
    const formattedDate = date
        ? capitalizeWords(new Intl.DateTimeFormat("fr-FR", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        }).format(new Date(date)))
        : "Chargement...";

    return <p className={cn(className)}>{formattedDate}</p>;
}

export default function Footer() {
    return (
        <div className="h-auto  px-8 lg:px-16">
            {/*<div> A faire plus tard envoi de mail + création de page d'envoi de mail avec Resend</div>*/}
            <div className="flex justify-between items-center h-15 lg:h-20  text-[var(--gray-200)]">
                <p className="text-xs lg:text-sm">
                    Designed and developed by Alexandre Bourguignon
                </p>
                <a href="https://github.com/alexandrebrgn/portfolio_dev" className="flex text-xs lg:text-sm gap-1 hover:underline"> Last commit :
                    <LastCommitDate className="text-xs lg:text-sm"/>
                </a>
            </div>
        </div>
    );
}
