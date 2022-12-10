import React, {FC} from "react";
import {Box} from "@mui/material";

interface FeedProps {

}

const Feed: FC<FeedProps> = (props) => {
    return (
        <Box bgcolor={"pink"} flex={4} p={2}>
            Feed
        </Box>
    )
};

export default Feed;