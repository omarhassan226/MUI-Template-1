import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FavoriteIcon from "@mui/icons-material/Favorite";

const FooterContainer = styled("div")(({ theme }) => ({
    backgroundColor: '#161616', // Dark gray background
    color: theme.palette.grey[200], // Light gray text
    padding: theme.spacing(4),
}));


const SocialIconsContainer = styled("div")({
    display: "flex",
    justifyContent: "center",
});

const SocialIcon = styled(IconButton)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    marginRight: theme.spacing(2),
}));

const Footer = () => {
    return (
        <FooterContainer >
            <Grid container spacing={3} alignItems="center" justifyContent="center" flexDirection={'column'} textAlign={'center'}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4">Omar.H</Typography>
                    <Typography variant="h6">Connect with us</Typography>
                    <SocialIconsContainer>
                        <SocialIcon>
                            <FacebookIcon />
                        </SocialIcon>
                        <SocialIcon>
                            <TwitterIcon />
                        </SocialIcon>
                        <SocialIcon>
                            <LinkedInIcon />
                        </SocialIcon>
                    </SocialIconsContainer>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1">
                        &copy; {new Date().getFullYear()} O.H All rights
                        reserved <FavoriteIcon style={{fontSize:'15px'}}/>.
                    </Typography>
                </Grid>
            </Grid>
        </FooterContainer>
    );
};

export default Footer;
