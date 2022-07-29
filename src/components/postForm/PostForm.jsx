import React, {useState} from 'react';
import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: "", body: ""})
    const addNewPost = (e) =>{
        e.preventDefault()
        //предотвращает дефолтное поведение браузера
        
        //чтобы передать новый пост в существующий массив делаем следующее:
        //вызываем функцию сетПостс, передаем новый массив, куда разворачиваем старый массив
        //с уже существующими постами и в конец добавляем новый пост !!!!
        //удалили переменную с новым постом и развернули новый пост как объект в сетПостс
        // setPosts([...posts, {...post, id: Date.now()}])
        //это ваще все в App было
        const newPost = {
           ...post,
           id: Date.now()
        }
        create(newPost)
        setPost({title: "", body: ""})
      }
    return <form>
    {/*Управляемый компонент*/}
    <MyInput value={post.title} onChange={(e)=> setPost({...post, title: e.target.value})} type="text" placeholder="Название поста"></MyInput>
    <MyInput value={post.body} onChange={(e)=> setPost({...post, body: e.target.value})} type="text" placeholder="Описание поста"></MyInput>
    <MyButton onClick={addNewPost}>Создать пост</MyButton>
  </form>;
}

export default PostForm;