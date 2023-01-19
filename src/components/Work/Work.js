import work from "../../assets/Work.jpg";
import SouthIcon from "@mui/icons-material/South";
import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";

const Work = () => {
  return (
    <Box
      sx={{
        border: "2px solid green",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: 500,
          border: "2px solid red",
        }}
      >
        <Typography mb={4}>
          Digital product designer who can work with code, currently building
          tools for myself
        </Typography>
        <Typography>
          I craft strategy-based products by asking the right questions and
          understanding the problem. I strive in achieving a positive impact on
          any company or product I am working on.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: 860,
          alignItems: "flex-end",
          columnGap: 5,
          border: "2px solid blue",
        }}
      >
        <IconButton>
          <Typography>View my work </Typography>
          <SouthIcon />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: 860,
            columnGap: 5,
            border: "2px solid brown",
          }}
        >
          <Box>
            <Card
              sx={{
                width: 400,
                border: "2px dotted red",
              }}
            >
              <CardHeader
                title={
                  <Typography variant="subtitle1">
                    #01 - Product Design
                  </Typography>
                }
                subheader={
                  <Typography variant="h5">My personal portfolio</Typography>
                }
              />
              <CardMedia
                component="img"
                height="657"
                image={work}
                alt="Paella dish"
              />
            </Card>
          </Box>
          <Box>
            <Card
              sx={{
                width: 400,
                border: "2px dotted red",
                marginTop: "100px",
              }}
            >
              <CardHeader
                title={
                  <Typography variant="subtitle1">
                    #01 - Product Design
                  </Typography>
                }
                subheader={
                  <Typography variant="h5">My personal portfolio</Typography>
                }
              />
              <CardMedia
                component="img"
                height="657"
                image={work}
                alt="Paella dish"
              />
            </Card>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px dotted red",
          height: 543,
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            border: "2px dotted green",
            width: 943,
            height: "max-content",
            gap: 20,
          }}
        >
          <Box>
            <Typography
              sx={{
                width: "max-content",
              }}
            >
              How I Work
            </Typography>
          </Box>
          <Box>
            <Typography>
              Briefing Understanding the problem has always been the forefront
              of my process. I consider project briefing as the most important
              stage as erroneous understanding can lead to misguided designs.
            </Typography>
            <Typography>
              Strategy Clients come in different takes; some say they know what
              they want, and some might have no idea. Whatever their take may
              be, I always ask for their objective, and dive deep to understand
              what can solve their problem.
            </Typography>
            <Typography>
              Design → Review → Iteration Most of the time, I dive straight to
              doing wireframes in Figma or Sketch. From wireframes to
              high-fidelity designs, I take client engagement in high regard.
              Reviews and feedback make part in the success of the project.
              Necessary iterations can take place until we achieve the desired
              solution.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Work;
