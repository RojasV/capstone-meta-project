import React from "react";
import { Link } from 'react-router-dom';

import { Header, LinkList, Navigation } from "./styles";

interface HeaderProps {

}

export default function HeaderComponent(props: HeaderProps) {
    return (
        <Header>
            <Navigation>
                <LinkList>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Component</Link>
                    </li>
                    <li>
                        <Link to="/reservation">Reservation Component</Link>
                    </li>
                </LinkList>
            </Navigation>
        </Header>
    )
}