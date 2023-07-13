import React from "react";
import { Container } from "./styles";

interface HomeProps {
  title?: string
}

export default function Home(props: HomeProps) {
  return (
   <Container>
    Home Component
   </Container>
  )
}