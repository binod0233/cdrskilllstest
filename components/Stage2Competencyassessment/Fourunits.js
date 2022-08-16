import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";
import parse from "html-react-parser";
const Fourunits = ({ data }) => {
  const { show, showdata, content4 } = data;
  return (
    <Container>
      <Headings title={show?.title} />
      <Paragraphs data={show?.paragraph && parse(show?.paragraph)} />

      <Row className="py-4">
        {showdata &&
          showdata.map((item, index) => {
            return (
              <Col
                md={3}
                xs={12}
                className="d-flex flex-row justify-content-center align-items-center my-2 my-md-0"
                key={item.id}
              >
                <div
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "55%",
                    backgroundColor: "#017CC9",
                  }}
                >
                  <img
                    style={{
                      objectFit: "contain",
                      height: "60%",
                      width: "60%",
                      margin: "18px 0 0 22px",
                    }}
                    src={item?.image?.data?.attributes?.url}
                    alt="licensed-professional-final-1"
                    className="img-fluid"
                  ></img>
                </div>
                <div
                  style={{
                    marginTop: "5px",
                    fontFamily: "Asap",
                    fontWeight: "700",
                    fontSize: "18px",
                    marginLeft: "10px",
                  }}
                  className="ourCDRServicesParagraph"
                >
                  {item?.title}
                </div>
              </Col>
            );
          })}
        {/* <Col
          md={3}
          xs={12}
          className="d-flex flex-row justify-content-center align-items-center my-2 my-md-0"
        >
          <div
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "55%",
              backgroundColor: "#017CC9",
            }}
          >
            <img
              style={{
                objectFit: "contain",
                height: "60%",
                width: "60%",
                margin: "18px 0 0 22px",
              }}
              src="/images/Stage2CompetencyAssessment/unit1.png"
              alt="licensed-professional-final-1"
              className="img-fluid"
            ></img>
          </div>
          <div
            style={{
              marginTop: "5px",
              fontFamily: "Asap",
              fontWeight: "700",
              fontSize: "18px",
              marginLeft: "10px",
            }}
            className="ourCDRServicesParagraph"
          >
            Personal
            <br />
            Commitment
          </div>
        </Col>
        <Col
          md={3}
          xs={12}
          className="d-flex flex-row justify-content-center align-items-center my-2 my-md-0"
        >
          <div
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "55%",
              backgroundColor: "#017CC9",
            }}
          >
            <img
              style={{
                objectFit: "contain",
                height: "60%",
                width: "60%",
                margin: "18px 0 0 22px",
              }}
              src="/images/Stage2CompetencyAssessment/unit2.png"
              alt="licensed-professional-final-1"
              className="img-fluid"
            ></img>
          </div>
          <div
            style={{
              marginTop: "5px",
              fontFamily: "Asap",
              fontWeight: "700",
              fontSize: "18px",
              marginLeft: "10px",
            }}
            className="ourCDRServicesParagraph"
          >
            Obligation to
            <br /> the Community
          </div>
        </Col>
        <Col
          md={3}
          xs={12}
          className="d-flex flex-row justify-content-center align-items-center my-2 my-md-0"
        >
          <div
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "55%",
              backgroundColor: "#017CC9",
            }}
          >
            <img
              style={{
                objectFit: "contain",
                height: "60%",
                width: "60%",
                margin: "18px 0 0 22px",
              }}
              src="/images/Stage2CompetencyAssessment/unit3.png"
              alt="licensed-professional-final-1"
              className="img-fluid"
            ></img>
          </div>
          <div
            style={{
              marginTop: "5px",
              fontFamily: "Asap",
              fontWeight: "700",
              fontSize: "18px",
              marginLeft: "10px",
            }}
            className="ourCDRServicesParagraph"
          >
            Value in
            <br />
            the Worksplace
          </div>
        </Col>
        <Col
          md={3}
          xs={12}
          className="d-flex flex-row justify-content-center align-items-center my-2 my-md-0"
        >
          <div
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "55%",
              backgroundColor: "#017CC9",
            }}
          >
            <img
              style={{
                objectFit: "contain",
                height: "60%",
                width: "60%",
                margin: "18px 0 0 22px",
              }}
              src="/images/Stage2CompetencyAssessment/unit4.png"
              alt="licensed-professional-final-1"
              className="img-fluid"
            ></img>
          </div>
          <div
            style={{
              marginTop: "5px",
              fontFamily: "Asap",
              fontWeight: "700",
              fontSize: "18px",
              marginLeft: "10px",
            }}
            className="ourCDRServicesParagraph"
          >
            Technical
            <br /> Proficiency
          </div>
        </Col> */}
      </Row>
      <Paragraphs
        data="Each unit includes competency and achievement indicators. The accomplishment indicators provided in this guideline serve as a 
reference to the management and leadership duties that are likely to be evaluated in order to demonstrate such competence."
      />
      <Row className="py-5">
        <img
          src={show?.image?.data?.attributes?.url}
          alt="Stage 2 Competency Assessment ensures Chartered Membership of EA"
        />
      </Row>
      <Headings title={content4[0]?.title} />
      <Paragraphs
        data={content4[0]?.paragraph && parse(content4[0].paragraph)}
      />
    </Container>
  );
};

export default Fourunits;
