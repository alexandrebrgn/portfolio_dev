'use client'
import BaseLayout from "@/layouts/BaseLayout"
import MyCard from "@/components/custom/MyCard";
import SplitText from "@/components/SplitText";
import Button from "@/components/custom/Button";
import {CodeXml, EyeIcon, Laptop, User} from "lucide-react";

export default function Home() {
    return (
        <div>
            <BaseLayout>
                <div className="flex items-center justify-between gap-10">
                    <div className="flex w-full gap-10 flex-col">
                        <SplitText
                            text="Bonjour, je suis Alexandre."
                            className="text-8xl font-bold text-center"
                            delay={30}
                            duration={1.5}
                            ease="elastic.out(0.6, 0.3)"
                            splitType="chars"
                            from={{opacity: 0, y: 40}}
                            to={{opacity: 1, y: 0}}
                            threshold={0.1}
                            textAlign="left"
                        />
                        <div className="w-9/10">
                            <p className="text-2xl">Je suis étudiant en Bachelor CDA au campus Notre-Dame du Roc à La Roche-Sur-Yon.</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <Button text={"Developer"} icon={<CodeXml/>}/>
                                <Button text={"Concepter"} icon={<Laptop/>}/>
                                <Button text={"Junior"} icon={<User/>}/>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button text={"Consulter mon CV"} gradient={true} icon={<EyeIcon/>} className="w-5/10"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto">
                        <MyCard src="assets/portrait.jpg" className="max-w-180 rounded-4xl"/>
                    </div>
                </div>
                <div className="">

                </div>
                {/*<SplitText text="Alexandre Bourguignon"*/}
                {/*           className="text-2xl font-semibold text-center"*/}
                {/*           delay={100}*/}
                {/*           duration={0.6}*/}
                {/*           ease="power3.out"*/}
                {/*           splitType="chars"*/}
                {/*           from={{opacity: 0, y: 40}}*/}
                {/*           to={{opacity: 1, y: 0}}*/}
                {/*           threshold={0.1}*/}
                {/*           rootMargin="-100px"*/}
                {/*           textAlign="center"*/}
                {/*></SplitText>*/}
            </BaseLayout>
        </div>
    );
}
