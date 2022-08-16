import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Hero2 from "../../components/Hero2";
import Hero from "../../components/Hero";
import Section1 from "../../components/CDRWriting/Section1";
import Plag2 from "../../components/CDRPlagiarismCheckingandRemoval/Plag2";
import Advantages1 from "../../components/CDRPlagiarismCheckingandRemoval/Advantages1";
import Seo from "../../components/Seo";
import parse from "html-react-parser";
const CDRPlagiarismCheckingandRemoval = ({ plaRes }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://cdrskillassessment.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  // console.log("plaRes", plaRes);
  const { hero, seo, our_services, content5, key, shared } = plaRes;

  return (
    <div>
      {/* <Head>
        <title>
          CDR Plagiarism Checking and Removal services in Australia.
        </title>
        <meta
          name="description"
          content="Want 100 % Approval from EA? our Best CDR Plagiarism Checking & Removal services in Australia save you from CDR Rejected due to plagiarism"
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head> */}
      <Seo seo={seo} />
      <Hero
        title={hero?.title}
        details={hero.paragraph && parse(hero.paragraph)}
      />
      <Section1
        title={our_services?.title}
        data={our_services?.paragraph && parse(our_services.paragraph)}
        image={our_services?.image?.data?.attributes?.url}
      />
      <Plag2 data={plaRes} />
      <Advantages1 data={plaRes} />
      <Hero2
        title={shared?.data?.attributes?.title}
        data={shared && parse(shared.data?.attributes?.paragraph)}
        buttonName="Contact an Expert"
      />
    </div>
  );
};

export const getStaticProps = async () => {
  // const { NEXT_STRAPI_API_URL } = process.env;

  const plagiarism = await fetch(
    "https://cdrskill.herokuapp.com/api/s-plagiarism?populate=deep"
  );

  const plaRes = await plagiarism.json();

  return {
    props: {
      plaRes: plaRes?.data?.attributes || "",
    },
    revalidate: 1,
  };
};

export default CDRPlagiarismCheckingandRemoval;
