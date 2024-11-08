'use client'
import React from "react";
import {Link} from "react-scroll";
import NextLink from "next/link";
import {
    Navbar,
    NavbarContent,
    NavbarItem,
    Button,
    ButtonGroup
} from "@nextui-org/react";
import {IconHome} from "@tabler/icons-react";

export default function BlogHeader() {

    return (
        <Navbar className="light">
            <NavbarContent>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <ButtonGroup variant="solid" color="primary" radius="full">
                        <Button as={Link} activeClass="" to="about" spy={true} smooth={true} offset={-150} duration={500} className="text-lg">
                            Latest
                        </Button>
                        <Button as={Link} activeClass="" to="projects" spy={true} smooth={true} offset={-150} duration={500} className="text-lg">
                            About
                        </Button>
                    </ButtonGroup>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button
                        radius="full"
                        className="text-lg"
                        as={NextLink}
                        href="/"
                        color="primary"
                        variant="solid"
                        endContent={<IconHome stroke={1.5}/>}
                    >
                        Home
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
