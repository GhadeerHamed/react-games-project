// theme.js

// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
    initialColorMode: 'dark',
}

// 3. extend the theme
const theme = extendTheme({
    config,
    colors:{
        gray: {
            50: '#f9f9f9',
            100: '#ededed',
            200: '#d3d3d3',
            300: '#b3b3b3',
            400: '#a0a0a0',
            500: '#898989',
            600: '#636363',
            700: '#909090',
            800: '#121212',
            900: '#111111',
        }
    }
})

export default theme