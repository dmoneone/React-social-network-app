import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { reduxForm, Field} from 'redux-form'
import Button from 'react-bootstrap/Button'
import { Input } from '../FormComponents/FormComponents'
import ToDoItem from './ToDoItem/ToDoItem'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { maxLength,required } from '../../form_validation_checks/formChecks'
import c from './ToDoList.module.scss'
import './../animation.css'

const maxLength100 = maxLength(100)
const ToDoForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={c.toDo_form}>
            <Field name="title" component={Input} type="text" placeholder='title' validate={[maxLength100,required]}/>
            {props.error && <span>{props.error}</span>}
            <Button type='submit' variant="success">add</Button>
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
            <ul className={c.nav_list}>
                {list.length === 0 && <li>You have not any todo items</li>}
                {list.length > 0 && (
                    <ReactCSSTransitionGroup
                        transitionName='ToDoList'
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}
                    >
                    {
                        list.map((item,index) => {
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