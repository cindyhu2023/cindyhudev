import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Back } from "./BackButton";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { MyFooter } from "../components/myFooter";

export function CreativeCoding() {
  const imagePath = process.env.PUBLIC_URL + "/project-img/";
  return (
    <div className="project-page">
      <Back />
      <div className="Section">
        <h3 className="creativeOverview">Creative Coding</h3>
        <hr />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={0.8}>
            <Grid item xs={4}>
              <h5>ROLE</h5>
              <p style={{ fontSize: "14px" }}>Frontend Developer</p>
            </Grid>
            {/* <Grid item xs={3}>
                <h5>TIMELINE</h5>
                <p style={{fontSize: '14px'}}>January 2021 - March 2021,</p>
                <p style={{fontSize: '14px'}}>March 2022 - June 2022</p>
                </Grid> */}
            <Grid item xs={4}>
              <h5>TECH STACK</h5>
              <p style={{ fontSize: "14px" }}> P5.js, A-Frame, JavaScript</p>
            </Grid>
            <Grid item xs={4}>
              <h5>SKILLS</h5>
              <p style={{ fontSize: "14px" }}>
                Creative Coding, Generative Methods, WebVR, Social Scene Design
              </p>
            </Grid>
          </Grid>
        </Box>
        <div className="SubSection">
          <h3>Overview</h3>
          <p>
            Here's a collection of small creative coding projects I've worked on
            for Generative Methods and Social AR/VR Studio class. I had fun
            making them, and I hope you have fun playing with them!
          </p>
          <p>
            All credits go to Prof. Kate Compton{" "}
            <a href="https://twitter.com/GalaxyKate" rel="noreferrer" target="_blank">
              @galaxykate
            </a>
            . She provided great templates for all projects so that we have
            something to build on easily!
          </p>
          <p><em>Hover over to view the full website in a new page</em></p>
        </div>
        <div className="SubSection">
          <h3>Generative Methods with P5.js</h3>
          <div className="ccGif" style={{ width: "70%", margin: "auto" }}>
            <img
              src={imagePath + "preview.gif"}
              style={{ width: "100%", height: "auto" }}
              alt="generate methods website preview"
            />
            <div className="overlay">
              <ButtonGroup orientation="vertical">
                <a
                  href="https://cindyhu2023.github.io/CS396-GenMeth/#"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", display: "block" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      margin: "10px",
                      padding: "5px 25px",
                      textTransform: "none",
                      width: "300px",
                    }}>
                    View full website
                  </Button>
                </a>
                <a
                  href="https://github.com/cindyhu2023/CS396-GenMeth"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", display: "block" }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    sx={{
                      margin: "10px",
                      padding: "5px 25px",
                      textTransform: "none",
                      display: "block",
                      width: "300px",
                    }}>
                    View repo on Github
                  </Button>
                </a>
              </ButtonGroup>
            </div>
          </div>
        </div>
        <div className="SubSection">
          <h3>Social Scene in WebVR with A-Frame</h3>
          <p>(Works better in Chrome)</p>
          <Grid container spacing={0.5}>
          <Grid item sm={6} xs={10}>
          <div className="ccGif">
            <img
              src={imagePath + "creative-coding-2.gif"}
              style={{ width: "100%", height: "auto" }}
              alt="generate methods website preview"
            />
            <div className="overlay">
              <ButtonGroup orientation="vertical">
                <a
                  href="https://beneficial-sugared-mimosa.glitch.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", display: "block" }}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      margin: "10px",
                      padding: "5px 25px",
                      textTransform: "none",
                      width: "300px",
                    }}>
                    View in new tab
                  </Button>
                </a>
                <a
                  href="https://glitch.com/edit/#!/beneficial-sugared-mimosa"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", display: "block" }}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    sx={{
                      margin: "10px",
                      padding: "5px 25px",
                      textTransform: "none",
                      display: "block",
                      width: "300px",
                    }}>
                    View repo on Glitch
                  </Button>
                </a>
              </ButtonGroup>
            </div>
          </div>
          </Grid>
          <Grid item sm={6} xs={10}>
          <div className="ccGif">
            <img
              src={imagePath + "creative-coding-3.gif"}
              style={{ width: "100%", height: "auto" }}
              alt="generate methods website preview"
            />
            <div className="overlay">
              <ButtonGroup orientation="vertical">
                <a
                  href="https://yvanchu.github.io/paripassu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none"}}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                      margin: "10px",
                      padding: "5px 25px",
                      textTransform: "none",
                      width: "300px",
                    }}>
                    View in new tab
                  </Button>
                </a>
                <a
                  href="https://github.com/yvanchu/paripassu"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none"}}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    sx={{
                      margin: "10px",
                      padding: "5px 25px",
                      textTransform: "none",
                      display: "block",
                      width: "300px",
                    }}>
                    View repo on Github
                  </Button>
                </a>
              </ButtonGroup>
            </div>
          </div>
          </Grid>
          <Grid item sm={6} xs={10} sx={{textAlign: 'center'}}>
          <p>Relaxing spot by the ocean during sunset 🌄</p>
          </Grid>
          <Grid item sm={6} xs={10} sx={{textAlign: 'center'}}>
          <p>Socializing spot for friends with floating lights and Kirby (Group project of 4)</p>
          </Grid>
          </Grid>
        </div>
      </div>
      <MyFooter />
    </div>
  );
}
