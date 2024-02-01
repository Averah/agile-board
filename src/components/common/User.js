import { Avatar, Box } from "@mui/material";

function User({ user }) {
    return (
        <Box display="flex" alignItems="center">
            <Avatar alt={user?.name} src={user?.avatar} />
            <span style={{ padding: 5 }}>
                {user?.name}
            </span>
        </Box>
    )
}

export default User;