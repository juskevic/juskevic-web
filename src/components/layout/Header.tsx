'use client'
import React, {useTransition} from "react";
import {Link} from "react-scroll";
import {
    Navbar,
    NavbarContent,
    NavbarItem,
    Button,
    ButtonGroup
} from "@nextui-org/react";
import {IconPencil} from "@tabler/icons-react";
import {useRouter} from "next/navigation";

export default function App() {

    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const handleButtonPress = () => {
        startTransition(() => {
            router.push('/blog'); // Initiate navigation
        });
    };

    return (
        <Navbar className="light">
            <NavbarContent>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <ButtonGroup variant="solid" color="primary" radius="full">
                        <Button as={Link} activeClass="" to="about" spy={true} smooth={true} offset={-150} duration={500} className="text-lg">
                            About
                        </Button>
                        <Button as={Link} activeClass="" to="projects" spy={true} smooth={true} offset={-150} duration={500} className="text-lg">
                            Projects
                        </Button>
                        <Button as={Link} activeClass="" to="contact" spy={true} smooth={true} offset={-150} duration={500} className="text-lg">
                            Contact
                        </Button>
                    </ButtonGroup>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button
                        onPress={handleButtonPress}
                        isLoading={isPending}
                        radius="full"
                        className="text-lg"
                        color="primary"
                        variant="solid"
                        endContent={<IconPencil stroke={1.5}/>}
                    >
                        {isPending ? 'Loading...' : 'Blog'}
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
