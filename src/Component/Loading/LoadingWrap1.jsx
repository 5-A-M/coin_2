import React from 'react'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { memo } from 'react';

const LoadingWrap1 = (props) => {
  return (
    <Box sx={{ width: "100%", height: "calc(100% - 55px)"}}>
        <LinearProgress />
    </Box>
  )
}

export default memo(LoadingWrap1)