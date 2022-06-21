import React,{useState} from "react";
import { Accordion, Container, Row } from "react-bootstrap";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ListofFAQ = ({ listgroup }) => {
  const FAQSecondList=[ {
    title: "Do I need to pay upfront?",
    details:
      "Yes, payment should be made on an instalment basis, for more details do not hesitate to contact our customer support service.",
  },
  {
    title: "Do I talk to the writers assigned to my CDR writing?",
    details:
      "Yes, you can talk with them through email or webchat. No Other communication modes are available.",
  },
  {
    title: "How long is your CDRs service valid?",
    details:
      "It will be valid for no more than three years.",
  },
  {
    title: "Do you have any refund policy if I have to cancel the service?",
    details:
      "Sorry, there is no refund policy once you agree to pay for our services.",
  },
  {
    title: "Do I have to provide my Employment Letter for my CDR Report?",
    details:
      "Yes, an Employment letter is crucial for your CDR Report. It would be helpful if you have any relevant experience of one or more years.",
  },
  {
    title: "How do I get my Final Report?",
    details:
      "First, you will get a draft copy of your CDR Report for review and Approval. You will receive your final report after making the full payment.",
  },
  {
    title: "How can I confirm my order?",
    details:
      "Once you agree to grab our services, the initial payment is made, and there will not be any refund policy if you wish to cancel the services.",
  },
  {
    title: "How can I Review my CDR Report?",
    details:
      "It would be helpful if you obtained professional help for Reviewing your CDR Report to avoid harsh Rejection from Engineers Australia.",
  },
  {
    title: "Why Engineers Australia Reject CDR Report?",
    details:
      "Engineers Australia has specific guidelines for CDR Report writing; however, if you write your CDR report ignoring EA guidelines, your CDR Report will get rejected.",
  },]
  const [listGroup, setListGroup] = useState(listgroup);

  const toggleList = (e) => {
    e.preventDefault();
    if (listGroup.length === FAQSecondList.length) setListGroup(listgroup);
    else setListGroup(FAQSecondList);
  };
  return (
   
    <div style={{ backgroundColor: "#017CC90D" }}>
      <Container className="p-5">
        <Row>
          <p
            style={{
              color: "#666666",
              fontFamily: "Asap",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Here is the list of frequently asked questions(FAQ) regarding CDR
            report services{" "}
          </p>
          <Accordion defaultActiveKey="0">
            {listGroup?.map((l, index) => (
              <Accordion.Item className="my-4" key={index} eventKey={index}>
                <Accordion.Header>
                  <div className="d-flex">
                    
                    <div
                      style={{
                        color: "#000",
                        fontFamily: "Arial",
                        fontSize: "19px",
                        fontWeight: "700",
                        textAlign: "left",
                      }}
                    >
                      {l.title}
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <p style={{ color: "#000" }}>{l.details}</p>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
          <Row className="d-flex justify-content-center align-items-center text-center my-3  pagination">
          <div className="d-flex justify-content-center align-items-center text-center">
            Show others{" "}
            <div className="mx-2 arrowContainer" onClick={(e) => toggleList(e)}>
              <ArrowBackIcon />
            </div>
            1/2
            <div>
              <div
                className="mx-2 arrowContainer"
                onClick={(e) => toggleList(e)}
              >
                <ArrowForwardIcon />
              </div>
            </div>
          </div>
        </Row>
        </Row>
      </Container>
    </div>
  );
};

export default ListofFAQ;
