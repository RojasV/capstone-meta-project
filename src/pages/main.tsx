import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "../components/Home/home";
import About from '../components/About/about'
import Reservation from '../components/Reservation/reservation'

export default function Main(props: any) {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={Home} path="/" />
                <Route Component={About} path="/about" />
                <Route Component={Reservation} path="/reservation" />
            </Routes>
        </BrowserRouter>
    )
}