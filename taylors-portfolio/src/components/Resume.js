import React from "react";
import { Grid, Card, CardContent, Typography, styled } from "@mui/material";
import "./Resume.css";

const LeftColumn = styled(Grid)(({ theme }) => ({
  order: 1,
  [theme.breakpoints.down("sm")]: {
    order: 2,
  },
}));

const RightColumn = styled(Grid)(({ theme }) => ({
  order: 2,
  [theme.breakpoints.down("sm")]: {
    order: 1,
  },
}));

function Resume() {
  return (
    <Grid container spacing={2}>
      <LeftColumn item xs={12} md={4}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Card className="StyledCard">
              <CardContent>
                <Typography variant="h4" className="highlight">
                  Taylor Gehrts
                </Typography>
                <p>
                  Dirschauer Str 7<br />
                  10245 Berlin DE<br />
                  +49 173 9713567
                  <br />
                  <a href="mailto:taylorgehrts@gmail.com">taylorgehrts@gmail.com</a>
                </p>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className="StyledCard">
              <CardContent>
                <Typography variant="h4" className="StyledText">
                  LINKS
                </Typography>
                <a
                  href="https://github.com/taylorgehrts"
                  className="StyledAlertText"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <br />
                <a
                  href="https://linkedin.com/in/taylor-gehrts-8768b1196"
                  className="StyledAlertText"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <br />
                <a
                  href="https://soundcloud.com/arohanpdx"
                  className="StyledAlertText"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Soundcloud
                </a>
                <br />
                <a
                  href="https://mordax.net"
                  className="StyledAlertText"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mordax
                </a>
                <br />
                <a
                  href="https://drive.google.com/file/d/1z-2kvygihSYoIcFuluxoiY8mhxXIFuO3/view?usp=drive_link"
                  className="StyledAlertText"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className="StyledCard">
              <CardContent>
                <Typography variant="h4" className="StyledText">
                  SKILLS
                </Typography>
                <Typography variant="h6" className="highlight">
                  WEB DEVELOPMENT
                </Typography>
                <p>
                  HTML, CSS, GIT, JAVASCRIPT, NODE.JS, EXPRESS.JS, SQL, NOSQL,
                  REACT, GRAPHQL
                </p>
                <Typography variant="h6" className="highlight">
                  MUSIC
                </Typography>
                <p>
                  ABLETON, MODULAR SYNTH, MIDI, HARDWARE, ENGINEERING, COMPOSING
                </p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </LeftColumn>

      <RightColumn item xs={12} md={8}>
        <Card className="StyledCard">
          <CardContent>
            <Typography className="StyledText" variant="h4">
              Objective
            </Typography>
            <p>
              Passionate Junior Full Stack Developer eager to apply my coding
              skills and problem-solving abilities to contribute to dynamic web
              development projects. Currently enrolled in a Full Stack
              Development Bootcamp at the University of Oregon, I have gained
              proficiency in HTML, CSS, JavaScript, Node.js, Express.js, SQL,
              NoSQL, React, and Progressive Web App (PWA) development.
              </p>
              <br /><br />
              <Typography className="StyledText" variant="h4">
                Experience
              </Typography>
              <Typography variant="h6">
                Hinterland Bar and Carts / General Manager
              </Typography>
              2021-05 - 2023-08, Portland, US
              <br />
              <ul>
                <li>
                  Consulted on the establishment's design and layout, overseeing
                  equipment procurement and vendor account setup.
                </li>
                <li>
                  Implemented key systems, including accounting, POS, bar and
                  service programs.
                </li>
                <li>
                  Managed hiring, scheduling, HR, and payroll, handling all
                  day-to-day operational tasks.
                </li>
                <li>
                  Visit: <a href="https://hinterlandpdx.com" target="_blank" rel="noopener noreferrer">www.hinterlandpdx.com</a>
                </li>
              </ul>
              <br />
              <Typography variant="h6">
                Masia / Assistant General Manager
              </Typography>
              2020-01 - 2020-12 Portland, US
              <br />
              <ul>
                <li>
                  Orchestrated front-of-house systems setup, including POS and
                  paperwork tracking.
                </li>
                <li>
                  Assumed various roles, from bartending and barista to server
                  and floor manager, during the pandemic.
                </li>
                <li>
                  Unfortunately, the restaurant had to close due to the
                  pandemic.
                </li>
              </ul>
              <br />
              <Typography variant="h6">
                Mordax Systems/ Co-Founder/Operator
              </Typography>
              2015-01 - 2018-04, Vancouver, US
              <br />
              <ul>
                <li>
                  Co-founded and operated a successful Modular Synthesizer
                  company from inception.
                </li>
                <li>
                  Managed all aspects, including tax and business setup, circuit
                  design, code development, design work, and manufacturing
                  coordination.
                </li>
                <li>
                  Handled customer service, website design, and accounting.
                </li>
                <li>
                  For more details, visit: <a href="https://mordax.net" target="_blank" rel="noopener noreferrer">www.mordax.net</a>
                </li>
              </ul>
              <Typography className="StyledText" variant="h4">
                Education
              </Typography>
              <Typography variant="h6">
                University of Oregon / Full Stack Development
              </Typography>
              04/2023- Present, Online
              <br />
              <ul>
                <li>
                  Enrolled in the Full Stack Development Bootcamp, gaining
                  expertise in various web technologies.
                </li>
                <li>
                  Showcase of my work on GitHub: <a href="https://github.com/taylorgehrts" target="_blank" rel="noopener noreferrer">https://github.com/</a>
                </li>
              </ul>
              <Typography className="StyledText" variant="h4">
                Soft Skills
              </Typography>
              <ul>
                <li>
                  Creative: Think outside the box with high emphasis on
                  experimentation
                </li>
                <li>
                  Problem Solver: Finding efficient and novel way to overcome
                  challenges
                </li>
                <li>English: Fluent</li>
                <li>German: Basic, Enrolled in A2 class now</li>
              </ul>
            
          </CardContent>
        </Card>
      </RightColumn>
    </Grid>
  );
}

export default Resume;
