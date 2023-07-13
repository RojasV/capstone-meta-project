import styled from 'styled-components'
import Logo from '../../../assets/img/little-lemon-logo.png'

export const Header = styled.header`
   width: 100%;
   min-height: 75px;
   background-color: #efefef;
   display: flex;
   justify-content: center;
   align-items: center;
`

export const Container = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    justify-content:space-between;
    align-items: center;
`


export const Navigation = styled.nav`
    width: 50%;
        display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
`

export const LinkList = styled.ul`
   list-style: none;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: right;
    gap: 6rem;
`

export const HeaderImage = styled.div`
  background-image: url(${Logo});
  background-size: contain;
  background-repeat: no-repeat;
  min-height: 120px;
  min-width: 30%;
`;