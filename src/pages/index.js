import * as React from "react"
import Typewriter from 'typewriter-effect'

import Layout from "../components/layout"
import SEO from "../components/seo"

import {
   LandingPage,
   Intro,
   SelfImage,
   Span,
   Image
} from '../components/Home/HomeElement'

import imageHeader from '../images/311002.png';

const IndexPage = () => {
   return (
      <Layout>
         <SEO title="Brayeeen" />
         <LandingPage>
            <Intro>
               <h1>Hello! I'm <Span>Brian</Span>.</h1>
               <h1>
                  <Typewriter
                     options={{
                        loop: true
                     }}

                     onInit={(typewriter) => {
                        typewriter.typeString('I am a ')
                           .typeString('Web Developer')
                           .pauseFor(2500)
                           .deleteChars(9)
                           .typeString('Designer')
                           .pauseFor(2500)
                           .deleteAll()
                           .start();
                     }}
                  />
               </h1>
            </Intro>
            <SelfImage>
               <Image src={imageHeader} />
            </SelfImage>
         </LandingPage>
      </Layout>
   );
}

export default IndexPage
