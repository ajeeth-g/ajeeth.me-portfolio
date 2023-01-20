import DownloadIcon from "@mui/icons-material/Download";
import JavascriptIcon from "@mui/icons-material/Javascript";
import CssIcon from "@mui/icons-material/Css";
import HtmlIcon from "@mui/icons-material/Html";
import Profile_1 from "../../assets/Profile_1.jpg";
import Profile from "../../assets/Profile.JPG";
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: "860px",
        margin: "40px auto 0",
        border: "4px solid black",
        flexWrap: "wrap",
      }}
    >
      <Box sx={{ border: "2px solid red", width: "685px" }}>
        <Typography component="p" gutterBottom={true}>
          👋 Hello, I’m Ajeeth. <br /> Looking for an internship in Front-end or
          web developer
        </Typography>
        <Typography component="p" gutterBottom={true}>
          Currently working at VVDN Technologies as a componentgineer, helping
          to design the electrical board (PCB).
        </Typography>
        <Typography color="secondary" component="p" gutterBottom={true}>
          I’m an PCB designer with over 2 years of experience in designing a
          printed circuit board. I'm an innovative and dedicated design
          professional dedicated to satisfying my customer’s design
          requirements. I enjoy the challenge of finding unique ways to fulfill
          my customer’s needs.
        </Typography>
        <Typography variant="h6" component="p">
          Let’s talk me on hello@ajeeth.me
        </Typography>
      </Box>
      <Box
        sx={{
          border: "6px solid blue ",
          width: "860px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 4,
        }}
      >
        <Box
          sx={{
            border: "2px dotted red",
            width: "415px",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          <Typography gutterBottom={true}>
            I am a mechanical engineer by profession, but I have always had a
            passion for coding. As such, I have decided to switch my career path
            and become a frontend developer.
          </Typography>
          <Typography>
            I have been teaching myself coding and have gained a good amount of
            knowledge in HTML, CSS, JavaScript, Bootstrap and React.
          </Typography>
          <ImageListItem sx={{ width: 415 }}>
            <img src={Profile_1} alt="" />
          </ImageListItem>
        </Box>
        <Box
          sx={{
            border: "2px dotted red",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "400px",
          }}
        >
          <ImageListItem sx={{ width: 415 }}>
            <img src={Profile} alt="" />
          </ImageListItem>
          <Typography>
            I am an avid learner, always looking for ways to expand my knowledge
            and develop new skills.
          </Typography>
          <Typography>
            I stay up to date with the latest technologies and trends in
            software development, allowing me to stay ahead of the curve.
          </Typography>
          <Typography>
            I am highly organized, have strong problem solving skills, and am
            able to work independently or as part of a team.
          </Typography>
          <Typography>
            I am excited to take on new challenges and to develop projects that
            I can be proud of. With my passion and drive, I am confident that I
            can make a positive impact in the software industry.
          </Typography>
          <Typography>
            In conclusion, I am a highly motivated and creative individual who
            is constantly looking for ways to improve my skills and challenge
            myself. I have the right
          </Typography>
          <Typography>Let’s talk me on hello@ajeeth.me</Typography>
        </Box>
      </Box>
      <Box>
        <Box
          Box
          sx={{
            border: "2px solid red",
            display: "flex",
            flexDirection: "row",
            width: "417px",
            gap: 18,
          }}
        >
          <Box
            sx={{
              border: "2px solid red",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography>EXPERIENCE</Typography>
            <Typography>Frontend Developer </Typography>
            <Typography>2023 — Upcoming</Typography>
            <Typography>Component Engineer, VVDN</Typography>
            <Typography>2020 — 2023 </Typography>
          </Box>
          <Box
            sx={{
              border: "2px solid red",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography>Skill set</Typography>
            <Box
              sx={{
                border: "2px solid red",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <HtmlIcon />
              <CssIcon />
              <JavascriptIcon />
            </Box>
          </Box>
        </Box>
        <Typography>
          Download my resume <DownloadIcon />{" "}
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
