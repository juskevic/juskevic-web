'use client'
import React from "react";
import {
    Navbar,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    Link,
    Button,
    ButtonGroup
} from "@nextui-org/react";
import {IconAddressBook, IconBriefcase, IconFileDownload, IconUserCircle} from "@tabler/icons-react";

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
                        <Button className="text-lg">
                            About
                        </Button>
                        <Button className="text-lg">
                            Projects
                        </Button>
                        <Button className="text-lg">
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

            <NavbarMenu>
            </NavbarMenu>

        </Navbar>
    );
}
