import IdeikoNavBar from "@/Components/ideiko/IdeikoNavBar";
import { Box } from "@mui/material";
import Post from "@/Components/ideiko/Post";

export default function IdeikoStream({posts, auth}) {
    console.log(posts);
    return (
        <Box>
            <IdeikoNavBar auth={auth}/>
            <Box>
            <Box component={'main'}>
                {posts.map((post) => {
                    return (
                        <Post post={post}/>
                    )
                })}
            </Box>
        </Box>
    )
}