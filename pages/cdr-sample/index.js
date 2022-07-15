import React from "react";
import Head from "next/head";
import FourCol from "../../components/Samples/FourCol";
import WhyRely from "../../components/Samples/WhyRely";
import Section1 from "../../components/CDRWriting/Section1";
import Hero from "../../components/Hero";
import Hero2 from "../../components/Hero2";
import FrequentlyAsked from "../../components/Samples/FrequentlyAsked";
import SampleList from "../../components/Samples/SampleList";
import WantTo from "../../components/Samples/WantTo";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import Seo from "../../components/Seo";

const Samples = ({ sampleRes }) => {
  const router = useRouter();

  const canonicalUrl = (
    `https://cdrskillassessment.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  console.log("sampleRes", sampleRes);
  const { hero, seo, sample, shared, pursuing, positiveassessment, knowmore } =
    sampleRes;
  return (
    <div>
      {/* <Head>
        <title>
          Learn about various CDR report services we provide to different
          engineers and how we follow guidelines in MSA to prepare your report.
        </title>
        <meta
          name="description"
          content="Learn about various CDR report services we provide to different engineers and how we follow guidelines in MSA to prepare your report."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head> */}
      <Seo seo={seo} />
      <Hero title={hero.title} details={parse(hero.paragraph)} />
      <Section1
        title={sample.title}
        data={parse(sample.paragraph)}
        image={sample?.image?.data?.attributes?.url}
      />
      <FourCol data={positiveassessment} />
      <WantTo data={knowmore} />
      <SampleList />
      <WhyRely data={pursuing} />
      <FrequentlyAsked />
      <Hero2
        title={shared.data.attributes.title}
        data={parse(shared.data.attributes.paragraph)}
        buttonName="Check Our Pricing"
        link="/pricing"
      />
    </div>
  );
};

export const getStaticProps = async () => {
  // const { NEXT_STRAPI_API_URL } = process.env;

  const sample = await fetch(
    "https://cdrskill.herokuapp.com/api/cdr-sample?populate=deep"
  );

  const sampleRes = await sample.json();

  return {
    props: {
      sampleRes: sampleRes?.data?.attributes,
    },
    revalidate: 1,
  };
};

export default Samples;
