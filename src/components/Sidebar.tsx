import React, {ChangeEvent, FC} from "react";
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch} from "@mui/material";
import {AccountBox, Article, Group, Home, ModeNight, Person, Settings, Storefront} from "@mui/icons-material";

interface SidebarProps {
    mode: string;
    setMode: (mode: string) => void;
}

const Sidebar: FC<SidebarProps> = ({mode, setMode}) => {
    return (
        <Box
            // bgcolor={"skyblue"}
            component={"aside"}
            flex={1}
            p={2}
            sx={{display: {xs: "none", sm: "flex"}}}
        >
            <Box position={"fixed"}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#home">
                            <ListItemIcon>
                                <Home/>
                            </ListItemIcon>
                            <ListItemText primary="Homepage"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <Article/>
                            </ListItemIcon>
                            <ListItemText primary="Pages"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <Group/>
                            </ListItemIcon>
                            <ListItemText primary="Groups"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <Storefront/>
                            </ListItemIcon>
                            <ListItemText primary="Marketplace"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <Person/>
                            </ListItemIcon>
                            <ListItemText primary="Friends"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <Settings/>
                            </ListItemIcon>
                            <ListItemText primary="Settings"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#simple-list">
                            <ListItemIcon>
                                <AccountBox/>
                            </ListItemIcon>
                            <ListItemText primary="Profile"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{justifyContent: "center"}}>
                            <ModeNight/>
                        </ListItemIcon>
                        <Switch
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setMode(mode === "light" ? "dark" : "light")}
                        />
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
};

export default Sidebar;