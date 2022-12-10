import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'
import {ThemeProvider} from "@mui/material";
import FarisTheme from "./styles/theme";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={FarisTheme}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>
)
