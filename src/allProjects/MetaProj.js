import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Back } from "./BackButton";
import { MyFooter } from '../components/myFooter';


export function Meta() {
    const headerPath = process.env.PUBLIC_URL + '/project-header/';
    const imagePath = process.env.PUBLIC_URL + '/project-img/';
    const imageStyle = {
        width: '95%',
        height: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
    return (
        <div className="project-page">
        <Back />
        <img src={headerPath + 'meta.png'} alt="meta project header" className="header-img"/>
        <div className="Section">
        <h1>Facebook URL Sharing Wrapper</h1>
        <hr/>
        <Box  sx={{ flexGrow: 1 }}>
            <Grid container spacing={0.8}>
                <Grid item xs={3}>
                <h5>ROLE</h5>
                <p style={{fontSize: '14px'}}>Software Engineer Intern</p>
                </Grid>
                <Grid item xs={3}>
                <h5>TIMELINE</h5>
                <p style={{fontSize: '14px'}}>June 2022 - September 2022</p>
                </Grid>
                <Grid item xs={3}>
                <h5>TECH STACK</h5>
                <p style={{fontSize: '14px'}}> Hack/PHP, GraphQL, Hive, Scuba, Mercurial (monorepo source control)</p>
                </Grid>
                <Grid item xs={3}>
                <h5>SKILLS</h5>
                <p style={{fontSize: '14px'}}>Backend Software Engineering, API and System Design, Cross-Functional Collaboration</p>
                </Grid>
            </Grid>
        </Box>
        <div className="SubSection">
        <h3>Overview</h3>
        <p>(Disclaimer: This project is under NDA.)</p>
        <p>I designed and built a backend platform with GraphQL APIs to address the challenge of measuring private post-sharing (e.g. messaging post URLs to friends) while anonymizing individual user activities. On other social media platforms like TikTok and Pinterests, users receive a unique, shortened URL each time they copy a link to a post, whereas Facebook users receive a same URL every time. Therefore, the platform handles URL shortening and redirecting for Facebook posts in order to gather data for data scientists to analyze user’s post sharing behaviors and visitation patterns on Facebook. In addition, the APIs also provide customization options for URL previews when shared through Messenger and Facebook in-app inbox for a better messaging experience.</p>
        <Box  sx={{ flexGrow: 1 }}>
            <Grid container spacing={0} style={{ display: 'flex', alignItems: 'center', marginTop: '30px', marginBottom: '30px' }}>
                <Grid item xs={3}>
                <img src={imagePath + 'meta-1.png'} alt="pinterest screenshot" style={imageStyle}/>
                </Grid>
                <Grid item xs={3}>
                <p><b>Pinterest</b></p>
                <div style={{ wordWrap: 'break-word', fontSize: '14px' }}>
                <p>https://pin.it/6EFhHPR</p>
                <p>https://pin.it/7gCTlL6</p>
                <p>(both take you to the same post)</p>
                </div>
                </Grid>
                <Grid item xs={3}>
                <img src={imagePath + 'meta-2.png'} alt="facebook screenshot" style={imageStyle}/>
                </Grid>
                <Grid item xs={3}>
                <p><b>Facebook</b></p>
                <div style={{ wordWrap: 'break-word', fontSize: '14px' }}>
                <p>https://www.facebook.com/100064360016677/posts/pfbid02fMLAi5DkS4p4eSasZwsU3wZWAL3wLdu5Dk1Jwbik2TVh4vwk73qKthfrpGVEXHtMl</p>
                <p>(You always get a similar-looking link back)</p>
                </div>
                </Grid>
            </Grid>
        </Box>
        </div>
        <div className="SubSection">
        <h3>What I Learned</h3>
        <p style={{marginBottom: '0px'}}><b>Scalability, efficiency, and flexibility</b></p>
        <p>Considering the potential call volumes to the APIs, I spent a lot of time discussing with my mentors about the platform design to reduce any unnecessary API requests and data storage. And because the intended users of the APIs are other teams in Facebook, I designed the platform to be more flexible in order to cater different teams’ own needs and to add more features in the future.</p>
        <p style={{marginBottom: '0px'}}><b>Product security and user privacy</b></p>
        <p>Since shortening URLs can increase the chance of exposing the underneath URLs by brute force, I learned a lot about product security practices at Meta to make sure the platform is secured and reliable to use. To make sure the platform complies with privacy regulation, I also learned about how to handle the data storing and logging such that the data scientists can derive useful insights without risking users’ privacy. </p>
        <p style={{marginBottom: '0px'}}><b>Project Ownership and Cross-functional collaboration</b></p>
        <p>I had the chance to work with product designers, client engineers, data engineers, and data scientists to scope and design my project together, which really helps me understand the product development cycle and learn communication skills. Towards the end of my internship, I also actively tried to reach out to other client teams outside of our org and find opportunities to see how my project could benefit their teams. </p>
        </div>
        </div>
        <MyFooter />
        </div>
    )
}