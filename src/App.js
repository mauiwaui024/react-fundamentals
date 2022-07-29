import React,{useState, useMemo} from "react";
import "./App.css";
import PostList from "./components/postList/PostList"
import PostForm from "./components/postForm/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import PostFilter from "./components/postFilter/PostFilter";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "cjavascript1", body: "ccdescription1" },
    {id: 2, title: "ejavascript2", body: "bbdescription2" },
    {id: 3, title: "ajavascript3", body: "zscription3" },
    {id: 4, title: "tavascript4", body: "uqescription4" }
  ])
  
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

  const [filter, setFilter] = useState({sort:"", query: ""})

  const sortedPosts = useMemo(()=>{
    console.log("Отработала функция сортед постс");
    if(filter.sort){
      
      return [...posts].sort((a,b)=> a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(()=>{
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  const createPost = (newPost)=>{
    setPosts([...posts, newPost])
  }

  const removePost = (post)=>{
    setPosts(posts.filter(p=> p.id !== post.id))
  }

  // const sortPosts = (sort)=>{
  //   setSelectedSort(sort)
  //   // console.log(sort);
  //   // setPosts([...posts].sort((a,b)=> a[sort].localeCompare(b[sort])))
  // }
  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: "15px 0"}}/>
     <PostFilter
      filter={filter}
      setFilter={setFilter}
     />
       
         <PostList remove = {removePost} posts = {sortedAndSearchedPosts} title = "Посты про JS"/>

        
    </div>
  );
}

export default App;
