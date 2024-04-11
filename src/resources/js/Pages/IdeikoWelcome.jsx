import { Head } from '@inertiajs/react';
import Button from '@mui/material/Button';
import IdeikoWelcomeBar from '../Components/ideiko-welcome/IdeikoWelcomeBar';
import IdeikoLandingCard from '../Components/ideiko-welcome/IdeikoLandingCard';
import { Box } from '@mui/material';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title='Welcome to Ideiko!'/>
            <IdeikoWelcomeBar 
            phpVersion={phpVersion}
            laravelVersion={laravelVersion}/>
            <Box alignContent={'center'}>
                <IdeikoLandingCard auth={auth}/>
            </Box>
        </>
    )
};