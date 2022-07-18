import React from "react";
import Contactus from "../components/ContactUs/Contactus";
import Hero3 from "../components/FAQ/Hero3";
import Head from "next/head";
import { useRouter } from "next/router";

const ContactUs = ({ contactRes }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://cdrskillassessment.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const { hero, seo, shared } = contactRes;
  // console.log("contact", contactRes);
  return (
    <div>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact Us" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      {hero && <Contactus data={hero} />}
      {shared && (
        <Hero3
          buttonName1="Whatsapp"
          buttonName2="Facebook"
          title={shared?.data?.attributes?.title}
        />
      )}
    </div>
  );
};

export const getStaticProps = async () => {
  // const { NEXT_STRAPI_API_URL } = process.env;

  const contact = await fetch(
    "    https://cdrskill.herokuapp.com/api/contact?populate=deep  "
  );

  const contactRes = await contact.json();

  return {
    props: {
      contactRes: contactRes?.data?.attributes || "",
    },
    revalidate: 1,
  };
};

export default ContactUs;
