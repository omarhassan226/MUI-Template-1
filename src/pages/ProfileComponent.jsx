import React from 'react'
import ImageMasonry from '../components/MasonaryComponent'
import { Box } from '@mui/material'

export default function ProfileComponent() {
    return (

        <Box display={'flex'} justifyContent={'center'} alignContent={'center'}> 
            <ImageMasonry/>
        </Box>
    )
}
