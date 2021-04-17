import { Link } from 'gatsby'
import styled from 'styled-components'
import { DiGithubBadge } from 'react-icons/di'

import '../layout.css';

export const Nav = styled.nav`
   background:  ${({ active }) => active ? "#242424" : "#1b1b1b"};
   height: 80px;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 1rem;
   position: sticky;
   top: 0;
   z-index: 900;
   font-family: var(--secondary-font);
   font-weight: 600;

   @media screen and(max-width: 960px) {
      background-color: ${({ click }) => (click ? "#fff" : "transparent")};
      transition: 0.8s all ease;
   }
`

export const NavbarContainer = styled.div`
   display: flex;
   justify-content: space-between;
   height: 80px;
   z-index: 1;
   width: 100%;
   max-width: 1000px;
`

export const NavLogo = styled(Link)`
   color: var(--text-color1);
   justify-self: flex-start;
   cursor: pointer;
   text-decoration: none;
   font-size: 1.5rem;
   font-family: var(--tersier-font);
   display: flex;
   align-items: center;
`

export const NavIcon = styled(DiGithubBadge)`
   margin: 0 0.5rem 0.2rem;
   color: var(--text-color1);
`

export const MobileIcon = styled.div`
   display: none;

   @media screen and (max-width: 960px){
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      z-index: 999;
   }
`
export const NavMenu = styled.ul`
   display: flex;
   align-items: center;
   justify-content: center;
   list-style: none;
   text-align: center;

   @media screen and (max-width: 960px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100vh;
      position: absolute;
      right: ${({ click }) => (click ? "0%" : "1000px")};
      opacity: 1;
      transition: all 0.5s ease;
      background: var(--primary-color);
   }
`

export const NavItem = styled.li`
   height: 80px;
   display: flex;
   justify-content: center;
   align-items: center;

   @media screen and (max-width: 960px) {
      width: 100%;
   }
`

export const NavLinks = styled(Link)`
   color: var(--text-color1);
   display: flex;
   align-items: center;
   text-decoration: none;
   padding: 0.5rem 1rem;
   height: 100%;
   font-weight: 500;

   @media screen and (max-width: 960px){
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table;

      &:hover {
         color: #ff4040;
         transition: all 0.2s ease;
      }
   }
`
export const Span = styled.span`
   color: var(--secondary-color);
`