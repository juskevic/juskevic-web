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
import {IconFileDownload} from "@tabler/icons-react";

export default function App() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <Navbar shouldHideOnScroll={true} onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <ButtonGroup>
                        <Button className="text-lg" variant="light" color="default">
                            About
                        </Button>
                        <Button className="text-lg" variant="light" color="default">
                            Projects
                        </Button>
                        <Button className="text-lg" variant="light" color="default">
                            Contact
                        </Button>
                    </ButtonGroup>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
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
                <NavbarItem>
                    <Button className="text-lg" color="primary" href="#" variant="flat">
                        Get in Touch
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
            </NavbarMenu>

        </Navbar>
    );
}
