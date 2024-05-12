import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { Link } from "@inertiajs/react";

import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

export default function IdeikoFooter({nextPageURL, previousPageURL}) {
    const previousButton = (
        <Link href={previousPageURL}>
            <Button variant="contained">
                <KeyboardDoubleArrowLeftIcon/>
            </Button>
        </Link>
    );
    const nextButton = (
        <Link href={nextPageURL}>
            <Button variant="contained">
                <KeyboardDoubleArrowRightIcon/>
            </Button>
        </Link>
    );

    return (
        <Box component={'footer'}
        display={'flex'}
        justifyContent={'center'}
        gap={'0.3em'}>
            {previousPageURL ? previousButton : null}
            {nextPageURL ? nextButton : null}
        </Box>
    )
}