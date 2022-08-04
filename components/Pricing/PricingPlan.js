import Chatra from "@chatra/chatra";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Card,
  Typography,
  Grid,
  CardContent,
  Stack,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CheckIcon from "@mui/icons-material/Check";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import parse from "html-react-parser";

const theme = createTheme({
  palette: {
    secondary: {
      // This is green.A700 as hex.
      main: "#FFAD05",
    },
  },
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F5F5F5",
    color: theme.palette.common.black,
    fontFamily: "Asap",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontFamily: "Asap",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, base, premium) {
  return { name, base, premium };
}

const rows = [
  createData("3 Career Episode"),
  createData("Summary Statement"),
  createData("CPD"),
  createData("Delevery Date"),
  createData("Quality Assured"),
  createData("Plagiarism Free Reports"),
  createData("Professional Writers"),

  createData("File Status Update"),
  createData("Handling Unlimited Comments from EA"),
  createData("Review of Clients Project"),
  createData("EA Portal Upload", "base"),
  createData("Documentation Guideline Help", "base"),
  createData("Rewrite any CE upon EA comment", "base"),
  createData("Rewrite any project upon EA comment", "base", "premium"),
  createData("3 Reports Inclusive", "base", "premium"),
];

const PricingPlan = ({ plan }) => {
  const [expanded, setExpanded] = useState(false);
  // const { hero } = pricingRes;
  // console.log("pricingRes", pricingRes);

  const basicList = [
    `3 Career Episode
  `,
    `Summary Statement
  `,
    `CPD
  `,
    `Delivery Date
  `,
    `Quality Assured
  `,
    `Plagiarism Free Reports
  `,
    `Professional Writers
  `,
    `File Status Update
  `,
    `Handling Unlimited 
  `,
    `Comments from EA
  `,
    `Review of Clients Project
  
  
  `,
  ];
  const extendedList = [
    `3 Career Episode
  `,
    `Summary Statement
  `,
    `CPD
  `,
    `Delivery Date
  `,
    `Quality Assured
  `,
    `Plagiarism Free Reports
  `,
    `Professional Writers
  `,
    `File Status Update
  `,
    `Handling Unlimited 
  `,
    `Comments from EA
  `,
    `Review of Clients Project
  
  
  `,
  ];
  const premiumList = [
    `3 Career Episode
  `,
    `Summary Statement
  `,
    `CPD
  `,
    `Delivery Date
  `,
    `Quality Assured
  `,
    `Plagiarism Free Reports
  `,
    `Professional Writers
  `,
    `File Status Update
  `,
    `Handling Unlimited 
  `,
    `Comments from EA
  `,
    `Review of Clients Project
  `,
    `EA Portal Upload
  `,
    `Documentation Guideline 
  `,
    `Help

  `,
  ];
  const royalList = [
    `3 Career Episode
  `,
    `Summary Statement
  `,
    `CPD
  `,
    `Delivery Date
  `,
    `Quality Assured
  `,
    `Plagiarism Free Reports
  `,
    `Professional Writers
  `,
    `File Status Update
  `,
    `Handling Unlimited 
  Comments from EA
  `,
    `Review of Clients Project
  `,
    `EA Portal Upload
  `,
    `Documentation Guideline 
  `,
    `Help
  `,
    `Rewrite any CE upon EA 
  comment
  `,
    `Rewrite any project 
  upon EA comment
  `,
    `3 Reports Inclusive

  `,
  ];
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography
          variant="h3"
          sx={{
            color: "#203546",
            fontFamily: "Century Gothic",
            fontWeight: "700",
            fontSize: "40px",
            lineHeight: "49px",
            textAlign: "center",
            fontStyle: "normal",
          }}
        >
          {plan?.title}
        </Typography>

        <Typography
          paragraph
          sx={{
            fontFamily: "Asap",
            fontWeight: "400",
            fontSize: "25px",
            lineHeight: "29px",
            fontStyle: "normal",
            color: "#666666",
          }}
          gutterBottom
        >
          {plan && parse(plan.paragraph)}
        </Typography>

        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          my={2}
        >
          <Grid
            xs={12}
            md={2.91}
            className="changeToGreen "
            my={2}
            sx={{
              width: "399px",
              background: "white",
              borderRadius: "4px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
              boxSizing: "border-box",
              border: "3px solid #E9E9E9",
            }}
          >
            <Card
              sx={{
                background: "white",
                borderRadius: "4px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
                boxSizing: "border-box",
                border: "3px solid #E9E9E9",
              }}
            >
              <CardContent>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
                  {" "}
                  <Box
                    sx={{
                      filter:
                        "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                    }}
                  >
                    <svg
                      width="50"
                      height="53"
                      viewBox="0 0 50 53"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M38.6204 13.6813C37.9338 13.5138 37.2918 13.3352 36.6442 13.2123C36.2311 13.1342 35.7956 13.1286 35.3714 13.1119C34.975 13.0951 34.9582 13.0951 34.9582 12.682C34.9582 12.1405 34.9471 11.599 34.9694 11.063C34.9806 10.756 34.8689 10.6667 34.573 10.6723C32.848 10.6834 31.1286 10.6778 29.4036 10.6778C29.2696 10.6778 29.1356 10.6778 28.996 10.6723C28.248 10.6388 27.8516 10.2424 27.846 9.48874C27.8348 8.32756 27.8404 7.1608 27.8404 5.99962C27.8404 5.35762 27.846 4.71004 27.846 4.06804C27.846 3.67726 27.8181 3.64934 27.4162 3.64934C27.031 3.64934 26.6458 3.64934 26.2661 3.64934C18.9585 3.64934 11.6453 3.64934 4.33768 3.64934C4.23161 3.64934 4.13112 3.65493 4.02505 3.64934C3.73476 3.62143 3.63985 3.761 3.64544 4.04013C3.6566 4.70446 3.65102 5.36878 3.65102 6.03311C3.65102 20.0119 3.65102 33.9852 3.65102 47.964C3.65102 48.6451 3.65102 48.6451 4.3321 48.6451C14.3529 48.6451 24.368 48.6451 34.3888 48.6451C34.4279 48.6451 34.4726 48.6451 34.5116 48.6451C34.9582 48.6395 34.9694 48.6228 34.9638 48.1929C34.9582 47.7854 34.9638 47.3834 34.9527 46.9759C34.9471 46.7526 35.0252 46.6577 35.2597 46.6577C36.2869 46.6633 37.3141 46.6633 38.3413 46.6577C38.5367 46.6577 38.6204 46.7303 38.6204 46.9312C38.6093 48.1259 38.6372 49.3206 38.5981 50.5153C38.559 51.5983 37.783 52.2794 36.6609 52.2794C32.848 52.2794 29.0407 52.2794 25.2278 52.285C17.574 52.285 9.92586 52.285 2.27212 52.285C2.07673 52.285 1.87575 52.2905 1.68036 52.2682C0.625252 52.1342 0.00558379 51.4197 0.00558379 50.3031C1.1927e-06 45.8091 0 41.3096 0 36.8156C0 25.3322 0 13.8488 0 2.35976C0 2.11413 -1.70534e-07 1.85733 0.039078 1.61728C0.189808 0.662653 0.854139 0.0708968 1.81993 0.0206534C1.94275 0.0150708 2.07114 0.0150717 2.19396 0.0150717C11.2043 0.0150717 20.2202 0.0150715 29.2305 0.00390625C30.0846 0.00390625 30.7713 0.277453 31.3742 0.880374C33.4733 2.97943 35.5891 5.06732 37.716 7.13289C38.3413 7.73581 38.6428 8.41688 38.6204 9.29335C38.5869 10.6611 38.6093 12.0344 38.6093 13.4077C38.6204 13.4915 38.6204 13.5864 38.6204 13.6813Z"
                        fill="#049213"
                      />
                      <path
                        d="M35.3597 44.1122C30.888 44.1122 26.4108 44.1122 21.9391 44.1122C20.9733 44.1122 20.8617 44.0006 20.8617 43.0459C20.8617 42.5268 20.8282 42.0076 20.8728 41.4884C20.8952 41.2428 21.0012 40.9413 21.1743 40.7794C23.8707 38.217 27.0081 36.4473 30.6368 35.5764C30.8992 35.515 31.2286 35.5541 31.4742 35.6602C34.0589 36.7543 36.6325 36.7711 39.2117 35.649C39.5243 35.515 39.8258 35.4871 40.1496 35.5708C43.7336 36.5031 46.8598 38.2449 49.5451 40.7906C49.7572 40.9915 49.8409 41.2316 49.8409 41.5163C49.8409 42.0857 49.8409 42.6607 49.8409 43.2302C49.8354 43.928 49.6567 44.1122 48.9477 44.1122C44.4147 44.1178 39.8872 44.1122 35.3597 44.1122Z"
                        fill="#049213"
                      />
                      <path
                        d="M41.9371 22.4866C41.831 23.1509 41.7305 23.8152 41.6077 24.474C41.563 24.6917 41.5798 24.848 41.764 24.9932C42.1492 25.2946 42.2497 25.7022 42.1492 26.1655C42.0487 26.6345 41.7807 26.9527 41.2951 27.042C41.0438 27.0867 41.0327 27.2765 41.0048 27.4607C40.8261 28.7782 40.3293 29.9561 39.5254 31.0112C38.5652 32.2617 37.3761 33.1326 35.7571 33.3057C34.4229 33.4508 33.2896 32.9986 32.2792 32.1668C30.8444 30.9945 30.0182 29.4816 29.7279 27.6728C29.6721 27.3211 29.5939 27.0867 29.1864 26.9638C28.4439 26.7349 28.2429 25.624 28.8403 25.0825C29.0915 24.8536 29.1194 24.6526 29.0468 24.3456C28.4383 21.7441 29.0357 19.4832 30.8947 17.5181C33.0663 15.2236 37.5212 14.7044 40.1618 17.9033C41.256 19.2319 41.8757 20.7392 41.9371 22.4866Z"
                        fill="#049213"
                      />
                      <path
                        d="M15.9212 32.5413C18.1654 32.5413 20.404 32.5413 22.6482 32.5413C22.7543 32.5413 22.8547 32.5357 22.9608 32.5469C23.3293 32.5971 23.6028 32.9097 23.6028 33.2726C23.6028 33.6187 23.3349 33.9258 22.9776 33.9816C22.8659 33.9984 22.7487 33.9984 22.637 33.9984C18.2044 33.9984 13.7719 33.9984 9.33927 33.9984C9.16621 33.9984 8.98199 33.9928 8.81451 33.9593C8.47397 33.8867 8.273 33.6299 8.26183 33.2949C8.25625 32.9544 8.45722 32.6641 8.79218 32.5804C8.92058 32.5469 9.06014 32.5413 9.19413 32.5413C11.4327 32.5357 13.677 32.5357 15.9212 32.5413Z"
                        fill="#049213"
                      />
                      <path
                        d="M15.9546 27.4453C13.7551 27.4453 11.5555 27.4453 9.356 27.4453C9.18853 27.4453 9.02105 27.4453 8.85915 27.4174C8.4907 27.356 8.26181 27.0825 8.26181 26.7308C8.25623 26.3679 8.49628 26.072 8.86473 26.0106C9.0043 25.9883 9.15503 25.9883 9.30018 25.9883C13.7328 25.9883 18.1598 25.9883 22.5923 25.9939C22.7654 25.9939 22.9496 26.005 23.1115 26.0553C23.4409 26.1502 23.6251 26.4405 23.5972 26.7643C23.5693 27.0992 23.3237 27.3783 22.9943 27.423C22.8436 27.4453 22.6817 27.4398 22.5309 27.4398C20.3314 27.4453 18.143 27.4453 15.9546 27.4453Z"
                        fill="#049213"
                      />
                      <path
                        d="M15.9546 19.4401C18.1653 19.4401 20.3761 19.4401 22.5868 19.4401C22.7319 19.4401 22.8771 19.4401 23.0222 19.468C23.3907 19.5461 23.614 19.8253 23.6084 20.1714C23.5972 20.5343 23.3125 20.8413 22.9441 20.8804C22.8324 20.8915 22.7152 20.8915 22.6035 20.8915C18.2044 20.8915 13.7998 20.8915 9.40067 20.8915C9.22202 20.8915 9.04338 20.8915 8.8759 20.8636C8.47954 20.7911 8.25065 20.5008 8.27298 20.1211C8.29531 19.7415 8.55769 19.468 8.95406 19.4457C9.31693 19.4289 9.67979 19.4345 10.0427 19.4345C12.0133 19.4345 13.9896 19.4345 15.9602 19.4345C15.9546 19.4401 15.9546 19.4401 15.9546 19.4401Z"
                        fill="#049213"
                      />
                    </svg>
                  </Box>
                  <Box
                    component="span"
                    my={2}
                    style={{
                      color: "#049213",
                      fontWeight: "700",
                      fontFamily: "Asap",
                      fontStyle: "normal",
                      fontSize: "35px",
                      lineHeight: "40px",
                    }}
                  >
                    BASIC
                  </Box>
                  <Box
                    component="span"
                    style={{
                      fontWeight: "700",
                      fontSize: "40px",
                      fontFamily: "Century Gothic",
                      textAlign: "center",
                      color: "#203546",
                    }}
                  >
                    <Box component="span" sx={{ color: "#B8B8B8" }}>
                      $
                    </Box>{" "}
                    450
                  </Box>
                  <Typography
                    gutterBottom
                    sx={{
                      fontWeight: "600",
                      fontSize: "16px",
                      fontFamily: "Asap",
                      color: "#7E7E7E;",
                      lineHeight: "18px",
                    }}
                  >
                    Delivery within 15 Days
                  </Typography>
                  <Button
                    onClick={() => Chatra("openChat", true)}
                    variant="contained"
                    color="success"
                    size="large"
                    disableElevation
                    sx={{
                      background: "#049213",
                      color: "white",
                      fontWeight: "700",
                      width: "222px",
                      height: "51px",
                    }}
                  >
                    Order Now
                  </Button>
                </Stack>

                <Typography
                  mt={1}
                  sx={{
                    fontFamily: "Asap",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "18px",
                    color: "#203546",
                  }}
                  gutterBottom
                >
                  Basic Includes:
                </Typography>
                <Stack
                  sx={{
                    left: "12.5%",
                    right: " 77.2%",
                    top: "47.26%",
                    bottom: "50.87%",
                    fontFamily: "Asap",
                    fontWeight: "500",
                    fontSize: "15px",
                    lineHeight: "17px",
                    color: "#999999",
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: "Asap",
                      fontWeight: "500",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#999999",
                      fontStyle: "normal",
                    }}
                  >
                    <CheckIcon color="success" />3 Career Episode{" "}
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Asap",
                      fontWeight: "500",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#999999",
                      fontStyle: "normal",
                    }}
                  >
                    <CheckIcon color="success" />
                    Summary Statement
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Asap",
                      fontWeight: "500",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#999999",
                      fontStyle: "normal",
                    }}
                  >
                    <CheckIcon color="success" />
                    Plagiarism Free Reports
                  </Typography>
                </Stack>
              </CardContent>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{ backgroundColor: "#88DE91", color: "#049213" }}
                >
                  Explore Features
                </AccordionSummary>
                <AccordionDetails>
                  <CardContent>
                    <div>
                      {basicList.map((l, i) => (
                        <Stack direction="row" key={i}>
                          {" "}
                          <Box
                            className="d-flex flex-row my-1 ms-md-2"
                            style={{ color: "#2D2046" }}
                          >
                            <span className="me-2 ms-md-4 listText">
                              <CheckCircleIcon />{" "}
                            </span>
                            <span className="listText spanfontSize">{l}</span>
                          </Box>
                        </Stack>
                      ))}
                    </div>
                  </CardContent>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>
          <Grid
            xs={12}
            md={2.91}
            className="changeToBlue "
            my={2}
            sx={{
              width: "399px",
              background: "white",
              borderRadius: "4px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
              boxSizing: "border-box",
              border: "3px solid #E9E9E9",
            }}
          >
            <Card
              sx={{
                background: "white",
                borderRadius: "4px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
                boxSizing: "border-box",
                border: "3px solid #E9E9E9",
              }}
            >
              <CardContent>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
                  {" "}
                  <Box
                    sx={{
                      filter:
                        "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                    }}
                  >
                    <svg
                      width="53"
                      height="56"
                      viewBox="0 0 53 56"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.4294 53.5176C16.9799 53.5176 14.6522 53.5176 12.3181 53.5176C9.24021 53.524 6.16227 53.5368 3.09076 53.524C2.60983 53.524 2.11608 53.4983 1.65439 53.3829C0.718185 53.1392 0.0641239 52.2351 0.012825 51.2348C0.00641265 51.1065 0.012825 50.9719 0.012825 50.8436C0.012825 34.8448 0.0192371 18.8459 0 2.85352C0 1.37227 0.852843 -0.00639008 2.84709 2.22811e-05C14.4214 0.0384964 25.9957 0.0192586 37.5764 0.0192586C39.545 0.0192586 40.603 1.0773 40.603 3.03307C40.603 11.0421 40.5966 19.0511 40.6159 27.0602C40.6159 27.6373 40.4556 28.0348 40.0323 28.4452C37.3392 31.0615 34.6844 33.7098 32.0233 36.3453C31.863 36.4992 31.7219 36.6723 31.5424 36.8775C28.7594 35.0884 25.7777 34.6203 22.6549 35.5373C20.3849 36.2042 18.5445 37.5315 17.1915 39.5066C14.5881 43.2898 14.4727 49.4393 19.4294 53.5176ZM24.7581 29.9137C27.6565 29.9137 30.5549 29.9201 33.4533 29.9137C34.8191 29.9073 35.9028 29.0159 36.108 27.7014C36.1785 27.2461 36.1465 26.7716 36.1465 26.3099C36.14 24.8351 35.0371 23.6809 33.5559 23.6809C27.6821 23.668 21.8148 23.668 15.9411 23.6809C14.9793 23.6809 14.2547 24.1554 13.7481 24.9762C13.3313 25.6495 13.3954 26.3933 13.3954 27.1307C13.4018 28.8236 14.4919 29.9137 16.172 29.9137C19.0319 29.9137 21.8918 29.9137 24.7581 29.9137ZM24.7196 20.5452C27.618 20.5452 30.5164 20.5516 33.4148 20.5452C34.8191 20.5452 35.8387 19.7308 36.1016 18.3778C36.1849 17.929 36.1465 17.4545 36.14 16.9864C36.1272 15.4474 35.0051 14.306 33.4789 14.306C27.6437 14.2996 21.8084 14.2996 15.9732 14.306C14.5817 14.306 13.4788 15.3897 13.4018 16.7812C13.3826 17.0954 13.3954 17.4096 13.3954 17.7302C13.3954 19.4551 14.4791 20.5452 16.1912 20.5452C19.0383 20.5452 21.879 20.5452 24.7196 20.5452ZM24.7581 10.7343C27.6373 10.7343 30.5164 10.7407 33.3956 10.7343C34.8191 10.7343 35.8194 9.952 36.0952 8.58617C36.1849 8.1373 36.1465 7.66279 36.14 7.2011C36.1272 5.63007 35.0115 4.49508 33.4404 4.49508C27.6244 4.48867 21.8084 4.48867 15.9924 4.49508C14.5817 4.49508 13.4595 5.59801 13.3954 7.00873C13.3826 7.32293 13.389 7.64355 13.389 7.95776C13.389 9.63779 14.4855 10.7407 16.1656 10.7407C19.0319 10.7343 21.8918 10.7343 24.7581 10.7343ZM7.2139 24.0015C5.50821 24.0015 4.18086 25.3032 4.15521 27.0089C4.12956 28.6568 5.50821 30.0227 7.20108 30.0291C8.86188 30.0291 10.1828 28.721 10.2021 27.0473C10.2277 25.3417 8.91318 24.0015 7.2139 24.0015ZM7.17543 10.5291C8.8747 10.5419 10.1828 9.24664 10.2085 7.52813C10.2277 5.88015 8.89394 4.50791 7.24596 4.48867C5.59158 4.46944 4.2001 5.82244 4.16162 7.48324C4.12315 9.15687 5.46974 10.5099 7.17543 10.5291ZM7.22673 14.0623C5.51463 14.0559 4.17444 15.364 4.15521 17.0633C4.13597 18.692 5.55951 20.1092 7.2139 20.1028C8.84905 20.0963 10.1828 18.7433 10.2021 17.0697C10.2277 15.3961 8.91318 14.0687 7.22673 14.0623Z"
                        fill="#017CC9"
                      />
                      <path
                        d="M25.2455 40.4884C26.5729 40.4692 27.6373 41.0399 28.5543 41.944C29.0032 42.3865 29.4392 42.8482 29.8945 43.2842C31.0872 44.4064 32.5364 44.3807 33.697 43.2265C37.5765 39.3534 41.4495 35.474 45.329 31.6009C46.6628 30.2671 48.2274 29.799 50.0549 30.3697C52.8828 31.2546 53.96 35.0572 52.0107 37.2951C51.6195 37.7439 51.2156 38.18 50.7988 38.5968C45.5855 43.8164 40.3659 49.0297 35.1526 54.2493C34.4344 54.9675 33.6136 55.5062 32.5877 55.6985C31.0872 55.9807 29.779 55.5703 28.7082 54.5315C26.56 52.4539 24.4376 50.3378 22.3279 48.2217C20.6671 46.5545 20.3593 44.5667 21.5135 42.6173C22.3407 41.2194 23.6232 40.5269 25.2455 40.4884Z"
                        fill="#017CC9"
                      />
                    </svg>
                  </Box>
                  <Box
                    component="span"
                    my={2}
                    style={{
                      color: "#017CC9",
                      fontWeight: "700",
                      fontFamily: "Asap",
                      fontStyle: "normal",
                      fontSize: "35px",
                      lineHeight: "40px",
                    }}
                  >
                    EXTENDED
                  </Box>
                  <Box
                    component="span"
                    style={{
                      fontWeight: "700",
                      fontSize: "40px",
                      fontFamily: "Century Gothic",
                      textAlign: "center",
                      color: "#203546",
                    }}
                  >
                    <Box component="span" sx={{ color: "#B8B8B8" }}>
                      $
                    </Box>{" "}
                    650
                  </Box>
                  <Typography
                    gutterBottom
                    sx={{
                      fontWeight: "600",
                      fontSize: "16px",
                      fontFamily: "Asap",
                      color: "#7E7E7E;",
                      lineHeight: "18px",
                    }}
                  >
                    Delivery within 10 Days
                  </Typography>
                  <Button
                    onClick={() => Chatra("openChat", true)}
                    variant="contained"
                    size="large"
                    disableElevation
                    sx={{
                      background: "#017CC9",
                      color: "white",
                      fontWeight: "700",
                      width: "222px",
                      height: "51px",
                    }}
                  >
                    Order Now
                  </Button>
                </Stack>

                <Typography
                  mt={1}
                  sx={{
                    fontFamily: "Asap",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "18px",
                    color: "#203546",
                  }}
                  gutterBottom
                >
                  Basic Includes:
                </Typography>
                <Stack
                  sx={{
                    left: "12.5%",
                    right: " 77.2%",
                    top: "47.26%",
                    bottom: "50.87%",
                    fontFamily: "Asap",
                    fontWeight: "500",
                    fontSize: "15px",
                    lineHeight: "17px",
                    color: "#999999",
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: "Asap",
                      fontWeight: "500",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#999999",
                      fontStyle: "normal",
                    }}
                  >
                    <CheckIcon color="success" />3 Career Episode{" "}
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Asap",
                      fontWeight: "500",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#999999",
                      fontStyle: "normal",
                    }}
                  >
                    <CheckIcon color="success" />
                    CPD
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Asap",
                      fontWeight: "500",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#999999",
                      fontStyle: "normal",
                    }}
                  >
                    <CheckIcon color="success" />
                    Professional Writers
                  </Typography>
                </Stack>
              </CardContent>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{ backgroundColor: "#8AC7ED", color: "#0063A1" }}
                >
                  Explore Features
                </AccordionSummary>
                <AccordionDetails>
                  <CardContent>
                    <div>
                      {extendedList.map((l, i) => (
                        <Stack direction="row" key={i}>
                          {" "}
                          <Box
                            className="d-flex flex-row my-1 ms-md-2"
                            style={{ color: "#2D2046" }}
                          >
                            <span className="me-2 ms-md-4 listText">
                              <CheckCircleIcon />{" "}
                            </span>
                            <span className="listText spanfontSize">{l}</span>
                          </Box>
                        </Stack>
                      ))}
                    </div>
                  </CardContent>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>
          <Grid
            xs={12}
            md={2.91}
            className="changeToRed  "
            my={2}
            sx={{
              width: "399px",
              background: "white",
              borderRadius: "4px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
              boxSizing: "border-box",
              border: "3px solid #E9E9E9",
            }}
          >
            <Card>
              <CardContent>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={1.3}
                >
                  {" "}
                  <Box
                    sx={{
                      filter:
                        "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                    }}
                  >
                    <svg
                      width="43"
                      height="66"
                      viewBox="0 0 43 66"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M39.4835 11.574C39.3261 13.6336 40.1199 15.4573 41.8005 16.959C43.3023 18.3035 43.3452 18.7898 42.201 20.4203C40.7707 22.4656 40.5776 24.6396 41.4215 26.9424C41.9936 28.5014 41.729 29.2809 40.2487 30.0032C37.8529 31.1689 36.5371 33.0282 36.2868 35.6957C36.1724 36.9329 35.3714 37.6552 34.1199 37.5837C31.288 37.4192 29.1211 38.4633 27.5549 40.8447C26.9471 41.7672 26.0174 42.1034 25.0233 41.4526C22.692 39.9293 20.4107 39.8721 18.065 41.4168C17.0281 42.0962 16.0769 41.7887 15.419 40.8018C13.8815 38.4848 11.7575 37.4335 8.97559 37.5837C7.60968 37.6552 6.85163 36.9258 6.6943 35.5026C6.4154 32.9639 5.12815 31.176 2.8397 30.0533C1.26639 29.2809 1.00894 28.5443 1.6025 26.8995C2.43922 24.5896 2.22468 22.4227 0.772942 20.3846C-0.328373 18.8399 -0.292615 18.2749 1.13766 17.0306C3.02563 15.3857 3.71932 13.3476 3.49763 10.9018C3.31884 8.92087 3.64065 8.54185 5.55723 8.05555C7.88143 7.46914 9.54056 6.12468 10.4059 3.83623C11.0638 2.09844 11.6788 1.80523 13.5525 2.26292C15.9482 2.84218 18.1151 2.4131 19.9387 0.746825C21.0686 -0.282977 21.984 -0.225766 23.0996 0.782581C24.9304 2.43455 27.1115 2.84218 29.5001 2.24862C31.3166 1.79808 31.9387 2.10559 32.6181 3.88629C33.4262 6.0031 34.928 7.32611 37.0734 7.94828C39.5836 8.67057 39.5907 8.67773 39.4835 11.574ZM21.5263 34.8375C29.3285 34.8304 35.5359 28.6158 35.5359 20.8136C35.5359 13.083 29.2212 6.77545 21.4905 6.7826C13.7527 6.78976 7.4595 13.1044 7.4738 20.8423C7.49526 28.6444 13.7241 34.8447 21.5263 34.8375Z"
                        fill="#D63E3E"
                      />
                      <path
                        d="M24.401 44.6482C27.1114 45.1631 29.0995 44.2907 30.6156 42.0308C31.109 41.2942 32.196 40.951 33.1472 40.3359C35.7431 47.1941 38.1961 53.6804 40.792 60.5315C38.5322 60.2025 36.5369 60.0523 34.6204 59.5875C33.376 59.2871 32.7753 59.6519 32.1245 60.6316C31.1376 62.1119 29.9863 63.4779 28.6918 65.1727C27.7264 62.6912 26.904 60.5887 26.0959 58.4862C25.0375 55.7114 23.9648 52.9439 22.9707 50.1477C22.7919 49.6471 22.7848 48.9963 22.9493 48.4885C23.3426 47.237 23.8718 46.0285 24.401 44.6482Z"
                        fill="#D63E3E"
                      />
                      <path
                        d="M14.4034 62.7137C13.1162 61.1046 11.8861 59.7387 10.8706 58.2297C10.1984 57.2285 9.54764 56.9353 8.35336 57.1999C6.43678 57.629 4.463 57.8221 2.22461 58.1654C4.08397 53.2452 5.80031 48.7041 7.51665 44.1701C7.75979 43.5336 7.98149 42.89 8.22463 42.2535C8.88256 40.5372 9.84085 40.1725 11.4285 41.1451C11.9434 41.4597 12.3796 41.9675 12.7443 42.4681C14.5465 44.921 17.2926 45.5146 19.9672 43.9913C20.4464 43.7196 20.947 43.4979 21.5906 43.1761C21.5548 43.5622 21.5763 43.7053 21.5262 43.8268C19.1949 50.0056 16.8635 56.1844 14.4034 62.7137Z"
                        fill="#D63E3E"
                      />
                      <path
                        d="M21.4689 31.9479C15.3115 31.9336 10.327 26.9204 10.3556 20.7845C10.3842 14.6558 15.4045 9.67127 21.5547 9.68558C27.6834 9.69988 32.6823 14.7345 32.668 20.8704C32.6465 27.0063 27.6334 31.9693 21.4689 31.9479Z"
                        fill="#D63E3E"
                      />
                    </svg>
                  </Box>
                  <Box
                    component="span"
                    my={2}
                    style={{
                      color: "#D63E3E",
                      fontWeight: "700",
                      fontFamily: "Asap",
                      fontStyle: "normal",
                      fontSize: "35px",
                      lineHeight: "40px",
                    }}
                  >
                    PREMIUM
                  </Box>
                  <Box
                    component="span"
                    style={{
                      fontWeight: "700",
                      fontSize: "40px",
                      fontFamily: "Century Gothic",
                      textAlign: "center",
                      color: "#203546",
                    }}
                  >
                    <Box component="span" sx={{ color: "#B8B8B8" }}>
                      $
                    </Box>{" "}
                    950
                  </Box>
                  <Typography
                    gutterBottom
                    sx={{
                      fontWeight: "600",
                      fontSize: "16px",
                      fontFamily: "Asap",
                      color: "#7E7E7E;",
                      lineHeight: "18px",
                    }}
                  >
                    Delivery within 7 Days
                  </Typography>
                  <Button
                    onClick={() => Chatra("openChat", true)}
                    variant="contained"
                    size="large"
                    color="error"
                    disableElevation
                    sx={{
                      background: "#D63E3E",
                      color: "white",
                      fontWeight: "700",
                      width: "222px",
                      height: "51px",
                    }}
                  >
                    Order Now
                  </Button>
                </Stack>

                <Typography
                  mt={1}
                  sx={{
                    fontFamily: "Asap",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "18px",
                    color: "#203546",
                  }}
                  gutterBottom
                >
                  Basic Includes:
                </Typography>
                <Stack
                  sx={{
                    fontFamily: "Asap",
                    fontWeight: "500",
                    fontSize: "15px",
                    lineHeight: "17px",
                    color: "#999999",
                  }}
                >
                  <Typography
                    style={{
                      fontFamily: "Asap",
                      fontWeight: "500",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#999999",
                      fontStyle: "normal",
                    }}
                  >
                    <CheckIcon color="success" /> EA Portal Upload
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Asap",
                      fontWeight: "500",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#999999",
                      fontStyle: "normal",
                    }}
                  >
                    <CheckIcon color="success" />
                    Documentation Guidance Help{" "}
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Asap",
                      fontWeight: "500",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#999999",
                      fontStyle: "normal",
                    }}
                  >
                    <CheckIcon color="success" />
                    Rewrite any CE upon EA comment{" "}
                  </Typography>
                </Stack>
              </CardContent>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  sx={{ backgroundColor: "#F5A7A7", color: "#D63E3E" }}
                >
                  Explore Features
                </AccordionSummary>
                <AccordionDetails>
                  <CardContent>
                    <div>
                      {premiumList.map((l, i) => (
                        <Stack direction="row" key={i}>
                          {" "}
                          <Box
                            className="d-flex flex-row my-1 ms-md-2"
                            style={{ color: "#2D2046" }}
                          >
                            <span className="me-2 ms-md-4 listText">
                              <CheckCircleIcon />{" "}
                            </span>
                            <span className="listText spanfontSize">{l}</span>
                          </Box>
                        </Stack>
                      ))}
                    </div>
                  </CardContent>
                </AccordionDetails>
              </Accordion>
            </Card>
          </Grid>

          <Grid
            xs={12}
            md={2.91}
            className="changeToGrey "
            my={2}
            sx={{
              width: "399px",
              background: "white",
              borderRadius: "4px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
              boxSizing: "border-box",
              border: "3px solid #E9E9E9",
            }}
          >
            <Card
              sx={{
                borderRadius: "4px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.3)",
                boxSizing: "border-box",
                border: "3px solid #E9E9E9",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#31485A",
                }}
              >
                <CardContent>
                  <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                  >
                    {" "}
                    <Box
                      sx={{
                        filter:
                          "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                      }}
                    >
                      <svg
                        width="60"
                        height="49"
                        viewBox="0 0 60 49"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M49.5 42.875H10.5C9.675 42.875 9 43.5641 9 44.4062V47.4688C9 48.3109 9.675 49 10.5 49H49.5C50.325 49 51 48.3109 51 47.4688V44.4062C51 43.5641 50.325 42.875 49.5 42.875ZM55.5 12.25C53.0156 12.25 51 14.3076 51 16.8438C51 17.5232 51.15 18.1549 51.4125 18.7387L44.625 22.8922C43.1813 23.7727 41.3156 23.275 40.4812 21.782L32.8406 8.13477C33.8438 7.29258 34.5 6.0293 34.5 4.59375C34.5 2.05762 32.4844 0 30 0C27.5156 0 25.5 2.05762 25.5 4.59375C25.5 6.0293 26.1563 7.29258 27.1594 8.13477L19.5187 21.782C18.6844 23.275 16.8094 23.7727 15.375 22.8922L8.59687 18.7387C8.85 18.1645 9.00937 17.5232 9.00937 16.8438C9.00937 14.3076 6.99375 12.25 4.50937 12.25C2.025 12.25 0 14.3076 0 16.8438C0 19.3799 2.01562 21.4375 4.5 21.4375C4.74375 21.4375 4.9875 21.3992 5.22188 21.3609L12 39.8125H48L54.7781 21.3609C55.0125 21.3992 55.2562 21.4375 55.5 21.4375C57.9844 21.4375 60 19.3799 60 16.8438C60 14.3076 57.9844 12.25 55.5 12.25Z"
                          fill="#FFFFFF"
                        />
                      </svg>
                    </Box>
                    <Box
                      component="span"
                      my={2}
                      style={{
                        color: "#FFFFFF",
                        fontWeight: "700",
                        fontFamily: "Asap",
                        fontStyle: "normal",
                        fontSize: "35px",
                        lineHeight: "40px",
                      }}
                    >
                      ROYAL
                    </Box>
                    <Box
                      component="span"
                      style={{
                        fontWeight: "700",
                        fontSize: "40px",
                        fontFamily: "Century Gothic",
                        textAlign: "center",
                        color: "#FFFFFF",
                      }}
                    >
                      <Box component="span" sx={{ color: "#B8B8B8" }}>
                        $
                      </Box>{" "}
                      1220
                    </Box>
                    <Typography
                      gutterBottom
                      sx={{
                        fontWeight: "600",
                        fontSize: "16px",
                        fontFamily: "Asap",
                        color: "#FFFFFF;",
                        lineHeight: "18px",
                      }}
                    >
                      Delivery within 15 Days
                    </Typography>
                    <Button
                      onClick={() => Chatra("openChat", true)}
                      variant="contained"
                      size="large"
                      color="secondary"
                      disableElevation
                      sx={{
                        background: "#FFAD05",

                        color: "white",
                        fontWeight: "700",
                        width: "222px",
                        height: "51px",
                      }}
                    >
                      Order Now
                    </Button>
                  </Stack>

                  <Typography
                    mt={1}
                    sx={{
                      fontFamily: "Asap",
                      fontWeight: "600",
                      fontSize: "16px",
                      lineHeight: "18px",
                      color: "#FFFFFF",
                    }}
                    gutterBottom
                  >
                    Basic Includes:
                  </Typography>
                  <Stack
                    sx={{
                      left: "12.5%",
                      right: " 77.2%",
                      top: "47.26%",
                      bottom: "50.87%",
                      fontFamily: "Asap",
                      fontWeight: "500",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#999999",
                    }}
                  >
                    <Typography
                      style={{
                        fontFamily: "Asap",
                        fontWeight: "500",
                        fontSize: "15px",
                        lineHeight: "17px",
                        color: "#FFFFFF",
                        fontStyle: "normal",
                      }}
                    >
                      <CheckIcon color="inherit" /> Review of Clients Project
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "Asap",
                        fontWeight: "500",
                        fontSize: "15px",
                        lineHeight: "17px",
                        color: "#FFFFFF",
                        fontStyle: "normal",
                      }}
                    >
                      <CheckIcon color="inherit" />
                      File Status Update
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "Asap",
                        fontWeight: "500",
                        fontSize: "15px",
                        lineHeight: "17px",
                        color: "#FFFFFF",
                        fontStyle: "normal",
                      }}
                    >
                      <CheckIcon color="inherit" />3 Project Inclusive{" "}
                    </Typography>
                  </Stack>
                </CardContent>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      backgroundColor: "#31485A",
                      color: "#FFFFFF",
                    }}
                  >
                    Explore Features
                  </AccordionSummary>
                  <AccordionDetails>
                    <CardContent>
                      <div>
                        {royalList.map((l, i) => (
                          <Stack direction="row" key={i}>
                            <Box
                              className="d-flex flex-row my-1 ms-md-2"
                              style={{ color: "#2D2046" }}
                            >
                              <span className="me-2 ms-md-4 listText">
                                <CheckCircleIcon />{" "}
                              </span>
                              <span className="listText spanfontSize">{l}</span>
                            </Box>
                          </Stack>
                        ))}
                      </div>
                    </CardContent>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </Card>
          </Grid>
        </Grid>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 600 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>Overview</StyledTableCell>
                <StyledTableCell align="right">Basic</StyledTableCell>
                <StyledTableCell align="right">Extended</StyledTableCell>
                <StyledTableCell align="right">Premium</StyledTableCell>
                <StyledTableCell align="right">Royal</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                return (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.base !== "base" ? (
                        <CheckIcon color="success" />
                      ) : null}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.base !== "base" ? (
                        <CheckIcon color="success" />
                      ) : null}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.premium !== "premium" ? (
                        <CheckIcon color="success" />
                      ) : null}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <CheckIcon color="success" />
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
      </Container>
    </ThemeProvider>
  );
};

export default PricingPlan;
