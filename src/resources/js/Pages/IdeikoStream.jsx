import IdeikoNavBar from "@/Components/ideiko/IdeikoNavBar";
import { Box } from "@mui/material";
import Post from "@/Components/ideiko/Post";
import IdeikoFooter from "@/Components/ideiko/IdeikoFooter";
import IdeikoPostList from "@/Components/ideiko/IdeikoPostList";

export default function IdeikoStream({posts, nextPageURL, previousPageURL, auth}) {
    console.log(posts);
    return (
        <Box>
            <IdeikoNavBar auth={auth}/>
            <Box component={'main'}>
                <IdeikoPostList posts={posts}/>
            </Box>
            <IdeikoFooter 
            nextPageURL={nextPageURL}
            previousPageURL={previousPageURL}/>
        </Box>
    )
}