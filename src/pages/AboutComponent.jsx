import React from 'react';
import { Grid, Button, Typography, Stack, Box } from '@mui/material';

const AboutComponent = () => {
    return (
        <>
            <Box >
        <Typography variant="h4" gutterBottom color={'white'} display={'flex'} justifyContent={'center'} fontWeight={'bold'} marginTop={"10%"} marginBottom={"5%"}>
            About Me
        </Typography>
            </Box>
        <Grid container spacing={14}>
            {/* Photo */}
            <Grid item xs={12} sm={7}>
                <img src="../../public/MyPhtot.webp" alt="Your Photo" style={{ width: '100%', borderRadius: '8px' }} />
            </Grid>
            {/* Information */}
                <Grid item xs={12} sm={4} container direction="column" justifyContent="center" color={'white'}>
                    <Typography variant="body1" paragraph sx={{fontSize:'30px' , fontWeight:'bold'}}>
                        We can make it together
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there <Typography component='span' sx={{color:'#800000' , "&:hover":{color:'#E5E5E5', transition:'0.3s' , cursor:'pointer'}}}>live the blind</Typography>  texts. A small river named Duden flows by their place and supplies it with the necessary regelialia.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                    </Typography>
                    {/* Button */}
                    <Button variant="contained"  size="large" sx={{ width: '70%' , backgroundColor:'transparent' , border:'1px solid #ffffff80' , borderRadius:'20px' , "&:hover":{backgroundColor:"transparent" , border:'1px solid white'}}}>
                        Download My CV
                    </Button>
                </Grid>
        </Grid>
        </>
    );
};

export default AboutComponent;
