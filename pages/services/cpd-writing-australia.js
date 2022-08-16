import React from "react";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import Head from "next/head";
import Section1 from "../../components/CDRWriting/Section1";
import ChooseBest from "../../components/CPDWriting/ChooseBest";
import ElementsOfCPD from "../../components/CPDWriting/ElementsOfCPD";
import IncludesWhat from "../../components/CPDWriting/IncludesWhat";
import Expectations from "../../components/Expectations";
import Headings from "../../components/Headings";
import Hero from "../../components/Hero";
import Hero2 from "../../components/Hero2";
import Paragraphs from "../../components/Paragraphs";
import Seo from "../../components/Seo";
import parse from "html-react-parser";
const CPDWriting = ({ cpdRes }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://cdrskillassessment.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  // console.log("cpdRes", cpdRes);
  const { hero, seo, positive, content5, key, shared } = cpdRes;

  return (
    <div>
      {/* <Head>
        <title>
          Best CPD Writing Service in Australia | CDR Skill Assessment
        </title>
        <meta
          name="description"
          content="Looking forward to appoint CPD writers from CDRskillassessment. Know how our experienced writer prepare flawless CPD report displaying your development."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head> */}
      <Seo seo={seo} />
      <Hero
        title={hero?.title}
        details={hero.paragraph && parse(hero.paragraph)}
      />
      <Section1
        title={positive?.title}
        data={positive?.paragraph && parse(positive.paragraph)}
        image={positive?.image?.data?.attributes?.url}
      />
      {/* <Expectations
        title="Why is a CPD essential for engineers in Australia? "
        details="A CPD allows engineers to demonstrate that their expertise meets Australian standards. To ensure you are competent in your 
profession, knowing CPD writing for Engineers Australia is essential.  CPD is a necessary document for engineers pursuing a 
career in Australia."
        list={[
          `
CPD writing helps to make you stay knowledgeable and updated. A well-written CPD opens you to new possibilities, new 
skills, and new knowledge in your career profession.
`,
          `CPD Writing ensures that you and your knowledge and skills stay up to date and aware of your profession's recent trends 
and directions.
`,
          `CPD helps to stay updated where you can advance the aspects of knowledge and technology within the engineer’s career 
profession in Australia.
`,
          `CPD also helps you stay to make a countable contribution to your team. You become more proactive in the workplace.
`,
          `A well-crafted CPD for Engineers Australia ensures all your abilities keep pace with the current standards of others in the 
same domain.
`,
          `CPD writing also ensures that you maintain all the skills and knowledge you need to deliver a professional service to the 
clients, customers, and community.
`,
          `CPD helps you to develop public confidence in your career profession.
`,
        ]}
      /> */}
      <Container className="py-2">
        <Headings title={content5[0]?.title} />
        <Paragraphs
          data={content5[0]?.paragraph && parse(content5[0].paragraph)}
        />
      </Container>
      <Container>
        <Headings title={content5[1]?.title} />
        <Paragraphs
          data={content5[1]?.paragraph && parse(content5[1].paragraph)}
        />
      </Container>
      <ChooseBest />
      <ElementsOfCPD data={cpdRes} />
      {/* <Expectations
        title="Key characteristics of good CPD for Engineers in Australia"
        data="Continuing professional development (CPD) covers the following essential features for developing, mentioning, and documenting 
your professional skills for engineers in Australia. "
        list={[
          `CPD statement should Identify your needs.
`,
          `CPD statement should plan and carry out development activities.
`,
          `CPD statement should reflect your learning.
`,
          `CPD statement should apply knowledge learned.
`,
        ]}
      /> */}
      <Container className="py-2">
        <Headings title={key[0]?.title} />
        <Paragraphs data={key[0]?.paragraph && parse(key[0].paragraph)} />
      </Container>
      {/* <Container>
        <Paragraphs
          data="Taking care of these mentioned features, CDRskillassessment, known for the best CPD Writing service for engineers, provides 
high-quality CPD writing services for engineers in Australia. Based on your requirements and urgency level before your deadline, 
we have plans you can choose from. Our CPD writing services for Engineers Australia receive 100% Approval."
        />
      </Container> */}
      <IncludesWhat data={cpdRes} />
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

  const cpd = await fetch(
    "https://cdrskill.herokuapp.com/api/s-cpd-writing?populate=deep"
  );

  const cpdRes = await cpd.json();

  return {
    props: {
      cpdRes: cpdRes?.data?.attributes || "",
    },
    revalidate: 1,
  };
};

export default CPDWriting;
