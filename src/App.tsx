import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutAsyncPage} from "./pages/AboutPage/About.async";
import {MainAsyncPage} from "./pages/MainPage/Main.async";
import {Suspense} from "react";
import {useTheme} from "./theme/useTheme";


export const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Смена темы</button>
            <Link to={'/'}>Главная страница</Link>
            <Link to={'/about'}>Информация о сайте</Link>
            <Suspense fallback={<div>Loading....</div>}>
                <Routes>
                    <Route path={'/'} element={<MainAsyncPage/>}/>
                    <Route path={'/about'} element={<AboutAsyncPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

