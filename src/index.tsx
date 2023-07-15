import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import ThemeProvider from "./app/providers/ThemeProvider/ui/themeProvider";
import {App} from "@src/app/App";


render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
)