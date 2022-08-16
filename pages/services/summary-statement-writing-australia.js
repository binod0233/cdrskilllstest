import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
// import Choose from "../../components/CDRWriting/Choose";
import Section1 from "../../components/CDRWriting/Section1";
import Hero from "../../components/Hero";
import Hero2 from "../../components/Hero2";
import Part1 from "../../components/SummaryStatementWriting/Part1";
import Tables from "../../components/SummaryStatementWriting/Tables";
import Tips from "../../components/SummaryStatementWriting/Tips";
import Seo from "../../components/Seo";
import parse from "html-react-parser";
const SummaryStatementWriting = ({ summaryRes }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://cdrskillassessment.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  const { hero, prepare, seo, shared } = summaryRes;
  console.log("summaryRes", summaryRes);
  return (
    <div>
      {/* <Head>
        <title>Summary Statement Writing Australia | CDR Skill prepare</title>
        <meta
          name="description"
          content="Looking forward to appoint summary statement writing service provider. Know about summary statement and how our skilled writer demonstrates your skills and features."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head> */}
      <Seo seo={seo} />

      <Hero title={hero?.title} details={hero && parse(hero.paragraph)} />

      <Section1
        title={prepare?.title}
        data={prepare && parse(prepare.paragraph)}
        image={prepare?.image?.data?.attributes?.url}
        alt="CDRwriting services"
      />
      <Part1 data={summaryRes} />
      {/* <Choose data={summaryRes}  /> */}
      <Tables data={summaryRes} />
      <Tips data={summaryRes} />
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

  const summary = await fetch(
    "https://cdrskill.herokuapp.com/api/s-summary?populate=deep"
  );

  const summaryRes = await summary.json();

  return {
    props: {
      summaryRes: summaryRes?.data?.attributes || "",
    },
    revalidate: 1,
  };
};

export default SummaryStatementWriting;
