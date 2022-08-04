import React from "react";
import { Avatar, Box, Stack, Rating } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import parse from "html-react-parser";

const Item = styled("div")(({ theme }) => ({
  textAlign: "center",
  borderRadius: "20px",
  color: "#F8F9FC",
  fontFamily: "Asap",
  fontWeight: "700",
  textAlign: "center",
}));

const TEstimonials = ({ testimonialRes }) => {
  const datatList = [
    {
      title: "Brijesh Mehta",
      country: "Bangladesh",
      image: "images/Testimonials/image 76.png",
      id: "1",
      data: `The service was great. It does the job 
    and I am happy for what I paid.`,
      alt: "testimonials",
    },
    {
      title: "Harsh",
      country: "Sri Lanka",
      image: "images/Testimonials/image 77.png",
      id: "2",
      data: `Very helpful service, the counselor was 
      very cooperative and provided me with 
      good CDR report. `,
      alt: "testimonials",
    },
    {
      title: "Prashil Shrestha",
      country: "Nepal",
      image: "images/Testimonials/image 78.png",
      id: "3",
      data: `Great service. Would recommend to 
      Nepalese engineers who are wanting 
      to migrating to Australia.`,
      alt: "testimonials",
    },
    {
      title: "Natasha",
      country: "Sri Lanka",
      image: "images/Testimonials/image 18.png",
      id: "4",
      data: `I get the best CDR Report in just a couple 
      of weeks and the quality is really good.
      Thank you cdrskillassessment, you just 
      saved my time.
      `,
      alt: "testimonials",
    },
    {
      title: "Rifat",
      country: "Saudi Arab",
      image: "images/Testimonials/image 71.png",
      id: "5",
      data: `Cdrskillassessment.com” is one of the 
      best CDR writing company. I have booked 
      one CDR here and I must say I received 
      the best result. . `,
      alt: "testimonials",
    },
    {
      title: "Prashil Shrestha",
      country: "Nepal",
      image: "images/Testimonials/image 79.png",
      id: "6",
      data: `Great service. Would recommend to 
      Nepalese engineers who are wanting 
      to migrating to Australia.`,
      alt: "testimonials",
    },
    {
      title: "Shah",
      country: "Pakistan",
      image: "images/Testimonials/image 80.png",
      id: "7",
      data: `Excellent services! The delivery was fast 
      and on time. I am happy with what I got 
      and also their service feels affordable 
      and genuine.
      `,
      alt: "testimonials",
    },
    {
      title: "Aakarsh Pandey",
      country: "India",
      image: "images/Testimonials/image 67.png",
      id: "8",
      data: `Very good service. Almost all engineering 
      disciplines can rely on cdrskillassessment 
      for the best reports. So afordable. I am 
      satisfied with the result!.`,
      alt: "testimonials",
    },
    {
      title: "Taaraz Zaidi",
      country: "Pakistan",
      image: " images/Testimonials/image 67.png",
      id: "10",
      data: `Their service is too good and satisfactory. 
      The CDR report was timely provided and 
      at a good cost. I like their amazing 
      service. Thanks for the good report.`,
      alt: "testimonials",
    },
    {
      title: "Faizan Hussain",
      country: "UAE",
      image: "images/Testimonials/image 82.png",
      id: "11",
      data: `I enjoyed the professional format of CDR 
      report. Timely delivered with the best 
      format available. Saved me from a long 
      hassle. Thankyou cdrskillassessment for 
      your genuine service.`,
      alt: "testimonials",
    },
    {
      title: "Sagar Rahat",
      country: "Bangladesh",
      image: "images/Testimonials/image 83.png",
      id: "12",
      data: `I really like Cdrskillassessment.com. They 
      helped me so much with the report and 
      saved the number of hours spent on 
      writing reports. The format was standard 
      and clear to understand.`,
      alt: "testimonials",
    },
    {
      title: "Haque",
      country: "Saudi Arab",
      image: "images/Testimonials/image 84.png",
      id: "13",
      data: `Cdrskillassessment.com have a highly 
      professional team and they provide 
      you with the complete guidance for 
      Competency Assessment for EA Skill 
      Assessment. I like their work and service.`,
      alt: "testimonials",
    },
    {
      title: "Haque",
      country: "Saudi Arab",
      image: "images/Testimonials/image 85.png",
      id: "14",
      data: `Cdrskillassessment.com have a highly 
      professional team and they provide 
      you with the complete guidance for 
      Competency Assessment for EA Skill 
      Assessment. I like their work and service.`,
      alt: "testimonials",
    },
    {
      title: "Salma Manik",
      country: "Bangladesh",
      image: "images/Testimonials/image 86.png",
      id: "15",
      data: `Cdrskillassessment saved my day with 
      an amazing report. They were so helpful 
      and guided me with the guidelines 
      skilled visa category for immigration 
      Australia. Thankyou for making my day!`,
      alt: "testimonials",
    },
    {
      title: "Oliver",
      country: "New Zealand",
      image: "images/Testimonials/image 75.png",
      id: "16",
      data: `Cdrskillassessment has been really 
      helpful to give me a brilliant CDR 
      report. The service was quick and 
      affordable and it helped me in getting 
      my CDR accepted by Engineer 
      Australia. `,
      alt: "testimonials",
    },
    {
      title: "Ayaan Zuberi",
      country: "Pakistan",
      image: "images/Testimonials/image 87.png",
      id: "17",
      data: `I think cdrskillassessment is the best 
      website offering all kind of CDR writing 
      help. Really easy to understand and 
      price was much better than other service 
      provider. Saved a lot of time on my reports. 
      Thankyou! `,
      alt: "testimonials",
    },
    {
      title: "Rowan",
      country: "Australia",
      image: "images/Testimonials/image 57.png",
      id: "18",
      data: `Simplified my reports with an amazing 
      professional guidance and best help. The 
      service was really great and affordable. I 
      loved their reports. This website surely 
      provided me with the finest report for 
      immigration to Australia.`,
      alt: "testimonials",
    },
    {
      title: "Saanvi Parajuli",
      country: "Nepal",
      image: "images/Testimonials/image 88.png",
      id: "19",
      data: `Contacting them was very easy. 
      They offered an original and well-
      formatted report and it was simply 
      a great experience. Cdrskillassessment 
      is a great place to look for if you want 
      a CDR report for affordable cost. `,
      alt: "testimonials",
    },
    {
      title: "Voilet",
      country: "Singapore",
      image: "images/Testimonials/image 89.png",
      id: "20",
      data: `Cdrskillassessment.com was really 
      helpful and gave the report that I 
      loved. Their team was very supportive 
      and helped me complete my report on 
      time and at reasonable price. Great 
      website and great team, keep it up!`,
      alt: "testimonials",
    },
    {
      title: "Rehan",
      country: "Srilanka",
      image: "images/Testimonials/image 90.png",
      id: "21",
      data: `I chose cdrskillassessment for writing 
      my cdr reports. These people have the 
      best writers with the genuine knowledge 
      about Australia immigration. They 
      provided me with a pretty good report 
      and I am satisfied with the report.`,
      alt: "testimonials",
    },
    {
      title: "Ivaan Nair",
      country: "India",
      image: "images/Testimonials/image 95.png",
      id: "22",
      data: `Seems like I found the perfect site for 
      CDR report writing. The quality of the 
      report was very good and simple to 
      understand. I am happy with their service 
      and recommend to everyone who is 
      looking for good CDR writers in India.`,
      alt: "testimonials",
    },
    {
      title: "Sameer Chand Thakuri",
      country: "Nepal",
      image: "images/Testimonials/image 92.png",
      id: "23",
      data: `Their site is very easy to explore and it 
      was simple to find and pull the sample 
      reports. They would guide you through 
      everything you want to know about 
      Engineer Australia and also the CDR 
      report. I love their work and helping 
      nature.`,
      alt: "testimonials",
    },
    {
      title: "Jayden",
      country: "Singapore",
      image: "images/Testimonials/image 96.png",
      id: "24",
      data: `You need expert writers who can 
      provide you all the writing documents 
      and well explained format of CDR. You 
      can go for cdrskillassessment.com who 
      can offer a great service and support 
      and have high approval rate for your 
      cdr report.`,
      alt: "testimonials",
    },
    {
      title: "Shaon",
      country: "Dubai",
      image: "images/Testimonials/image 97.png",
      id: "25",
      data: `They have expert writers who will 
      provide you with the detail format 
      of all the career episodes and all the 
      writing documents. You just need to 
      trust them and not worry about 
      anything. Great service recommended 
      to every engineers out there.`,
      alt: "testimonials",
    },
    {
      title: "Nathaniel ",
      country: "Australia",
      image: "images/Testimonials/image 98.png",
      id: "26",
      data: `I am glad that I chosecdrskillassessment. 
      com. I am very satisfied with their work. 
      Their content is 100% plagiarism free and 
      they helped me to prepare three career 
      episodes report within short period of 
      time. Thanks to the friendly and helpful 
      team of cdrskillassessment.com`,
      alt: "testimonials",
    },
    {
      title: "Joy",
      country: "Dubai",
      image: "images/Testimonials/image 103.png",
      id: "27",
      data: `As a busy person having a very little spare 
      time, I was having trouble writing my own 
      CDR report. Well, cdrskillassessment.com 
      has been a great site that helped me 
      create an impressive CDR report. Their 
      service was great their team was very 
      helpful and friendly. I loved them overall. 
      Thankyou!`,
      alt: "testimonials",
    },
    {
      title: "Naomi Nair",
      country: "UAE",
      image: "images/Testimonials/image 104.png",
      id: "28",
      data: `Cdrskillassessment offers the highest 
      quality of CDR reports for those who 
      have already tried their hand at the 
      report. They have professional writers 
      who review all three sections i.e., the 
      CPD, career episodes, and summary 
      statement. I am happy with their service 
      and believe you will be too.`,
      alt: "testimonials",
    },
    {
      title: "Praveena Koli",
      country: "India",
      image: "images/Testimonials/image 91.png",
      id: "29",
      data: `I think cdrskillassessment CDR 
      writing services are so good. The 
      ideas and visions of the career episodes 
      were clearly described and elaborated. 
      Theirservice felt quicker, reliable and 
      affordable than most of other CDR 
      writing websites. Thankyou for your 
      great service and friendly experience! `,
      alt: "testimonials",
    },
    {
      title: "Yasmeen Ahmed",
      country: "UAE",
      image: "images/Testimonials/image 91.png",
      id: "30",
      data: `As a civil engineer I required a professional 
      format of CDR report to migrate in 
      Australia. This is when I came across 
      cdrskillassessment.com. Heard a lot about 
      their service and requested them to create
      my CDR report. The report was really good 
      and i am satisfied with the work. Hoping 
      for the positive response from EA.`,
      alt: "testimonials",
    },
    {
      title: "August",
      country: "Australia",
      image: "images/Testimonials/image 99.png",
      id: "31",
      data: `I received an impressive fully formatted, 
      and error-free CDR report from them. 
      The writer was well-aware with the latest 
      changes and rules of engineers Australia 
      which further helped in preparing my 
      CDR. The overall experience with them 
      was really good and I am hoping for a 
      positive response from Engineers Australia.`,
      alt: "testimonials",
    },
    {
      title: "Mary",
      country: "New Zealand",
      image: "images/Testimonials/image 105.png",
      id: "32",
      data: `I was really impressed with the services 
      provided by cdrskillassessment. They 
      responded me quickly and explained 
      me the complete process of CDR report 
      format accepted by Engineers Australia. 
      I got my report just in a few weeks and 
      it was amazing. Thankyou 
      cdrskillassessment.com for your great 
      service.`,
      alt: "testimonials",
    },
    {
      title: "Amelia",
      country: "New Zealand",
      image: "images/Testimonials/image 106.png",
      id: "33",
      data: `I was looking forward for a good CDR 
      writing website when I came across 
      cdrskillassessment. The interaction was 
      quick and easy and they send me the 
      report within short time. Their writing style 
      was really great and I found the cost to be 
      affordable and reasonable. If you are 
      looking for a great CDR writing service, go 
      for cdrskillassessment without a second 
      thought.`,
      alt: "testimonials",
    },
    {
      title: "William",
      country: "Singapore",
      image: "images/Testimonials/image 100.png",
      id: "34",
      data: `If you are 100% convinced about your CDR 
      writing skills, you possibly don’t need any 
      other writer to get your CDR reviewed. 
      However, in case of doubt you can take 
      a professional help through a CDR report 
      provider. One great help I got was from 
      Cdrskillassessment.com. They help you 
      in reviewing your documents for EA and 
      get you with the best result. Their overall 
      service is great so you can simply take a 
      help from them!`,
      alt: "testimonials",
    },
    {
      title: "Karmakar",
      country: "Saudi Arab",
      image: "images/Testimonials/image 101.png",
      id: "35",
      data: `Writing a CDR requires a lot of effort 
      and practice. With this you need a lot of 
      knowledge for the positive assessment of 
      report. I choose cdrskillassessment.com 
      who I learned have a team of expert 
      writers with years of experience in this 
      field. They helped me with error free and 
      unique CDR report which I am very happy 
      with. If you are in the same dilemma like I 
      was before, don’t hesitate and go for 
      cdrskillassessment.com. Their service is 
      cost-effective and quick.`,
      alt: "testimonials",
    },
    {
      title: "Hasan",
      country: "Dubai",
      image: "images/Testimonials/image 102.png",
      id: "36",
      data: `Writing a CDR report is very difficult task, 
      and the process of getting a positive 
      assessment by Engineers Australia (EA) is 
      quite difficult and rigorous. You need to 
      follow all the rules and regulations. For 
      this you can go for some external help. 
      Cdrskillassessment.com is a great website 
      that can offer help for engineers in 
      Australia and students all over the world. 
      You can choose them as they are flexible 
      and can give you a well-formatted report 
      within short time. I believe their support 
      can increase the chances of positive 
      assesment of your report because they did 
      mine!`,
      alt: "testimonials",
    },
  ];
  const { hero, testimonial_data } = testimonialRes;

  return (
    <div>
      <Container className="p-5 ">
        <Typography
          variant="h4"
          my={2}
          style={{
            color: "#203546",
            fontFamily: "Century Gothic",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          {hero?.title}
        </Typography>
        <p
          style={{
            color: "#666",
            fontFamily: "Asap",
            fontWeight: "400",
            textAlign: "center",
            paddingTop: "20px",
            height: "26px",
            left: "calc(50% - 1457px/2 + 25.5px)",
            top: "390px",
          }}
          className="pb-5"
        >
          {hero && parse(hero.paragraph)}
        </p>

        <Row className="pt-5 mt-2">
          {testimonial_data?.data.map((d, i) => {
            {
              /* var data = d.data.split(" ").length; */
            }

            return (
              <Col key={d.id} md={4} className="my-5">
                <Box
                  mx={1}
                  sx={{
                    boxShadow: "4px 4px 4px 6px rgba(0,0,0,0.25)",
                    borderRadius: "50px",
                    backgroundColor: "#F2F2F2",
                    height: "100%",
                  }}
                >
                  <Stack direction="row">
                    <Item
                      sx={{
                        width: "249px",
                        height: "142px",
                        marginLeft: "-18px",
                        marginTop: "-18px",
                        backgroundImage: "url(/images/Testimonials/Group.png)",
                        backgroundSize: "cover",
                      }}
                    >
                      <Box className="my-2" sx={{ marginLeft: "-22px" }}>
                        {d?.attributes?.name} <br />
                        {d?.attributes?.country}
                      </Box>
                    </Item>
                    <Item>
                      <Avatar
                        alt="testimonials img"
                        src={d?.attributes?.image?.data?.attributes.url}
                        sx={{
                          width: "120px",
                          height: "120px",
                          borderRadius: "66.5px",
                          float: "right",
                          marginTop: "-50%",
                          marginRight: "-9%",
                        }}
                      />
                    </Item>
                  </Stack>

                  <Row className="p-1 pe-5">
                    <div
                      className=" ms-5 mb-3 ps-5 me-3"
                      style={{ borderLeft: "5px solid #370C64" }}
                    >
                      <Rating
                        value={d?.attributes?.rating}
                        precision={0.5}
                        size="medium"
                        readOnly
                      />
                      <p
                        style={{ fontFamily: "Asap", fontWeight: "500" }}
                        className="py-4 pe-5"
                      >
                        {parse(d?.attributes?.details)}
                      </p>
                    </div>
                  </Row>
                </Box>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default TEstimonials;
