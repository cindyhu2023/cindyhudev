import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Back } from "./BackButton";
import { MyFooter } from '../components/myFooter';

export function TikTok() {
    const imagePath = process.env.PUBLIC_URL + '/project-img/';
    return (
        <div className="project-page">
        <Back />
        <div className="Section">
        <h3 className="tiktokOverview">TikTok: Reimagining Algorithm Feedback</h3>
        <hr/>
        <Box  sx={{ flexGrow: 1 }}>
            <Grid container spacing={0.8}>
                <Grid item xs={3}>
                <h5>ROLE</h5>
                <p style={{fontSize: '14px'}}>UX Designer</p>
                </Grid>
                <Grid item xs={3}>
                <h5>TIMELINE</h5>
                <p style={{fontSize: '14px'}}>January 2023 - March 2023</p>
                </Grid>
                <Grid item xs={3}>
                <h5>TOOLS</h5>
                <p style={{fontSize: '14px'}}> Figma </p>
                </Grid>
                <Grid item xs={3}>
                <h5>SKILLS</h5>
                <p style={{fontSize: '14px'}}>UX Design </p>
                </Grid>
            </Grid>
        </Box>
        <div className="SubSection">
        <h3 style={{width: '90%', margin: '50px auto', textAlign: 'center'}}>How might we create <b className='highlight'>a playful way</b> for users to give feedback to content recommendations?</h3>
        </div>
        <div className="SubSection">
        <h3>Overview</h3>
        <p>Imagine Spotify wrap, but for TikTok.</p>
        <p>TikTok users spent more time on the “For You” tab rather than the “Following” tab. Unlike other content platforms like YouTube or Instagram where it's more creator-driven, TikTok is more content-driven, meaning viewers are more interested in categories and trends and less about the creators they are following. </p>
        <p>Perhaps we've all wondered why the algorithm recommends certain videos to us. Instead of passively telling TikTok “I don't like this one”, what if we can say “Hey! Show me more videos of cats in unexpected places”?</p>
        <p>Therefore, we designed TikTok Monthly Recap, both for viewers and for creators. Keep reading to see more details of our design!</p>
        <p> We collaborated with TikTok's Brand Mission team for this project. Thanks to our client, we had the chance to give our final presentation at TikTok's San Jose campus, and it was fun experience!</p>
        </div>
        <div className="SubSection">
        <h3>Tiktok Monthly Roundup - Design highlights ✨</h3>
        <p>After many user interviews and iterations, we decided to focus on algorithm customizability, content inspirations, and shareability, for both viewers and creators.</p>
        <h4>For Viewer</h4>
        <img src={imagePath + 'tiktok-1.png'} alt="tiktok design for viewer" className="projImg-full"/>
        <h4>For Creator</h4>
        <img src={imagePath + 'tiktok-5.png'} alt="tiktok design for creator" className="projImg-full"/>
        <p style={{marginBottom: '0px'}}><b>⭐️ Algorithm customizability</b></p>
        <p>To make giving feedback more fun, we designed the bubbles which users can “resize” or “pop” the bubbles to reflect their preferences. For viewers, the original sizes of the bubbles represent how the user's view time is distributed among different genres. Users can adjust the size with slider to adjust how much or less they want to see from the genre in their feed. For creators, the original size represents the aggregated views and interactions from all videos under the same genres or hashtag. Adjusting the size means adjusting how much or less they want the algorithm to promote certain genres of videos over the others.</p>
        <p style={{marginBottom: '0px'}}><b>⭐️ Content inspirations</b></p>
        <p>All your inspirations in one place! For viewers, they can see the top trends around them and over the world with the real-time heat map to explore more content, as well as a curated list of sounds, hashtags, and creators they might be interested in. For creators, they see #CreatorsLikeYou and #TopTrendsForYou (highlights from trending hashtags similar to theirs), to help them find inspirations for their next video.</p>
        <p style={{marginBottom: '0px'}}><b>⭐️ Shareability</b></p>
        <p>Sharing to other social media can be an effective way to boost visitation back to TikTok. For viewers, we designed a taste card with user's avatar combined with their top view trends. For creators, we imagined video compilation of highlights from their top videos of the month, which they can instantly share their best work of the month without needing to edit one themselves.</p>
        </div>
        
        {/* <div className="SubSection">
        <h3>heading 2</h3>
        <p>{placeholderText}</p>
        </div>
        <div className="SubSection">
        <h3>heading 3</h3>
        <p>{placeholderText}</p>
        </div> */}
        
        </div>
        <MyFooter />
        </div>
    )
}