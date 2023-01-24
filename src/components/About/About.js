import { FaReact } from "react-icons/fa";
import DownloadIcon from "@mui/icons-material/Download";
import JavascriptIcon from "@mui/icons-material/Javascript";
import CssIcon from "@mui/icons-material/Css";
import HtmlIcon from "@mui/icons-material/Html";
import Profile_1 from "../../assets/Profile_1.jpg";
import Profile from "../../assets/Profile.JPG";
import { Box, ImageListItem, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "@emotion/styled";

const About = () => {
  const OwnPara = ({
    children,
    color = "text.primary",
    fontSize = "25px",
    letterSpacing,
  }) => {
    return (
      <Typography
        style={{
          paddingBottom: "40px",
          color: color,
          fontSize: fontSize,
          letterSpacing: letterSpacing,
        }}
      >
        {children}
      </Typography>
    );
  };

  const Ownemail = ({ children }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = (e) => {
      navigator.clipboard.writeText(e.target.innerText);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    };

    return (
      <Typography style={{ fontSize: "16px", paddingBottom: "50px" }}>
        {children.split(" ").map((word, idx) => {
          if (word === "hello@ajeeth.me") {
            return (
              <span
                key={idx}
                style={{
                  textDecoration: "underline",
                  color: "text.primary",
                  cursor: "pointer",
                }}
                onClick={handleCopy}
              >
                {word}
              </span>
            );
          }
          return word + " ";
        })}
        {copied && <span>Copied!</span>}
      </Typography>
    );
  };

  const OwnPara1 = styled(Typography)`
    font-size: 18px;
    padding-bottom: 40px;
    color: "text.primary";

    &:first-of-type {
      margin-top: 50px;
    }
  `;

  const Ownheading = ({
    children,
    color = "text.primary",
    fontSize = "25px",
    letterSpacing = "0.2em",
  }) => {
    return (
      <Typography
        style={{
          paddingBottom: "30px",
          color: color,
          fontSize: fontSize,
          letterSpacing: letterSpacing,
          textDecoration: "underline",
        }}
      >
        {children}
      </Typography>
    );
  };

  const OwnSubHeading = ({
    children,
    color = "text.primary",
    fontSize = "20px",
  }) => {
    return (
      <Typography
        style={{
          paddingBottom: "25px",
          color: color,
          fontSize: fontSize,
          width: "219px",
        }}
      >
        {children}
      </Typography>
    );
  };

  const OwnSubHeadingPara = ({
    children,
    color = "text.primary",
    fontSize = "15px",
  }) => {
    return (
      <Typography
        style={{
          paddingBottom: "30px",
          color: color,
          fontSize: fontSize,
        }}
      >
        {children}
      </Typography>
    );
  };

  const IconBox = styled.div`
    display: flex;
    flex-direction: row;
    color = "text.primary";

    svg {
      width: 50px;
      height: 50px;
      margin-right: 20px;
    }
  `;
  const TextIcon = ({ children, color = "#000000", fontSize = "15px" }) => {
    return (
      <Typography
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "100px",
          color: "text.primary",
        }}
      >
        {children}
      </Typography>
    );
  };

  return (
    <Box
      className="about"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "860px",
        margin: "40px auto 0",
        // border: "4px solid black",
        flexWrap: "wrap",
      }}
    >
      <Box width={{xs: "585px", sm : "685px"}} >
        <OwnPara component="p">
          👋 Hello, I’m Ajeeth. <br /> Looking for an internship in Front-end or
          web developer
        </OwnPara>
        <OwnPara component="p">
          Currently working at VVDN Technologies as a componentgineer, helping
          to design the electrical board (PCB).
        </OwnPara>
        <OwnPara
          color="#4F5358"
          fontSize="18px"
          component="p"
          letterSpacing="0.15em"
        >
          I’m an PCB designer with over 2 years of experience in designing a
          printed circuit board. I'm an innovative and dedicated design
          professional dedicated to satisfying my customer’s design
          requirements. I enjoy the challenge of finding unique ways to fulfill
          my customer’s needs.
        </OwnPara>
        <Ownemail component="p">Let’s talk me on hello@ajeeth.me </Ownemail>
      </Box>

      <Box
        sx={{
          // border: "6px solid blue ",
          width: "860px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          columnGap: 4,
        }}
      >
        <Box
          sx={{
            // border: "4px dotted red",
            width: "415px",
            height: "max-content",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <OwnPara1>
            I am a mechanical engineer by profession, but I have always had a
            passion for coding. As such, I have decided to switch my career path
            and become a frontend developer.
          </OwnPara1>
          <OwnPara1>
            I have been teaching myself coding and have gained a good amount of
            knowledge in HTML, CSS, JavaScript, Bootstrap and React.
          </OwnPara1>
          <ImageListItem sx={{ width: 415, borderRadius: "200px" }}>
            <img style={{ borderRadius: "20px" }} src={Profile_1} alt="" />
          </ImageListItem>
        </Box>
        <Box
          sx={{
            // border: "2px dotted red",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "400px",
          }}
        >
          <ImageListItem sx={{ width: 415 }}>
            <img style={{ borderRadius: "20px" }} src={Profile} alt="" />
          </ImageListItem>
          <OwnPara1>
            I am an avid learner, always looking for ways to expand my knowledge
            and develop new skills.
          </OwnPara1>
          <OwnPara1>
            I stay up to date with the latest technologies and trends in
            software development, allowing me to stay ahead of the curve.
          </OwnPara1>
          <OwnPara1>
            I am highly organized, have strong problem solving skills, and am
            able to work independently or as part of a team.
          </OwnPara1>
          <OwnPara1>
            I am excited to take on new challenges and to develop projects that
            I can be proud of. With my passion and drive, I am confident that I
            can make a positive impact in the software industry.
          </OwnPara1>
          <OwnPara1>
            In conclusion, I am a highly motivated and creative individual who
            is constantly looking for ways to improve my skills and challenge
            myself. I have the right
          </OwnPara1>
          <Ownemail>Let’s talk me on hello@ajeeth.me</Ownemail>
        </Box>
      </Box>
      <Box>
        <Box
          Box
          sx={{
            // border: "2px solid red",
            display: "flex",
            flexDirection: "row",
            width: "max-content",
            gap: 28,
            marginTop: "70px",
          }}
        >
          <Box
            sx={{
              // border: "2px solid red",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Ownheading>EXPERIENCE</Ownheading>
            <OwnSubHeading>Frontend Developer </OwnSubHeading>
            <OwnSubHeadingPara>2023 — Upcoming</OwnSubHeadingPara>
            <OwnSubHeading>Component Engineer, VVDN</OwnSubHeading>
            <OwnSubHeadingPara>2020 — 2023 </OwnSubHeadingPara>
          </Box>
          <Box
            sx={{
              // border: "2px solid red",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Ownheading>Skill set</Ownheading>
            <IconBox
              sx={{
                // border: "2px solid red",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <HtmlIcon />
              <CssIcon />
              <JavascriptIcon />
              <FaReact />
            </IconBox>
          </Box>
        </Box>
        <TextIcon>
          Download my resume <DownloadIcon sx={{ cursor: "pointer" }} />{" "}
        </TextIcon>
      </Box>
    </Box>
  );
};

export default About;
