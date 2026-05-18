import React from 'react'
import { Helmet } from "react-helmet-async";

import Nav from '../Components/Nav'
import Header from '../Components/Header'
import Headerd from '../Components/Headerd'
import Core from '../Components/Core'
import Admission from '../Components/Admission'
import Approach from '../Components/Approach'
import City from '../Components/City'
import Review from '../Components/Review'
import Instruction from '../Components/Instruction'
import Testinomials from '../Components/Testinomials'
import News from '../Components/News'
import Footer from '../Components/Footer'
import Marquee from '../Components/Marquee';

function Home() {
  return (
    <>
      <Helmet>
        <title>
          Education Consultancy India | Admission Guidance & Career Counseling
        </title>

        <meta
          name="description"
          content="Get expert career counseling and admission guidance for medical, engineering, management & law. Direct admission via merit, management & NRI quota."
        />

        <meta name="robots" content="index, follow" />
         <link
          rel="canonical"
          href="https://sairameducation.in/"
        />
      </Helmet>
      <div>
        <Nav/>
        <Header/>
        <Headerd/>
        <Core/>
        <Admission/>
        <Approach/>
        <City/>
        <Review/>
        <Instruction/>
        <Testinomials/>
        <News/>
        <Footer/>
      </div>
    </>
  )
}

export default Home