import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar } from '@mui/material';

import { Link } from '@inertiajs/react';
export default function Post({post}) {
  return (
    <Box sx={{ minWidth: 275 }}>
    <Card variant="outlined">
        <CardContent>
            <Link href={`/room?id=${post.user_id}`}>
                <Box display={'flex'} columnGap={'.5em'} marginBottom={'.5em'}>
                    <Avatar
                    alt={post.user_name}
                    src={`/static/images/avatar/${post.user_id}.jpg`}
                    />
                    <Typography paddingTop={'.6em'}>
                        {post.user_name}
                    </Typography>
                </Box>
            </Link>
            <Typography variant="body2">
                {post.content}
            </Typography>
        </CardContent>
        <CardActions>
            <IconButton>
                <FavoriteIcon/>
            </IconButton>
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
