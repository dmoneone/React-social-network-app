import React from 'react'
import { reduxForm, Field} from 'redux-form'
import { Input } from '../FormComponents/FormComponents'
import ToDoItem from './ToDoItem/ToDoItem'
import { maxLength,required } from '../../form_validation_checks/formChecks'
const maxLength100 = maxLength(100)
const ToDoForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="title" component={Input} type="text" placeholder='title' validate={[maxLength100,required]}/>
            {props.error && <span>{props.error}</span>}
            <button>add</button>
        </form>
    )
}

const ToDoReduxForm = reduxForm({
    // a unique name for the form
    form: 'toDo-list-form'
})(ToDoForm)

const ToDoList = React.memo(props => {
    const {list,addNewToDoListItem,removeToDoListItem,updateToDoListItem,reset} = props
    const onSubmit = data => {
        addNewToDoListItem(data.title)
        reset('toDo-list-form')

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