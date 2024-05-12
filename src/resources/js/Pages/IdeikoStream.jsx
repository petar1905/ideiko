import IdeikoNavBar from "@/Components/ideiko/IdeikoNavBar";
import { Box } from "@mui/material";
import Post from "@/Components/ideiko/Post";
import IdeikoFooter from "@/Components/ideiko/IdeikoFooter";

export default function IdeikoStream({posts, nextPageURL, previousPageURL, auth}) {
    console.log(posts);
    return (
        <Box>
            <IdeikoNavBar auth={auth}/>
            <Box component={'main'}>
                {posts.map((post) => {
                    return (
                        <Post post={post}/>
                    )
                })}
            </Box>
            <IdeikoFooter 
            nextPageURL={nextPageURL}
            previousPageURL={previousPageURL}/>
        </Box>
    )
}