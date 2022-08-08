import React from 'react';
import MyButton from '../UI/button/MyButton';
import styles from "./post.module.css"
import { useNavigate } from 'react-router-dom';

const Post = (props) => {

    let navigate = useNavigate();
    
    const routeChange = () => {
        let path = `/posts/${props.post.id}`;
        navigate(path);
    }
    return <div className={styles.post}>
        <div className='content'>
            <strong>{props.post.id}. {props.post.title}</strong>
            <div>{props.post.body}</div>
        </div>
        <div className={styles.btns}>
           <MyButton onClick={routeChange}>Открыть</MyButton>
           <MyButton onClick={()=>{props.remove(props.post)}}>Удалить</MyButton>
        </div>
    </div>;
}
export default Post;