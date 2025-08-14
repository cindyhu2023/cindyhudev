import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

export function AboutMe() {
    const profilePath = process.env.PUBLIC_URL + '/profile.jpg';
    return (
        <div className="Section" id="about_me">
        <h1>About Me.</h1>
        <Grid sx={{marginTop: "30px"}} container spacing={4}>
        <Grid item xs={4}>
            <Avatar alt="Cindy Hu" src={profilePath} sx={{ width: "100%", height: "auto" }}/>
        </Grid>
        <Grid item xs={8}>
            <p>Oh hey, glad to see you are here!</p>
            <p>I’m Cindy. I’m from Taiwan. I graduated from Northwestern University in 2023, and I'm now a full stack software engineer at Niantic Spatial / 8th Wall building immersive 3D game and WebAR visual editor. Check out the cool stuff we build at <a href="https://8thwall.com" target="_blank" rel="noopener noreferrer">8th Wall</a>
! </p>
            <p>I would call myself a software engineer with a designer’s mindset: embrace ambiguity, be curious, and not afraid of obstacles.</p>
            <p>I like working on challenges that allow me to learn and grow the most, and I am also very interested in the intersection of design and technology where I create and build human-centered solutions that brings delight to everyday life.</p>
            <p>Things I like: traveling, photography, warm coffee in the morning, and figuring new stuff out</p>
            <p>Things I don’t like: any sports with a ball, aquarium, and being told what to do </p>
        </Grid>

        </Grid>
        </div>
    );
}