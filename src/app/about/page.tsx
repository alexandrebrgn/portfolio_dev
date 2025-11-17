'use client'

import BaseLayout from "@/layouts/BaseLayout";
import SchoolAbout from "@/components/custom/SchoolAbout";
import ExperienceAbout from "@/components/custom/ExperienceAbout";

export default function About() {
    const title = "A propos de moi"
    const description = "Mon parcours en études et dans la vie professionelle"
    return (
        <BaseLayout title={title} description={description}>
            <SchoolAbout/>
            <ExperienceAbout/>
        </BaseLayout>
    )
}