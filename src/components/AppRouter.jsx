import React, {useContext} from 'react';
import {Routes, Route, Navigate} from "react-router-dom"
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';
import { privateRoutes, publicRoutes } from '../routes';
import { AuthContext } from '../context';
import Loader from './UI/loader/Loader';

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
    
    if(isLoading){
        return <Loader/>
    }
    return (
        isAuth
        ? <Routes>
        {privateRoutes.map(route=>
        <Route key={route.path} path={route.path} element={route.element} />
        )}  
        <Route path="/*" element={<Navigate to="/posts" replace />} />
    </Routes>
        : <Routes>
        {publicRoutes.map(route=>
        <Route key={route.path} path={route.path} element={route.element} />
        )}  

        <Route path="/*" element={<Navigate to="/login" replace />} />
    </Routes>
        
    );
}


export default AppRouter;