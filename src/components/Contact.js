import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export function Contact() {
    const iconPath = process.env.PUBLIC_URL + '/icon/';
    return (
        <div className="Section Contact" id="contact">
        <h1 style={{textAlign:'center'}}>Contact.</h1>
        <Container sx={{width:'70%', marginLeft: 'auto', marginRight:'auto', marginTop: '50px'}}>
        <Grid container spacing={2} >
            <Grid item xs={2}>
                <img src={iconPath + 'mail.png'}  className="contact-icon" alt='mail icon'/>
            </Grid>
            <Grid item xs={10} className="contact-text">
                <a href="mailto:cindyhu2023@u.northwestern.edu">
                    cindyhu2023@u.northwestern.edu
                </a>
            </Grid>
            <Grid item xs={2}>
                <img src={iconPath + 'linkedin.png'}  className="contact-icon" alt="linkedin icon"/>
            </Grid>
            <Grid item xs={10} className="contact-text">
                <a href="https://www.linkedin.com/in/cindyhu2023/">
                linkedin.com/in/cindyhu2023
                </a>
            </Grid>
            <Grid item xs={2}>
                <img src={iconPath + 'github.png'}  className="contact-icon" alt="github icon"/>
            </Grid>
            <Grid item xs={10} className="contact-text">
            <a href="https://github.com/cindyhu2023">
                github.com/cindyhu2023
            </a>
            </Grid>
        </Grid>
        </Container>
        </div>
    )
    
}