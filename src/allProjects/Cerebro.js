import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Back } from "./BackButton";
import { MyFooter } from '../components/myFooter';

export function Cerebro() {
    const headerPath = process.env.PUBLIC_URL + '/project-header/';
    const imagePath = process.env.PUBLIC_URL + '/project-img/';
    return (
        <div className="project-page">
        <Back />
        <img src={headerPath + 'cerebro.png'} alt="cerebro project header" className="header-img"/>
        <div className="Section">
        <h1>Cerebro: Opportunistic Collective Experience</h1>
        <hr/>
        <Box  sx={{ flexGrow: 1}}>
            <Grid container spacing={0.8}>
                <Grid item xs={3}>
                <h5>ROLE</h5>
                <p style={{fontSize: '14px'}}>Researcher, Developer (Team of 2)</p>
                </Grid>
                <Grid item xs={3}>
                <h5>TIMELINE</h5>
                <p style={{fontSize: '14px'}}>September 2021 - December 2022</p>
                </Grid>
                <Grid item xs={3}>
                <h5>TECH STACK</h5>
                <p style={{fontSize: '14px'}}>React, Meteor.js, MongoDB, JavaScript, Node.js, Heroku</p>
                </Grid>
                <Grid item xs={3}>
                <h5>SKILLS</h5>
                <p style={{fontSize: '14px'}}>Human-Computer Interaction Research, UX Design, Full-stack Software Engineering, Agile Development, Academic Writing</p>
                </Grid>
            </Grid>
        </Box>
        <div className="SubSection">
        <h3>Overview</h3>
        <p>Cerebro is a mobile app that prompts you to share small moments of your life to start conversations. This is also a human-computer interaction research project that tries to explore how mundane, everyday moments can help building relationships digitally with someone you don't know. </p>
        <p>Throughout the time of working on this project, my teammate and I have conducted many rounds of user testings and shipped a few iterations of the prototype. I have learned a lot about <b className='highlight'>human-centered design process</b> and <b className='highlight'>agile development practices</b>. But the most valuable thing I have learned is <b className='highlight'>self-reflection and metacognition</b>, which is reflecting on what I learn, how I learn, and how I want to grow.</p>
        <p>This project is part of the Design, Technology, and Research (DTR) studio at Northwestern. I have also published the paper at ACM Conference of Human Factors in Computing System (CHI) 2022 under Student Research Competition track.  
        <a href="https://dl.acm.org/doi/fullHtml/10.1145/3491101.3516810">[View the paper here!]</a>
        </p>
        <img src={imagePath + 'dtr1.jpg'} className='projImg' alt='presentation at CHI'/>
        <p className="imgCaption">My presentation at CHI 2022 in New Orleans, LA</p>
        </div>
        <div className="SubSection">
        <h3>Ever Had an Awkward Experience Talking to Someone Online?</h3>
        <p>Do you ever have this experience? Met someone interesting briefly and really wished to know them better, “stalked” them online and browsed all of their social media profiles, and wanted to start a conversation but millions of “what-ifs” in your head wouldn’t go away.</p>
        <p>Why is chatting online so stressful?</p>
        <img src={imagePath + 'dtr2.png'} className='projImg' alt='facebook and messenger screenshots'/>
        <p className="imgCaption">Felt the struggle? Me too.</p>
        </div>
        <div className="SubSection">
        <h3>What If We Can Bring Physical Context to Online Chat?</h3>
        <p>When we talk to someone in person, like in a coffee shop, small things in the our physical surroundings -- a drink in their hand, a pin on their backpack, or a sticker on their laptops -- become shared physical context that help you start conversations more organically, even if we don’t know the other person so well.</p>
        <p>But when we are talking online, all we have left is an empty chat room. What if we can bring the sense of shared physical context into the online space as if we are talking in person, instead of trying to hard to stalk them on social media?</p>
        </div>
        <div className="SubSection">
        <h3>Opportunistic Collective Experiences (OCEs)</h3>
        <p><a href='http://youralien.github.io'>Ryan Louie</a>, my PhD research mentor, introduced Opportunistic Collective Experiences (OCEs) in his paper <em><a href='https://dl.acm.org/doi/10.1145/3434178'>Opportunistic Collective Experiences: Identifying Shared Situations and Structuring Shared Activities at Distance</a></em>. As described in the paper, OCEs are “social experiences powered by computer programs that identify opportune moments when users share situations across distance and structure shared activities in those situations”.</p>
        <p>Building off of Ryan’s work, we designed a collection of OCEs that prompts users to share small daily moments with another user they are paired with based on their physical locations. For example, when User A is at a library, they will receive a prompt asking about their studying moments and submit their response on an app. When User B is also at a library in the following days, they will also receive the same prompt. Once User B submits their responses, both of them would be able to view what each other has shared.</p>
        </div>
        <div className="SubSection">
        <h3>Cerebro: mobile app for OCEs</h3>
        <Box  sx={{ flexGrow: 1}}>
            <Grid container spacing={1}>
                <Grid item xs={3}>
                <img src={imagePath + 'dtr3-1.png'} alt='cerebro app screenshot 1' style={{width:"100%", height:"auto"}}/>
                </Grid>
                <Grid item xs={3}>
                <img src={imagePath + 'dtr3-2.png'} alt='cerebro app screenshot 1' style={{width:"100%", height:"auto"}}/>
                </Grid>
                <Grid item xs={3}>
                <img src={imagePath + 'dtr3-3.png'} alt='cerebro app screenshot 1' style={{width:"100%", height:"auto"}}/>
                </Grid>
                <Grid item xs={3}>
                <img src={imagePath + 'dtr3-4.png'} alt='cerebro app screenshot 1' style={{width:"100%", height:"auto"}}/>
                </Grid>
                <Grid item xs={3}>
                <p className='screenshotCaption'> Get notified when there is an OCE available </p>
                </Grid>
                <Grid item xs={3}>
                <p className='screenshotCaption'> View all available OCEs</p>
                </Grid>
                <Grid item xs={3}>
                <p className='screenshotCaption'> Submit an image and caption </p>
                </Grid>
                <Grid item xs={3}>
                <p className='screenshotCaption'> View the other user's submission and chat</p>
                </Grid>
            </Grid>
        </Box>

        <p>The app is developed with React.js for frontend, Meteor.js for backend, MongoDB for data storage, Heroku for hosting, and Cordova for compiling the web app into a distributable mobile app for user testings. The app also uses location tracking and calls Yelp’s API for converting geo-locations to physical contexts, such as labeling a location is restaurant, Japanese, etc.</p>

        </div>
        <div className="SubSection">
        <h3>What I Learned</h3>
        <p style={{marginBottom: '0px'}}><b>Human-Centered Design Process</b></p>
        <p>Unlike the other design classes I have taken which we usually operate on a 10-week class schedule, for this project, I have a lot more time to dive deep into each step of the design process and iterate. We conducted many rounds of user interviews to test our research arguments and identify obstacles with new designs, and used the testing insights to determine what to do next.  </p>
        <p style={{marginBottom: '0px'}}><b>Agile Development and Risk Assessment</b></p>
        <p>At beginning of each sprint, my teammate and I would write down user stories and tasks, assign points to each task, and discuss the plan with our mentor. But unlike other sprint planning I was part of, we had more discussion on “riskiest risks” and how to focus on the top priority with the limited energy and time that we have. I have used the same mindset a lot to help me plan and work on things outside of this project. </p>
        <p style={{marginBottom: '0px'}}><b>Self-Reflection and Metacognition</b></p>
        <p>Perhaps this is the most valuable takeaway I have from the class. Instead of only looking out the progress we made on the project, our mentors also care a lot about how we are learning and growing. Because of this class, I have reflected a lot on how I work, what matters to me, and how I can improve and grow as a person. I’ve grown a lot in the one year of working on this project, and I’m still trying to practice metacognition on my own afterwards.</p>
        </div>

        <div className="SubSection">
        <h3>Note</h3>
        <p>My teammate and I have always joked about re-writing the codebase in modern tech stack and release the app to App Store, but we never had the time and dedication to make this happen. If you found this concept interesting, shoot me an email at cindyhu2023@u.northwestern.edu!</p>
        <p>Also, there are several on-going projects in DTR. Students typically work on a project for 2-4 quarters and hand-off the project to the next student when they leave DTR. I’m grateful to be on a project that has a solid foundation for me to keep iterating on. It wouldn’t be possible for me to publish a paper and present at CHI in my second quarter without all previous work. Checkout all the contributors on the project, other projects, and the wonderful community at <a href='https://dtr.northwestern.edu/'>[DTR’s website]</a>!</p>
        </div>
        </div>
        <MyFooter/>
        </div>
    )
}