import IdeikoNavBar from "@/Components/ideiko/IdeikoNavBar";
import { Box } from "@mui/material";
import Post from "@/Components/ideiko/Post";

export default function IdeikoStream({posts, auth}) {
    console.log(posts);
    return (
        <Box>
            <IdeikoNavBar auth={auth}/>
            <Box>
                {posts.map((post) => {
                    return (
                        <Post post={post}/>
                    )
                })}
            </Box>
        </Box>
    )
}