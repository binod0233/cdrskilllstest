import React from "react";
import { useRouter } from "next/router";
import Hero from "../../components/Hero";
import Section1 from "../../components/CDRWriting/Section1";
import Section2 from "../../components/CareerEpisodeWriting/Section2";
import CDRskillassessmentoptions from "../../components/CareerEpisodeWriting/CDRskillassessmentoptions";
import Structure from "../../components/CareerEpisodeWriting/Structure";
import Whatmakes from "../../components/CareerEpisodeWriting/Whatmakes";
import Hero2 from "../../components/Hero2";
import Head from "next/head";
import parse from "html-react-parser";
import Seo from "../../components/Seo";

const CareerEpisodeWriting = ({ careerRes }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://cdrskillassessment.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const { hero, episode, seo, shared } = careerRes;
  // console.log("careerRes", careerRes);
  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      {/* <Head>
        <title>
          CDR Three Career Episode Report Writing for Engineers Australia
        </title>
        <meta
          name="description"
          content="Get your Three Career Episode Report  for CDR migration skill Assesment for Engineers Australia from Our Professional writers of Enginnering Backgrounds."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head> */}
      <Seo seo={seo} />

      <Hero title={hero?.title} details={hero && parse(hero.paragraph)} />

      <Section1
        title={episode?.title}
        data={episode && parse(episode.paragraph)}
        image={episode?.image?.data?.attributes?.url}
        alt="CDRwriting services"
      />
      <Section2 data={careerRes} />
      <CDRskillassessmentoptions data={careerRes} />
      <Structure data={careerRes} />
      <Whatmakes data={careerRes} />
      <Hero2
        title={shared?.data?.attributes?.title}
        data={shared && parse(shared.data?.attributes?.paragraph)}
        buttonName={" Get Free Consultation"}
      />
    </div>
  );
};

export const getStaticProps = async () => {
  // const { NEXT_STRAPI_API_URL } = process.env;

  const career = await fetch(
    "https://cdrskill.herokuapp.com/api/s-career?populate=deep"
  );

  const careerRes = await career.json();

  return {
    props: {
      careerRes: careerRes?.data?.attributes || "",
    },
    revalidate: 1,
  };
};

export default CareerEpisodeWriting;
