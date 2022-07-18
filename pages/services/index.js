import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import CEs from "../../components/CDRServices/CEs";
import Guidelines from "../../components/CDRServices/Guidelines";
import Offer from "../../components/CDRServices/Offer";
import OurServices from "../../components/CDRServices/OurServices";
import Process from "../../components/CDRServices/Process";
import Serv1 from "../../components/CDRServices/Serv1";
import Occupational from "../../components/CDRServices/Occupational";
import Hero2 from "../../components/Hero2";
import parse from "html-react-parser";
const CDRServices = ({ serviceRes }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://cdrskillassessment.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const {
    hero,
    guidelines,

    seo,
    shared,
  } = serviceRes;
  const ourServices = {
    cdrservice: serviceRes.cdrservice,
    cdr_service_data: serviceRes.cdr_service_data,
  };
  const offers = {
    title: serviceRes.offer_title,
    offer: serviceRes.offer,
    approval: serviceRes.Approval,
    services: serviceRes.our_services,
  };
  const process = {
    positiveA: serviceRes.positiveassessment,
    positive: serviceRes.positive,
    professional: serviceRes.offer_professional,
  };
  const occupational = {
    title: serviceRes.occu_title,
    occupational_cat: serviceRes.occupational_cat,
  };
  const hirings = {
    hiring: serviceRes.hiring,
    hiring_data: serviceRes.hiring_data,
  };

  console.log("serviceRes", serviceRes);
  return (
    <div>
      <Head>
        <title>CDR Services</title>
        <meta
          name="description"
          content="CDR Services | CDR Skill Assessment"
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      {hero && <Serv1 hero={hero} />}
      {ourServices && <OurServices ourServices={ourServices} />}
      {offers && <Offer offers={offers} />}
      {process && <Process process={process} />}
      {occupational && <Occupational occupational={occupational} />}
      {guidelines && <Guidelines guidelines={guidelines} />}
      {hirings && <CEs hirings={hirings} />}
      <Hero2
        title={shared?.data?.attributes?.title}
        data={parse(shared?.data?.attributes?.paragraph)}
        buttonName={"Check Pricing"}
        link="/pricing"
      />
    </div>
  );
};

export const getStaticProps = async () => {
  // const { NEXT_STRAPI_API_URL } = process.env;

  const service = await fetch(
    "    https://cdrskill.herokuapp.com/api/cdr-service?populate=deep "
  );

  const serviceRes = await service.json();

  return {
    props: {
      serviceRes: serviceRes?.data?.attributes || "",
    },
    revalidate: 1,
  };
};

export default CDRServices;
