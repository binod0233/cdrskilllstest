import React from "react";
import { Container } from "react-bootstrap";
import Hero from "../components/Hero";
import { useRouter } from "next/router";
import Head from "next/head";
import parse from "html-react-parser";
import Seo from "../components/Seo";
const PrivacyPolicy = ({ privacyRes }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://cdrskillassessment.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  // console.log("privacyRes", privacyRes);
  const { hero, seo, content } = privacyRes;
  return (
    <div>
      {/* <Head>
        <title>Privacy Policy | CDR Skill Assessment</title>
        <meta
          name="description"
          content="Privacy Policy | CDR Skill Assessment"
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head> */}
      <Seo seo={seo} />
      {/* <Hero hero={hero} /> */}
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
        // style={{ color: "#666", fontFamily: "Asap" }}
        // className="px-5 pt-4 pb-5"
        >
          {hero && parse(hero.paragraph)}
        </p>
        {content?.map((item, index) => {
          return (
            <div key={index}>
              <h2>{item.title}</h2>
              <div
                // style={{ color: "#666", fontFamily: "Asap" }}
                className="ps-2 pt-1 "
              >
                {" "}
                {parse(item.paragraph)}
              </div>
            </div>
          );
        })}
      </Container>
    </div>
  );
};
export const getStaticProps = async () => {
  // const { NEXT_STRAPI_API_URL } = process.env;

  const privacyPolicy = await fetch(
    "   https://cdrskill.herokuapp.com/api/privacy-policy?populate=deep "
  );

  const privacyRes = await privacyPolicy.json();

  return {
    props: {
      privacyRes: privacyRes?.data?.attributes || "",
    },
    revalidate: 1,
  };
};

export default PrivacyPolicy;
