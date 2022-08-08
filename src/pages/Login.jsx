import React,{useContext} from 'react';
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import { AuthContext } from '../context';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const login =(event)=>{
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem("auth", "true");
        console.log(localStorage);
    }
    return (
        <div>
            <h1>Страница для логина</h1>
        <form onSubmit={login}>
            <MyInput type="text" placeholder="введите логин"/>
            <MyInput type="password" placeholder="введите пароль"/>
            <MyButton>Войти</MyButton>
        </form>
        </div>
    );
}

export default Login;