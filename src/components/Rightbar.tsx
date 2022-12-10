import React, {FC} from "react";
import {Box} from "@mui/material";

interface RightbarProps {

}

const Rightbar: FC<RightbarProps> = (props) => {
    return (
        <Box
            bgcolor={"lightcoral"}
            flex={2}
            p={2}
            sx={{display: {xs: "none", sm: "flex"}}}
        >
            Rightbar
        </Box>
    )
};

export default Rightbar;