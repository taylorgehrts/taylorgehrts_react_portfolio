import React from "react";
import { Grid, Card, CardContent, Typography, styled } from "@mui/material";
import BioPic from "../Assets/images/TaylorPic.png";

const LeftColumn = styled(Grid)(({ theme }) => ({
  order: 1, // Default order for left column
  [theme.breakpoints.down("sm")]: {
    order: 2, // New order for left column on smaller screens
  },
}));

const RightColumn = styled(Grid)(({ theme }) => ({
  order: 2, // Default order for right column
  [theme.breakpoints.down("sm")]: {
    order: 1, // New order for right column on smaller screens
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  margin: "16px", // Add margin to create inset from the screen edge
  backgroundColor: "#232E34", // Background color
  color: "#D7CCDA", // Regular text color
  "& .highlight": {
    color: "#FFBA49", // Highlighted text color
  },
  "& .styledText": {
    color: "#00A878", // Styled text color
  },
}));

const StyledImage = styled("img")({
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain", // To fit the image inside the card
  // Center the image horizontally and vertically
  display: "block", // Ensure block-level display for the image
  margin: "0 auto", // Center horizontally
});

const StyledText = styled(Typography)({
  color: "#00A878", // Text color for alert text
});

const StyledAlertText = styled(Typography)({
  color: "#FFBA49", // Text color for alert-like text
});

function About() {
  return (
    <Grid container spacing={2}>
      <LeftColumn item xs={12} md={4}>
        <Grid container direction="column" spacing={2}>
          {/* First Card */}
          <Grid item>
            <StyledCard>
              <StyledImage src={BioPic} alt="Card 1" />
            </StyledCard>
          </Grid>
          {/* Second Card */}
          <Grid item>
            <StyledCard>
              <CardContent>
                <StyledText variant="h3">LINKS</StyledText>
                <a href="https://github.com/taylorgehrts" style={{ color: "#FFBA49", textDecoration: "none", }}target="_blank">
                  GitHub
                </a><br></br>
                <a href="https://linkedin.com/in/taylor-gehrts-8768b1196" style={{ color: "#FFBA49", textDecoration: "none", }}target="_blank">
                  LinkedIn
                </a><br></br>
                <a href="https://soundcloud.com/arohanpdx" style={{ color: "#FFBA49" , textDecoration: "none",}}target="_blank">
                  Soundcloud
                </a><br></br>
                <a href="https://mordax.net" style={{ color: "#FFBA49", textDecoration: "none", }}target="_blank">
                  Mordax
                </a>
              </CardContent>
            </StyledCard>
          </Grid>
          {/* Third Card */}
          <Grid item>
            <StyledCard>
              <CardContent>
                <StyledText variant="h3">SKILLS</StyledText>
                <h4 className="highlight">WEB DEVELOPMENT</h4>
                <p>
                  HTML, CSS, GIT, JAVASCRIPT, NODE.JS, EXPRESS.JS, SQL, NOSQL,
                  REACT, GRAPHQL
                </p>
                <h4 className="highlight">MUSIC</h4>
                <p>
                  ABLETON, MODULAR SYNTH, MIDI, HARDWARE, ENGINEERING, COMPOSING
                </p>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </LeftColumn>

      <RightColumn item xs={12} md={8}>
        <StyledCard>
          <CardContent>
            <Typography className="highlight" variant="h3">
              ABOUT ME
            </Typography>
            <p>
              I'm Taylor Gehrts, from Portland, Oregon, but now based in Berlin
              Germany. I've been immersed in the worlds of electronic music,
              art, and software development since as far back as 1999. My
              journey began with industrial bands and digital art experiments.
              <br></br>
              <br></br>
              Over the years, I've been part of different musical projects.
              These include mori, an electro-acoustic band, and Warm Hands, an
              electronic heavy post-punk band. I've also ventured into the dark
              dance scene with my solo project, Arohan. Currently, I'm focusing
              on producing techno and industrial music under my full name,
              Taylor Gehrts.<br></br>
              <br></br>
              My journey into coding started when I co-founded the modular
              synthesizer company, Mordax Systems. Although I spent most of my
              time managing the business and handling product logistics, it
              piqued my interest in coding. In my quest for knowledge, I began
              experimenting with processing for live visual effects, and I
              explored game design using Unity and Game Maker. Realizing the
              potential of coding, I decided to take a more structured approach
              and enrolled in a coding boot camp.<br></br>
              <br></br>
              At the University of Oregon, I completed a full-stack code boot
              camp, gaining proficiency in various technologies such as{" "}
              <span className="styledText">
                HTML, CSS, Git, JavaScript, Node.js, Express.js, SQL, NoSQL,
                React, and Progressive Web App (PWA)
              </span>{" "}
              development. My journey continues as I explore the intersections
              of music, art, and software development with a focused and
              pragmatic approach.
            </p>
          </CardContent>
        </StyledCard>
      </RightColumn>
    </Grid>
  );
}

export default About;
