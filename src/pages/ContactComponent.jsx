import React from 'react';
import { Grid, Button, Typography, Stack, Box, IconButton } from '@mui/material';
import { TextField } from '@mui/material';
import { OutlinedInput } from '@mui/material';

const ContactComponent = () => {

    return (
        <>
            <Box >
                <Typography variant="h4" gutterBottom color={'white'} display={'flex'} justifyContent={'center'} fontWeight={'bold'} marginTop={"10%"} marginBottom={"8%"}>
                    Get In Touch
                </Typography>
            </Box>
            <Grid container spacing={14}>
                {/* 1 */}
                <Grid item xs={12} sm={7}>
                    <Stack sx={{ display: 'flex' }}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="name"
                                label="Name"
                                variant="outlined"
                                InputLabelProps={{ style: { color: "white" } }}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        color: 'white',
                                        borderColor: 'white', // Set the border color to white
                                        "&:hover fieldset": { // Apply styles on hover
                                            borderColor: 'white', // Set the border color to white
                                        },
                                        "& fieldset": { // Apply styles to the default (unfocused) state
                                            borderColor: 'white', // Set the border color to white
                                        },
                                        "&.Mui-focused fieldset": { // Apply styles to the focused state
                                            borderColor: "white" // Set the border color to white
                                        }
                                    }
                                }}
                            />
                        </Grid>
                        {/* 2 */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="email"
                                label="Email"
                                variant="outlined"
                                InputLabelProps={{ style: { color: "white" } }}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        color: 'white',
                                        borderColor: 'white', // Set the border color to white
                                        "&:hover fieldset": { // Apply styles on hover
                                            borderColor: 'white', // Set the border color to white
                                        },
                                        "& fieldset": { // Apply styles to the default (unfocused) state
                                            borderColor: 'white', // Set the border color to white
                                        },
                                        "&.Mui-focused fieldset": { // Apply styles to the focused state
                                            borderColor: "white" // Set the border color to white
                                        }
                                    },
                                    marginTop: '20px'
                                }}
                            />
                        </Grid>

                    </Stack>
                </Grid>
                {/* 2 */}
                <Grid item xs={12} sm={4} container direction="column" justifyContent="center" color={'white'}>
                    <Stack>
                        <Box>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '12px', color: '#7D7D7D' }}>EMAIL</Typography>
                            <Typography paragraph variant='paragraph' sx={{ fontSize: '20px', color: '#BCBCBC' }}>oh.22697@gmail.com</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '12px', color: '#7D7D7D' }}>PHONE</Typography>
                            <Typography paragraph variant='paragraph' sx={{ fontSize: '20px', color: '#BCBCBC' }}>01066035716</Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ fontWeight: 'bold', fontSize: '12px', color: '#7D7D7D' }}>ADDRESS</Typography>
                            <Typography paragraph variant='paragraph' sx={{ fontSize: '20px', color: '#BCBCBC' }}>Cairo, Egypt</Typography>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
};

export default ContactComponent;
