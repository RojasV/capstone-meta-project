import React from "react";
import { ComponentTest } from "./styles";

interface ComponentProps{
    title: string
}

export default function Component(props: ComponentProps) {
    return (
       <ComponentTest>
         {props.title}
       </ComponentTest>
    )
}