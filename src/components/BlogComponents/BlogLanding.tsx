import {Poppins} from "next/font/google";
import {Card, CardBody, CardHeader, CardFooter, Image, ScrollShadow} from "@nextui-org/react";
import {IconNews} from "@tabler/icons-react";

const poppinsFont = Poppins({
    weight: '500',
    style: 'normal',
    subsets: ['latin'],
});

export default function BlogLanding() {
    return (
        <>
            <div className="flex justify-center">
                <div className="flex flex-col md:flex-row justify-evenly w-full">
                    <div className="">
                        <h1 className={`${poppinsFont.className} font-bold text-2xl md:text-4xl xl:text-6xl space-y-0.5`}>
                            {/*{"Thoughts on Code, Design, and Other Stuff"}*/}
                            <div className="animate-fade-down animate-delay-[200ms]">{"Thoughts on"}</div>
                            <div className="opacity-90 animate-fade-down animate-delay-[400ms]">{"Code, Design,"}</div>
                            <div className="opacity-90 animate-fade-down animate-delay-[600ms]">{"and Other Stuff"}</div>
                        </h1>
                    </div>
                    <div>
                        <div className="text-lg text-gray-500 flex flex-row gap-1 pb-3 animate-fade-down animate-delay-[700ms]">
                            <span>{"Latest blog post"}</span>
                            <span><IconNews stroke={1.5} /></span>
                        </div>
                        <Card isHoverable isPressable className="animate-fade-down animate-delay-[800ms] shadow-none bg-white">
                            <CardHeader className="z-10 top-1 flex-col !items-start pb-0">
                                <h4 className="text-black font-medium text-2xl">Latest blog post title</h4>
                            </CardHeader>
                            <CardBody className="">
                                <Image height={200} width={300} src="placeholder.svg" alt="placeholder image"></Image>
                            </CardBody>
                            <CardFooter className="flex flex-col !items-start z-10">
                                <div className="flex flex-row text-blue-500">
                                    <ScrollShadow hideScrollBar={true} className="space-x-2 max-w-[300px]" orientation="vertical">
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