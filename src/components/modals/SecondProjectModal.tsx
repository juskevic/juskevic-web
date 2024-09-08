import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image} from "@nextui-org/react";
import {IconBrandAppstore, IconBrandGooglePlay, IconLink,} from "@tabler/icons-react";

interface SecondModalProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

const SecondProjectModal: React.FC<SecondModalProps> = ({ isOpen, onOpenChange }) => {
    return (
        <Modal hideCloseButton={true} scrollBehavior="inside" isOpen={isOpen} onClose={() => onOpenChange(false)} size="2xl">
            <ModalContent className="bg-background">
                <ModalHeader className="flex justify-between gap-3">
                    <div className="flex gap-3">
                        <Image
                            alt="vycetka logo"
                            height={40}
                            radius="md"
                            src="vycetkaLogo.png"
                            width={40}
                        />
                        <div>
                            <p className="text-primary text-2xl pt-1">{"Výčetka"}</p>
                        </div>
                    </div>
                    <div className="hidden md:flex gap-2 my-auto">
                        <Button
                            isDisabled={true}
                            as="a"
                            href=""
                            size="sm"
                            variant="solid"
                            className="text-medium"
                            radius="full" color="primary"
                            endContent={<IconBrandGooglePlay stroke={1.5}/>}
                        >
                            Google Play
                        </Button>
                        <Button
                            isDisabled={true}
                            as="a"
                            href=""
                            size="sm"
                            variant="solid"
                            className="text-medium"
                            radius="full" color="primary"
                            endContent={<IconBrandAppstore stroke={1.5}/>}
                        >
                            App Store
                        </Button>
                        <Button
                            as="a"
                            href="https://vycetka.juskevic.com/"
                            size="sm"
                            variant="solid"
                            className="text-medium"
                            radius="full" color="primary"
                            endContent={<IconLink stroke={1.5}/>}
                        >
                            Website
                        </Button>
                    </div>
                </ModalHeader>
                <ModalBody className="text-lg md:text-xl">
                    <p>
                        Výčetka is a simple yet powerful <span className="bg-cyan-700 rounded-md bg-opacity-20">React Native</span> app
                        designed to help users quickly and efficiently count their coins and banknotes. With a clean and
                        intuitive interface, the app makes it easy to input various denominations and provides an
                        instant, accurate total with minimal effort. Whether you’re managing personal finances or
                        handling cash in a professional setting, Výčetka streamlines the process of tallying currency.
                    </p>
                    <p>
                        This project highlights my ability to build functional, user-friendly mobile applications
                        using <span className="bg-cyan-700 rounded-md bg-opacity-20">React Native</span>. It’s more than
                        just a simple calculator—it’s designed to enhance the user experience through thoughtful
                        interface design and smooth interactions. Developing Výčetka allowed me to further refine my
                        skills in mobile development, especially in handling state management, user input, and real-time
                        calculations.
                    </p>
                    <p>
                        The project serves as a demonstration of my capability to create practical applications that
                        solve real-world problems while maintaining simplicity and usability. Through Výčetka, I’ve
                        gained a deeper understanding of cross-platform development, ensuring the app functions
                        seamlessly on both Android and iOS devices, and it represents my commitment to crafting
                        solutions that prioritize efficiency and ease of use.
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button
                        isIconOnly={true}
                        isDisabled={true}
                        as="a"
                        href=""
                        size="md"
                        variant="ghost"
                        className="text-medium my-auto flex md:hidden"
                        radius="full" color="primary"
                    >
                        <IconBrandAppstore stroke={1.5}/>
                    </Button>
                    <Button
                        isIconOnly={true}
                        isDisabled={true}
                        as="a"
                        href=""
                        size="md"
                        variant="ghost"
                        className="text-medium my-auto flex md:hidden"
                        radius="full" color="primary"
                    >
                        <IconBrandGooglePlay stroke={1.5}/>
                    </Button>
                    <Button
                        isIconOnly={true}
                        as="a"
                        href="https://vycetka.juskevic.com/"
                        size="md"
                        variant="ghost"
                        className="text-medium my-auto flex md:hidden"
                        radius="full" color="primary"
                    >
                        <IconLink stroke={1.5}/>
                    </Button>
                    <Button size="md" variant="flat" className="text-lg" radius="full" color="success"
                            onPress={() => onOpenChange(false)}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default SecondProjectModal;
