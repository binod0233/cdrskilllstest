import React from "react";
import Head from "next/head";
import Choose from "../../components/CDRWriting/Choose";
import Hero from "../../components/Hero";
import Hero2 from "../../components/Hero2";
import Expectations from "../../components/Expectations";
import Fourunits from "../../components/Stage2Competencyassessment/Fourunits";
import RequiredDocuments from "../../components/Stage2Competencyassessment/RequiredDocuments";
import { useRouter } from "next/router";
import Seo from "../../components/Seo";
import parse from "html-react-parser";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../../components/Headings";
import Paragraphs from "../../components/Paragraphs";

const Stage2CometencyAssessment = ({ stageRes }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://cdrskillassessment.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const { hero, Be, seo, stage2, shared } = stageRes;
  // console.log("stageRes", stageRes);
  return (
    <div>
      {/* <Head>
        <title>
          Stage 2 Competency Assessment Australia | CDR Skill Assessment
        </title>
        <meta
          name="description"
          content="Want to be a chartered member of Engineers Australia? Our professional writers prepare Stage 2 Competency Assessment displaying your skills on field of work."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head> */}
      <Seo seo={seo} />
      <Hero
        title={hero[0]?.title}
        details={hero[0].paragraph && parse(hero[0].paragraph)}
      />

      <Fourunits data={stageRes} />
      {/* <Choose /> */}
      <RequiredDocuments data={stageRes} />
      {/* <Expectations
              title="Stage 2 Competency Assessment will meet the following Expectations of EA"
              details="In Stage 2 Competency Assessment engineer will demonstrate engineering skill and knowledge to Engineers Australia for Chartered
            membership. The community has certain expectations of seasoned professional engineers, including their expertise, application, and
            behaviour. Experienced professional engineers are required as leaders and supervisors."
              list={[
                `Stage 2 Competency Assessed engineers recognize the demands of customers, a diverse set of stakeholders, and society as
        a whole.
        `,
                `Chartered member Engineers in Australia have an understanding of the system, service, method, or program that optimizes
        `,
                `social, environmental, and economic results.
        `,
                `Stage 2 Competency Assessment ascertains that the managerial contribution has been correctly incorporated into the overall
        project, process, or program.
        `,
                `Chartered members of Engineers Australia communicate well with people from various disciplines, jobs, and backgrounds.
        `,
                `Chartered Professions of Engineers in Australia have knowledge on the assessment of technology potential by society,
        corporations, and governments.
        `,
                `Stage 2 Competency Assessment ensures the greatest degree of feasibility, such policy decisions are sufficiently informed by
        possibilities and ramifications for Engineers in Australia.
        `,
                `Stage 2 Competency Assessment assures the costs, risks, and restrictions are appropriately understood in relation to the intended
        outcomes.
        `,
                `Stage 2 Competency Assessment brings knowledge from many sources to bear on the creation of solutions to complex problems
        and difficulties.
        `,
                `Chartered members of Engineers Australia make certain that technical and non-technical factors are properly integrated.
        `,
                `Stage 2 Competency Assessment states both risk management and long-term sustainability are critical issues.
        `,
                `They ensure that all components of a project, program, or process were founded on theory and underlying principles.
        `,
                `Chartered member of Engineers Australia ensures that all components of a project, program, or process were founded on
        theory and underlying principles.

        `,
              ]}
        data={stageRes}
      /> */}
      <Container className="py-2">
        <Headings title={stage2?.title} />
        <Paragraphs data={stage2?.paragraph && parse(stage2.paragraph)} />
      </Container>

      <Hero2
        title={shared?.data?.attributes?.title}
        data={shared && parse(shared.data?.attributes?.paragraph)}
        buttonName={"Get Free Samples"}
        link="/cdr-sample"
      />
    </div>
  );
};
export const getStaticProps = async () => {
  // const { NEXT_STRAPI_API_URL } = process.env;

  const stage2 = await fetch(
    "https://cdrskill.herokuapp.com/api/s-stage2?populate=deep"
  );

  const stageRes = await stage2.json();

  return {
    props: {
      stageRes: stageRes?.data?.attributes || "",
    },
    revalidate: 1,
  };
};

export default Stage2CometencyAssessment;
