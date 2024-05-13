import IdeikoNavBar from "@/Components/ideiko/IdeikoNavBar";
import IdeikoUserList from "@/Components/ideiko/IdeikoUserList";
import IdeikoFooter from "@/Components/ideiko/IdeikoFooter";
import { Box } from "@mui/material";

export default function IdeikoLobby({users, nextPageURL, previousPageURL, auth}) {
    return (
        <Box>
            <IdeikoNavBar auth={auth}/>
            <IdeikoUserList users={users}/>
            <IdeikoFooter 
            nextPageURL={nextPageURL} 
            previousPageURL={previousPageURL}
            />
        </Box>
    )
}