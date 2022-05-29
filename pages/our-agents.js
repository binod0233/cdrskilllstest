import React from "react";
import Hero3 from "../components/FAQ/Hero3";
import Ouragents from "../components/MeetOurAdvisors/Ouragents";
import Head from 'next/head'

const MeetOurAdvisors = () => {
  return (
    <div>
      {/* <Meta title="Meet our advisors" /> */}
      <Head>
      <title>Meet our advisors</title>
        <meta name="description" content="Meet our advisors" />
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
