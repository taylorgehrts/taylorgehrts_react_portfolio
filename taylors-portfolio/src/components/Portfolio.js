import React from 'react';
import Project from './Project';
import './Portfolio.css'; 
import { Grid } from '@mui/material';
import Project1Img from "../Assets/images/kiddoKare.png";
import Project2Img from "../Assets/images/whatsOnHand.png";
import Project3Img from "../Assets/images/firstPortfolio.png";
import Project4Img from "../Assets/images/traxsonic.png";
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
      title: 'HTML Portfolio',
      imageSrc: Project3Img,
      deployedLink: 'https://taylorgehrts.github.io/Taylors-Portfolio-App/',
      githubLink: 'https://github.com/taylorgehrts/Taylors-Portfolio-App',
    },
    {
      title: 'Traxsonic (Full Stack MERN APP)',
      imageSrc: Project4Img,
      deployedLink: 'https://secure-basin-55131-a178bdac2e9e.herokuapp.com/',
      githubLink: 'https://github.com/taylorgehrts/Traxonic',
    },
    {
      title: 'Weather Forcast App',
      imageSrc: Project5Img,
      deployedLink: 'https://taylorgehrts.github.io/Taylors_weather_app/',
      githubLink: 'https://github.com/taylorgehrts/Taylors_weather_app',
    },
    {
      title: 'Work Day Scheduler',
      imageSrc: Project6Img,
      deployedLink: 'https://taylorgehrts.github.io/Taylors_Calander_app/',
      githubLink: 'https://github.com/taylorgehrts/Taylors_Calander_app',
    },
   
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
