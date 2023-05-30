import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Back } from "./BackButton";

export function Amazon() {
    const headerPath = process.env.PUBLIC_URL + '/project-header/';
    return (
        <div className="project-page">
        <Back />
        <img src={headerPath + 'amazon.png'} alt="amazon project header" className="header-img"/>
        <div className="Section">
        <h1>Optimization Service on AWS ECS</h1>
        <hr/>
        <Box  sx={{ flexGrow: 1}}>
            <Grid container spacing={0.8}>
                <Grid item xs={3}>
                <h5>ROLE</h5>
                <p style={{fontSize: '14px'}}>Software Engineer Intern</p>
                </Grid>
                <Grid item xs={3}>
                <h5>TIMELINE</h5>
                <p style={{fontSize: '14px'}}>June 2021 - September 2021</p>
                </Grid>
                <Grid item xs={3}>
                <h5>TECH STACK</h5>
                <p style={{fontSize: '14px'}}>Java, TypeScript, AWS (ECS, S3, DynamoDB, API Gateway, EventBridge)</p>
                </Grid>
                <Grid item xs={3}>
                <h5>SKILLS</h5>
                <p style={{fontSize: '14px'}}>Backend Software Engineering, System Design, Cloud Computing Architecture, Technical Document Writing</p>
                </Grid>
            </Grid>
        </Box>
        <div className="SubSection">
        <h3>Overview</h3>
        <p>(Disclaimer: This project is under NDA.)</p>
        <p style={{marginBottom: '0px'}}>During my time with Amazon Operations, I successfully achieved two significant milestones in my project:</p>
        {/* make numbered list with two list item*/}
        <ol>
            <li>At the team level, I built a new AWS service based on one of the team’s existing optimization services and created a comprehensive AWS migration guide tailored for the team’s area of work. </li>
            <li>At the organizational level, I demonstrated the feasibility of adopting an Infrastructure-As-Code architecture and containerizing the optimization and prioritization services in Sort Centers. By utilizing AWS Elastic Container Service (ECS), I effectively implemented a containerized approach, enhancing scalability, flexibility, and operational efficiency.</li>
        </ol>
        </div>
        <div className="SubSection">
        <h3>What I Learned</h3>
        <p style={{marginBottom: '0px'}}><b>Technical Document Writing</b></p>
        <p>Amazon’s engineering culture values documentation writing. As part of the project deliverables, I wrote two technical document: a design document at the beginning of the internship, and a project hand-off + AWS migration guide at the end of the internship.</p>
        <p style={{marginBottom: '0px'}}>In the process of writing the documents, I learned:</p>
        <ul>
            <li>Explaining design decisions, including service costs, technical trade-offs, maintainability, and scalability</li>
            <li>Understanding the audience and articulating technical impacts</li>
            <li>Project planning and scoping to make realistic timeline</li>
        </ul>
        <p style={{marginBottom: '0px'}}><b>Industry Practices and Tools</b></p>
        <p>It was my first ever internship in a company. I’m fortunate to learn so much about the standard industry practices and tools early on in my undergraduate time, such as working with a large, established code base, best coding practices, reading documentations, and asking for help. The experience helped me establish good habits as an engineer and onboard faster to my subsequent internships.</p>
       </div>
        
        {/* <div className="Section"> */}
        
        {/* </div> */}
        
        
        </div>
        </div>
    )
}