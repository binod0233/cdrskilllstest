import React from "react";
import { useRouter } from "next/router";
import Beforeutakehelp from "../../components/CDRWriting/Beforeutakehelp";
import Choose from "../../components/CDRWriting/Choose";
import DOu from "../../components/CDRWriting/DOu";
import Section1 from "../../components/CDRWriting/Section1";
import Wh from "../../components/CDRWriting/Wh";
import Whatdoes from "../../components/CDRWriting/Whatdoes";
import Hero from "../../components/Hero";
import Hero2 from "../../components/Hero2";
import Head from "next/head";
import Script from "next/script";
import parse from "html-react-parser";
import Seo from "../../components/Seo";

const CDRWriting = ({ cdrRes }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://cdrskillassessment.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const schemaData = {
    "@context": "http://schema.org",
    "@type": "Product",
    name: "CDR Report Writing Services for Engineers Australia",
    image: "https://cdrskillassessment.com/images/n2.png",
    description:
      "We provide personalised CDR reports prepared by CDR experts based on your degree and career.",
    url: "https://cdrskillassessment.com/services/cdr-writing-service-australia/",
    brand: {
      "@type": "Brand",
      name: "cdrskillassessment",
      logo: "https://cdrskillassessment.com/images/logo.png",
    },
    offers: {
      "@type": "Offer",
      price: "Negotiable",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 10,
      bestRating: 10,
      worstRating: 7,
      ratingCount: 20,
    },
  };
  // console.log("cdrRes", cdrRes);

  const { hero, assessment, shared, seo } = cdrRes;
  return (
    <div>
      <Script id="" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>
      {/* <Head>
        <title>
          High-Quality CDR Report Writing Service for Engineers Australia
        </title>
        <meta
          name="description"
          content="Engineering Applicants seeking the best service provider for CDR Writing? Grab your high-quality CDR Report to get 100 % Approval from Engineers Australia."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head> */}
      <Seo seo={seo} />
      <Hero title={hero?.title} details={hero && parse(hero.paragraph)} />
      <Section1
        title={assessment?.title}
        data={assessment && parse(assessment.paragraph)}
        image={assessment?.image?.data?.attributes?.url}
        alt="CDRwriting services"
      />
      <Wh data={cdrRes} />
      <DOu data={cdrRes} />
      <Choose data={cdrRes} />
      <Beforeutakehelp data={cdrRes} />
      <Whatdoes data={cdrRes} />
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

  const cdrWriting = await fetch(
    " https://cdrskill.herokuapp.com/api/s-cdr-writing?populate=deep "
  );

  const cdrRes = await cdrWriting.json();

  return {
    props: {
      cdrRes: cdrRes?.data?.attributes || "",
    },
    revalidate: 1,
  };
};

export default CDRWriting;
