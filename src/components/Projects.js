import React from 'react';
import { projectSection, projectList } from "./config";
import Button from '@mui/material/Button';
import { useState } from "react";
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';


function EngineeringChip ({ label }) {
  return (
    <Chip
      label={label}
      color="primary"
      variant="contained"
      size="small"
      sx={{
        fontSize: "12px",
        padding: "3px",
        marginTop: "5px",
        marginRight: "5px",
      }}
    />
  )
}

function DesignChip ({ label }) {
  return (
    <Chip
      label={label}
      color="secondary"
      variant="contained"
      size="small"
      sx={{
        fontSize: "12px",
        padding: "3px",
        marginTop: "5px",
        marginRight: "5px",
      }}
    />
  )
}

function ResearchChip ({ label }) {
  return (
    <Chip
      label={label}
      color="info"
      variant="contained"
      size="small"
      sx={{
        fontSize: "12px",
        padding: "3px",
        marginTop: "5px",
        marginRight: "5px",
      }}
    />
  )
}

export function Project() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [ENGINEERING, DESIGN, RESEARCH] = projectSection;
    const engineeringProjects = projectList.filter(project => project.sections.includes(ENGINEERING));
    const designProjects = projectList.filter(project => project.sections.includes(DESIGN));
    const researchProjects = projectList.filter(project => project.sections.includes(RESEARCH));
    const [projects, setProjects] = useState(engineeringProjects);

    const logoPath = process.env.PUBLIC_URL + '/project-logo/';

    function changeSection(section) {
        if (section === ENGINEERING) {
            setProjects(engineeringProjects);
            setSelectedIndex(0);
        } else if (section === DESIGN) {
            setProjects(designProjects);
            setSelectedIndex(1);
        } else if (section === RESEARCH) {
            setProjects(researchProjects);
            setSelectedIndex(2);
        }
    }


    return (
        <div className="Section" id="projects">
        <h1>Projects.</h1>
        <div className="projectSections">
        <Button variant={selectedIndex === 0 ? "contained" : "outlined"} color="primary" sx={{margin: "10px", padding: "5px 25px"}} onClick={() => changeSection(ENGINEERING)}>Engineering</Button>
        <Button variant={selectedIndex === 1 ? "contained" : "outlined"} color="secondary" sx={{margin: "10px", padding: "5px 25px"}}  onClick={() => changeSection(DESIGN)}>
          UX Design
        </Button>
        <Button variant={selectedIndex === 2 ? "contained" : "outlined"} color="info" sx={{margin: "10px", padding: "5px 25px"}} onClick={() => changeSection(RESEARCH)}>
          Research
        </Button> 
        </div>
        <div className="projectList">
        { selectedIndex === 1 ? (<h5><i>More design projects coming soon!</i></h5>) : null}
          <Grid container sx={{marginTop: "20px"}}>
            {projects.map(project => (
              <Grid key={project.id} item xs={12} sm={6} md={4}>
                <div className="project" style={{textAlign: "center", marginLeft:"10px", marginRight:"10px", marginBottom:'20px'}}>
                <a href={project.url}>
                  <div className="project-img">
                    <img
                      style={{width: '100%', height: 'auto'}}
                      src={logoPath + project.img}
                      alt={project.title + ' logo'}
                    />
                    <div className="overlay">
                      <p className="projectDescription">{project.description}</p>
                    </div>  
                    </div>
                  <p style={{fontSize: '18px', marginBottom:'0px'}}>{project.title}</p>
                </a>
                <div className="projectTags">
                  {project.tags.map(tag => {
                    const [type, label] = tag;
                    if (type === ENGINEERING) {
                      return <EngineeringChip label={label} />
                    } else if (type === DESIGN) {
                      return <DesignChip label={label} />
                    } else if (type === RESEARCH) {
                      return <ResearchChip label={label} />
                    } else {
                      return null;
                   }
                  })}
                </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
        {/* <div className="projectList">
        {projects.map(project => (
            <div className="project">
            <img src={logoPath + project.img} alt={project.title + " logo"}/>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            </div>
        ))}
        </div> */}
        </div>
    )
}