import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image} from "@nextui-org/react";
import {IconBrandGithub} from "@tabler/icons-react";

interface AboutModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onOpenChange }) => {
    return (
        <Modal hideCloseButton={true} scrollBehavior="inside" isOpen={isOpen} onClose={() => onOpenChange(false)} size="2xl">
            <ModalContent className="bg-background">
                <ModalHeader className="flex justify-between gap-3">
                    <div className="flex gap-3">
                        <Image
                            alt="portfolio website logo"
                            height={40}
                            radius="md"
                            src="icon.webp"
                            width={40}
                        />
                        <div>
                            <p className="text-primary text-2xl pt-1">{"Portfolio Website"}</p>
                        </div>
                    </div>
                    <div className="hidden md:flex">
                        <Button
                            as="a"
                            href="https://github.com/juskevic/juskevic-web"
                            size="sm"
                            variant="solid"
                            className="text-medium"
                            radius="full" color="primary"
                            endContent={<IconBrandGithub stroke={1.5}/>}
                        >
                            Source-code
                        </Button>
                    </div>
                </ModalHeader>
                <ModalBody className="text-lg md:text-xl">
                    <p>
                        This portfolio website marks a pivotal step in my journey as a frontend developer. It’s my first
                        significant project, built from scratch using <span
                        className="bg-gray-700 rounded-md bg-opacity-20">Next.js</span> and <span
                        className="bg-cyan-500 rounded-md bg-opacity-20">React</span>, two modern frameworks that have
                        become essential in my development toolkit. Over the course of six months, I’ve committed to
                        this project over 800 times, with each commit reflecting my progress, experiments, and
                        refinements in web development.
                    </p>
                    <p>
                        The site has served as a personal sandbox for testing new technologies and pushing the limits of
                        what I can create. From working with Tailwind CSS for efficient and responsive styling to using
                        Framer Motion for animations, this project has allowed me to explore and integrate a variety of
                        tools that enhance the user experience. Each feature, from dynamic components to performance
                        optimizations, represents a learning opportunity that has helped me grow as a developer.
                    </p>
                    <p>
                        Beyond being a showcase of my work, this portfolio is a living project where I continuously
                        apply new ideas and techniques. It’s more than just a static collection of my {"achievements—it's"}
                        an evolving representation of my growth, creativity, and dedication to mastering the frontend
                        stack. With this project, I aim to highlight not only what I’ve learned so far but also my
                        passion for web development, as I constantly seek new ways to improve and innovate.
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button
                        as="a"
                        href="https://github.com/juskevic/juskevic-web"
                        size="md"
                        variant="ghost"
                        className="text-medium my-auto flex md:hidden"
                        radius="full" color="primary"
                        endContent={<IconBrandGithub stroke={1.5}/>}
                    >
                        Source-code
                    </Button>
                    <Button size="md" variant="flat" className="text-lg" radius="full" color="success" onPress={() => onOpenChange(false)}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default AboutModal;
