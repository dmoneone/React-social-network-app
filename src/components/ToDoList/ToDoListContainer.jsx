import React, { useEffect } from 'react'
import { compose } from 'redux'
import { withAuthRedirect } from '../../HOCS/withAuthRedirect'
import { connect } from 'react-redux'
import { getToDoList,addNewToDoListItem,removeToDoListItem,updateToDoListItem } from './../../Redux/TodoListReducer' 
import ToDoList from './ToDoList'
import { reset } from 'redux-form'

const ToDoListContainer = props => {
    useEffect(() => {
        props.getToDoList()
    },[])

    return (
       <div>
           <ToDoList 
                list={props.toDoList} 
                addNewToDoListItem={props.addNewToDoListItem}
                removeToDoListItem={props.removeToDoListItem}
                updateToDoListItem={props.updateToDoListItem}
                reset={props.reset}
           />
       </div>
    )
}
const mapStateToProps = state => ({
    toDoList: state.toDoList.todoList
})

export default compose(
    connect(mapStateToProps,{getToDoList,addNewToDoListItem,removeToDoListItem,updateToDoListItem,reset}),
    withAuthRedirect
)(ToDoListContainer)