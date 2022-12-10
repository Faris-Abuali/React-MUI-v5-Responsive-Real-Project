import React, {FC} from "react";
import {Box} from "@mui/material";

interface SidebarProps {

}

const Sidebar: FC<SidebarProps> = (props) => {
    return (
        <Box
            bgcolor={"skyblue"}
            flex={1}
            p={2}
            sx={{display: {xs: "none", sm: "flex"}}}
        >
            Sidebar
        </Box>
    )
};

export default Sidebar;