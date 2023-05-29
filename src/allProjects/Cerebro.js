import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Back } from "./BackButton";

export function Cerebro() {
    const headerPath = process.env.PUBLIC_URL + '/project-header/';
    const placeholderText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    return (
        <div className="project-page">
        <Back />
        <img src={headerPath + 'cerebro.png'} alt="cerebro project header" className="header-img"/>
        <div className="Section">
        <h1>PROJECT TITLE</h1>
        <hr/>
        <Box  sx={{ flexGrow: 1 }}>
            <Grid container spacing={0.5}>
                <Grid item xs={3}>
                <h5>ROLE</h5>
                <p>PLACEHOLDER</p>
                </Grid>
                <Grid item xs={3}>
                <h5>TIMELINE</h5>
                <p>PLACEHOLDER</p>
                </Grid>
                <Grid item xs={3}>
                <h5>TECH STACK</h5>
                <p>PLACEHOLDER</p>
                </Grid>
                <Grid item xs={3}>
                <h5>SKILLS</h5>
                <p>PLACEHOLDER</p>
                </Grid>
            </Grid>
        </Box>
        <div className="SubSection">
        <h3>heading 1</h3>
        <p>{placeholderText}</p>
        </div>
        <div className="SubSection">
        <h3>heading 2</h3>
        <p>{placeholderText}</p>
        </div>
        <div className="SubSection">
        <h3>heading 3</h3>
        <p>{placeholderText}</p>
        </div>
        
        {/* <div className="Section"> */}
        
        {/* </div> */}
        
        
        </div>
        </div>
    )
}