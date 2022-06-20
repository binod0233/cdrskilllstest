import React from "react";
import Div1 from "../components/FAQ/Div1";
import Hero3 from "../components/FAQ/Hero3";
import PricingPlan from "../components/Pricing/PricingPlan";
import Head from 'next/head'
import {useRouter} from 'next/router'


const Pricing = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrskillassessment.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];


  return (
    <div>
      <Head>
        <title>Pricing</title>
        <meta name="description" content="Pricing" />
        <link rel="canonical" href={canonicalUrl} />

      </Head>
      <Div1
        title="Pricing"
        description="Though you might not find us the cheapest CDR Report Writing Service out there but we can promise you that we are the best value for 
    money. We are professional CDR writers (and not some greedy company) who have come together to form this service. Since we are just 
    like you, we have kept the prices appropriately."
        image="/images/Pricing/affordable-price.png"
        alt="affordable price"
      />
      <PricingPlan />
      <Hero3
        title="Stay connected with CDRskillassessment! Contact us via our Social Channels"
        buttonName1="Whatsapp"
        buttonName2="Facebook"
      />
    </div>
  );
};

export default Pricing;
