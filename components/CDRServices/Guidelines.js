import React from "react";
import { Container } from "react-bootstrap";
import Headings from "../Headings";
import Paragraphs from "../Paragraphs";

const Guidelines = () => {
  return (
    <div>
      <Container className="p-md-5 px-5">
        <Headings title="What are CDR Report Guidelines?" />
        <Paragraphs
          data="Engineers who are preparing for migration to Australia need to be assessed by Engineers Australia through Competency Demonstration 
Report. It is very important to make your CDR report perfect to get approved by Engineers Australia. The main purpose of CDR Assessment 
is to know:"
        />

        <ul
          className="mt-md-4 mt-2"
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
      </Container>
    </div>
  );
};

export default Guidelines;
