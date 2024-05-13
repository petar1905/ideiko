import { Box } from "@mui/material";
import IdeikoNavBar from "@/Components/ideiko/IdeikoNavBar";
import Post from "@/Components/ideiko/Post";
import IdeikoUserHeader from "@/Components/ideiko/IdeikoUserHeader";
import IdeikoRoomTabs from "@/Components/ideiko/IdeikoRoomTabs";

export default function IdeikoRoom(
    {currentUser, posts, likedPosts, followed, followers, auth}) {
    return (
        <Box>
            {console.log(currentUser)}
            {console.log(posts)}
            <IdeikoNavBar auth={auth}/>
            <IdeikoUserHeader 
            currentUser={currentUser} 
            auth={auth}
            followedCount={followed.length}
            followerCount={followers.length}/>
            <IdeikoRoomTabs 
            posts={posts} 
            likedPosts={likedPosts}
            followed={followed}
            followers={followers}/>
        </Box>
    )
}