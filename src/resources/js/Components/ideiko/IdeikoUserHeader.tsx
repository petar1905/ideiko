import { Box, Button, Card, Typography } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import React from "react";
import Paper from '@mui/material/Paper';

export default function IdeikoUserHeader({currentUser, auth}) {
    const style = {
        display: 'flex',
        justifyContent: 'center'
    };
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h5" padding={'2em'} textAlign={'center'}>
                    {currentUser.name}
                </Typography>
            </CardContent>
            {auth.user.id != currentUser.id ? (
                <CardActions sx={style}>
                    <Button variant="outlined">Follow</Button>
                </CardActions>
            ) : null}
        </Card>
    )
}