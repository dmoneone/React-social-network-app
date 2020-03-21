import { createSelector } from "reselect"
import { GlobalStateType } from "../redux-store"
import { ProfileType } from "../ProfilePageReducer"
import { ToDoItemType } from "../TodoListReducer"
import { UserType } from "../UsersReducer"

const getProfileFromState = (state: GlobalStateType): ProfileType | null => {
    return state.profilePage.currentProfile
}

export const getToDoListFromState = (state: GlobalStateType): Array<ToDoItemType> => {
    return state.toDoList.todoList
}

export const getProfileSelector = createSelector(getProfileFromState, (currentProfile) => {
    return currentProfile
})

export const getUsersFromState = (state: GlobalStateType): Array<UserType> => state.usersPage.users

export const getUsersSelector = createSelector(getUsersFromState, (users) => {
    return users
})

export const getAuthorizedUserIdFormState = (state: GlobalStateType): number | null => state.auth.userId
export const getIsAuthFromState = (state: GlobalStateType): boolean => state.auth.isAuth