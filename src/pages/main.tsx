import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "../components/Home/home";
import About from '../components/About/about'
import Reservation from '../components/Reservation/reservation'
import HeaderComponent from "../components/LayoutComponents/Header";
import FooterComponent from "../components/LayoutComponents/Footer";

export default function Main(props: any) {
    return (
        <>
            <HeaderComponent />
            <Routes>
                <Route Component={Home} path="/" />
                <Route Component={About} path="/about" />
                <Route Component={Reservation} path="/reservation" />
            </Routes>
            <FooterComponent />
        </>

    )
}