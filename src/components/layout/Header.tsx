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
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <ButtonGroup variant="flat" color="default">
                        <Button className="text-lg font-bold" endContent={<IconUserCircle stroke={1.5}/>}>
                            About
                        </Button>
                        <Button className="text-lg font-bold" endContent={<IconBriefcase stroke={1.5}/>}>
                            Projects
                        </Button>
                        <Button className="text-lg font-bold" endContent={<IconAddressBook stroke={1.5}/>}>
                            Contact
                        </Button>
                    </ButtonGroup>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button
                        className="text-lg"
                        as={Link}
                        href="#"
                        color="primary"
                        variant="light"
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
