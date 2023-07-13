import React from "react";
import { Container } from "./styles";

interface ReservationProps {
  title?: string
}

export default function Reservation(props: ReservationProps) {
  return (
   <Container>
    Reservation Component
   </Container>
  )
}