import React from "react";
import Hero3 from "../components/FAQ/Hero3";
import Ouragents from "../components/MeetOurAdvisors/Ouragents";
import Head from 'next/head'
import {useRouter} from 'next/router'

const MeetOurAdvisors = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrskillassessment.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
      <Head>
      <title>Meet our advisors</title>
        <meta name="description" content="Meet our advisors" />
        <link rel="canonical" href={canonicalUrl} />

      </Head>
      <Ouragents />
      <Hero3
        title="Stay connected with CDRskillassessment! Contact us via our Social Channels"
        buttonName1="Whatsapp"
        buttonName2="Facebook"
      />
    </div>
  );
};

export default MeetOurAdvisors;
