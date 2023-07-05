import React from "react";
import { Container } from "./styles";
import HeaderComponent from "../LayoutComponents/Header";

interface AboutProps {
    title?: string
}

export default function About(props: AboutProps) {
    return (
        <HeaderComponent />
    )
}