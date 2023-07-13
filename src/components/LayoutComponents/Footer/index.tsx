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
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt reprehenderit esse illo ipsa exercitationem excepturi ratione laboriosam, illum praesentium vitae incidunt inventore iusto error sit impedit magni ullam soluta natus!
                </ContainerImage>
                <ContainerItem>
                    <h5>
                        Navigation
                    </h5>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About</Link></li>
                        {/* <li>Menu</li> */}
                        <li><Link to="/">Reservation</Link></li>
                        {/* <li>Order Online</li> */}
                        {/* <li>Login</li> */}
                    </ul>
                </ContainerItem>
                <ContainerItem>
                    <h5>
                        Contact
                    </h5>
                    <ul>
                        <li><Link to="/">Phone Number</Link></li>
                        <li><Link to="/">Email</Link></li>
                        <li><Link to="/">Adress</Link></li>
                    </ul>
                </ContainerItem>
                <ContainerItem>
                    <h5>
                        Social Media
                    </h5>
                    <ul>
                        <li><Link to="/">Instagram</Link></li>
                        <li><Link to="/">LinkedIn</Link></li>
                        <li><Link to="/">Pinterest</Link></li>
                    </ul>
                </ContainerItem>
            </Container>
        </Footer>
    )
}