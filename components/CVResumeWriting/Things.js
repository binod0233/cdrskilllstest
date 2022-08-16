import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";
import parse from "html-react-parser";

const Things = ({ data }) => {
  const { things, things_data } = data;
  return (
    <div>
      <Container className="pt-5">
        <Headings title="Things to keep in mind while writing a CDR resume for Engineers Australia." />
        {things_data &&
          things_data.map((item, index) => (
            <>
              {index % 2 === 0 ? (
                <Row className="desktopScreenSteps" key={item.id}>
                  <Col className="pt-md-5 px-md-5 mx-md-5 my-md-5">
                    <Headings title={item?.title} />
                    <Paragraphs
                      data={item?.paragraph && parse(item.paragraph)}
                    />
                  </Col>
                  <Col className="px-md-5">
                    <img
                      src={item?.image?.data?.attributes?.url}
                      alt="Information"
                      className="img-fluid"
                    />
                  </Col>
                </Row>
              ) : (
                <Row className="desktopScreenSteps" key={item.id}>
                  <Col>
                    <img
                      src={item?.image?.data?.attributes?.url}
                      alt="appropriate"
                      className="img-fluid"
                    />
                  </Col>
                  <Col className="mt-md-5 p-md-5">
                    <div className="mt-md-4 px-md-5 mx-md-5">
                      <Headings title={item?.title} />
                      <Paragraphs
                        data={item?.paragraph && parse(item.paragraph)}
                      />
                    </div>
                  </Col>
                </Row>
              )}
            </>
          ))}
        {/* <Row className='desktopScreenSteps'>
          <Col className="pt-md-5 px-md-5 mx-md-5 my-md-5">
            <Headings title="1.Personal Information" />
            <Paragraphs
              data="Name, contact information, address, email address, skill 
    details, capabilities, and achievements to date are included 
    in personal information on resume writing for Engineers 
    Australia. While writing a CDR Resume personal data should 
    be presented clearly and appropriately to receive a good 
    assessment from Engineers Australia.  "
            />
          </Col>
          <Col className="px-md-5">
            <img
              src="/images/CVResumeWriting/personal-information.png"
              alt="Information"
              className="img-fluid"
            />
          </Col>
        </Row>
        <Row className='desktopScreenSteps'>
          <Col>
            <img
              src="/images/CVResumeWriting/appropriate.png"
              alt="appropriate"
              className="img-fluid"
            />
          </Col>
          <Col className="mt-md-5 p-md-5">
            <div className="mt-md-4 px-md-5 mx-md-5">
              <Headings title="2. Appropriate use of keywords" />
              <Paragraphs
                data="Include the keywords that identify you and your profession 
      and job function while writing your CDR resume for Engineers 
      Australia."
              />
            </div>
          </Col>
        </Row>
        <Row className="pt-5 desktopScreenSteps">
          <Col className="pt-md-5 px-md-5 m-md-5">
            <Headings title="3. Use of Australian English Language" />
            <Paragraphs
              data="All detailed information included in the Resume 
    Writing for CDR Report should be in the Australian 
    language, as per Engineer Australia."
            />
          </Col>
          <Col className="px-md-5">
            <img
              src="/images/CVResumeWriting/use-australian.png"
              alt="use-australian"
              className="img-fluid"
            />
          </Col>
        </Row>
        <Row className='desktopScreenSteps'>
          <Col className="ml-md-5">
            <img
              src="/images/CVResumeWriting/adademic-achievements.png"
              alt="academic-achievement"
              className="img-fluid "
            />
          </Col>
          <Col className="m-md-5">
            <div className="m-md-5 mt-5">
              <Headings title="4. Academic achievements " />
              <Paragraphs
                data="Educational details and information are 
      essential in expressing ambitions and 
      interests in the engineering field. Along 
      with academic achievements, list any 
      courses and extracurricular activities 
      participated to further knowledge."
              />
            </div>
          </Col>
        </Row>
        <Row className="p-md-2 m-md-2 desktopScreenSteps">
          <Col className="p-md-5 m-md-5 mt-5">
            <Headings
              title="5. 	All professional careers should be 
    mentioned."
            />
            <Paragraphs
              data="Mentioning every professional achievement 
    detail in an exact format while writing a CDR 
    resume will create a good impression on 
    Engineers Australia.
    
     "
            />
          </Col>
          <Col className="px-5">
            <img
              src="/images/CVResumeWriting/professional-careers.png"
              alt="Professional-career"
              className="img-fluid"
            />
          </Col>
        </Row>
        <Row className='desktopScreenSteps'>
          <Col>
            <img
              src="/images/CVResumeWriting/Information-on-project.png"
              alt="information-on-project"
              className="img-fluid"
              style={{ marginLeft: "75px" }}
            />
          </Col>
          <Col className="m-md-5 p-md-2">
            <div className="m-md-4 p-md-2 mt-5">
              <Headings title="6. Information on Project list" />
              <Paragraphs
                data="It would be advantageous to describe all 
      project's work in detail so that assessors 
      could properly evaluate abilities. If you 
      are inactive in your work, you must 
      provide a good cause for your absence."
              />
            </div>
          </Col>
        </Row>
        <Row className="pt-md-5 desktopScreenSteps">
          <Col className="pt-5 px-md-5 m-md-5">
            <Headings
              title="7. Do not mention irrelevant 
    information"
            />
            <Paragraphs
              data="Avoid unnecessary details and only state 
    what Engineers Australia is looking for and 
    what is needed. Submission of irrelevant 
    information will result in rejection"
            />
          </Col>
          <Col className="px-md-5">
            <img
              src="/images/CVResumeWriting/not-mention.png"
              alt="Do not mention"
              className="image-fluid"
            />
          </Col>
        </Row>
        <Row className='desktopScreenSteps'>
          <Col>
            <img
              src="/images/CVResumeWriting/make-it-pro.png"
              alt="why-chose"
              className="img-fluid"
              style={{ marginLeft: "60px" }}
            />
          </Col>
          <Col className="mt-5">
            <div className="mt-5">
              <Headings title="8. Make it Professional" />
              <Paragraphs
                data="Resume should be written in proper format;
      if your CDR Resume is in the proper setup, 
      you will have the best chance of acceptance 
      from Engineers Australia. We have already 
      written a high-Quality CDR Resume. Our 
      Professional writers from an engineering 
      background with years of experience in 
      CDR writing make CDRskillassessment the 
      best resume writing service provider in 
      Australia.  "
              />
            </div>
          </Col>
        </Row>
        <Row className='desktopScreenSteps'>
          <Col className="pt-5 px-md-5 m-md-5">
            <Headings
              title="9. Take help from Professional CDR 
    Resume writing services"
            />
            <Paragraphs
              data="Writing a perfect CDR resume plays a crucial role 
    in getting approval from Engineers Australia. With 
    help of professional writers at CDRskillassessment,
    you can develop a flawless resume to present along 
    with CDR to Engineers Australia.   "
            />
          </Col>
          <Col className="px-md-5">
            <img
              src="/images/CVResumeWriting/take-help.png"
              alt="Take-a-help"
              className="img-fluid"
            />
          </Col>
        </Row>
        <Row className='desktopScreenSteps'>
          <Col>
            <img
              src="/images/CVResumeWriting/additional-details.png"
              alt="why-chose"
              className="img-fluid"
              style={{ marginLeft: "60px" }}
            />
          </Col>
          <Col className="m-md-5 pt-5">
            <div className="m-md-5">
              <Headings title="10. Additional Details" />
              <Paragraphs
                data="Along with all of this information, don't 
      forget to include your resident status, 
      language ability, computer abilities, 
      community work, hobbies and interests, 
      and professional organisations."
              />
            </div>
          </Col>
        </Row> */}
        <div className="mobileScreenSteps">
          {things_data &&
            things_data.map((item, index) => (
              <Row className="" key={item.id}>
                <Col xs={12} className="px-md-5 d-flex justify-content-center">
                  <img
                    src={item?.image?.data?.attributes?.url}
                    alt="Information"
                    className="img-fluid"
                    style={{ height: "200px" }}
                  />
                </Col>
                <Col xs={12} className="pt-md-5 px-md-5 mx-md-5 my-md-5">
                  <Headings title={item?.title} />
                  <Paragraphs data={item?.paragraph && parse(item.paragraph)} />
                </Col>
              </Row>
            ))}
          {/* <Row className="">
            <Col xs={12} className="px-md-5 d-flex justify-content-center">
              <img
                src="/images/CVResumeWriting/personal-information.png"
                alt="Information"
                className="img-fluid"
                style={{ height: "200px" }}
              />
            </Col>
            <Col xs={12} className="pt-md-5 px-md-5 mx-md-5 my-md-5">
              <Headings title="1.Personal Information" />
              <Paragraphs
                data="Name, contact information, address, email address, skill 
    details, capabilities, and achievements to date are included 
    in personal information on resume writing for Engineers 
    Australia. While writing a CDR Resume personal data should 
    be presented clearly and appropriately to receive a good 
    assessment from Engineers Australia.  "
              />
            </Col>
          </Row>
          <Row className="">
            <Col xs={12} className="d-flex justify-content-center">
              <img
                src="/images/CVResumeWriting/appropriate.png"
                alt="appropriate"
                className="img-fluid"
                style={{ height: "200px" }}
              />
            </Col>
            <Col xs={12} className="mt-md-5 p-md-5">
              <div className="mt-md-4 px-md-5 mx-md-5">
                <Headings title="2. Appropriate use of keywords" />
                <Paragraphs
                  data="Include the keywords that identify you and your profession 
      and job function while writing your CDR resume for Engineers 
      Australia."
                />
              </div>
            </Col>
          </Row>
          <Row className="pt-5 ">
            <Col xs={12} className="px-md-5 d-flex justify-content-center">
              <img
                src="/images/CVResumeWriting/use-australian.png"
                alt="use-australian"
                className="img-fluid"
                style={{ height: "200px" }}
              />
            </Col>
            <Col xs={12} className="pt-md-5 px-md-5 m-md-5">
              <Headings title="3. Use of Australian English Language" />
              <Paragraphs
                data="All detailed information included in the Resume 
    Writing for CDR Report should be in the Australian 
    language, as per Engineer Australia."
              />
            </Col>
          </Row>
          <Row className="">
            <Col xs={12} className="ml-md-5 d-flex justify-content-center">
              <img
                src="/images/CVResumeWriting/adademic-achievements.png"
                alt="academic-achievement"
                className="img-fluid "
                style={{ height: "200px" }}
              />
            </Col>
            <Col xs={12} className="m-md-5">
              <div className="m-md-5 mt-5">
                <Headings title="4. Academic achievements " />
                <Paragraphs
                  data="Educational details and information are 
      essential in expressing ambitions and 
      interests in the engineering field. Along 
      with academic achievements, list any 
      courses and extracurricular activities 
      participated to further knowledge."
                />
              </div>
            </Col>
          </Row>
          <Row className="p-md-2 m-md-2 ">
            <Col xs={12} className="px-5 d-flex justify-content-center">
              <img
                src="/images/CVResumeWriting/professional-careers.png"
                alt="Professional-career"
                className="img-fluid"
                style={{ height: "200px" }}
              />
            </Col>
            <Col xs={12} className="p-md-5 m-md-5 mt-5">
              <Headings
                title="5. 	All professional careers should be 
    mentioned."
              />
              <Paragraphs
                data="Mentioning every professional achievement 
    detail in an exact format while writing a CDR 
    resume will create a good impression on 
    Engineers Australia.
    
     "
              />
            </Col>
          </Row>
          <Row className="">
            <Col xs={12} className="d-flex justify-content-center">
              <img
                src="/images/CVResumeWriting/Information-on-project.png"
                alt="information-on-project"
                className="img-fluid"
                style={{ height: "200px" }}
              />
            </Col>
            <Col xs={12} className="m-md-5 p-md-2">
              <div className="m-md-4 p-md-2 mt-5">
                <Headings title="6. Information on Project list" />
                <Paragraphs
                  data="It would be advantageous to describe all 
      project's work in detail so that assessors 
      could properly evaluate abilities. If you 
      are inactive in your work, you must 
      provide a good cause for your absence."
                />
              </div>
            </Col>
          </Row>
          <Row className="pt-md-5 ">
            <Col xs={12} className="px-md-5 d-flex justify-content-center">
              <img
                src="/images/CVResumeWriting/not-mention.png"
                alt="Do not mention"
                className="image-fluid"
                style={{ height: "200px" }}
              />
            </Col>
            <Col xs={12} className="pt-5 px-md-5 m-md-5">
              <Headings
                title="7. Do not mention irrelevant 
    information"
              />
              <Paragraphs
                data="Avoid unnecessary details and only state 
    what Engineers Australia is looking for and 
    what is needed. Submission of irrelevant 
    information will result in rejection"
              />
            </Col>
          </Row>
          <Row className="">
            <Col xs={12} className="d-flex justify-content-center">
              <img
                src="/images/CVResumeWriting/make-it-pro.png"
                alt="why-chose"
                className="img-fluid"
                style={{ height: "200px" }}
              />
            </Col>
            <Col xs={12} className="mt-5">
              <div className="mt-5">
                <Headings title="8. Make it Professional" />
                <Paragraphs
                  data="Resume should be written in proper format;
      if your CDR Resume is in the proper setup, 
      you will have the best chance of acceptance 
      from Engineers Australia. We have already 
      written a high-Quality CDR Resume. Our 
      Professional writers from an engineering 
      background with years of experience in 
      CDR writing make CDRskillassessment the 
      best resume writing service provider in 
      Australia.  "
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="px-md-5 d-flex justify-content-center">
              <img
                src="/images/CVResumeWriting/take-help.png"
                alt="Take-a-help"
                className="img-fluid"
                style={{ height: "200px" }}
              />
            </Col>
            <Col xs={12} className="pt-5 px-md-5 m-md-5">
              <Headings
                title="9. Take help from Professional CDR 
    Resume writing services"
              />
              <Paragraphs
                data="Writing a perfect CDR resume plays a crucial role 
    in getting approval from Engineers Australia. With 
    help of professional writers at CDRskillassessment,
    you can develop a flawless resume to present along 
    with CDR to Engineers Australia.   "
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="d-flex justify-content-center">
              <img
                src="/images/CVResumeWriting/additional-details.png"
                alt="why-chose"
                className="img-fluid"
                style={{ height: "200px" }}
              />
            </Col>
            <Col xs={12} className="m-md-5 pt-5">
              <div className="m-md-5">
                <Headings title="10. Additional Details" />
                <Paragraphs
                  data="Along with all of this information, don't 
      forget to include your resident status, 
      language ability, computer abilities, 
      community work, hobbies and interests, 
      and professional organisations."
                />
              </div>
            </Col>
          </Row> */}
        </div>
      </Container>
    </div>
  );
};

export default Things;
