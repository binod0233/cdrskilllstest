import Chatra from "@chatra/chatra";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import parse from "html-react-parser";
import OurServices from "./OurServices";
const Offer = ({ offers }) => {
  const dataList = [
    {
      image: "images/CDRServices/image-2.png",
      title: `Quality CDR Report`,
      details: `Because a CDR report represents your 
    competencies and technical capabilities 
    on a paper, writing incorrect information
    would be a huge mistake and could result 
    in immediate rejection. We have a team 
    of professional, skilled writers at your 
    disposal to provide you with a genuine 
    report free of plagiarism.`,
      alt: `Quality CDR Report`,
    },
    {
      image: "images/CDRServices/image.png",
      title: `Licensed Writers`,
      details: `We hire professional, experienced 
    writers from various engineering 
    disciplines who are well aware of 
    the individual applicant requirement. 
    They have been in this for years with 
    a 100 % report approval rate to date. 
    You can even try out our free samples 
    for reference that is readily available 
    for download upon your request.`,
      alt: `Licensed Writers`,
    },
    {
      image: "images/CDRServices/image-1.png",
      title: `Economical Rates`,
      details: `We provide complete guidance, 
    review, and prepare the CDR report, 
    RPL report, and KA02 report until you 
    receive your approval letter. We always 
    strive for perfection in everything we 
    create. Get in touch with us for our 
    professional writing services for 
    engineering and ICT applicants 
    at a reasonable price.`,
      alt: `Economical Rates`,
    },
  ];
  // console.log(offers.offer);
  return (
    <div>
      <Container>
        <h2
          className="p-md-5 ourCDRServicesTitle"
          style={{
            color: "#203546",
            fontFamily: "Century Gothic",
            fontWeight: "700",
            textAlign: "Center",
          }}
        >
          {" "}
          {offers.title}
        </h2>
        <Row>
          {offers.offer.map((d) => (
            <Col md={4} className="px-4 py-2" key={d.id}>
              <div
                className="d-flex flex-column justify-content-center align-items-center pt-5"
                style={{ backgroundColor: "#D5EFFF" }}
              >
                <img
                  className="whatToOfferImage"
                  style={{ height: "200px", width: "200px" }}
                  src={d.image?.data?.attributes?.url}
                  alt={d.alt}
                />
                <h4
                  style={{
                    color: "#382046",
                    fontFamily: "Asap",
                    fontWeight: "700",
                    textAlign: "Center",
                  }}
                  className="pt-4 ourCDRServicesTitle"
                >
                  {d.title}
                </h4>
                <p
                  className="px-5 py-2 ourCDRServicesParagraph"
                  style={{
                    color: "#666666",
                    fontFamily: "Asap",
                    textAlign: "Center",
                  }}
                >
                  {parse(d.paragraph)}
                </p>
              </div>
            </Col>
          ))}
        </Row>

        <Row>
          <Col md={7} className="mt-5 px-5 pt-2">
            <Headings title={offers.approval?.title} />
            <Paragraphs data={parse(offers.approval.paragraph)} />
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
              onClick={() => Chatra("openChat", true)}
            >
              Get Free Consultation
            </button>
          </Col>
          <Col md={5} className="mt-5 px-4">
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
                {offers.services?.title}
              </h3>
              {parse(offers.services.paragraph)}
              {/* <ul
                style={{
                  color: "#203546",
                  fontFamily: "Montserrat",
                  listStyleType: "none",
                }}
              >
                <li>
                  <i
                    className="fa-solid fa-circle-check"
                    style={{
                      marginLeft: "-9px",
                      marginRight: "10px",
                      color: "#017CC9",
                    }}
                  ></i>
                  CDR Writing
                </li>
                <li>
                  <i
                    className="fa-solid fa-circle-check"
                    style={{
                      marginLeft: "-9px",
                      marginRight: "10px",
                      color: "#017CC9",
                    }}
                  ></i>
                  Career Episode Writing
                </li>
                <li>
                  <i
                    className="fa-solid fa-circle-check"
                    style={{
                      marginLeft: "-9px",
                      marginRight: "10px",
                      color: "#017CC9",
                    }}
                  ></i>
                  Summary Episode Writing
                </li>
                <li>
                  <i
                    className="fa-solid fa-circle-check"
                    style={{
                      marginLeft: "-9px",
                      marginRight: "10px",
                      color: "#017CC9",
                    }}
                  ></i>
                  Stage 1 Competency Assessment
                </li>
                <li>
                  <i
                    className="fa-solid fa-circle-check"
                    style={{
                      marginLeft: "-9px",
                      marginRight: "10px",
                      color: "#017CC9",
                    }}
                  ></i>
                  Stage 2 Competency Assessment
                </li>
                <li>
                  <i
                    className="fa-solid fa-circle-check"
                    style={{
                      marginLeft: "-9px",
                      marginRight: "10px",
                      color: "#017CC9",
                    }}
                  ></i>
                  CDR Reviewing
                </li>
                <li>
                  <i
                    className="fa-solid fa-circle-check"
                    style={{
                      marginLeft: "-9px",
                      marginRight: "10px",
                      color: "#017CC9",
                    }}
                  ></i>
                  CPD Writing
                </li>
                <li>
                  <i
                    className="fa-solid fa-circle-check"
                    style={{
                      marginLeft: "-9px",
                      marginRight: "10px",
                      color: "#017CC9",
                    }}
                  ></i>
                  CDR Plagiarism Checking and Removal
                </li>
                <li>
                  <i
                    className="fa-solid fa-circle-check"
                    style={{
                      marginLeft: "-9px",
                      marginRight: "10px",
                      color: "#017CC9",
                    }}
                  ></i>
                  CV Resume Writing
                </li>
              </ul> */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Offer;
