import React,{useState, useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setLoading] = useState(true)

  useEffect(()=>{
      if(localStorage.getItem("auth")){
        setIsAuth(true)
      }
      setLoading(false)
  },[])
  return(
    <AuthContext.Provider value ={{
        isAuth, 
        setIsAuth,
        isLoading
    }}>
    <Router>
      <Navbar/>
        <AppRouter/>
    </Router>
    </AuthContext.Provider>
  )}
export default App;





  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  // чтобы не создавать для каждого инпута состояние, создами одно состояние для поста 
  //и будем передавать туда объект

 

  // const addNewPost = (e) =>{
  //   e.preventDefault()
    
  //   //предотвращает дефолтное поведение браузера
    
  //   //чтобы передать новый пост в существующий массив делаем следующее:
  //   //вызываем функцию сетПостс, передаем новый массив, куда разворачиваем старый массив
  //   //с уже существующими постами и в конец добавляем новый пост !!!!
  //   //удалили переменную с новым постом и развернули новый пост как объект в сетПостс
  //   setPosts([...posts, {...post, id: Date.now()}])
  //   setPost({title: "", body: ""})
  // }
  // const [selectedSort, setSelectedSort] = useState("")
  // const [searchQuery, setSearchQuery] = useState("")


   // const sortPosts = (sort)=>{
  //   setSelectedSort(sort)
  //   // console.log(sort);
  //   // setPosts([...posts].sort((a,b)=> a[sort].localeCompare(b[sort])))
  // }