import React from "react";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import Head from "next/head";
import Con1 from "../../components/CDRReviewing/Con1";
import FewThings from "../../components/CDRReviewing/FewThings";
import WhatMakesUsBest from "../../components/CDRReviewing/WhatMakesUsBest";
import Section1 from "../../components/CDRWriting/Section1";
import Expectations from "../../components/Expectations";
import Headings from "../../components/Headings";
import Hero from "../../components/Hero";
import Hero2 from "../../components/Hero2";
import Paragraphs from "../../components/Paragraphs";
import Seo from "../../components/Seo";
import parse from "html-react-parser";
const CDRReviewing = ({ revRes }) => {
  const { hero, seo, ensured, content4, engineers, shared } = revRes;
  const router = useRouter();
  const canonicalUrl = (
    `https://cdrskillassessment.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  //   console.log("revRes", revRes);

  return (
    <div>
      {/* <Head>
        <title>
          Best CDR Reviewing Service in Australia | CDR Skill Assessment
        </title>
        <meta
          name="description"
          content="CDRskillassessment is the best CDR report reviewing service provider in Australia, our professional team review your CDR report to prevent rejection from EA."
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head> */}
      <Seo seo={seo} />
      <Hero
        title={hero?.title}
        details={hero.paragraph && parse(hero.paragraph)}
      />
      <Section1
        title={ensured?.title}
        data={ensured?.paragraph && parse(ensured.paragraph)}
        image={ensured?.image?.data?.attributes?.url}
        alt="CDRREviewing"
      />
      <Container>
        <Headings title={content4[0]?.title} />
        <Paragraphs
          data={content4[0]?.paragraph && parse(content4[0].paragraph)}
        />
      </Container>
      <Con1 data={revRes} />
      <WhatMakesUsBest data={revRes} />
      <FewThings data={revRes} />
      {/* <Expectations
        title="Engineers in Australia not utilizing CDR reviewing services face rejection"
        details="In Stage 2 Competency Assessment engineer will demonstrate engineering skill and knowledge to Engineers Australia for Chartered 
membership. The community has certain expectations of seasoned professional engineers, including their expertise, application, and 
behaviour. Experienced professional engineers are required as leaders and supervisors."
        list={[
          `The greatest error one can make when creating CDR is forgetting to include all of the information required to correctly assess.
  `,
          `A report that is inadequately drafted may damage the application for an Australian Skilled Migration visa.
  `,
          `In the career episodes, one must discuss your engineering work or all of those projects in depth while keeping in mind what 
  `,
          `EA wants. Remember, they are seeking to determine your talents and profile; therefore, you should project your professional 
  profile with prudence. Avoid supplying extraneous information since it complicates the evaluation process and may result in 
  CDR rejection.
  `,
          `For the Career episodes, the essay format is necessary. Avoid utilizing bullet points and stick to the 1000–2500-word limit for 
  each career episode. Within that word limit, try to incorporate all of the important material requested by Engineers Australia.
  `,
          `It would be useful to include the project's issue statements and the measures you took to tackle the problem in your career 
  episode report. It will help you better define your contributions to the project.
  `,
          `The career episodes illustrate your application of engineering knowledge and abilities within the selected engineering subject. 
  `,
          `It is where you discuss your project or challenge, how you solved it, and the outcomes. Additional computations can be provided 
  if necessary. Tables, charts, and computations in excess, on the other hand, will not be accepted and will result in CDR rejection.
  `,
          `The simplest approach to prevent making mistakes is to familiarize yourself with the EA standards. These have been set up to 
  help you write your CDR report. You may even employ an expert for CDR reviewing and ensure that you do not make any blunders. 
  `,
          `Getting competent help will ensure that your CDR is a success.
  `,
          `While having certain technical elements in your report is permissible, incorporating too many technical aspects in your CDR 
  report raises your chances of CDR rejection. Avoid using too many tables, figures, charts, or images in your CDR report, because 
  they will damage it greatly.
  `,
          `Plagiarism is the most common reason for project or application rejection or failure, regardless of the kind. Never plagiarize 
  samples from the internet. Even if done accidentally, it might be grounds for dismissal. Because the CDR report is meant to be 
  unique, you should do your best to personalize it to your profile and initiatives. You can always employ the help of a professional 
  writing service and CDR reviewing Service to help you write a plagiarism-free CDR report. Plagiarism is a felony, so remember that.
  `,
        ]}
      /> */}
      <Container className="py-2">
        <Headings title={engineers?.title} />
        <Paragraphs data={engineers?.paragraph && parse(engineers.paragraph)} />
      </Container>
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

  const reviewing = await fetch(
    "https://cdrskill.herokuapp.com/api/s-reviewing?populate=deep"
  );

  const revRes = await reviewing.json();

  return {
    props: {
      revRes: revRes?.data?.attributes || "",
    },
    revalidate: 1,
  };
};

export default CDRReviewing;
