import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { reduxForm, Field, InjectedFormProps } from 'redux-form'
import Button from 'react-bootstrap/Button'
import { Input, createField } from '../FormComponents/FormComponents'
import ToDoItem from './ToDoItem/ToDoItem'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { maxLength,required } from '../../form_validation_checks/formChecks'
import c from './ToDoList.module.scss'
import './../animation.css'
import { ToDoItemType } from '../../Redux/TodoListReducer'

interface SubmitingDataType {
    title: string
}

type NameType = Extract<keyof SubmitingDataType,string>
const maxLength100 = maxLength(100)
const ToDoForm: React.FC<InjectedFormProps<SubmitingDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={c.toDo_form}>
            {createField<NameType>(Input,'title','text','title',[maxLength100,required])}
            {props.error && <span>{props.error}</span>}
            <Button type='submit' variant="success">add</Button>
        </form>
    )
}

const ToDoReduxForm = reduxForm<SubmitingDataType, {}>({
    form: 'toDo-list-form'
})(ToDoForm)

type PropsType = {
    addNewToDoListItem: (title: string) => void
    removeToDoListItem: (id: string) => void
    updateToDoListItem: (title: string,id: string) => void
    reset: any //need to fix any type !
    list: Array<ToDoItemType>
}

const ToDoList: React.FC<PropsType> = React.memo(props => {
    const {list,addNewToDoListItem,removeToDoListItem,updateToDoListItem,reset} = props
    const onSubmit = (data: SubmitingDataType) => { //need to fix any type
        addNewToDoListItem(data.title)
        reset('toDo-list-form')
    }
    return (
        <div>
            <ToDoReduxForm onSubmit={onSubmit}/>
            <ul className={c.nav_list}>
                {list.length === 0 && <li>You have not any todo items</li>}
                {list.length > 0 && (
                    <ReactCSSTransitionGroup
                        transitionName='ToDoList'
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}
                    >
                    {
                        list.map((item: ToDoItemType,index) => {
                            return (
                                <ToDoItem
                                    key={item.id ? item.id : index + Math.random()}
                                    item={item}
                                    removeToDoListItem={removeToDoListItem}
                                    updateToDoListItem={updateToDoListItem}
                                />
                            )
                        })
                    }
                    </ReactCSSTransitionGroup>
                )}
            </ul>
        </div>
    )
})

export default ToDoList