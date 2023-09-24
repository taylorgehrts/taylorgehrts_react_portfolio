import React from "react";
import { Grid, Card, CardContent, Typography, styled } from "@mui/material";
import "./Portfolio.css";

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

function Portfolio() {
  return (
    <Grid container spacing={2}>
      <LeftColumn item xs={12} md={4}>
        <Grid container direction="column" spacing={2}>
          {/* First Card */}
          <Grid item>
            <Card className="StyledCard">
              <CardContent>
                <h4 className="highlight">Taylor Gehrts</h4>
                <p>
                  Dirschauer Str 7<br></br>
                  10245 Berlin DE<br></br>
                  +49 173 9713567
                </p>
                <a href="mailto:taylorgehrts@gmail.com">
                  taylorgehrts@gmail.com
                </a>
              </CardContent>
            </Card>
          </Grid>
          {/* Second Card */}
          <Grid item>
            <Card className="StyledCard">
              <CardContent>
                <Typography variant="h3" className="StyledText">
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
                <br></br>
                <a
                  href="https://linkedin.com/in/taylor-gehrts-8768b1196"
                  className="StyledAlertText"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <br></br>
                <a
                  href="https://soundcloud.com/arohanpdx"
                  className="StyledAlertText"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Soundcloud
                </a>
                <br></br>
                <a
                  href="https://mordax.net"
                  className="StyledAlertText"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mordax
                </a>
              </CardContent>
            </Card>
          </Grid>
          {/* SKILLS*/}
          <Grid item>
            <Card className="StyledCard">
              <CardContent>
                <Typography variant="h3" className="StyledText">
                  SKILLS
                </Typography>
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
            </Card>
          </Grid>
        </Grid>
      </LeftColumn>

      <RightColumn item xs={12} md={8}>
        <Card className="StyledCard">
          <CardContent>
            <Typography className="StyledText" variant="h6">
              Objective
            </Typography>
            <p>
              Passionate Junior Full Stack Developer eager to apply my coding
              skills and problem-solving abilities to contribute to dynamic web
              development projects. Currently enrolled in a Full Stack
              Development Bootcamp at the University of Oregon, I have gained
              proficiency in HTML, CSS, JavaScript, Node.js, Express.js, SQL,
              NoSQL, React, and Progressive Web App (PWA) development.
              <br></br>
              <br></br>
              <Typography className="StyledText" variant="h6">
                Experience
              </Typography>
              <Typography variant="h6">
                Hinterland Bar and Carts / General Manager
              </Typography>
              2021-05 - 2023-08, Portland, US
              <br></br>
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
                  Visit:{" "}
                  <a href="https://hinterlandpdx.com" target="blank">
                    www.hinterlandpdx.com
                  </a>
                </li>
              </ul>
              <br></br>
              <Typography variant="h6">
                Masia / Assistant General Manager
              </Typography>
              2020-01 - 2020-12 Portland, US
              <br></br>
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
              <br></br>
              <Typography variant="h6">
                Mordax Systems/ Co-Founder/Operator
              </Typography>
              2015-01 - 2018-04, Vancouver, US
              <br></br>
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
                  For more details, visit:{" "}
                  <a href="https://mordax.net" target="blank">
                    www.mordax.net
                  </a>
                </li>
              </ul>
              <Typography className="StyledText" variant="h6">
                Education
              </Typography>
              <Typography variant="h6">
                University of Oregon / Full Stack Development
              </Typography>
              04/2023- Present, Online
              <br></br>
              <ul>
                <li>
                  Enrolled in the Full Stack Development Bootcamp, gaining
                  expertise in various web technologies.
                </li>
                <li>
                  Showcase of my work on GitHub:{" "}
                  <a href="https://github.com/taylorgehrts" target="blank">
                    https://github.com/
                  </a>
                </li>
              </ul>
              <Typography className="StyledText" variant="h6">
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
            </p>
          </CardContent>
        </Card>
      </RightColumn>
    </Grid>
  );
}

export default Portfolio;
