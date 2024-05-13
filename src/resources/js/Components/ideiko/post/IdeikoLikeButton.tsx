import { router } from "@inertiajs/react";
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from "react";

export default function IdeikoLikeButton({currentPost}) {
    const toggleLike = () => {
        router.put('/post', {id: currentPost.id});
    };
    return (            
        <IconButton onClick={toggleLike}>
            <FavoriteIcon htmlColor={currentPost.is_liked ? "red" : null}/>
            {currentPost.like_count}
        </IconButton>
    )
}