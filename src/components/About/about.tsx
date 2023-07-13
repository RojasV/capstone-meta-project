import React from "react";
import { Container } from "./styles";

interface AboutProps {
    title?: string
}

export default function About(props: AboutProps) {
    return (
        <Container>
            About Component
        </Container>
    )
}