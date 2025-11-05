'use client'
import BaseLayout from "@/layouts/BaseLayout"
import MyCard from "@/components/custom/MyCard";
import SplitText from "@/components/SplitText";

export default function Home() {
    return (
        <div>
            <BaseLayout>
                <div className="flex items-center justify-between gap-10">
                    <div className="flex w-full gap-2 flex-col">
                        <SplitText
                            text="Bonjour, je suis Alexandre."
                            className="text-4xl font-bold text-center"
                            delay={30}
                            duration={1.5}
                            ease="elastic.out(0.6, 0.3)"
                            splitType="chars"
                            from={{opacity: 0, y: 40}}
                            to={{opacity: 1, y: 0}}
                            threshold={0.1}
                            textAlign="left"
                        />
                        <div>
                            <p>Etudiant en Bachelor CDA à Notre Dame du roc</p>
                        </div>
                    </div>
                    <div className="w-auto">
                        <MyCard src="assets/portrait.jpg" className="max-w-200 rounded-xl"/>
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
