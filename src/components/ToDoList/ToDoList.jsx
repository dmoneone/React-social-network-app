import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../FormComponents/FormComponents'
import ToDoItem from './ToDoItem/ToDoItem'

const ToDoForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="title" component={Input} type="text" placeholder='title' validate={[]}/>
            <button>add</button>
        </form>
    )
}

const ToDoReduxForm = reduxForm({
    // a unique name for the form
    form: 'toDo-list-form'
})(ToDoForm)

const ToDoList = React.memo(props => {
    const {list,addNewToDoListItem,removeToDoListItem,updateToDoListItem} = props
    const onSubmit = data => {
        addNewToDoListItem(data.title)
    }

    return (
        <div>
            <ToDoReduxForm onSubmit={onSubmit}/>
            <ul>
                {list.length === 0 && <li>You have not any todo items</li>}
                {list.length > 0 && list.map((item,index) => {
                    return (
                        <ToDoItem
                            key={item.id ? item.id : index + Math.random()}
                            item={item}
                            removeToDoListItem={removeToDoListItem}
                            updateToDoListItem={updateToDoListItem}
                        />
                    )
                })}
            </ul>
        </div>
    )
})

export default ToDoList