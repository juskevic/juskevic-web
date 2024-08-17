import {Poppins} from "next/font/google";
import {Card, CardBody, CardHeader, CardFooter, Image, ScrollShadow} from "@nextui-org/react";
import {IconNews} from "@tabler/icons-react";

const poppinsFont = Poppins({
    weight: '500',
    style: 'normal',
    subsets: ['latin'],
});

//TODO: Change the tagline to something more normal.

export default function BlogLanding() {
    return (
        <>
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:justify-evenly w-full">
                    <div className="space-y-10">
                        <div className={`${poppinsFont.className} font-bold text-4xl xl:text-6xl space-y-1`}>
                            {/*{"Thoughts on Code, Design, and Other Stuff"}*/}
                            <div className="animate-fade-down animate-delay-[200ms]">{"Thoughts on"}</div>
                            <div className="opacity-90 animate-fade-down animate-delay-[400ms]">{"Code, Design,"}</div>
                            <div className="opacity-90 animate-fade-down animate-delay-[600ms]">{"and Other Stuff"}</div>
                        </div>
                        <div>
                            <div className="md:w-4/5 xl:w-1/2 text-lg xl:text-2xl text-gray-600 animate-fade animate-delay-[1000ms]">
                                <span>{"I’m passionate about writing code and sharing how it builds the web we use every day."}</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-xl flex flex-row gap-1 pb-2 md:pb-3 animate-fade-down animate-delay-[700ms]">
                            <span>{"Latest blog post"}</span>
                            <span><IconNews stroke={1.5} /></span>
                        </div>
                        <Card isHoverable isPressable className="animate-fade-down animate-delay-[800ms] border-1 border-gray-300 shadow-none">
                            <CardHeader className="z-10 top-1 flex-col !items-start pb-0">
                                <h4 className="text-black font-medium text-2xl">Latest blog post title</h4>
                            </CardHeader>
                            <CardBody className="md:w-[250px] md:h-[150px] xl:w-[350px] xl:h-[250px]">
                                <Image className="w-full h-full" src="placeholder.svg" alt="placeholder image"></Image>
                            </CardBody>
                            <CardFooter className="flex flex-col !items-start z-10">
                                <div className="flex flex-row text-blue-500">
                                    <ScrollShadow hideScrollBar={true} className="space-x-2 max-w-[200px] xl:max-w-[300px]" orientation="vertical">
                                        <span>{"#frontend"}</span>
                                        <span>{"#api"}</span>
                                        <span>{"#blog"}</span>
                                        <span>{"#frontend"}</span>
                                        <span>{"#api"}</span>
                                        <span>{"#blog"}</span>
                                        <span>{"#frontend"}</span>
                                        <span>{"#api"}</span>
                                        <span>{"#blog"}</span>
                                    </ScrollShadow>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}