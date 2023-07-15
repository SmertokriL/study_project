import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {useTheme} from "@src/app/providers/ThemeProvider";
import {classNames} from "@src/shared/lib/classNames/classNames";
import {MainPage} from "@src/pages/MainPage";
import {AboutPage} from "@src/pages/AboutPage";

export const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Смена темы</button>
            <Link to={'/'}>Главная страница</Link>
            <Link to={'/about'}>Информация о сайте</Link>
            <Suspense fallback={<div>Loading....</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

