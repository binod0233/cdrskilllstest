import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";

const Structure = () => {
  return (
    <div style={{ background: "#E5E5E5" }}>
      <Container className="pt-5">
        <Headings title="What is the Structure of Career Episode Report writing?" />
        <div className='desktopScreenSteps'>
        <Row>
          <Col className="pt-md-5 px-md-5 px-3">
            <Headings title="1. Introduction" />
            <Paragraphs
              data="The introduction of a Career Episode report should be approximately 
              100 words. It should serve as an opening to a particular episode. It 
              should include basic information such as:  "
            />
            <ul
              className="mt-4"
              style={{
                listStyleType: "none",
                fontFamily: "Asap",
                color: "#5B5B5B",
              }}
            >
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>
                Chronology-Dates and duration of the episode
              </li>
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>
                Identify the educational institution/organisation where the
                experience was achieved
              </li>
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>
                The geographical location of your project(city,state, or nation)
                where you acquired experience
              </li>
            </ul>
          </Col>
          <Col className="px-md-5 ">
            <img
              src="/images/CareerEpisodeWriting/Introduction.png"
              alt="Introduction"
              className="img-fluid structureImage"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src="/images/CareerEpisodeWriting/Background.png"
              alt="why-chose"
              className="img-fluid mt-4 mt-md-0"
            />
          </Col>
          <Col className="mt-md-5">
            <div className="mt-4">
              <Headings title="2.	Background" />
              <Paragraphs
                data="The introduction should be between 200 and 500 words long. It 
                should establish the operational context of the work/study. Its 
                purpose is to give a solid context for your professional episode. 
                It should provide the following information in the Career Episode 
                report writing:"
              />
            </div>
            <ul
              className="mt-4"
              style={{
                listStyleType: "none",
                fontFamily: "Asap",
                color: "#5B5B5B",
              }}
            >
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>
                The nature of the engineering project that you completed.
              </li>
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>
                Goals of your project
              </li>
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>
                Chart of an organisational structure illustrating your position
                in the project&apos;s hierarchy during that Career Episode
              </li>
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>
                Statement of your responsibilities regarding the project at
                hand(provide an official duty statement where available)
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col className="pt-5 px-md-5 px-2">
            <Headings title="3.Personal Engineering Activity" />
            <Paragraphs
              data="This section of the Career Episode writing in Australia should 
              be between 500 and 1000 words in length. Personal Engineering 
              Activity is the primary body of your Career Episode Report. It 
              should detail your practical application of engineering ability 
              (i.e. you should start writing about your work as an engineer). 
              The following information should be included:"
            />
            <ul
              className="mt-4"
              style={{
                listStyleType: "none",
                fontFamily: "Asap",
                color: "#5B5B5B",
              }}
            >
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>
                Your specific role in the team
              </li>
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>{" "}
                How you put your knowledge to use.
              </li>
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>{" "}
                The engineering tasks that were assigned to you.
              </li>
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>{" "}
                How did you complete the task?
              </li>
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>
                How do you collaborate with other members of your team.
              </li>
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>{" "}
                Any specific technical challenges or problems you faced, and how
                you resolved them.
              </li>
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>{" "}
                You made a significant contribution or devised tactics,
                including any original or innovative design work.
              </li>
            </ul>
          </Col>
          <Col className="px-md-5 px-2">
            <img
              src="/images/CareerEpisodeWriting/Personal.png"
              alt="Introduction"
              className="img-fluid mt-4 mt-md-0"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src="/images/CareerEpisodeWriting/Summary.png"
              alt="why-chose"
              className="img-fluid mt-md-0 mt-4 structureImage"
              style={{ float: "right" }}
            />
          </Col>
          <Col className="mt-md-5">
            <div className="mt-5">
              <Headings title="4.	Summary" />
              <Paragraphs
                data="The summary should be between 50 and 100 words, is the final 
                section of your Career Episode Report (CER). It should be a summary 
                of the entire event and include the following details:"
              />
            </div>
            <ul
              className="mt-4"
              style={{
                listStyleType: "none",
                fontFamily: "Asap",
                color: "#5B5B5B",
              }}
            >
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>
                A summary of your project.
              </li>
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>{" "}
                Information on whether or not the project&apos;s goals/objectives
                were reached.
              </li>
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>{" "}
                Mention the praise if you got any for the project
              </li>
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>
                In the conclusion section, explain how your contribution to the
                project aided the effort.
              </li>
            </ul>
          </Col>
        </Row>          
        </div>
        <div className='mobileScreenSteps'>
        <Row>
        <Col xs={12} className="px-md-5 d-flex justify-content-center">
            <img
              src="/images/CareerEpisodeWriting/Introduction.png"
              alt="Introduction"
              className="img-fluid structureImage"
            />
          </Col>
          <Col xs={12} className="pt-md-5 px-md-5 px-3">
            <Headings title="1. Introduction" />
            <Paragraphs
              data="The introduction of a Career Episode report should be approximately 
              100 words. It should serve as an opening to a particular episode. It 
              should include basic information such as:  "
            />
            <ul
              className="mt-4"
              style={{
                listStyleType: "none",
                fontFamily: "Asap",
                color: "#5B5B5B",
              }}
            >
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>
                Chronology-Dates and duration of the episode
              </li>
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>
                Identify the educational institution/organisation where the
                experience was achieved
              </li>
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>
                The geographical location of your project(city,state, or nation)
                where you acquired experience
              </li>
            </ul>
          </Col>
         
        </Row>
        <Row>
          <Col xs={12} className='d-flex justify-content-center'>
            <img
              src="/images/CareerEpisodeWriting/Background.png"
              alt="why-chose"
              className="img-fluid mt-4 mt-md-0 structureImage"
            />
          </Col>
          <Col xs={12} className="mt-md-5">
            <div className="mt-4">
              <Headings title="2.	Background" />
              <Paragraphs
                data="The introduction should be between 200 and 500 words long. It 
                should establish the operational context of the work/study. Its 
                purpose is to give a solid context for your professional episode. 
                It should provide the following information in the Career Episode 
                report writing:"
              />
            </div>
            <ul
              className="mt-4"
              style={{
                listStyleType: "none",
                fontFamily: "Asap",
                color: "#5B5B5B",
              }}
            >
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>
                The nature of the engineering project that you completed.
              </li>
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>
                Goals of your project
              </li>
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>
                Chart of an organisational structure illustrating your position
                in the project's hierarchy during that Career Episode
              </li>
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>
                Statement of your responsibilities regarding the project at
                hand(provide an official duty statement where available)
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="pt-5">
        <Col xs={12} className="px-md-5 px-2 d-flex justify-content-center">
            <img
              src="/images/CareerEpisodeWriting/Personal.png"
              alt="Introduction"
              className="img-fluid mt-4 mt-md-0 structureImage"
            />
          </Col>
          <Col xs={12} className="pt-5 px-md-5 px-2">
            <Headings title="3.Personal Engineering Activity" />
            <Paragraphs
              data="This section of the Career Episode writing in Australia should 
              be between 500 and 1000 words in length. Personal Engineering 
              Activity is the primary body of your Career Episode Report. It 
              should detail your practical application of engineering ability 
              (i.e. you should start writing about your work as an engineer). 
              The following information should be included:"
            />
            <ul
              className="mt-4"
              style={{
                listStyleType: "none",
                fontFamily: "Asap",
                color: "#5B5B5B",
              }}
            >
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>
                Your specific role in the team
              </li>
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>{" "}
                How you put your knowledge to use.
              </li>
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>{" "}
                The engineering tasks that were assigned to you.
              </li>
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>{" "}
                How did you complete the task?
              </li>
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>
                How do you collaborate with other members of your team.
              </li>
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>{" "}
                Any specific technical challenges or problems you faced, and how
                you resolved them.
              </li>
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>{" "}
                You made a significant contribution or devised tactics,
                including any original or innovative design work.
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          
          
        <Col xs={12} className='d-flex justify-content-center'>
            <img
              src="/images/CareerEpisodeWriting/Summary.png"
              alt="why-chose"
              className="img-fluid mt-md-0 mt-4 structureImage"
              style={{ float: "right" }}
            />
          </Col>
          <Col xs={12} className="mt-md-5">
            <div className="mt-5">
              <Headings title="4.	Summary" />
              <Paragraphs
                data="The summary should be between 50 and 100 words, is the final 
                section of your Career Episode Report (CER). It should be a summary 
                of the entire event and include the following details:"
              />
            </div>
            <ul
              className="mt-4"
              style={{
                listStyleType: "none",
                fontFamily: "Asap",
                color: "#5B5B5B",
              }}
            >
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>
                A summary of your project.
              </li>
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>{" "}
                Information on whether or not the project&apos;s goals/objectives
                were reached.
              </li>
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>{" "}
                Mention the praise if you got any for the project
              </li>
              <li className="ourCDRServicesParagraph">
                {" "}
                <i
                  className="fa-solid fa-circle-check"
                  style={{
                    marginLeft: "-9px",
                    marginRight: "10px",
                    color: "#017CC9",
                  }}
                ></i>
                In the conclusion section, explain how your contribution to the
                project aided the effort.
              </li>
            </ul>
          </Col>
        </Row>     
        </div>
      </Container>
    </div>
  );
};

export default Structure;
