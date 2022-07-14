import Chatra from "@chatra/chatra";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import parse from "html-react-parser";
const Steps = ({ stepData }) => {
  const { steps, step } = stepData;
  // console.log("stepData", stepData);

  const newData = steps.data.map((step, index) => (
    <div key={step.id}>
      {step.id === 1 && (
        <>
          <Row className="pt-5 desktopScreenSteps">
            <Col xs={5} md={5}>
              <img
                style={{ float: "right" }}
                src={
                  step
                    ? step.attributes.image.data.attributes.url
                    : "/images/Landing/Submit-your-query-1.png"
                }
                alt="Submit-your-query-1"
                className="img-fluid"
              />
            </Col>
            <Col
              xs={2}
              md={2}
              className="d-flex justify-content-center align-items-center"
            >
              <div
                className="d-flex justify-content-center align-items-center stepsInACircle"
                style={{
                  height: "120px",
                  width: "120px",
                  borderRadius: "55%",
                  background: "#017CC9",
                  fontFamily: "Century Gothic",
                  fontWeight: "700",
                  fontSize: "35px",
                  color: "#fff",
                }}
              >
                Step <br />
                &nbsp; 01
              </div>
            </Col>
            <Col xs={5} md={5} className="pt-5">
              <h4
                className="stepsTitle"
                style={{
                  color: "#017CC9",
                  fontFamily: "Cenutry Gothic",
                  fontWeight: "700",
                  fontSize: "28px",
                }}
              >
                {step.attributes.title}
              </h4>
              <p
                className="stepsDetails"
                style={{
                  color: "#747474",
                  fontFamily: "Asap",
                  fontWeight: "400",
                  fontSize: "23px",
                }}
              >
                {step
                  ? parse(step.attributes.paragraph)
                  : `First of all, you need to fill up the submission form or directly
              interact with our agent view chat by providing all the necessary
              information and details for the CDR Report Writing.`}
              </p>
              <div
                href="/"
                style={{
                  color: "#017CC9",
                  fontFamily: "Century Gothic",
                  fontWeight: "700",
                  textDecoration: "none",
                }}
                onClick={() => Chatra("openChat", true)}
              >
                Get Started <ArrowForwardIcon />
              </div>
            </Col>
          </Row>
          <div className="mobileScreenSteps">
            <Row className="pt-5">
              <Col xs={6}>
                <img
                  style={{ float: "right" }}
                  src={
                    step
                      ? step.attributes.image.data.attributes.url
                      : "/images/Landing/Submit-your-query-1.png"
                  }
                  alt="Submit-your-query-1"
                  className="img-fluid"
                />
              </Col>
              <Col
                xs={6}
                className="d-flex justify-content-center align-items-center"
              >
                <div
                  className="d-flex justify-content-center align-items-center "
                  style={{
                    height: "120px",
                    width: "120px",
                    borderRadius: "55%",
                    background: "#017CC9",
                    fontFamily: "Century Gothic",
                    fontWeight: "700",
                    fontSize: "35px",
                    color: "#fff",
                  }}
                >
                  Step <br />
                  &nbsp; 01
                </div>
              </Col>
              <Col xs={12} className="pt-5">
                <h4
                  className="stepsTitle"
                  style={{
                    color: "#017CC9",
                    fontFamily: "Cenutry Gothic",
                    fontWeight: "700",
                    fontSize: "28px",
                  }}
                >
                  {step.attributes.title}
                </h4>
                <p
                  className="stepsDetails"
                  style={{
                    color: "#747474",
                    fontFamily: "Asap",
                    fontWeight: "400",
                    fontSize: "23px",
                  }}
                >
                  {step
                    ? parse(step.attributes.paragraph)
                    : `First of all, you need to fill up the submission form or directly
              interact with our agent view chat by providing all the necessary
              information and details for the CDR Report Writing.`}
                </p>
                <div
                  href="/"
                  style={{
                    color: "#017CC9",
                    fontFamily: "Century Gothic",
                    fontWeight: "700",
                    textDecoration: "none",
                  }}
                  onClick={() => Chatra("openChat", true)}
                >
                  Get Started <ArrowForwardIcon />
                </div>
              </Col>
            </Row>
          </div>
        </>
      )}
      {step.id === 2 && (
        <>
          <Row className="desktopScreenSteps">
            <Col xs={5} md={5} className="pt-md-5 pt-4">
              <h4
                className="stepsTitle"
                style={{
                  color: "#017CC9",
                  fontFamily: "Cenutry Gothic",
                  fontWeight: "700",
                  fontSize: "28px",
                }}
              >
                {step.attributes.title}
              </h4>
              <p
                className="stepsDetails"
                style={{
                  color: "#747474",
                  fontFamily: "Asap",
                  fontWeight: "400",
                  fontSize: "23px",
                }}
              >
                {step
                  ? parse(step.attributes.paragraph)
                  : ` As you submit all the
              necessary information and details for CDR report writing, our
              expert writers will be discussing your project with you and then
              complete the payment process of the order as mentioned on the
              pricing page.`}
              </p>
              <div
                href="/"
                style={{
                  color: "#017CC9",
                  fontFamily: "Century Gothic",
                  fontWeight: "700",
                  textDecoration: "none",
                }}
                onClick={() => Chatra("openChat", true)}
              >
                Get Started <ArrowForwardIcon />
              </div>
            </Col>

            <Col
              xs={2}
              md={2}
              className="d-flex justify-content-center align-items-center"
            >
              <div
                className="d-flex justify-content-center align-items-center stepsInACircle"
                style={{
                  height: "120px",
                  width: "120px",
                  borderRadius: "55%",
                  background: "#017CC9",
                  fontFamily: "Century Gothic",
                  fontWeight: "700",
                  fontSize: "35px",
                  color: "#fff",
                }}
              >
                Step <br />
                &nbsp; 02
              </div>
            </Col>
            <Col xs={5} md={5}>
              <img
                style={{ float: "float" }}
                src={
                  step
                    ? step.attributes.image.data.attributes.url
                    : "/images/Landing/partial-payment.png"
                }
                alt="Submit-your-query-1"
                className="img-fluid"
              />
            </Col>
          </Row>
          <div className="mobileScreenSteps">
            <Row>
              <Col
                xs={6}
                className="d-flex justify-content-center align-items-center"
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    height: "120px",
                    width: "120px",
                    borderRadius: "55%",
                    background: "#017CC9",
                    fontFamily: "Century Gothic",
                    fontWeight: "700",
                    fontSize: "35px",
                    color: "#fff",
                  }}
                >
                  Step <br />
                  &nbsp; 02
                </div>
              </Col>
              <Col xs={6}>
                <img
                  style={{ float: "float" }}
                  src={
                    step
                      ? step.attributes.image.data.attributes.url
                      : "/images/Landing/partial-payment.png"
                  }
                  alt="Submit-your-query-1"
                  className="img-fluid"
                />
              </Col>
              <Col xs={12} className="pt-md-5 pt-4">
                <h4
                  className="stepsTitle"
                  style={{
                    color: "#017CC9",
                    fontFamily: "Cenutry Gothic",
                    fontWeight: "700",
                    fontSize: "28px",
                  }}
                >
                  {step.attributes.title}
                </h4>
                <p
                  className="stepsDetails"
                  style={{
                    color: "#747474",
                    fontFamily: "Asap",
                    fontWeight: "400",
                    fontSize: "23px",
                  }}
                >
                  {step
                    ? parse(step.attributes.paragraph)
                    : ` As you submit all the
              necessary information and details for CDR report writing, our
              expert writers will be discussing your project with you and then
              complete the payment process of the order as mentioned on the
              pricing page.`}
                </p>
                <div
                  href="/"
                  style={{
                    color: "#017CC9",
                    fontFamily: "Century Gothic",
                    fontWeight: "700",
                    textDecoration: "none",
                  }}
                  onClick={() => Chatra("openChat", true)}
                >
                  Get Started <ArrowForwardIcon />
                </div>
              </Col>
            </Row>
          </div>
        </>
      )}
      {step.id === 3 && (
        <>
          <Row className="desktopScreenSteps">
            <Col xs={5} md={5}>
              <img
                style={{ float: "left" }}
                src={
                  step
                    ? step.attributes.image.data.attributes.url
                    : "/images/Landing/draft-copy.png"
                }
                alt="draft-copy"
                className="img-fluid"
              />
            </Col>
            <Col
              md={2}
              xs={2}
              className="d-flex justify-content-center align-items-center"
            >
              <div
                className="d-flex justify-content-center align-items-center stepsInACircle"
                style={{
                  height: "120px",
                  width: "120px",
                  borderRadius: "55%",
                  background: "#017CC9",
                  fontFamily: "Century Gothic",
                  fontWeight: "700",
                  fontSize: "35px",
                  color: "#fff",
                }}
              >
                Step <br />
                &nbsp; 03
              </div>
            </Col>
            <Col md={5} xs={5} className="pt-md-5 mt-5">
              <h4
                className="stepsTitle"
                style={{
                  color: "#017CC9",
                  fontFamily: "Cenutry Gothic",
                  fontWeight: "700",
                  fontSize: "28px",
                }}
              >
                {step.attributes.title}
              </h4>
              <p
                className="stepsDetails"
                style={{
                  color: "#747474",
                  fontFamily: "Asap",
                  fontWeight: "400",
                  fontSize: "23px",
                }}
              >
                {step
                  ? parse(step.attributes.paragraph)
                  : `        As soon as your payment is confirmed, we will send you a Draft
              Copy of the CDR report writing to verify and check all the details
              carefully and pinpoint the changes you want in the report.
         `}{" "}
              </p>
              <div
                href="/"
                style={{
                  color: "#017CC9",
                  fontFamily: "Century Gothic",
                  fontWeight: "700",
                  textDecoration: "none",
                }}
                onClick={() => Chatra("openChat", true)}
              >
                Get Started <ArrowForwardIcon />
              </div>
            </Col>
          </Row>
          <div className="mobileScreenSteps">
            <Row>
              <Col xs={6}>
                <img
                  style={{ float: "left" }}
                  src={
                    step
                      ? step.attributes.image.data.attributes.url
                      : "/images/Landing/draft-copy.png"
                  }
                  alt="draft-copy"
                  className="img-fluid"
                />
              </Col>
              <Col
                xs={6}
                className="d-flex justify-content-center align-items-center"
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    height: "120px",
                    width: "120px",
                    borderRadius: "55%",
                    background: "#017CC9",
                    fontFamily: "Century Gothic",
                    fontWeight: "700",
                    fontSize: "35px",
                    color: "#fff",
                  }}
                >
                  Step <br />
                  &nbsp; 03
                </div>
              </Col>
              <Col xs={12} className="pt-md-5 mt-5">
                <h4
                  className="stepsTitle"
                  style={{
                    color: "#017CC9",
                    fontFamily: "Cenutry Gothic",
                    fontWeight: "700",
                    fontSize: "28px",
                  }}
                >
                  {step.attributes.title}
                </h4>
                <p
                  className="stepsDetails"
                  style={{
                    color: "#747474",
                    fontFamily: "Asap",
                    fontWeight: "400",
                    fontSize: "23px",
                  }}
                >
                  {step
                    ? parse(step.attributes.paragraph)
                    : `        As soon as your payment is confirmed, we will send you a Draft
              Copy of the CDR report writing to verify and check all the details
              carefully and pinpoint the changes you want in the report.
         `}{" "}
                </p>
                <div
                  href="/"
                  style={{
                    color: "#017CC9",
                    fontFamily: "Century Gothic",
                    fontWeight: "700",
                    textDecoration: "none",
                  }}
                  onClick={() => Chatra("openChat", true)}
                >
                  Get Started <ArrowForwardIcon />
                </div>
              </Col>
            </Row>
          </div>
        </>
      )}
      {step.id === 4 && (
        <>
          <Row className="desktopScreenSteps">
            <Col xs={5} md={5} className="pt-5">
              <h4
                className="stepsTitle"
                style={{
                  color: "#017CC9",
                  fontFamily: "Cenutry Gothic",
                  fontWeight: "700",
                  fontSize: "28px",
                }}
              >
                {step.attributes.title}
              </h4>
              <p
                className="stepsDetails"
                style={{
                  color: "#747474",
                  fontFamily: "Asap",
                  fontWeight: "400",
                  fontSize: "23px",
                }}
              >
                {step
                  ? parse(step.attributes.paragraph)
                  : `      Go through your top-quality CDR report before your deadline at the
              best prices. Also, you can ask for amendments if required.
      `}{" "}
              </p>
              <div
                href="/"
                style={{
                  color: "#017CC9",
                  fontFamily: "Century Gothic",
                  fontWeight: "700",
                  textDecoration: "none",
                }}
                onClick={() => Chatra("openChat", true)}
              >
                Get Started <ArrowForwardIcon />
              </div>
            </Col>

            <Col
              md={2}
              xs={2}
              className="d-flex justify-content-center align-items-center"
            >
              <div
                className="d-flex justify-content-center align-items-center stepsInACircle"
                style={{
                  height: "120px",
                  width: "120px",
                  borderRadius: "55%",
                  background: "#017CC9",
                  fontFamily: "Century Gothic",
                  fontWeight: "700",
                  fontSize: "35px",
                  color: "#fff",
                }}
              >
                Step <br />
                &nbsp; 04
              </div>
            </Col>
            <Col xs={5} md={5}>
              <img
                style={{ float: "float" }}
                src={
                  step
                    ? step.attributes.image.data.attributes.url
                    : "/images/Landing/handover-final.png"
                }
                alt="Submit-your-query-1"
                className="img-fluid "
              />
            </Col>
          </Row>
          <div className="mobileScreenSteps">
            <Row>
              <Col
                xs={6}
                className="d-flex justify-content-center align-items-center"
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    height: "120px",
                    width: "120px",
                    borderRadius: "55%",
                    background: "#017CC9",
                    fontFamily: "Century Gothic",
                    fontWeight: "700",
                    fontSize: "35px",
                    color: "#fff",
                  }}
                >
                  Step <br />
                  &nbsp; 04
                </div>
              </Col>
              <Col xs={6}>
                <img
                  style={{ float: "float" }}
                  src={
                    step
                      ? step.attributes.image.data.attributes.url
                      : "/images/Landing/handover-final.png"
                  }
                  alt="Submit-your-query-1"
                  className="img-fluid "
                />
              </Col>
              <Col xs={12} className="pt-5">
                <h4
                  className="stepsTitle"
                  style={{
                    color: "#017CC9",
                    fontFamily: "Cenutry Gothic",
                    fontWeight: "700",
                    fontSize: "28px",
                  }}
                >
                  {step.attributes.title}
                </h4>
                <p
                  className="stepsDetails"
                  style={{
                    color: "#747474",
                    fontFamily: "Asap",
                    fontWeight: "400",
                    fontSize: "23px",
                  }}
                >
                  {step
                    ? parse(step.attributes.paragraph)
                    : `      Go through your top-quality CDR report before your deadline at the
              best prices. Also, you can ask for amendments if required.
      `}{" "}
                </p>
                <div
                  href="/"
                  style={{
                    color: "#017CC9",
                    fontFamily: "Century Gothic",
                    fontWeight: "700",
                    textDecoration: "none",
                  }}
                  onClick={() => Chatra("openChat", true)}
                >
                  Get Started <ArrowForwardIcon />
                </div>
              </Col>
            </Row>
          </div>
        </>
      )}
    </div>
  ));

  const oldData = (
    <>
      <Row className="pt-5 desktopScreenSteps">
        <Col xs={5} md={5}>
          <img
            style={{ float: "right" }}
            src="/images/Landing/Submit-your-query-1.png"
            alt="Submit-your-query-1"
            className="img-fluid"
          />
        </Col>
        <Col
          xs={2}
          md={2}
          className="d-flex justify-content-center align-items-center"
        >
          <div
            className="d-flex justify-content-center align-items-center stepsInACircle"
            style={{
              height: "120px",
              width: "120px",
              borderRadius: "55%",
              background: "#017CC9",
              fontFamily: "Century Gothic",
              fontWeight: "700",
              fontSize: "35px",
              color: "#fff",
            }}
          >
            Step <br />
            &nbsp; 01
          </div>
        </Col>
        <Col xs={5} md={5} className="pt-5">
          <h4
            className="stepsTitle"
            style={{
              color: "#017CC9",
              fontFamily: "Cenutry Gothic",
              fontWeight: "700",
              fontSize: "28px",
            }}
          >
            Let us Know
          </h4>
          <p
            className="stepsDetails"
            style={{
              color: "#747474",
              fontFamily: "Asap",
              fontWeight: "400",
              fontSize: "23px",
            }}
          >
            First of all, you need to fill up the submission form or directly
            interact with our agent view chat by providing all the necessary
            information and details for the CDR Report Writing.
          </p>
          <div
            href="/"
            style={{
              color: "#017CC9",
              fontFamily: "Century Gothic",
              fontWeight: "700",
              textDecoration: "none",
            }}
            onClick={() => Chatra("openChat", true)}
          >
            Get Started <ArrowForwardIcon />
          </div>
        </Col>
      </Row>
      <Row className="desktopScreenSteps">
        <Col xs={5} md={5} className="pt-md-5 pt-4">
          <h4
            className="stepsTitle"
            style={{
              color: "#017CC9",
              fontFamily: "Cenutry Gothic",
              fontWeight: "700",
              fontSize: "28px",
            }}
          >
            Pay online
          </h4>
          <p
            className="stepsDetails"
            style={{
              color: "#747474",
              fontFamily: "Asap",
              fontWeight: "400",
              fontSize: "23px",
            }}
          >
            As you submit all the necessary information and details for CDR
            report writing, our expert writers will be discussing your project
            with you and then complete the payment process of the order as
            mentioned on the pricing page.
          </p>
          <div
            href="/"
            style={{
              color: "#017CC9",
              fontFamily: "Century Gothic",
              fontWeight: "700",
              textDecoration: "none",
            }}
            onClick={() => Chatra("openChat", true)}
          >
            Get Started <ArrowForwardIcon />
          </div>
        </Col>

        <Col
          xs={2}
          md={2}
          className="d-flex justify-content-center align-items-center"
        >
          <div
            className="d-flex justify-content-center align-items-center stepsInACircle"
            style={{
              height: "120px",
              width: "120px",
              borderRadius: "55%",
              background: "#017CC9",
              fontFamily: "Century Gothic",
              fontWeight: "700",
              fontSize: "35px",
              color: "#fff",
            }}
          >
            Step <br />
            &nbsp; 02
          </div>
        </Col>
        <Col xs={5} md={5}>
          <img
            style={{ float: "float" }}
            src="/images/Landing/partial-payment.png"
            alt="Submit-your-query-1"
            className="img-fluid"
          />
        </Col>
      </Row>

      <Row className="desktopScreenSteps">
        <Col xs={5} md={5}>
          <img
            style={{ float: "left" }}
            src="/images/Landing/draft-copy.png"
            alt="draft-copy"
            className="img-fluid"
          />
        </Col>
        <Col
          md={2}
          xs={2}
          className="d-flex justify-content-center align-items-center"
        >
          <div
            className="d-flex justify-content-center align-items-center stepsInACircle"
            style={{
              height: "120px",
              width: "120px",
              borderRadius: "55%",
              background: "#017CC9",
              fontFamily: "Century Gothic",
              fontWeight: "700",
              fontSize: "35px",
              color: "#fff",
            }}
          >
            Step <br />
            &nbsp; 03
          </div>
        </Col>
        <Col md={5} xs={5} className="pt-md-5 mt-5">
          <h4
            className="stepsTitle"
            style={{
              color: "#017CC9",
              fontFamily: "Cenutry Gothic",
              fontWeight: "700",
              fontSize: "28px",
            }}
          >
            Get a Draft copy
          </h4>
          <p
            className="stepsDetails"
            style={{
              color: "#747474",
              fontFamily: "Asap",
              fontWeight: "400",
              fontSize: "23px",
            }}
          >
            As soon as your payment is confirmed, we will send you a Draft Copy
            of the CDR report writing to verify and check all the details
            carefully and pinpoint the changes you want in the report.
          </p>
          <div
            href="/"
            style={{
              color: "#017CC9",
              fontFamily: "Century Gothic",
              fontWeight: "700",
              textDecoration: "none",
            }}
            onClick={() => Chatra("openChat", true)}
          >
            Get Started <ArrowForwardIcon />
          </div>
        </Col>
      </Row>
      <Row className="desktopScreenSteps">
        <Col xs={5} md={5} className="pt-5">
          <h4
            className="stepsTitle"
            style={{
              color: "#017CC9",
              fontFamily: "Cenutry Gothic",
              fontWeight: "700",
              fontSize: "28px",
            }}
          >
            Get your Quality CDR Report
          </h4>
          <p
            className="stepsDetails"
            style={{
              color: "#747474",
              fontFamily: "Asap",
              fontWeight: "400",
              fontSize: "23px",
            }}
          >
            Go through your top-quality CDR report before your deadline at the
            best prices. Also, you can ask for amendments if required.
          </p>
          <div
            href="/"
            style={{
              color: "#017CC9",
              fontFamily: "Century Gothic",
              fontWeight: "700",
              textDecoration: "none",
            }}
            onClick={() => Chatra("openChat", true)}
          >
            Get Started <ArrowForwardIcon />
          </div>
        </Col>

        <Col
          md={2}
          xs={2}
          className="d-flex justify-content-center align-items-center"
        >
          <div
            className="d-flex justify-content-center align-items-center stepsInACircle"
            style={{
              height: "120px",
              width: "120px",
              borderRadius: "55%",
              background: "#017CC9",
              fontFamily: "Century Gothic",
              fontWeight: "700",
              fontSize: "35px",
              color: "#fff",
            }}
          >
            Step <br />
            &nbsp; 04
          </div>
        </Col>
        <Col xs={5} md={5}>
          <img
            style={{ float: "float" }}
            src="/images/Landing/handover-final.png"
            alt="Submit-your-query-1"
            className="img-fluid "
          />
        </Col>
      </Row>
    </>
  );
  return (
    <div style={{ background: "#E5E5E5" }}>
      <Container className="pt-5">
        <Headings
          title={
            step
              ? step.title
              : "Here's how you can get a flawless CDR report for Engineers Australia."
          }
        />
        <Paragraphs
          data={
            step
              ? parse(step.paragraph)
              : `We ensure high-quality CDR reports with original and 
              plagiarism-free content. Experts writers at CDRskillassessment follow the guidelines
               and format mentioned in Engineers Australia's MSA booklet while writing the CDR report. Our professional Experts from an engineering background devote a considerable effort to preparing the CDR report. Get a CDR report to ensure a positive assessment from Engineers Australia in a few simple steps.
         `
          }
        />
        {steps ? newData : oldData}
      </Container>
    </div>
  );
};

export default Steps;
