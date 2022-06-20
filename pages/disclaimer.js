import React from "react";
import DIsclaimer from "../components/Disclaimer/DIsclaimer";
import Hero3 from "../components/FAQ/Hero3";
import {useRouter} from 'next/router'
import Head from 'next/head'

const Disclaimer = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrskillassessment.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
      <Head>
      <title>Disclaimer | CDR Skill Assessment</title>
      <meta name='description' content='Disclaimer | CDR Skill Assessment'/>
      <link rel="canonical" href={canonicalUrl} />
      </Head>
  
      <DIsclaimer />
      <Hero3
        title="Stay connected with CDRskillassessment! Contact us via our Social Channels"
        buttonName1="Whatsapp"
        buttonName2="facebook"
      />
    </div>
  );
};

export default Disclaimer;
