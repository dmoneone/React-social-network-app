import React from 'react';

const FormAddingPost = (props) => {
    const textArea = React.createRef();

    const addPost = e => {
        const value = textArea.current.value;
        props.addPost(value);
        console.log(props.state)
    }

    return (
        <div>
            <textarea ref={textArea} cols="30" rows="10"></textarea>
            <button onClick={addPost}>add</button>
        </div>
    )
}

export default FormAddingPost;