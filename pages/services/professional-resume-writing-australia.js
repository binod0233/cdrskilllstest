import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
// import Con1 from "../../components/CDRReviewing/Con1";
import Section1 from "../../components/CDRWriting/Section1";
import Advantages from "../../components/CVResumeWriting/Advantages";
import Things from "../../components/CVResumeWriting/Things";
import Hero from "../../components/Hero";
import Hero2 from "../../components/Hero2";
import { Col, Container, Row } from "react-bootstrap";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Headings from "../../components/Headings";
import Paragraphs from "../../components/Paragraphs";

import Seo from "../../components/Seo";
import parse from "html-react-parser";

const CVResumeWriting = ({ cvRes }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://cdrskillassessment.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  console.log("cvRes", cvRes);
  const { hero, seo, ensure, content3, key, shared } = cvRes;

  return (
    <div>
      {/* <Head>
        <title>
          Professional Resume Writing in Australia | CDR Skill Assessment
        </title>
        <meta
          name="description"
          content="Looking forward to get assistance of CDRskillassessment for your resume writing. Knowabout importance of resume and how professional prepare it."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head> */}
      <Seo seo={seo} />
      <Hero
        title={hero[0]?.title}
        details={hero[0].paragraph && parse(hero[0].paragraph)}
      />
      <Section1
        title={ensure?.title}
        data={ensure?.paragraph && parse(ensure.paragraph)}
        image={ensure?.image?.data?.attributes?.url}
      />
      {/* <Con1 /> */}
      <Container className="pt-md-5 pb-3">
        <Row>
          <Col md={7} className="pt-md-5 ">
            <Headings title={content3[0]?.title} />
            <Paragraphs
              data={content3[0]?.paragraph && parse(content3[0].paragraph)}
            />
            <button
              style={{
                background: "#017CC9",
                color: "#FFF",
                borderRadius: "5px",
                padding: "3px 11px ",
                fontWeight: "600",
                border: "none",
                outline: "none",
              }}
              onClick={() => router.push("/our-agents")}
            >
              Contact an expert
            </button>
          </Col>
          <Col md={5} className="mt-5 ps-5 pe-3">
            <div
              className="px-4 py-4"
              style={{
                background: " #FFFFFF",
                boxShadow: "1px 1px 20px rgba(0, 0, 0, 0.25)",
                borderRadius: " 10px",
              }}
            >
              <h3
                className="ms-3"
                style={{
                  fontFamily: "Asap",
                  color: " #203546",
                  fontWeight: "700",
                }}
              >
                <BusinessCenterIcon />
                {content3[1]?.title}
              </h3>

              {content3[1]?.paragraph && parse(content3[1].paragraph)}
            </div>
          </Col>
        </Row>
      </Container>
      <Things data={cvRes} />
      <Advantages data={cvRes} />
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

  const cv = await fetch(
    "https://cdrskill.herokuapp.com/api/s-cv?populate=deep"
  );

  const cvRes = await cv.json();

  return {
    props: {
      cvRes: cvRes?.data?.attributes || "",
    },
    revalidate: 1,
  };
};

export default CVResumeWriting;
