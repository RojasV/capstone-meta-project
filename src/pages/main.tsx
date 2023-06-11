import React from "react";
import Component from "../components/componentTest/componentTest";

export default function Main(props: any) {
    return (
        <h1>
            Hello World,
            <Component title="I'm a child component" />
        </h1>
    )
}