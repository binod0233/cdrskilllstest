import React from "react";
import { Container } from "react-bootstrap";
import Hero from "../components/Hero";
import Head from 'next/head'
import {useRouter} from 'next/router'


const RefundPolicy = () => {
  const router = useRouter()
  const canonicalUrl = (`https://cdrskillassessment.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div>
      <Head>
      <title>Refund Policy</title>
        <meta name="description" content="Refund Policy" />
        <link rel="canonical" href={canonicalUrl} />

      </Head>
      <Hero />

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
          Refund Policy
        </h1>
        <p
          style={{ color: "#666", fontFamily: "Asap" }}
          className="px-5 pt-4 pb-5"
        >
          {" "}
          We do not accept a refund or return policy at CDRskillassessment once
          both parties, i.e. (client and CDRskillassessment), confirm the work
          and you agree to pay for our services. Nevertheless, In Case of
          failure to deliver your placed order within a reasonable period,
          Payment will be returned.
        </p>
      </Container>
    </div>
  );
};

export default RefundPolicy;
