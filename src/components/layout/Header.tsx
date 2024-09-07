'use client'
import React from "react";
import {Link} from "react-scroll";
import {
    Navbar,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    Button,
    ButtonGroup, NavbarMenuItem
} from "@nextui-org/react";
import {IconFileDownload} from "@tabler/icons-react";

export default function App() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="light">
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <ButtonGroup variant="solid" color="primary" radius="full">
                        <Button as={Link} activeClass="opacity-30" to="about" spy={true} smooth={true} offset={-150} duration={500} className="text-lg">
                            About
                        </Button>
                        <Button as={Link} activeClass="opacity-30" to="projects" spy={true} smooth={true} offset={-300} duration={500} className="text-lg">
                            Projects
                        </Button>
                        <Button as={Link} activeClass="opacity-30" to="contact" spy={true} smooth={true} offset={-300} duration={500} className="text-lg">
                            Contact
                        </Button>
                    </ButtonGroup>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button
                        radius="full"
                        className="text-lg"
                        as={Link}
                        href="#"
                        color="primary"
                        variant="solid"
                        endContent={<IconFileDownload stroke={1.5}/>}
                    >
                       CV
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu className="max-h-[80px] border-b-1 border-b-secondary rounded">
                <ButtonGroup aria-orientation="vertical" variant="solid" color="primary" radius="full">
                    <Button as={Link} activeClass="opacity-30" to="about" spy={true} smooth={true} offset={-150} duration={500} className="text-lg">
                        About
                    </Button>
                    <Button as={Link} activeClass="opacity-30" to="projects" spy={true} smooth={true} offset={-150} duration={500} className="text-lg">
                        Projects
                    </Button>
                    <Button as={Link} activeClass="opacity-30" to="contact" spy={true} smooth={true} offset={-150} duration={500} className="text-lg">
                        Contact
                    </Button>
                </ButtonGroup>
            </NavbarMenu>

        </Navbar>
    );
}
