import { Box, Button, Card, Typography } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import React from "react";
import Paper from '@mui/material/Paper';
import IdeikoFollowButton from "./userHeader/IdeikoFollowButton";

export default function IdeikoUserHeader({currentUser,followedCount, followerCount, auth}) {
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
                <Typography component="p" textAlign={'center'}>
                    Followed: {followedCount}
                </Typography>
                <Typography component="p" textAlign={'center'}>
                    Followers: {followerCount}
                </Typography>
            </CardContent>
            {auth.user.id != currentUser.id ? (
                <CardActions sx={style}>
                    <IdeikoFollowButton currentUser={currentUser}/>
                </CardActions>
            ) : null}
        </Card>
    )
}