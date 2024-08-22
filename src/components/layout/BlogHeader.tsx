'use client'
import React from "react";
import {
    Navbar, NavbarContent, NavbarMenuToggle, NavbarMenu, NavbarMenuItem,
    Button,
    Breadcrumbs, BreadcrumbItem, Chip,
    Input
} from "@nextui-org/react";
import {IconArrowBack, IconSearch,} from '@tabler/icons-react';

//TODO: Make the search bar work, adjust fonts?

export default function BlogHeader( ) {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll={true}>

            <NavbarContent>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden"/>
                <Breadcrumbs variant="solid" size="lg">
                    <BreadcrumbItem href="/">Max Juškevič</BreadcrumbItem>
                    <BreadcrumbItem href="/blog">Blog</BreadcrumbItem>
                </Breadcrumbs>
                <Chip color="success" variant="flat">Beta</Chip>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <Button as="a" href="/" variant="flat" className="text-medium" endContent={<IconArrowBack stroke={1.5} />}>Go back</Button>
            </NavbarContent>

            <NavbarMenu>
            </NavbarMenu>

        </Navbar>
    );
}
