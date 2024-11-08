import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

interface AboutModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onOpenChange }) => {
    return (
        <Modal scrollBehavior="inside" isOpen={isOpen} onClose={() => onOpenChange(false)} size="2xl">
            <ModalContent className="bg-background">
                <ModalHeader className="flex flex-col gap-1 text-xl md:text-2xl">My Journey ✨</ModalHeader>
                <ModalBody>
                    <p className="text-lg md:text-xl">
                        {"I'm"} Max, a self-taught frontend developer with a passion for transforming creative ideas
                        into interactive web experiences. My journey into coding began at 13 with <span
                        className="bg-blue-400 rounded-md bg-opacity-20">Python</span>, but I discovered my true passion
                        when I started exploring web development. Diving into <span
                        className="bg-orange-600 rounded-md bg-opacity-20">HTML</span> and <span
                        className="bg-blue-600 rounded-md bg-opacity-20">CSS</span>, I learned how to create responsive
                        layouts and write clean, accessible code. Over time, I became deeply immersed in the frontend,
                        mastering <span className="bg-yellow-300 rounded-md bg-opacity-20">JavaScript</span> and
                        frameworks like <span className="bg-cyan-500 rounded-md bg-opacity-20">React</span> and <span
                        className="bg-gray-700 rounded-md bg-opacity-20">Next.js</span>.

                        As a current student, I’m constantly evolving my skills to build beautiful and highly functional
                        web applications. Though {"I'm"} expanding my knowledge of backend technologies, my primary focus
                        remains on delivering user-focused, creative frontend experiences.

                        When I’m not coding, I enjoy reading fantasy books or listening to electronic music. My
                        goal is to merge creativity with technical expertise to craft impactful digital experiences.
                    </p>

                </ModalBody>
                <ModalFooter>
                    <Button size="md" variant="solid" className="text-lg" radius="full" color="primary"
                            onPress={() => onOpenChange(false)}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default AboutModal;
