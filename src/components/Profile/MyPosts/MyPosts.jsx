import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = (props) => {
    const handleChange = (e) => {
        props.handleChange(e);
    }

    const addPost = () => {
        props.addPost();
    }

    return (
        <div className={s.postsWrapper}>
            <h2>Mys posts</h2>
            <textarea onChange={handleChange} value={props.newTextValue}/> <br/>
            <button onClick={addPost}>Add post</button> <br/>
            <div className={s.posts}>
                {props.posts.map(el => {
                    return <Post text={el.text}/>
                })}
            </div>
        </div>
    )
}

export default MyPosts;