import styled from 'styled-components'

import '../layout.css'

export const LandingPage = styled.div`
   width: 100%;
   height: 88vh;
   background-color: var(--primary-color);
   display: flex;
   align-items: center;
   justify-content: space-around;
   padding: 4rem 10rem;

   @media screen and (max-width:  960px){
      height: 86.23vh;
      padding: 4rem;
   }

   @media screen and (max-width: 400px){
      font-size: 0.75rem;
      padding: 1rem;
      text-align: center;
      flex-direction: column;
      justify-content: space-around;
   }
`

export const Intro = styled.div`
   width: 50%;
   display: flex;
   flex-direction: column;
   font-family: var(--primary-font);
   color: var(--text-color1);

   @media screen and ( max-width: 400px){
      width: 100%;
   }
`

export const Span = styled.span`
   color: var(--secondary-color);
   text-shadow: 3px 3px #3b3b3b;
`

export const SelfImage = styled.div`
   width: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
`

export const Image = styled.img`
   width: 400px;
   height: 400px;
   background-color: var(--secondary-color);
   border-radius: 100%;

   @media screen and (max-width: 960px){
      width: 300px;
      height: 300px;
   }

   @media screen and (max-width: 400px){
      width: 150px;
      height: 150px;
   }
`