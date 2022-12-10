import React, {FC} from "react";
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton, Tooltip,
    Typography
} from "@mui/material";
import {blue, grey, red} from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareIcon from "@mui/icons-material/Share";

interface PostProps {

}

const Post: FC<PostProps> = (props) => {
    return (
        <Card sx={{margin: "3rem 0px"}}>
            <CardHeader
                avatar={
                    <Avatar sx={{bgcolor: red[500]}} aria-label="user's post">
                        F
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                // height="500px"
                sx={{maxHeight: "400px"}}
                src={"https://i.imgur.com/o79NjXU.jpg"}
                alt="Waterfall in the mountains"
            />
            <CardContent>
                <Typography variant="body2" color={grey[800]}>
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Tooltip title={"Love post"}>
                    <Checkbox
                        aria-label="React to post"
                        icon={<FavoriteBorder sx={{color: grey[600]}}/>}
                        checkedIcon={<Favorite sx={{color: red[400]}}/>}
                    />
                </Tooltip>
                <Tooltip title={"Add to favorites"}>
                    <Checkbox
                        aria-label="add to favorites"
                        icon={<BookmarkBorderIcon sx={{color: grey[600]}}/>}
                        checkedIcon={<BookmarkIcon sx={{color: blue[800]}}/>}
                    />
                </Tooltip>
                <Tooltip title={"Share post"}>
                    <IconButton aria-label="share">
                        <ShareIcon/>
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    )
};

export default Post;