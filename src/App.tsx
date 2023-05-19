import './index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {AboutAsyncPage} from "./pages/AboutPage/About.async";
import {MainAsyncPage} from "./pages/MainPage/Main.async";
import {Suspense} from "react";

export const App = () => {
    return (
        <div className='app'>
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

