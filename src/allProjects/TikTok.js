import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Back } from "./BackButton";
import { MyFooter } from '../components/myFooter';

export function TikTok() {
    const headerPath = process.env.PUBLIC_URL + '/project-header/';
    return (
        <div className="project-page">
        <Back />
        <img src={headerPath + 'tiktok.png'} alt="tiktok project header" className="header-img"/>
        <div className="Section">
        <h1>TikTok Monthly Wrap Design</h1>
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
        <h3>(Page Under Construction)</h3>
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