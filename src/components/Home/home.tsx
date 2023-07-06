import React from "react";
import { Container } from "./styles";
import HeaderComponent from "../LayoutComponents/Header";
import FooterComponent from "../LayoutComponents/Footer";

interface HomeProps {
  title?: string
}

export default function Home(props: HomeProps) {
  return (
    <>
      <HeaderComponent />
      <FooterComponent />
    </>
  )
}