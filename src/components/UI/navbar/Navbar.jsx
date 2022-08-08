import React,{useContext} from 'react';
import {Link} from "react-router-dom"
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context';

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = (event)=>{
        setIsAuth(false)
        localStorage.removeItem("auth")
        console.log(localStorage);
    }
    return (
        <div className="navbar">
        <MyButton onClick={logout}>
            Выйти
        </MyButton>
        <div className="navbar__items">
            <Link to ="/about"> О сайте</Link>
            <Link to ="/posts">Посты</Link>
        </div>
    </div>
    );
}

export default Navbar;