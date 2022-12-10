import React, {FC, useState, MouseEvent} from "react";
import {
    AppBar,
    Avatar,
    Badge,
    Box,
    IconButton,
    InputBase,
    Menu,
    MenuItem,
    styled,
    Toolbar,
    Typography
} from "@mui/material";
import RedditIcon from '@mui/icons-material/Reddit';
import MailIcon from '@mui/icons-material/Mail';
import Notifications from "@mui/icons-material/Notifications";

interface NavbarProps {
}

const StyledToolbar = styled(Toolbar)(({theme}) => ({
    display: "flex",
    justifyContent: "space-between"
}));

const Search = styled("div")(({theme}) => ({
    backgroundColor: "White",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "30%",
}));

const Icons = styled(Box)(({theme}) => ({
    display: "none",
    alignItems: "center",
    gap: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    }
}));

const UserBoxMobileView = styled(Box)(({theme}) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
        display: "none",
    }
}));

const Navbar: FC<NavbarProps> = (props) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography
                    variant={"h6"}
                    component={"a"}
                    sx={{
                        display: {xs: "none", sm: "block"},
                    }}
                >
                    FARIS DEV
                </Typography>
                <RedditIcon
                    fontSize={"large"}
                    sx={{
                        display: {xs: "block", sm: "none"}
                    }}
                />
                <Search>
                    <InputBase placeholder={"Search.."}/>
                </Search>
                <Icons>
                    <IconButton aria-label="mails" sx={{color: "white"}}>
                        <Badge
                            badgeContent={4}
                            color="error"
                            // anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            // variant={"dot"}
                        >
                            <MailIcon/>
                        </Badge>
                    </IconButton>
                    <IconButton aria-label="notifications" sx={{color: "white"}}>
                        <Badge badgeContent={2} color="error">
                            <Notifications/>
                        </Badge>
                    </IconButton>
                    <IconButton
                            aria-label="User's settings"
                            aria-controls="menu-appbar"
                            onClick={(e: MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget)}
                    >
                        <Avatar
                            alt="User's Avatar"
                            // src="/static/images/avatar/1.jpg"
                        />
                    </IconButton>
                </Icons>
                <UserBoxMobileView
                    onClick={(e: MouseEvent<HTMLDivElement>) => setAnchorEl(e.currentTarget)}
                >
                    <IconButton aria-label="User's settings">
                        <Avatar
                            sx={{width: 30, height: 30}}
                            alt="User's Avatar"
                            src="/static/images/avatar/1.jpg"
                        />
                    </IconButton>
                    <Typography variant={"button"}>Faris</Typography>
                </UserBoxMobileView>
            </StyledToolbar>
            <Menu
                aria-labelledby="user-settings-positioned-menu"
                anchorEl={anchorEl}
                onClose={() => setAnchorEl(null)}
                open={Boolean(anchorEl)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
};

export default Navbar;