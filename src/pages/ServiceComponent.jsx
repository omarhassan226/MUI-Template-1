import React from 'react';
import { Grid, Button, Typography, Stack, Box, IconButton } from '@mui/material';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ConnectedTvIcon from '@mui/icons-material/ConnectedTv';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import WebhookIcon from '@mui/icons-material/Webhook';
import WifiPasswordIcon from '@mui/icons-material/WifiPassword';
import AppSettingsAltIcon from '@mui/icons-material/AppSettingsAlt';

const ServiceComponent = () => {
  return (
    <>
      <Box >
        <Typography variant="h4" gutterBottom color={'white'} display={'flex'} justifyContent={'center'} fontWeight={'bold'} marginTop={"10%"} marginBottom={"8%"}>
          My Service
        </Typography>
      </Box>
      <Grid container spacing={14}>
        {/* Photo */}
        {/* 1 */}
        <Grid item xs={12} sm={4}>
          <ManageAccountsIcon sx={{ color: 'wheat', width: '50px', height: '50px' }} />
          <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '25px', width: '25%' }}>Digital Strategy</Typography>
          <Typography sx={{ color: 'white', fontSize: '16px' }}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</Typography>
        </Grid>
        {/* 2 */}
        <Grid item xs={12} sm={4}>
          <ConnectedTvIcon sx={{ color: 'wheat', width: '50px', height: '50px' }} />
          <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '25px', width: '25%' }}>Web Design</Typography>
          <Typography sx={{ color: 'white', fontSize: '16px' }}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</Typography>
        </Grid>
        {/* 3 */}
        <Grid item xs={12} sm={4} container direction="column" justifyContent="center" color={'white'}>
          <AddReactionIcon sx={{ color: 'wheat', width: '50px', height: '50px' }} />
          <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '25px', width: '25%' }}>User Experience</Typography>
          <Typography sx={{ color: 'white', fontSize: '16px' }}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</Typography>
        </Grid>
      </Grid>
      {/* Section 2 */}
      <Grid container spacing={14} sx={{marginTop:'30px' , marginBottom:'10%'}}>
        {/* 1 */}
        <Grid item xs={12} sm={4} style={{ paddingTop:'0px'}}>
          <WebhookIcon sx={{ color: 'wheat', width: '50px', height: '50px' }} />
          <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '25px', width: '25%' }}>Web Development</Typography>
          <Typography sx={{ color: 'white', fontSize: '16px' }}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</Typography>
        </Grid>
        {/* 2 */}
        <Grid item xs={12} sm={4} style={{ paddingTop:'0px'}}>
          <WifiPasswordIcon sx={{ color: 'wheat', width: '50px', height: '50px' }} />
          <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '25px', width: '25%' }}>WordPress Solutions</Typography>
          <Typography sx={{ color: 'white', fontSize: '16px' }}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</Typography>
        </Grid>
        {/* 3 */}
        <Grid item xs={12} sm={4} container direction="column" justifyContent="center" color={'white'} style={{ paddingTop:'0px'}}>
          <AppSettingsAltIcon sx={{ color: 'wheat', width: '50px', height: '50px' }} />
          <Typography sx={{ color: 'white', fontWeight: 'bold', fontSize: '25px', width: '25%' }}>Mobile Applications</Typography>
          <Typography sx={{ color: 'white', fontSize: '16px' }}>A small river named Duden flows by their place and supplies it with the necessary regelialia.</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ServiceComponent;
