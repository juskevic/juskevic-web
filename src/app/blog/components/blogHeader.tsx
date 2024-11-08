'use client'
import React from "react";
import NextLink from "next/link";
import {
    Navbar,
    NavbarContent,
    NavbarItem,
    Button,
    Input
} from "@nextui-org/react";
import {IconHome, IconSearch} from "@tabler/icons-react";

export default function BlogHeader() {

    return (
        <Navbar>
            <NavbarContent>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Input
                        isDisabled={true}
                        variant="underlined"
                        className="text-lg"
                        color="primary"
                        isClearable={true}
                        radius="full"
                        placeholder="Search..."
                        startContent={<IconSearch stroke="1.5"/>}
                    />
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
                        Portfolio
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
