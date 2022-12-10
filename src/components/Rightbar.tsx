import React, {FC} from "react";
import {Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, Typography} from "@mui/material";
import {latestPhotosData, muiUrl} from "../constants";

interface RightbarProps {

}

const Rightbar: FC<RightbarProps> = (props) => {
    return (
        <Box
            // bgcolor={"lightcoral"}
            flex={2}
            py={2}
            px={3}
            sx={{display: {xs: "none", sm: "flex"}}}
            component={"aside"}
            position={"relative"}
        >
            <Box
                // bgcolor={"cyan"}
                position={"fixed"}
                sx={{
                    overflowY: "auto",
                    maxHeight: "100%",
                    width: "27%"
                }}
            >
                {/* -------- Start Online Friends Section -------- */}
                <Typography
                    variant={"h6"}
                    component={"h3"}
                    fontWeight={"300"}
                >Online Friends</Typography>
                <AvatarGroup max={7} total={12}>
                    <Avatar alt="Remy Sharp" src={`${muiUrl}/static/images/avatar/1.jpg`}/>
                    <Avatar alt="Travis Howard" src={`${muiUrl}/static/images/avatar/2.jpg`}/>
                    <Avatar alt="Agnes Walker" src={`${muiUrl}/static/images/avatar/3.jpg`}/>
                    <Avatar alt="Trevor Henderson" src={`${muiUrl}/static/images/avatar/4.jpg`}/>
                </AvatarGroup>
                {/* -------- End Online Friends Section -------- */}

                <Divider sx={{margin: "20px 0px"}}/>

                {/*/!* -------- Start Latest Photos Section -------- *!/*/}
                {/*<Box sx={{overflow: "auto"}} height={500}>*/}
                {/*    <Typography*/}
                {/*        variant={"h6"}*/}
                {/*        component={"h3"}*/}
                {/*        fontWeight={"300"}*/}
                {/*    >Latest Photos</Typography>*/}
                {/*</Box>*/}
                {/*/!* -------- End Latest Photos Section -------- *!/*/}

            </Box>
        </Box>
    )
};

export default Rightbar;