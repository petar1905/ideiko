import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import IdeikoLikeButton from './post/IdeikoLikeButton';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar } from '@mui/material';

import { Link } from '@inertiajs/react';
export default function Post({post}) {
    const avatar = (
        <Avatar
        alt={post.user.name}
        src={`/static/images/avatar/${post.user_id}.jpg`}
        />
    );

    const creation_date = new Date(post.created_at);
    const day = creation_date.getDate();
    const month = creation_date.getMonth();
    const year = creation_date.getFullYear();
    const formatted_creation_date = `${day}/${month}/${year}`;
  return (
    <Box sx={{ minWidth: 275 }}>
    <Card variant="outlined">
        <Link href={`/room?id=${post.user_id}`}>
            <CardHeader
            avatar={avatar} 
            title={post.user_name}
            subheader={formatted_creation_date}>
            </CardHeader>
        </Link>
        <CardContent>
            <Typography variant="body2">
                {post.content}
            </Typography>
        </CardContent>
        <CardActions>
            <IdeikoLikeButton currentPost={post}/>
            <IconButton>
                <CommentIcon/>
            </IconButton>
            <IconButton>
                <ShareIcon/>
            </IconButton>
        </CardActions>
    </Card>
    </Box>
  );
}
