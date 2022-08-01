import React,{useState, useEffect} from "react";
import "./App.css";
import PostList from "./components/postList/PostList"
import PostForm from "./components/postForm/PostForm";
import PostFilter from "./components/postFilter/PostFilter";
import MyModal from "./components/myModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePosts";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";
import { useFetching } from "./hooks/useFetching";
import { getPageCount, getPagesArray } from "./utils/pages";
import Pagination from "./components/UI/Pagination/Pagination";
function App() {

  const [posts, setPosts] = useState([])
  
  const [filter, setFilter] = useState({sort:"", query: ""})
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  
  

  const [fetchPosts, isPostsLoading, postError] = useFetching(async(limit,page)=>{
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => {
      fetchPosts(limit,page)
  }, [])

  const createPost = (newPost)=>{
    setPosts([...posts, newPost])
    setModal(false)
  }

  
  const removePost = (post)=>{
    setPosts(posts.filter(p=> p.id !== post.id))
  }

  const changePage = (page)=>{
    setPage(page)
    fetchPosts(limit,page)
  }

  console.log(totalPages);
  return (
    <div className="App">
      <MyButton style={{marginTop: "30px"}} onClick={()=>setModal(true)}>
          Создать
      </MyButton>
      <MyModal 
      visible={modal}
      setVisible={setModal}
      >
        <PostForm create={createPost}/>
      </MyModal>
      
      <hr style={{margin: "15px 0"}}/>
     <PostFilter
      filter={filter}
      setFilter={setFilter}
     />

     {postError &&
      <h1>Произошла ошибка ${postError}</h1>
     }
       {isPostsLoading
       ? <div style={{display: "flex", justifyContent: "center", marginTop: "70px"}}> <Loader /> </div>
       : <PostList remove = {removePost} posts = {sortedAndSearchedPosts} title = "Посты про JS"/>
       }

       <Pagination page={page} changePage={changePage} totalPages={totalPages}></Pagination>
       
    </div>
  );
}

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