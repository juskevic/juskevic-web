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
                        {"I'm"} Max, a self-taught frontend developer with a passion for taking creative ideas and
                        turning them into interactive web experiences. My coding journey began at 13 years old when I
                        first discovered <span className="bg-blue-400 rounded-md bg-opacity-20">Python</span>. While
                        Python introduced me to the world of programming, it was through exploring web development that
                        I truly found my passion.
                        I started diving into <span
                        className="bg-orange-600 rounded-md bg-opacity-20">HTML</span> and <span
                        className="bg-blue-600 rounded-md bg-opacity-20">CSS</span>, where I learned how to craft
                        responsive layouts and write clean, accessible code. Over time, I became more immersed in the
                        frontend, mastering <span
                        className="bg-yellow-300 rounded-md bg-opacity-20">JavaScript</span> and modern frameworks
                        like <span className="bg-cyan-500 rounded-md bg-opacity-20">React</span> and <span
                        className="bg-gray-700 rounded-md bg-opacity-20">Next.js</span>.
                        As a current student, I’m constantly learning and evolving, growing my skill set to build not
                        just beautiful, but highly functional web applications. I’m still expanding my knowledge into
                        backend technologies like <span className="bg-green-500 rounded-md bg-opacity-20">Node.js</span>,
                        aiming to become a well-rounded full-stack developer.
                        When I’m not coding, you’ll often find me reading fantasy books or listening to electronic and
                        rock music. My goal is to merge creativity with technical expertise to deliver user-focused
                        digital experiences.
                    </p>

                </ModalBody>
                <ModalFooter>
                    <Button size="md" variant="flat" className="text-lg" radius="full" color="success" onPress={() => onOpenChange(false)}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default AboutModal;
