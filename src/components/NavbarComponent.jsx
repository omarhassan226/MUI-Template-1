import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { styled } from "@mui/system";

const StyledLink = styled(Link)(({ theme }) => ({
    color: 'white',
    textDecoration: 'none',
    position: 'relative',
    '&::after': {
        content: '""',
        position: 'absolute',
        width: '0%',
        height: '2px',
        bottom: 0,
        left: 0,
        backgroundColor: 'white',
        transition: 'width 0.3s ease-in-out',
    },
    '&:hover::after': {
        width: '100%',
    },
}));

export default function NavbarComponent() {
    return (
        <Box sx={{ width: '100%', backgroundColor: 'transparent' }}>
            <AppBar position="static" sx={{ backgroundColor: 'transparent' }}>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '18%' }}>
                        <Link to="#" style={{textDecoration:'none' , borderBottom: '2px solid white', paddingBottom: '2px' , color:'white'}}>Home</Link>
                        <StyledLink to="#">Portfolio</StyledLink>
                        <StyledLink to="#">About</StyledLink>
                        <StyledLink to="#">Service</StyledLink>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Typography variant="h4" sx={{ color: 'white', cursor:'pointer'}}>Logo</Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '18%' }}>
                        <StyledLink to="#">Skills</StyledLink>
                        <StyledLink to="#">Testing</StyledLink>
                        <StyledLink to="#">Journal</StyledLink>
                        <StyledLink to="#">Contact</StyledLink>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ flexGrow: 1 }} />
                </Toolbar>
            </AppBar>
        </Box>
    );
}
