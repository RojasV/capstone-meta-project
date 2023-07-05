import React from "react";
import { Container } from "./styles";
import HeaderComponent from "../LayoutComponents/Header";

interface HomeProps {
  title?: string
}

export default function Home(props: HomeProps) {
  return (
    <HeaderComponent />
  )
}