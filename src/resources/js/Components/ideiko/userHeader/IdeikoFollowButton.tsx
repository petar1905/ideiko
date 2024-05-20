import Button from "@mui/material/Button";
import React from "react";
import { router } from '@inertiajs/react';

export default function IdeikoFollowButton({currentUser}) {
    const toggleFollow = () => {
        router.put('/room', {id: currentUser.id});
    };
    const follow = (
        <Button variant="outlined" onClick={toggleFollow}>Follow</Button>
    );
    
    const unfollow = (
        <Button variant="contained" onClick={toggleFollow}>Unfollow</Button>
    );

    return (
        currentUser.is_followed ? unfollow : follow
    )
}