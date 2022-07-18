import React from "react";
import DIsclaimer from "../components/Disclaimer/DIsclaimer";
import Hero3 from "../components/FAQ/Hero3";
import { useRouter } from "next/router";
import Head from "next/head";

const Disclaimer = ({ disclaimerRes }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://cdrskillassessment.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const { content, seo, shared } = disclaimerRes;
  // console.log("disclaimer", disclaimerRes);
  return (
    <div>
      <Head>
        <title>Disclaimer | CDR Skill Assessment</title>
        <meta name="description" content="Disclaimer | CDR Skill Assessment" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      {content ? <DIsclaimer content={content} /> : <DIsclaimer />}
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

  const disclaimer = await fetch(
    "    https://cdrskill.herokuapp.com/api/disclaimer?populate=deep  "
  );

  const disclaimerRes = await disclaimer.json();

  return {
    props: {
      disclaimerRes: disclaimerRes?.data?.attributes || "",
    },
    revalidate: 1,
  };
};

export default Disclaimer;
