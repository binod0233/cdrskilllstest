import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
// import Choose from "../../components/CDRWriting/Choose";
import Section1 from "../../components/CDRWriting/Section1";
import Hero from "../../components/Hero";
import Hero2 from "../../components/Hero2";
import EA from "../../components/Stage1Competencyassessment/EA";
import Elements from "../../components/Stage1Competencyassessment/Elements";
import OccupationalCategories from "../../components/Stage1Competencyassessment/OccupationalCategories";
import Seo from "../../components/Seo";
import parse from "html-react-parser";
const Stage1CompetencyAssessment = ({ stageRes }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://cdrskillassessment.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  // console.log("stageRes", stageRes);
  const { hero, Be, seo, shared } = stageRes;

  return (
    <div>
      {/* <Head>
        <title>
          Stage 1 Competency Assessment Australia | CDR Skill Assessment
        </title>
        <meta
          name="description"
          content="Want to be a qualified engineer of Engineers Australia? We provide the best service for assisting engineers to Be flawless stage 1 competency assessment."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head> */}
      <Seo seo={seo} />

      <Hero title={hero?.title} details={hero && parse(hero.paragraph)} />

      <Section1
        title={Be?.title}
        data={Be && parse(Be.paragraph)}
        image={Be?.image?.data?.attributes?.url}
        alt="CDRwriting services"
      />
      <OccupationalCategories data={stageRes} />
      <Elements data={stageRes} />
      {/* <Choose /> */}
      <EA data={stageRes} />
      <Hero2
        title={shared?.data?.attributes?.title}
        data={shared && parse(shared.data?.attributes?.paragraph)}
        buttonName={"Contact an Expert"}
      />
    </div>
  );
};

export const getStaticProps = async () => {
  // const { NEXT_STRAPI_API_URL } = process.env;

  const stage1 = await fetch(
    "https://cdrskill.herokuapp.com/api/s-stage1?populate=deep"
  );

  const stageRes = await stage1.json();

  return {
    props: {
      stageRes: stageRes?.data?.attributes || "",
    },
    revalidate: 1,
  };
};

export default Stage1CompetencyAssessment;
