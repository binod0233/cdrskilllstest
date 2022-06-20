import React from "react";
import Contactus from "../components/ContactUs/Contactus";
import Hero3 from "../components/FAQ/Hero3";
import Head from 'next/head'
import {useRouter} from 'next/router'


const ContactUs = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrskillassessment.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
      <Head>
      <title>Contact Us</title>
        <meta name="description" content="Contact Us" />
        <link rel="canonical" href={canonicalUrl} />

      </Head>
      <Contactus />
      <Hero3
        buttonName1="Whatsapp"
        buttonName2="Facebook"
        title="Stay connected with CDRskillassessment! Contact us via our Social Channels"
      />
    </div>
  );
};

export default ContactUs;
