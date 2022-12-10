import './styles/App.css'
import {Button, Typography, styled, Box, Container, Stack} from "@mui/material";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import {blueGrey, grey} from "@mui/material/colors";

const App = () => {
    return (
        <Box>
            <Navbar />
            <Stack
                direction={"row"}
                spacing={{xs: 0, sm: 2}}
                justifyContent={"space-between"}
                // bgcolor={"navy"}
                bgcolor={blueGrey["50"]}

            >
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </Stack>
        </Box>
    )
}

export default App
