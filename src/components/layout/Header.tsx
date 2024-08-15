'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Button, ButtonGroup} from "@nextui-org/react";
import {Link} from "react-scroll";
import {IconFolders, IconMessages, IconPencil, IconUserCircle} from '@tabler/icons-react';

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll={true}>

            <NavbarContent>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden"/>
                <NavbarBrand>
                    <p className="font-bold text-inherit">juskevic</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <ButtonGroup radius="lg" variant="light">
                    <Button as={Link} activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500} className="text-medium" endContent={<IconUserCircle stroke={1.5} />}>About</Button>
                    <Button as={Link} activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500} className="text-medium" endContent={<IconFolders stroke={1.5} />}>Projects</Button>
                    <Button as={Link} activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500} className="text-medium" endContent={<IconMessages stroke={1.5} />}>Contact</Button>
                </ButtonGroup>
                <Button variant="flat" className="text-medium" endContent={<IconPencil stroke={1.5} />}>Blog</Button>
            </NavbarContent>

            <NavbarMenu>
            </NavbarMenu>

        </Navbar>
    );
}
