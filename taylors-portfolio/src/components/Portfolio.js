// Portfolio.js
import React from 'react';
import Project from './Project'; // Import the Project component
import './Portfolio.css'; // Import your Portfolio.css file
import { Grid } from '@mui/material';
import Project1Img from "../Assets/images/kiddoKare.png";
import Project2Img from "../Assets/images/whatsOnHand.png";
import Project3Img from "../Assets/images/firstPortfolio.png";
import Project4Img from "../Assets/images/codeQuiz.png";
import Project5Img from "../Assets/images/weather.png";
import Project6Img from "../Assets/images/calendar.png";

function Portfolio() {
  const projects = [
    {
      title: 'Kiddo Kare/Babysitting app',
      imageSrc: Project1Img,
      deployedLink: 'https://hidden-eyrie-72629-9ca91495354a.herokuapp.com/',
      githubLink: 'https://github.com/taylorgehrts/KIDDO_KARE',
    },
    {
      title: 'Whats On Hand/Cocktail Search App',
      imageSrc: Project2Img,
      deployedLink: 'https://quagsire369.github.io/Whats_On_Hand_Cocktail_Search/',
      githubLink: 'https://github.com/taylorgehrts/Whats_On_Hand_Cocktail_Search',
    },
    {
      title: 'Project 3',
      imageSrc: Project3Img,
      deployedLink: 'https://example.com/project2',
      githubLink: 'https://github.com/user/project2',
    },
    {
      title: 'Project 4',
      imageSrc: Project4Img,
      deployedLink: 'https://example.com/project2',
      githubLink: 'https://github.com/user/project2',
    },
    {
      title: 'Project 5',
      imageSrc: Project5Img,
      deployedLink: 'https://example.com/project2',
      githubLink: 'https://github.com/user/project2',
    },
    {
      title: 'Project 6',
      imageSrc: Project6Img,
      deployedLink: 'https://example.com/project2',
      githubLink: 'https://github.com/user/project2',
    },
    // Add more projects as needed
  ];

  return (
    <div className="portfolio">
      <h2>Portfolio</h2>
      <Grid container spacing={2}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Project
              title={project.title}
              imageSrc={project.imageSrc}
              deployedLink={project.deployedLink}
              githubLink={project.githubLink}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Portfolio;
