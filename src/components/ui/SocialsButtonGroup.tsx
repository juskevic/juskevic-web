import React from "react";
import {Button, ButtonGroup} from "@nextui-org/react";
import {
    IconMail,
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandUpwork,
    IconBrandMastodon,
    IconBrandDiscord
} from '@tabler/icons-react';

export default function SocialsButtonGroup() {
    return (
        <ButtonGroup size="md" variant="light" color="primary" radius="full" className="justify-start">
            <Button as="a" target="_blank" isIconOnly href="mailto:hello@juskevic.com">
                <IconMail stroke={1.5} className="text-primary"/>
            </Button>
            <Button as="a" target="_blank" isIconOnly href="https://github.com/juskevic">
                <IconBrandGithub stroke={1.5} className="text-primary"/>
            </Button>
            <Button as="a" target="_blank" isIconOnly href="https://www.linkedin.com/in/maxjuskevic/">
                <IconBrandLinkedin stroke={1.5} className="text-primary"/>
            </Button>
            <Button as="a" target="_blank" isIconOnly href="https://www.linkedin.com/in/maxjuskevic/">
                <IconBrandMastodon stroke={1.5} className="text-primary"/>
            </Button>
            <Button as="a" target="_blank" isIconOnly href="https://www.linkedin.com/in/maxjuskevic/">
                <IconBrandDiscord stroke={1.5} className="text-primary"/>
            </Button>
            <Button as="a" target="_blank" isIconOnly href="https://www.upwork.com/freelancers/~01f6c71aea76152016">
                <IconBrandUpwork stroke={1.5} className="text-primary"/>
            </Button>
        </ButtonGroup>
    );
}