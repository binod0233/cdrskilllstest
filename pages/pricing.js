import React from "react";
import Div1 from "../components/FAQ/Div1";
import Hero3 from "../components/FAQ/Hero3";
import PricingPlan from "../components/Pricing/PricingPlan";
import Head from "next/head";
import { useRouter } from "next/router";
import parse from "html-react-parser";

const Pricing = ({ pricingRes }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://cdrskillassessment.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  // console.log("pricingRes", pricingRes);
  const { hero, plan } = pricingRes;

  return (
    <div>
      <Head>
        <title>Pricing</title>
        <meta name="description" content="Pricing" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <Div1
        title={hero?.title}
        description={hero && parse(hero.paragraph)}
        image={hero?.image?.data?.attributes?.url}
        alt="affordable price"
      />
      <PricingPlan plan={plan} />
      <Hero3
        title="Stay connected with CDRskillassessment! Contact us via our Social Channels"
        buttonName1="Whatsapp"
        buttonName2="Facebook"
      />
    </div>
  );
};

export const getStaticProps = async () => {
  // const { NEXT_STRAPI_API_URL } = process.env;

  const pricing = await fetch(
    "   https://cdrskill.herokuapp.com/api/pricing?populate=deep "
  );

  const pricingRes = await pricing.json();

  return {
    props: {
      pricingRes: pricingRes?.data?.attributes || "",
    },
    revalidate: 1,
  };
};

export default Pricing;
