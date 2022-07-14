import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import About from "../components/Landing/About";
import Factors from "../components/Landing/Factors";
import Hero2 from "../components/Hero2";
import Steps from "../components/Landing/Steps";
import Approval from "../components/Landing/Approval";
import Faq from "../components/Landing/Faq";
import Hero from "../components/Hero";
import parse from "html-react-parser";
import Seo from "../components/Seo";

const Landing = ({ landingRes }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://cdrskillassessment.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const { hero, seo, about, shared } = landingRes;
  const factor = {
    factor: landingRes.factor,
    factor_data: landingRes.factor_data,
  };
  const approval = { approval: landingRes.Approval, assure: landingRes.assure };
  const step = { step: landingRes.steps, steps: landingRes.step };
  const faq = { faq: landingRes.faq, faq_data: landingRes.faq_data };

  console.log("testedddd", faq);

  return (
    <div>
      {/* <Head>
        <title>Best CDR Writing Service | CDR Skill Assessment</title>
        <meta
          name="description"
          content="Want to get your CDR report approved by Engineers Australia in first go? Prepare your personalized report with all the mandatory components and plagiarism free"
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head> */}
      <Seo seo={seo} />
      <Hero title={hero.title} details={parse(hero.paragraph)} />

      <About about={about} />
      <Factors factor={factor} />
      <Approval approvalData={approval} />
      <Steps stepData={step} />
      <Faq faqData={faq} />
      <Hero2
        title={shared.data.attributes.title}
        data={shared.data.attributes.paragraph}
        buttonName={"Check Pricing"}
        link="/pricing"
      />
    </div>
  );
};

export const getStaticProps = async () => {
  const { NEXT_STRAPI_API_URL } = process.env;

  const landing = await fetch(NEXT_STRAPI_API_URL + "landing?populate=deep");

  const landingRes = await landing.json();

  return {
    props: {
      landingRes: landingRes.data.attributes,
    },
  };
};

export default Landing;
