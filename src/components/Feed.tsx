import React, {FC} from "react";
import {Box} from "@mui/material";
import Post from "./Post";


interface FeedProps {

}

const Feed: FC<FeedProps> = (props) => {
    return (
        <Box
            // bgcolor={"pink"}
            flex={4}
            p={2}
            component={"main"}
        >
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </Box>
    )
};

export default Feed;