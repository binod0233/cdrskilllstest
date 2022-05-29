import Chatra from "@chatra/chatra";
import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const OurServices = () => {
  const dataList = [
    {
      image: "images/CDRServices/Vector.png",
      title: `CDR Report Writing`,
      data: `Prepare a flawless CDR report 
      based on the specific format 
      described by Engineers Australia 
      in the MSA booklet. With a high 
      success record of Competency 
      Demonstration Report, CDR, 
      approval from Engineers Australia, 
      CDRskillassessment provide the 
      best CDR Writing Service for 
      Engineers in Australia.`,
      alt: `vector`,
    },
    {
      image: "images/CDRServices/Vector-1.png",
      title: `Career Episode Writing`,
      data: `Career Episode report writing is 
      based on three separate projects 
      completed during your final year 
      of engineering, internship program, 
      or work-related tasks. Our expert 
      team offers CDR Services in 
      Australia based on your professional 
      experiences, aiding you to create 
      each of the three career episodes 
      distinctively.`,
    },
    {
      image: "images/CDRServices/Vector-2.png",
      title: `Summary Statement Writing`,
      data: `CDR services for engineers in 
      Australia are based on three career 
      episodes based on various engineering 
      experiences you've had during your 
      career. The summary statement's 
      contents are competency aspects 
      that you claim and how you utilised 
      and attained those elements over 
      your professional episodes.`,
      alt: `Summary Statement Writing`,
    },
    {
      image: "images/CDRServices/apple.png",
      title: `Stage1 Competency Assessment`,
      data: `CDR services assist in presenting your 
      deep comprehension of the corpus of 
      engineering knowledge relevant to your 
      occupational category (Professional 
      Engineer, Engineering Technologist, 
      or Engineering Associate) and the 
      capacity to apply this knowledge 
      to issues and circumstances that 
      indicate practitioners in your 
      professional category's duties.`,
      alt: `Stage1 Competency Assessment`,
    },
    {
      image: "images/CDRServices/cpd.png",
      title: `CPD Statement Writing`,
      data: `CDRskillassessment ensures an 
      impeccable CPD report based on 
      the specific format described by 
      Engineers Australia in the MSA 
      booklet. With a high success record 
      of CDR approval from Engineers 
      Australia, CDRskillassessment 
      provides the best CPD Writing 
      Service for Engineers in Australia. `,
      alt: `CPD Statement Writing`,
    },
    {
      image: "images/CDRServices/resume.png",
      title: `Resume Writing`,
      data: `Engineers who wish to pursue an 
      engineering career in Australia 
      should write a CDR resume to 
      demonstrate skills, knowledge and 
      experience to Engineers Australia. 
      CDR resume is one of the most crucial 
      documents for engineers looking to 
      start a profession in Australia, as it 
      presents your skills in writing.`,
      alt: `CDR Reviewing`,
    },
    {
      image: "/images/CDRServices/search.png",
      title: ` Plagiarism Removal Services`,
      data: `Engineering applicants in Australia 
    write CDR without the help of a 
    plagiarism checking and 
    removing service provider and may 
    unintentionally utilise plagiarised 
    material and data. Engineers 
    Australia does not tolerate plagiarised 
    content in the CDR submitted.`,
      alt: ` Plagiarism Removal Services`,
    },
    {
      image: "images/CDRServices/star.png",
      title: `CDR Reviewing Service`,
      data: `Engineers turn up empty-handed 
    from Engineers Australia after 
    presenting their CDR report 
    without reviewing it. Experts 
    at CDRskillassessment provide 
    an experienced CDR Reviewing 
    service to avoid rejection from 
    Engineers Australia.`,
      alt: `CDR Reviewing Service`,
    },
    {
      image: "images/CDRServices/tick.png",
      title: `Stage 2 Competency Assessment`,
      data: `The Stage 2 Competency standards 
    are used as the basis of assessment 
    for registration on the National 
    Engineering Register (NER) 
    and Chartered membership 
    of Engineers Australia (CPEng).  `,
      alt: `Stage 2 Competency Assessment`,
    },
  ];
  return (
    <div>
      <Container className="p-5">
        <h2
          className="ps-5 pe-5 pt-md-5 ourCDRServicesTitle"
          style={{
            color: "#203546",
            fontFamily: "Century Gothic",
            fontWeight: "700",
            textAlign: "Center",
          }}
        >
          {" "}
          Our CDR Services
        </h2>
        <p
          style={{
            color: "#666666",
            fontFamily: "Asap",
            fontWeight: "400",
            textAlign: "Center",
          }}
          className="ourCDRServicesParagraph ps-5 pe-5 pb-md-5"
        >
          We provide you the Best CDR Writing Services and many other services
          including reviewing and tutoring services for the most valued prices.{" "}
        </p>
        <Row>
          {dataList.map((d,i) => (
            <Col key={i} md={4} className="px-4 py-3">
              <div className="img-fluid d-flex flex-column justify-content-center align-items-center">
                <img
                  src={d.image}
                  alt={d.alt}
                  style={{ height: "100px", objectFit: "contain" }}
                />
              </div>
              <h4
                style={{
                  color: "#017CC9",
                  fontFamily: "Asap",
                  fontWeight: "700",
                  textAlign: "Center",
                }}
                className="pt-4  ourCDRServicesTitle"
              >
                {" "}
                {d.title}
              </h4>
              <p
                className="px-md-5 ourCDRServicesParagraph"
                style={{
                  color: "#666666",
                  fontFamily: "Asap",
                  textAlign: "Center",
                }}
              >
                {d.data}{" "}
              </p>
                <div className='d-flex justify-content-center'>
                <Button onClick={()=>Chatra("openChat",true)}>Get Service</Button>

                </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OurServices;
