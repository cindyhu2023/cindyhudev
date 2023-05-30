import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Back } from "./BackButton";
import Button from '@mui/material/Button';

export function FlappyPhone() {
    const headerPath = process.env.PUBLIC_URL + '/project-header/';
    const imagePath = process.env.PUBLIC_URL + '/project-img/';    
    return (
        <div className="project-page">
        <Back />
        <img src={headerPath + 'flappy-phone.png'} alt="flappy phone project header" className="header-img"/>
        <div className="Section">
        <h1>WildHacks 2023: Flappy Phone</h1>
        <hr/>
        <Box  sx={{ flexGrow: 1 }}>
            <Grid container spacing={0.8}>
                <Grid item xs={3}>
                <h5>ROLE</h5>
                <p style={{fontSize: '14px'}}>Frontend Developer (Team of 4)</p>
                </Grid>
                <Grid item xs={3}>
                <h5>TIMELINE</h5>
                <p style={{fontSize: '14px'}}>24 hours</p>
                </Grid>
                <Grid item xs={3}>
                <h5>TECH STACK</h5>
                <p style={{fontSize: '14px'}}> React, PixiJS, JavaScript, Firebase</p>
                </Grid>
                <Grid item xs={3}>
                <h5>SKILLS</h5>
                <p style={{fontSize: '14px'}}>Game Development, Frontend Software Engineering</p>
                </Grid>
            </Grid>
        </Box>
        <div className="SubSection">
        <h3>Overview</h3>
        <p>Flappy Bird, but you flap your phone to fly.</p>
        <p>Inspired by Wii Sports and Flappy Bird, we used accelerometer and gyroscope data from iPhone to build an immersive game experience. You can join the game on your laptop and use your iPhone as the controller to play the game.</p>
        <p>The app is built with React, Pixi.js and Firebase. I worked on the game logic and frontend with the React-Pixi library, while my teammates worked on motion data capturing, firebase integration, and the game leaderboard. Really proud of what we have built in 24 hours! Checkout my teammates at <a href="https://y.at/👑🐀🐻🚪">https://y.at/👑🐀🐻🚪</a></p>
        <p>The project is submitted to Northwestern's WildHacks 2023 and won the best design prize. <a href="https://flappy-phone-wildhacks.web.app">Try out the game</a> or <a href="https://github.com/yvanchu/flappyphone">checkout our Github repo</a>!</p>
        <img src={imagePath + 'flappy1.png'} className='projImg' alt="flappy phone game"/>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <a href="https://flappy-phone-wildhacks.web.app" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <Button variant='contained' color="primary" sx={{margin: "10px", padding: "5px 25px", textTransform: "none"}}>Play Flappy Phone!</Button>
        </a>
        <a href="https://github.com/yvanchu/flappyphone" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <Button variant='outlined' color="primary" sx={{margin: "10px", padding: "5px 25px", textTransform: "none"}}>View Github Repo</Button>
        </a>
        </div>
        <img src={imagePath + 'flappy2.png'} className='projImg' alt="flappy phone leaderboard"/>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <a href="https://flappy-phone-wildhacks.web.app/flappy/flock/268479359" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
        <Button variant='contained' color="primary" sx={{margin: "10px", padding: "5px 25px", textTransform: "none"}}>View Leaderboard</Button>
        </a>
        </div>
        </div>
        </div>
        </div>
    )
}