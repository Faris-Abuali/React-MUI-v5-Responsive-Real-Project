import {createTheme, PaletteColorOptions, styled, Theme} from "@mui/material";
import {PaletteColor} from "@mui/material/styles/createPalette";

// module augmentation
declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }

    interface Palette {
        thirdColor: PaletteColor,
    }

    interface PaletteOptions {
        thirdColor: PaletteColorOptions
    }
}


const FarisTheme = createTheme({
    palette: {
        primary: {
            main: "#1760a5",
            light: "skyblue"
        },
        secondary: {
            main: "#15c630"
        },
        thirdColor: {
            main: "lime",
        },
        text: {
            primary: '#173A5E',
            secondary: '#46505A',
        }
    },
    status: {
        danger: "red"
    }
});



const CustomCheckbox = styled("div")(({ theme }) => ({
    color: theme.status.danger,
    backgroundColor: theme.palette.thirdColor.main,
    borderColor: theme.palette.primary!.main,
    '&.Mui-checked': {
        color: theme.status.danger,
    },
}));

export default FarisTheme;