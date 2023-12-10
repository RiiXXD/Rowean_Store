import { extendTheme} from '@chakra-ui/react'
import '@fontsource-variable/raleway';
import '@fontsource/abhaya-libre/400.css';
import '@fontsource/abhaya-libre/500.css';
import '@fontsource/abhaya-libre/600.css';
import '@fontsource/abhaya-libre/700.css';
export const theme=extendTheme({
    fonts:{
       
        heading:"'Raleway Variable', sans-serif;",
        body:"'Abhaya Libre',serif;"
    }
})