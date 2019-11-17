import React from 'react';

const FormAddingPost = (props) => {
    const textArea = React.createRef();

    const addPost = e => {
        props.dispatch({type: 'ADD-POST'});
    }

    const texareaOnChangeHandler = e => {
        props.dispatch({type: 'UPDATE-NEW-POST-MSG', newPostMsg: textArea.current.value})
    }
    
    return (
        <div>
            <textarea onChange={texareaOnChangeHandler} ref={textArea} cols="30" rows="10" value={props.profilePage.newPostMsg}/>
            <button onClick={addPost}>add</button>
        </div>
    )
}

export default FormAddingPost;