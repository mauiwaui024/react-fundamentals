import React from 'react';
import MyButton from '../UI/button/MyButton';
import styles from "./post.module.css"

const Post = (props) => {
    //передаем пропс как аргумент
    // console.log(props);
    return <div className={styles.post}>
        <div className='content'>
            <strong>{props.post.id}. {props.post.title}</strong>
            <div>{props.post.body}</div>
        </div>
        <div className='btns'>
           <MyButton onClick={()=>{props.remove(props.post)}}>Удалить</MyButton>
        </div>
    </div>;
}
export default Post;