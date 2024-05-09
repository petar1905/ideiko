import IdeikoNavBar from "@/Components/ideiko/IdeikoNavBar";
import IdeikoUserList from "@/Components/ideiko/IdeikoUserList";
import { Box } from "@mui/material";

export default function IdeikoLobby({users, auth}) {
    return (
        <Box>
            <IdeikoNavBar auth={auth}/>
            <IdeikoUserList users={users.data}/>
        </Box>
    )
}