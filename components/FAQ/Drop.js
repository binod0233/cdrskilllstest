import React, { useRef, useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";

const Drop = () => {
  const form = useRef();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
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
          setMessage("");
        },
        (error) => {
          alert("Sorry something went wrong.");
        }
      );
  };
  return (
    <div>
      <Container className="p-5 d-flex flex-column justify-content-center align-items-center">
        <h2
          style={{
            color: "#203546",
            fontFamily: "Century Gothic",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          We reply your questions at our Earliest{" "}
        </h2>
        <p
          className="pt-3 mt-4"
          style={{
            color: "#666666",
            fontFamily: "Asap",
            fontWeight: "400",
            fontSize: "18px",
            textAlign: "center",
          }}
        >
          Still many Questions are there to be Answered. If you have any
          Question, you can drop down in the table
        </p>

        <Col className="mt-5" md={6} xs={12}>
          <Form
            ref={form}
            onSubmit={submitFormhandler}
            className="bg-white p-4 formContainer"
          >
            <div className="d-flex flex-column justify-content-center align-items-center">
              <h2>Drop your Questions</h2>
            </div>
            <Form.Group className="mb-3" controlId="subject" style={{display:"none"}}>
              <Form.Control
                placeholder="Site Name"
                value="FAQ"
                readOnly
                className="inputField"
                name="subject"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="fullName">
              <Form.Control
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="inputField"
                name="fullName"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Control
                type="text"
                placeholder="Email"
                value={email}
                className="inputField"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="message">
              <Form.Control
                as="textarea"
                rows={6}
                placeholder="Your queries"
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
                Submit Queries
              </Button>
            </Row>
          </Form>
        </Col>
      </Container>
    </div>
  );
};

export default Drop;
