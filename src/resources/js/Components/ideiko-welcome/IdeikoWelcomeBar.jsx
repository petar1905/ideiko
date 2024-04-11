import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Hidden } from '@mui/material';

export default function IdeikoWelcomeBar({phpVersion, laravelVersion}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            Ideiko
          </Typography>
          <Hidden smDown>
            <Typography component="div" sx={{ flexGrow: 1 }}>
              PHP: {phpVersion}
            </Typography>
            <Typography component="div" smDown>
              Laravel: {laravelVersion}
            </Typography>
          </Hidden>
        </Toolbar>
      </AppBar>
    </Box>
  );
}