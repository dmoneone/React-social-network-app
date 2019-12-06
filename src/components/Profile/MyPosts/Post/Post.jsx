import React from 'react';
import c from './Post.module.css';


const Post = props => {
    const span_msg = React.createRef();
    const btnRmvPost = e => {
        props.rmvPost(span_msg.current.textContent)
    }
    return (
        <div className={c.block}>
            <div>
                <span className={c.msg} ref={span_msg}>{props.message}</span>
                <span className={c.likes}><img src="https://cdn0.iconfinder.com/data/icons/faces-3/24/34-512.png" alt="Likes"/> {props.quantityOfLikes}</span>
            </div>
            <div>
                <span className={c.time}>{props.time}</span>
                <button className={c.btn_rmv_post} onClick={btnRmvPost}>removePost</button>
            </div>
        </div>
        
    )
}

export default Post;