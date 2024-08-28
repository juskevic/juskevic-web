import React from 'react';
import {Modal, ModalContent, ModalBody, ModalFooter, Button, useDisclosure, ScrollShadow} from "@nextui-org/react";

export default function ReadMyStoryModal() {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <Button onPress={onOpen} radius="sm" variant="ghost" className={`shadow-none text-medium md:text-lg`}>
                Read my story
            </Button>
            <Modal className="outline-2 outline-black outline" hideCloseButton size="2xl" radius="sm" placement="center" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody>
                                <ScrollShadow hideScrollBar className="max-h-[485px] inline space-y-6 pt-6 md:text-lg">
                                    <div>
                                        <span>{"I wrote my first program when I was just "}</span>
                                        <span className="font-medium">{"13 years old"}</span>
                                        <span>{". My journey began with a fascination for game development and "}</span>
                                        <span className="bg-yellow-300 bg-opacity-20 rounded">{"Python"}</span>
                                        <span>
                                            {", where I eagerly dived into creating small games and experimenting with code. The thrill of bringing my ideas to life through programming was exhilarating, but it wasn't long before I discovered a deeper passion for Frontend Development."}
                                        </span>
                                    </div>
                                    <div>
                                        <span>{"As I honed my skills, I found my niche in crafting engaging and intuitive user interfaces. "}</span>
                                        <span className="bg-neutral-600 bg-opacity-20 rounded">{"UI and UX"}</span>
                                        <span>
                                            {" design became my focus, and I reveled in the challenge of making digital experiences both beautiful and functional. My commitment to Frontend Development grew stronger as I realized how impactful a well-designed interface can be in shaping user experiences."}
                                        </span>
                                    </div>
                                    <div>
                                        <span>{"Recently, my curiosity led me to explore Mobile Development with "}</span>
                                        <span className="bg-neutral-800 bg-opacity-20 rounded">{"Expo"}</span>
                                        <span>{" and "}</span>
                                        <span className="bg-cyan-600 bg-opacity-20 rounded">{"React Native"}</span>
                                        <span>
                                            {". This new adventure has been incredibly rewarding, allowing me to apply my frontend skills to mobile platforms and create seamless, user-friendly applications. The blend of my frontend expertise and new mobile development capabilities has opened up exciting opportunities for innovation and creativity."}
                                        </span>
                                    </div>
                                    <div>
                                        <p>
                                            {"I'm passionate about pushing the boundaries of what's possible in Frontend Development and design. Each project is an opportunity to create something meaningful and to enhance the way users interact with technology. As I continue to explore and grow in this dynamic field, I’m excited about the future and the endless possibilities it holds."}
                                        </p>
                                    </div>
                                </ScrollShadow>
                            </ModalBody>
                            <ModalFooter>
                                <Button className={`shadow-none ext-medium md:text-lg`} variant="ghost" onPress={onClose} radius="full">
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}