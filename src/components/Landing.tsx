'use client'
import React from 'react';
import {Archivo_Black, Caveat} from "next/font/google";
import SocialsButtonGroup from "@/components/ui/SocialsButtonGroup";
import {Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@nextui-org/modal";
import { Button } from '@nextui-org/react';

const archivoBlack = Archivo_Black({
    subsets: ['latin'],
    weight: ['400'],
});

const caveat = Caveat({
    subsets: ['latin'],
    weight: ['400'],
});

export default function Landing() {

    const {onOpenChange} = useDisclosure();

    return (
        <>
            <div className="flex flex-col justify-start gap-8 md:gap-10 xl:gap-14 pt-20 xl:pt-0 pb-80">
                <div
                    className={`${archivoBlack.className} flex flex-col !text-center gap-20 md:gap-32 xl:gap-7 text-foreground text-4xl md:text-7xl xl:text-9xl`}>
                    <div><h1 className="hollow-text">{"MAX JUŠKEVIČ"}</h1></div>
                    <div><h1 className="hollow-text">{"MAX JUŠKEVIČ"}</h1></div>
                    <div><h1 className="hollow-text">{"MAX JUŠKEVIČ"}</h1></div>
                    <div><h1 className="hollow-text">{"MAX JUŠKEVIČ"}</h1></div>
                </div>
                <div className="flex-col space-y-5 pt-20 md:pt-28 xl:pt-32">
                    <div className="flex flex-col gap-1">
                        <p className={`${caveat.className} text-primary text-4xl xl:text-5xl`}>{"Max Juškevič"}</p>
                        <p className={`text-secondary text-xl xl:text-2xl`}>{"Frontend Engineer"}</p>
                    </div>
                    <SocialsButtonGroup/>
                    <div>
                        <p className="text-secondary xl:w-1/2">{"I'm a passionate Web Developer specializing in creating dynamic and user-friendly websites and applications. With a focus on modern frontend technologies, I deliver high-quality code and engaging user experiences."}</p>
                    </div>
                </div>
                <Modal defaultOpen onOpenChange={onOpenChange} className="bg-background">
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Im Improving Things! ⚒️</ModalHeader>
                                <ModalBody>
                                    <p>
                                        {"My website is currently undergoing some exciting rework to enhance your experience. While I'm making these changes, you can still explore the content, but some features may not be fully functional."}
                                    </p>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="warning" variant="flat" radius="full" onPress={onClose}>
                                        {"I understand"}
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            </div>
        </>
    );
}
