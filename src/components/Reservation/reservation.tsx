import React from "react";
import { Container } from "./styles";
import HeaderComponent from "../LayoutComponents/Header";
import FooterComponent from "../LayoutComponents/Footer";

interface ReservationProps {
  title?: string
}

export default function Reservation(props: ReservationProps) {
  return (
    <>
      <HeaderComponent />
      <FooterComponent />
    </>
  )
}