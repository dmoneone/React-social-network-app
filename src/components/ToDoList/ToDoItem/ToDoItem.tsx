import React, { useState } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Input } from '../../FormComponents/FormComponents'
import c from './ToDoItem.module.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import { ToDoItemType } from '../../../Redux/TodoListReducer'

//need to fix any type !
const UpdateItemForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name="title" component={Input} type="text" placeholder='title' validate={[]}/>
            <button>save</button>
        </form>
    )
}

const UpdateItemReduxForm = reduxForm({
    // a unique name for the form
    form: 'update-item-form'
})(UpdateItemForm)

type PropsType = {
    item: ToDoItemType
    removeToDoListItem: (id: string) => void
    updateToDoListItem: (title: string, id: string) => void
}

const ToDoItem: React.FC<PropsType> = React.memo(props => {
    const {item,removeToDoListItem,updateToDoListItem} = props
    const [editMode,setEditMode] = useState(false)

    const saveUpdatedItem = (data: any) => { //need fix any type
        updateToDoListItem(data.title,item.id)
        setEditMode(false)
    }
    return (
        <>
            <li className={c.item}>
                {!editMode && <span>{item.title}</span>}
                {!editMode && <span>{item.addedDate}</span>}
                {editMode && <UpdateItemReduxForm onSubmit={saveUpdatedItem} initialValues={{title: item.title}}/>}
                <div>
                    <Button 
                        variant='danger'
                        onClick={() => removeToDoListItem(item.id) }
                        className={c.rmv_btn}
                    >remove</Button>
                    <Button 
                        variant='primary'
                        className={c.edit_mode_btn}
                        onClick={() => editMode ? setEditMode(false) : setEditMode(true)}
                    >editMode</Button>
                </div>
            </li>
        </>
    )
})

export default ToDoItem