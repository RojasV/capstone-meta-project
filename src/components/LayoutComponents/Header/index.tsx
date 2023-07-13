import React from "react";
import { Link } from 'react-router-dom';

import { Header, LinkList, Navigation, HeaderImage, Container } from "./styles";

interface HeaderProps {

}

export default function HeaderComponent(props: HeaderProps) {
    return (
        <Header>
            <Container>
                <HeaderImage />
                <Navigation>
                    <LinkList>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/reservation">Reservation</Link>
                        </li>
                    </LinkList>
                </Navigation>
            </Container>
        </Header>
    )
}