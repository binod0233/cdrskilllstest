import React from "react";
import { Container } from "react-bootstrap";
import Hero from "../components/Hero";
import Head from "next/head";
import { useRouter } from "next/router";
import parse from "html-react-parser";
import Seo from "../components/Seo";

const RefundPolicy = ({ refundRes }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://cdrskillassessment.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const { hero, seo } = refundRes;
  return (
    <div>
      <Head>
        <title>Refund Policy</title>
        <meta name="description" content="Refund Policy" />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      {/* <Hero /> */}
      <Seo seo={seo} />

      <Container>
        <h1
          style={{
            color: "#203546",
            fontFamily: "Century Gothic",
            fontWeight: "700",
            textAlign: "center",
          }}
          className="pt-5 "
        >
          {hero?.title}
        </h1>
        <p
          style={{ color: "#666", fontFamily: "Asap" }}
          className="px-5 pt-4 pb-5"
        >
          {hero && parse(hero.paragraph)}
        </p>
      </Container>
    </div>
  );
};

export const getStaticProps = async () => {
  // const { NEXT_STRAPI_API_URL } = process.env;

  const refundPolicy = await fetch(
    "   https://cdrskill.herokuapp.com/api/refund-policy?populate=deep"
  );

  const refundRes = await refundPolicy.json();

  return {
    props: {
      refundRes: refundRes?.data?.attributes || "",
    },
    revalidate: 1,
  };
};

export default RefundPolicy;
