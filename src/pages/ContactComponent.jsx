import React from "react";
import {
    Grid,
    Button,
    Typography,
    Stack,
    Box,
    IconButton
} from "@mui/material";
import { TextField } from "@mui/material";
import { OutlinedInput } from "@mui/material";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/system";

const ContactComponent = () => {
    const blue = {
        100: "#DAECFF",
        200: "#b6daff",
        400: "#3399FF",
        500: "#007FFF",
        600: "#0072E5",
        900: "#003A75"
    };

    const grey = {
        50: "#F3F6F9",
        100: "#E5EAF2",
        200: "#DAE2ED",
        300: "#C7D0DD",
        400: "#B0B8C4",
        500: "#9DA8B7",
        600: "#6B7A90",
        700: "#434D5B",
        800: "#303740",
        900: "#1C2025"
    };

    const Textarea = styled(BaseTextareaAutosize)(
        ({ theme }) => `
        box-sizing: border-box;
        width: 320px;
        font-family: 'IBM Plex Sans', sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.5;
        padding: 8px 12px;
        border-radius: 8px;
        color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
        background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
        border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
        box-shadow: 0px 2px 2px ${theme.palette.mode === "dark" ? grey[900] : grey[50]
                };

        &:hover {
            border-color: ${blue[400]};
        }

        &:focus {
            der-color: ${blue[400]};
            ox-shadow: 0 0 0 3px ${theme.palette.mode === "dark" ? blue[600] : blue[200]
                };
        }

        // firefox
        &:focus-visible {
            outline: 0;
        }`
    );

    return (
        <>
            <Box>
                <Typography
                    variant="h4"
                    gutterBottom
                    color={"white"}
                    display={"flex"}
                    justifyContent={"center"}
                    fontWeight={"bold"}
                    marginTop={"10%"}
                    marginBottom={"8%"}
                >
                    Get In Touch
                </Typography>
            </Box>
            <Grid container spacing={14}>
                {/* 1 */}
                <Grid item xs={12} sm={8}>
                    <Grid display={"flex"}>
                        <Grid item xs={6} sm={6}>
                            <TextField
                                id="name"
                                label="Name"
                                variant="outlined"
                                InputLabelProps={{ style: { color: "#6A7575" } }}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        color: "white",
                                        borderColor: "white",
                                        "&:hover fieldset": {
                                            borderColor: "white"
                                        },
                                        "& fieldset": {
                                            borderColor: "white"
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "white"
                                        }
                                    },
                                    width: "95%"
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} sm={6}>
                            <TextField
                                id="email"
                                label="Email"
                                variant="outlined"
                                InputLabelProps={{ style: { color: "#6A7575" } }}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        color: "white",
                                        borderColor: "white",
                                        "&:hover fieldset": {
                                            borderColor: "white"
                                        },
                                        "& fieldset": {
                                            borderColor: "white"
                                        },
                                        "&.Mui-focused fieldset": {
                                            borderColor: "white"
                                        }
                                    },
                                    width: "95%"
                                }}
                            />
                        </Grid>
                    </Grid>
                    <Stack sx={{ marginTop: 3 }}>
                        <Textarea aria-label="minimum height" style={{ width: '97.5%', backgroundColor: 'black', color: 'white' }} minRows={8} placeholder="WRITE YOUR MESSAGE..." />
                    </Stack>
                    <Stack sx={{ marginTop: 3 }}>
                        <Button variant="contained" size="large" sx={{ width: '30%', backgroundColor: 'transparent', border: '1px solid #ffffff80', borderRadius: '20px', "&:hover": { backgroundColor: "transparent", border: '1px solid white' } }}>
                            Send Message
                        </Button>
                    </Stack>
                </Grid>

                {/* 2 */}
                <Grid item xs={12} sm={4} sx={{ marginTop: "20px" }}>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        color={"white"}
                    >
                        <Stack>
                            <Box>
                                <Typography
                                    sx={{ fontWeight: "bold", fontSize: "12px", color: "#7D7D7D" }}
                                >
                                    EMAIL
                                </Typography>
                                <Typography
                                    paragraph
                                    variant="paragraph"
                                    sx={{ fontSize: "20px", color: "#BCBCBC" }}
                                >
                                    oh.22697@gmail.com
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    sx={{ fontWeight: "bold", fontSize: "12px", color: "#7D7D7D" }}
                                >
                                    PHONE
                                </Typography>
                                <Typography
                                    paragraph
                                    variant="paragraph"
                                    sx={{ fontSize: "20px", color: "#BCBCBC" }}
                                >
                                    01066035716
                                </Typography>
                            </Box>
                            <Box>
                                <Typography
                                    sx={{ fontWeight: "bold", fontSize: "12px", color: "#7D7D7D" }}
                                >
                                    ADDRESS
                                </Typography>
                                <Typography
                                    paragraph
                                    variant="paragraph"
                                    sx={{ fontSize: "20px", color: "#BCBCBC" }}
                                >
                                    Cairo, Egypt
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default ContactComponent;
