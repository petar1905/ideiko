import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IdeikoNavBar from '@/Components/ideiko/IdeikoNavBar';
import { router } from '@inertiajs/react';
import { Button } from '@mui/material';

export default function IdeikoCreationPage() {
    const [content, setContent] = useState("");

    const handleChange = (val) => {
        setContent(val.target.value);
    };

    const handleSubmit = () => {
        router.post('/post', {content: content});
    };
    return (
        <Box>
            <IdeikoNavBar/>
            <Box component={'main'} padding={'1em'}>
                <TextField
                label="Content"
                fullWidth
                multiline
                rows={12}
                defaultValue=""
                variant="filled"
                onChange={handleChange}
                sx={{paddingBottom: '1em'}}
                />
                <Button variant='contained' onClick={handleSubmit}>Post</Button>
            </Box>

        </Box>
    )
}