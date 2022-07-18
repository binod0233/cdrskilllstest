import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import PhoneInput from "react-phone-number-input";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { parse } from "html-react-parser";

const Contactus = ({ data }) => {
  const form = useRef();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submitFormhandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_swmc1ha",
        "template_u77tatf",
        form.current,
        "hWJYhr4QPZh-TxVMc"
      )
      .then(
        (result) => {
          alert("Email sent.");
          setFullName("");
          setEmail("");
          setPhone("");
          setMessage("");
        },
        (error) => {
          alert("Sorry something went wrong.");
        }
      );
  };

  return (
    <div>
      <Container>
        <h1
          className="ps-md-5 pt-5 mt-5 mt-md-0 pe-md-5"
          style={{
            color: "#203546",
            fontFamily: "Century Gothic",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          {data?.title}
        </h1>
        <p
          className="ps-md-5 pe-md-5 pb-md-5 pb-2"
          style={{
            color: "#666666",
            fontFamily: "Asap",
            textAlign: "center",
          }}
        >
          {data === ""
            ? parse(data?.paragraph)
            : " Our Expert team member prompt to help you withing 24 hours when we receive the request from customer."}
        </p>
        <div>
          <Row>
            <Col md={6} xs={12}>
              <div
                className="contactUsBanner"
                style={{
                  padding: "10px",
                  margin: "0 60px",
                  boxShadow: "1px 1px 20px rgba(0, 0, 0, 0.25)",
                  borderRadius: "6px",
                  background: "white",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src="images/ContactUs/contact-us.png"
                  alt="contact us"
                  className="img-fluid"
                  style={{ height: "520px" }}
                />
              </div>
              <div
                style={{ fontSize: "18px" }}
                className="d-flex justify-content-between mt-4 px-3"
              >
                <div
                  className="text-center"
                  style={{ textDecoration: "none", color: "#203546" }}
                >
                  <LocationOnIcon />
                  <br />
                  sydney
                </div>
                <div className="text-center">
                  <a
                    style={{ textDecoration: "none", color: "#203546" }}
                    href="mailto:info@cdrskillassessment.com"
                  >
                    <MailOutlineIcon />
                    <br />
                    info@cdrxpert.com
                  </a>
                </div>
                <div className="text-center">
                  <a
                    style={{ textDecoration: "none", color: "#203546" }}
                    href="https://api.whatsapp.com/send?phone=+61481615807"
                  >
                    <WhatsAppIcon />
                    <br />
                    +61 481 615 807
                  </a>
                </div>
              </div>
              <div
                className="mt-4 py-3 text-center"
                style={{
                  color: "white",
                  background: "#017CC9",
                  borderRadius: "7px",
                  fontSize: "18px",
                }}
              >
                Social Media &nbsp;&nbsp;{" "}
                <a
                  href="https://www.facebook.com/CDRSkill-Assessment-
          114392794578547"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {" "}
                  <FacebookIcon />
                </a>
                <a
                  href="https://twitter.com/CdrSkill"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {" "}
                  <TwitterIcon />
                </a>
                <a
                  href="https://www.facebook.com/CDRSkill-Assessment-114392794578547"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {" "}
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.linkedin.com/in/cdr-skill-assessment-883648238/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {" "}
                  <LinkedInIcon />
                </a>
              </div>
            </Col>

            <Col>
              <Form
                ref={form}
                onSubmit={submitFormhandler}
                style={{ boxShadow: "3px 3px 20px rgba(0, 0, 0, 0.25)" }}
                className="bg-white p-5 my-3 mt-md-0"
              >
                <Form.Group
                  className="mb-3"
                  controlId="fullName"
                  style={{ display: "none" }}
                >
                  <Form.Control
                    placeholder="Site Name"
                    value="Contact Us"
                    readOnly
                    className="inputField"
                    name="subject"
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="fullName">
                  <Form.Label style={{ fontWeight: "500", color: "#203546" }}>
                    Your Name
                  </Form.Label>
                  <Form.Control
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="inputField"
                    name="fullName"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="email">
                  <Form.Label style={{ fontWeight: "500", color: "#203546" }}>
                    Email
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    value={email}
                    className="inputField"
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                  />
                </Form.Group>

                <Row className="mb-4">
                  <Form.Group controlId="contactNumber">
                    <Form.Label style={{ fontWeight: "500", color: "#203546" }}>
                      Phone
                    </Form.Label>
                    <PhoneInput
                      className="inputField"
                      placeholder="Enter phone number"
                      value={phone}
                      onChange={setPhone}
                      name="phone"
                    />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-5" controlId="message">
                  <Form.Label style={{ fontWeight: "500", color: "#203546" }}>
                    Message
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={8}
                    placeholder="Your message"
                    value={message}
                    className="inputField"
                    onChange={(e) => setMessage(e.target.value)}
                    name="message"
                  />
                </Form.Group>
                <Row className="d-flex align-items-center justify-content-center">
                  <Button
                    className="formSubmitButton"
                    variant="primary"
                    type="submit"
                  >
                    Submit
                  </Button>
                </Row>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Contactus;
