import styled from 'styled-components'
import Logo from '../../../assets/img/little-lemon-logo.png'

export const Footer = styled.footer`
   width: 100%;
   background-color: #efefef;
   display: flex;
   justify-content: center;
   align-items: center;
`

export const Container = styled.div`
        width: 80%;
    display: flex;
    flex-direction: row;
    gap: 6rem;
    margin: 2rem 0px;
`

export const ContainerItem = styled.div`
       width: 25%;
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const ContainerImage = styled.div`
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: end;
    text-align: left;
     background-image: url(${Logo});
    background-size: contain;
    background-repeat: no-repeat;
    min-height: 120px;
    min-width: 30%;
`

