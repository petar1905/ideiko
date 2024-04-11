import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from '@inertiajs/react';

export default function IdeikoLandingCard({auth}) {
  return (
    <Box>
      <Card variant="outlined">
        <CardContent>
            <Typography variant="h3" color="text.primary">
                Ideiko
            </Typography>
            <Typography variant="h5" color="text.primary" component="div">
                The platform for winners.
            </Typography>
        </CardContent>
        <CardActions>
            {
                auth.user ? 
                (
                    <Link href='dashboard'>
                        <Button>Go to Ideiko</Button>
                    </Link>
                )
                :
                (
                    <>
                        <Link href='login'>
                            <Button>Login</Button>
                        </Link>
                        <Link href='register'>
                            <Button>Register</Button>
                        </Link>
                    </>
                )
            }
        </CardActions>
      </Card>
    </Box>
  );
}