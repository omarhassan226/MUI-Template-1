import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import backgroundImage from "../../public/background.jpg"; // Import your background image
import { Box, IconButton } from "@mui/material";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

export default function HomeComponent() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        overflowY: "auto",
        scrollBehavior: "smooth"
      }}
    >
      <NavbarComponent />

      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "8%",
          textAlign: "center",
          lineHeight: "0.5"
        }}
      >
        <h1 style={{ color: "white", fontSize: "60px" }}>Omar.H</h1>
      </Box>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          lineHeight: "0.0"
        }}
      >
        <p style={{ color: "white", fontSize: "30px" }}>
          I’m Omar Hassan A Web Developer,
        </p>
        <p style={{ color: "white", fontSize: "30px" }}>
          And UI/UX Designer Based In Ismailia_ITI
        </p>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: '13%',
          flexDirection:'column'
        }}
      >
        <IconButton style={{ color: "white" }}>
          <ArrowUpwardOutlinedIcon />
        </IconButton>
        <p style={{color:'white', textAlign:'center', margin:'0'}}>scroll</p>
      </Box>
    </div>
  );
}
