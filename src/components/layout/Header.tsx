'use client'
import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    Button,
    ButtonGroup,
    Chip
} from "@nextui-org/react";
import {Link} from "react-scroll";
import {IconFolders, IconMessages, IconPencil, IconUserCircle} from '@tabler/icons-react';

export default function Header( ) {

    return (
        <Navbar shouldHideOnScroll={true}>
            <NavbarContent></NavbarContent>
            <NavbarContent className="gap-4" justify="center">
                <ButtonGroup radius="lg" variant="light" className="hidden md:flex">
                    <Button as={Link} activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500} className="text-medium" endContent={<IconUserCircle stroke={1.5} />}>About</Button>
                    <Button as={Link} activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500} className="text-medium" endContent={<IconFolders stroke={1.5} />}>Projects</Button>
                    <Button as={Link} activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500} className="text-medium" endContent={<IconMessages stroke={1.5} />}>Contact</Button>
                </ButtonGroup>
                <Button as="a" href="/blog" variant="flat" className="text-medium" endContent={<IconPencil stroke={1.5} />}>Blog</Button>
            </NavbarContent>
            <NavbarContent className="hidden md:flex"></NavbarContent>
        </Navbar>
    );
}
