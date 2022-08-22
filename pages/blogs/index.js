import React from "react";
import { Suspense } from "react";
import {
  Row,
  Col,
  Button,
  Container,
  Card,
  Stack,
  CardGroup,
  Figure,
  Navbar,
} from "react-bootstrap";
import { Box } from "@mui/material";
import Select from "react-select";
import Link from "next/link";

import styles from "../../styles/Blog.module.css";
import BlogsCategories from "../../components/Blogs/BlogsCategories";
import RecentBlogs from "../../components/Blogs/RecentBlogs";
import Hero3 from "../../components/FAQ/Hero3";
import { useRouter } from "next/router";
import Head from "next/head";
import {
  ArrowBack,
  ArrowForward,
  FaceOutlined,
  GridView,
} from "@mui/icons-material";
import ShareIcon from "@mui/icons-material/Share";
import Pagination from "@mui/material/Pagination";
import parse from "html-react-parser";
const ALLBLOGS = React.lazy(() => import("../../components/Blogs/ALLBLOGS"));

const Blogs = ({ resBlogData }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://cdrskillassessment.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  console.log(page);
  const str =
    "<p>loreum ipsumsdf sldjflsdf lsdjflk ldskfj lsdjfl lsdjflk lsjflsfdf lsfjl sfljsldf dddddddddddddddddddddddddddddd</p>";
  const parseData = parse(str);
  console.log(parse(str).props.children.substring(0, 50));
  console.log("strapi data", parse(resBlogData[0].attributes.content));
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <div className="pt-5 pt-md-0">
      <Head>
        <title>Blogs | CDR Skill Assessment</title>
        <meta
          name="description"
          content="Articles on and about cdr with cdrskillassessment | CDR Skill Assessment"
        />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <div
        style={{
          backgroundImage: `url(https://res.cloudinary.com/copenned/image/upload/v1659366267/small_her_9ad2b6da87.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
          position: "relative",
          overflow: "hidden",

          clipPath: "ellipse(70% 60% at 50% 16%)",
          zIndex: "-1",
        }}
      >
        <Container className="pt-5 text-light">
          <Row>
            <Col className="ps-5 pb-2">
              <span
                style={{
                  fontFamily: "Arial",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "25px",
                  lineHeight: "29px",
                }}
              >
                Home / Blogs
              </span>
              <div
                style={{
                  fontFamily: "Century Gothic",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "40px",
                  lineHeight: "49px",
                }}
              >
                Skill Assessment Blog
              </div>
              <div
                className="py-2"
                style={{
                  fontFamily: "Arial",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "25px",
                  lineHeight: "29px",
                }}
              >
                Read latest blogs about CDR writing, Austrlia Migration & Skill
                Assessment service from the world’s top most Blogger.
              </div>
              <span>
                <ShareIcon /> 1300 shares
              </span>
            </Col>
            <Col className="ps-5 py-2">
              <Select options={options} />
              <h4 className="py-3" style={{ textAlign: "center" }}>
                OR
              </h4>

              <Select options={options} />
            </Col>
          </Row>
        </Container>
      </div>

      <Container style={{ marginTop: "-91px" }}>
        <div
          style={{
            fontFamily: "Century Gothic",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "30px",
            lineHeight: "37px",
          }}
        >
          Feature Block
        </div>
        <Row>
          <Col sm={8}>
            <Card style={{ height: "56vh" }}>
              <Card.Header as="p" className="bg-white border-bottom-0">
                <Stack direction="horizontal" gap={3}>
                  <span style={{ color: "#017CC9" }}>
                    <GridView />
                  </span>
                  Australia Migration
                  <div className="text-muted ">2 days ago</div>
                </Stack>
              </Card.Header>

              <Card.Body>
                <Card.Title>{resBlogData[0].attributes.title}</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content. With supporting text below as a natural lead-in to
                  additional content. With supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Link href={`/blog/${resBlogData[0].attributes.slug}`}>
                  <Button

                  // href="/blog/8-Common-CDR-Report-Mistakes-Made-by-Engineering-Applicants"
                  >
                    Read More <ArrowForward />
                  </Button>
                </Link>{" "}
              </Card.Body>
            </Card>
          </Col>
          <Col sm={4}>
            <Card>
              <Card.Header
                as="h5"
                className="bg-white border-bottom-0"
                style={{
                  fontFamily: "Century Gothic",
                  fontWeight: "700",
                  fontSize: "20px",
                  lineHeight: "20.52px",
                  color: "#203546",
                }}
              >
                Recent Blogs
              </Card.Header>

              <Card.Body
                style={{
                  fontFamily: "Asap",
                  fontWeight: "400",
                  fontSize: "19px",
                  lineHeight: "21.52px",
                  color: "#7C7C7C",
                }}
              >
                <Card.Title as="p">
                  {resBlogData[0].attributes.title}

                  <hr />
                </Card.Title>
                <Card.Title as="p">
                  {resBlogData[1].attributes.title}

                  <hr />
                </Card.Title>
                <Card.Title as="p">
                  {resBlogData[2].attributes.title}

                  <hr />
                </Card.Title>
                <Card.Title as="p">
                  {resBlogData[3].attributes.title}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div
          className="py-4"
          style={{
            fontFamily: "Century Gothic",
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "30px",
            lineHeight: "37px",
          }}
        >
          All Blogs
        </div>
        <Row>
          <Col sm={6}>
            <Stack
              style={{
                boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.15)",
                borderRadius: "5px",
                height: "100%",
              }}
            >
              {" "}
              <Card.Img
                variant="top"
                src={resBlogData[0].attributes?.image?.data?.attributes?.url}
              />
              <Card.Body>
                <span style={{ color: "#017CC9" }}>
                  <GridView />
                  Australia Migration
                </span>
                <Card.Title className="pt-1">
                  {resBlogData[0].attributes.title}
                </Card.Title>
                <Card.Text className="" style={{}}>
                  A CDR report allows engineers to demonstrate that their
                  expertise meets Australian standards. management...
                </Card.Text>
              </Card.Body>
              <div className="mb-auto">
                <Link href={`/blog/${resBlogData[0].attributes.slug}`}>
                  <Button
                    className="container"
                    size="lg"
                    // href="/blog/8-Common-CDR-Report-Mistakes-Made-by-Engineering-Applicants"
                  >
                    Read More <ArrowForward />
                  </Button>
                </Link>
              </div>
            </Stack>
          </Col>
          <Col sm={6}>
            <Stack
              style={{
                boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.15)",
                borderRadius: "5px",
                height: "100%",
              }}
            >
              {" "}
              <Card.Img
                variant="top"
                src={resBlogData[1].attributes?.image?.data?.attributes?.url}
              />
              <Card.Body>
                <span style={{ color: "#017CC9" }}>
                  <GridView />
                  Australia Migration
                </span>
                <Card.Title className="pt-1">
                  {resBlogData[1].attributes.title}
                </Card.Title>
                <Card.Text className="" style={{}}>
                  A CDR report allows engineers to demonstrate that their
                  expertise meets Australian standards. management...
                </Card.Text>
              </Card.Body>
              <div className="mb-auto">
                <Link href={`/blog/${resBlogData[1].attributes.slug}`}>
                  <Button
                    className="container"
                    size="lg"
                    // href="/blog/8-Common-CDR-Report-Mistakes-Made-by-Engineering-Applicants"
                  >
                    Read More <ArrowForward />
                  </Button>
                </Link>
              </div>
            </Stack>
          </Col>
        </Row>

        <Row sm={1} md={3} className="my-4 g-3">
          {resBlogData.map((item, index) => (
            <>
              {index > 2 && (
                <Col key={item.id}>
                  <>
                    <Stack
                      style={{
                        boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.15)",
                        borderRadius: "5px",
                        height: "100%",
                      }}
                    >
                      {" "}
                      <Card.Img
                        variant="top"
                        src={item.attributes?.image?.data?.attributes?.url}
                      />
                      <Card.Body>
                        <span style={{ color: "#017CC9" }}>
                          <GridView />
                          Australia Migration
                        </span>
                        <Card.Title className="pt-1">
                          {item.attributes.title}
                        </Card.Title>
                        <Card.Text className="overflow-hidden">
                          A CDR report allows engineers to demonstrate that
                          their expertise meets Australian standards. Engineers
                          Australia uses a variety of customised papers to g
                          skills and knowledge, management...
                        </Card.Text>
                      </Card.Body>
                      <div className="mb-auto">
                        <Link href={`/blog/${item.attributes.slug}`}>
                          <Button
                            className="container"
                            size="lg"
                            // href="/blog/8-Common-CDR-Report-Mistakes-Made-by-Engineering-Applicants"
                          >
                            Read More <ArrowForward />
                          </Button>
                        </Link>
                      </div>
                    </Stack>
                  </>
                </Col>
              )}
            </>
          ))}
        </Row>
        <div className="d-flex justify-content-center py-4">
          {" "}
          <Pagination
            count={5}
            page={page}
            shape="rounded"
            size="large"
            onChange={handleChange}
            // disabled={page === 4}
          />
        </div>
      </Container>

      <Container>
        <h2>Recommended Blogs</h2>
        <p>
          Like what you see? More stories from Lead with Indeed to spark your
          intereest.
        </p>
        <Row>
          <Col>
            <Figure>
              <Stack direction="horizontal" gap={3}>
                <Figure.Image
                  width={101}
                  height={100}
                  alt="171x180"
                  src="images/Blogs/Know.png"
                />
                <Figure.Caption className="mb-4">
                  A simple Guide on How to prepare a perfect CPD Report{" "}
                  <p>CDR Service</p>
                </Figure.Caption>{" "}
              </Stack>
            </Figure>
          </Col>
          <Col>
            <Figure>
              <Stack direction="horizontal" gap={3}>
                <Figure.Image
                  width={101}
                  height={100}
                  alt="171x180"
                  src="images/Blogs/Know.png"
                />
                <Figure.Caption className="mb-4">
                  A simple Guide on How to prepare a perfect CPD Report{" "}
                  <p>CDR Service</p>
                </Figure.Caption>{" "}
              </Stack>
            </Figure>
          </Col>
        </Row>
        <Row>
          <Col>
            <Figure>
              <Stack direction="horizontal" gap={3}>
                <Figure.Image
                  width={101}
                  height={100}
                  alt="171x180"
                  src="images/Blogs/Know.png"
                />
                <Figure.Caption className="mb-4">
                  A simple Guide on How to prepare a perfect CPD Report{" "}
                  <p>CDR Service</p>
                </Figure.Caption>{" "}
              </Stack>
            </Figure>
          </Col>{" "}
          <Col>
            <Figure>
              <Stack direction="horizontal" gap={3}>
                <Figure.Image
                  width={101}
                  height={100}
                  alt="171x180"
                  src="images/Blogs/Know.png"
                />
                <Figure.Caption className="mb-4">
                  A simple Guide on How to prepare a perfect CPD Report{" "}
                  <p>CDR Service</p>
                </Figure.Caption>{" "}
              </Stack>
            </Figure>
          </Col>
        </Row>
      </Container>
      <Hero3
        title="Stay connected with CDRskillassessment! Contact us via our Social Channels"
        buttonName1="Whatsapp"
        buttonName2="Facebook"
      />
    </div>
  );
};

export async function getStaticProps({ params }) {
  const blog = await fetch(
    `https://cdrskill.herokuapp.com/api/blogs?populate=deep`
  );
  const blogData = await blog.json();

  return {
    props: { resBlogData: blogData?.data },
    revalidate: 1,
  };
}

export default Blogs;
