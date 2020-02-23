import React, { useEffect } from 'react'
import { compose } from 'redux'
import { withAuthRedirect } from '../../HOCS/withAuthRedirect'
import { connect } from 'react-redux'
import { getToDoList,addNewToDoListItem,removeToDoListItem,updateToDoListItem,ToDoItemType } from '../../Redux/TodoListReducer' 
import ToDoList from './ToDoList'
import { reset } from 'redux-form'
import { GlobalStateType } from '../../Redux/redux-store'
import { getToDoListFromState } from '../../Redux/Selectors/selectors'

type MapStateToPropsType = {
    toDoList: Array<ToDoItemType> 
}

type MapDispatchToProps = {
    getToDoList: () => void
    addNewToDoListItem: () => void
    removeToDoListItem: () => void
    updateToDoListItem: () => void
    reset: () => void
}

type PropsType = MapStateToPropsType & MapDispatchToProps

const ToDoListContainer: React.FC<PropsType> = props => {
    useEffect(() => {
        props.getToDoList()
    },[])
    return (
       <div>
           <ToDoList 
                addNewToDoListItem={props.addNewToDoListItem}
                removeToDoListItem={props.removeToDoListItem}
                updateToDoListItem={props.updateToDoListItem}
                reset={props.reset}
                list={props.toDoList}
           />
       </div>
    )
}
const mapStateToProps = (state: GlobalStateType): MapStateToPropsType => ({
    toDoList: getToDoListFromState(state)
})

//connect need generics
export default compose(
    connect(mapStateToProps,{getToDoList,addNewToDoListItem,removeToDoListItem,updateToDoListItem,reset}),
    withAuthRedirect
)(ToDoListContainer)