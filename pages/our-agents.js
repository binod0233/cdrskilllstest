import React from "react";
import Hero3 from "../components/FAQ/Hero3";
import Ouragents from "../components/MeetOurAdvisors/Ouragents";
import Head from "next/head";
import { useRouter } from "next/router";
import Seo from "../components/Seo";

const MeetOurAdvisors = ({ agentRes }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://cdrskillassessment.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  // console.log("agentRes", agentRes);
  const { seo } = agentRes;
  return (
    <div>
      {/* <Head>
        <title>Meet our advisors</title>
        <meta name="description" content="Meet our advisors" />
        <link rel="canonical" href={canonicalUrl} />
      </Head> */}
      <Seo seo={seo} />

      <Ouragents agentRes={agentRes} />
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

  const agent = await fetch(
    "    https://cdrskill.herokuapp.com/api/our-agent?populate=deep "
  );

  const agentRes = await agent.json();

  return {
    props: {
      agentRes: agentRes?.data?.attributes || "",
    },
    revalidate: 1,
  };
};

export default MeetOurAdvisors;
