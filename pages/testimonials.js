import React from "react";
import Hero3 from "../components/FAQ/Hero3";
import Head from 'next/head'
import {useRouter} from 'next/router'


import TEstimonials from "../components/Testimonials/TEstimonials";

const Testimonials = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrskillassessment.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
      <Head>
        <title>Testimonials | CDR Skill Assessment</title>
        <meta name="description" content="Testimonials | CDR Skill Assessment"/>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <TEstimonials />
      <Hero3
        title="Stay connected with CDRskillassessment! Contact us via our Social Channels"
        buttonName1="Whatsapp"
        buttonName2="facebook"
      />
    </div>
  );
};

export default Testimonials;
