import React from "react";
import { Link } from 'react-router-dom';
import { Footer, Container, ContainerImage, ContainerItem } from "./styles";



interface FooterProps {

}

export default function FooterComponent(props: FooterProps) {
    return (
        <Footer>
            <Container>
                <ContainerImage>
                    TESTE IMAGEM
                </ContainerImage>
                <ContainerItem>
                    <h5>
                    Navigation
                    </h5>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Menu</li>
                        <li>Reservation</li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </ContainerItem>
                <ContainerItem>
                    <h5>
                    Contact
                    </h5>
                    <ul>
                        <li>Phone Number</li>
                        <li>Email</li>
                        <li>Address</li>
                    </ul>
                </ContainerItem>
                <ContainerItem>
                    <h5>
                    Social Media
                    </h5>
                    <ul>
                        <li>Instagram</li>
                        <li>LinkedIn</li>
                        <li>Pinterest</li>
                    </ul>
                </ContainerItem>
            </Container>
        </Footer>
    )
}