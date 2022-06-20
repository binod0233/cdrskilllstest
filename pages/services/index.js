import React from "react";
import Head from 'next/head'
import {useRouter} from 'next/router'
import CEs from "../../components/CDRServices/CEs";
import Guidelines from "../../components/CDRServices/Guidelines";
import Offer from "../../components/CDRServices/Offer";
import OurServices from "../../components/CDRServices/OurServices";
import Process from "../../components/CDRServices/Process";
import Serv1 from "../../components/CDRServices/Serv1";
import Occupational from "../../components/CDRServices/Occupational";
import Hero2 from "../../components/Hero2";

const CDRServices = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrskillassessment.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
  return (
    <div>
       <Head>
        <title>CDR Services</title>
        <meta name='description' content="CDR Services | CDR Skill Assessment"/>
        <link rel="canonical" href={canonicalUrl} />

      </Head>
      <Serv1 />
      <OurServices />
      <Offer />
      <Process />
      <Occupational />
      <Guidelines />
      <CEs />
      <Hero2
        title="Choose the best reviewing service provider to review your CDR for EA"
        data="Engineers who wish to pursue an engineering career in Australia should write a CDR report to demonstrate skills, 
knowledge and experience to Engineers Australia. We have dedicated engineering teams with years of experience 
in CDR Services for engineers in Australia."
        buttonName="Check Our Pricing"
        link="/pricing"
      />
    </div>
  );
};

export default CDRServices;
