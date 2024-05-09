import { Box } from "@mui/material";
import IdeikoNavBar from "@/Components/ideiko/IdeikoNavBar";
import Post from "@/Components/ideiko/Post";
import IdeikoUserHeader from "@/Components/ideiko/IdeikoUserHeader";
import IdeikoRoomTabs from "@/Components/ideiko/IdeikoRoomTabs";

export default function IdeikoRoom({currentUser, posts, likedPosts, auth}) {
    return (
        <Box>
            {console.log(currentUser)}
            {console.log(posts)}
            <IdeikoNavBar auth={auth}/>
            <IdeikoUserHeader currentUser={currentUser} auth={auth}/>
            <IdeikoRoomTabs posts={posts} likedPosts={likedPosts}/>
        </Box>
    )
}