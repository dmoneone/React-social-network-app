import { createSelector } from "reselect"
import { GlobalStateType } from "../redux-store"

const getProfileFromState = (state: GlobalStateType) => {
    return state.profilePage.currentProfile
}

export const getToDoListFromState = (state: GlobalStateType) => {
    return state.toDoList.todoList
}

export const getProfileSelector = createSelector(getProfileFromState, (currentProfile) => {
    return currentProfile
})

export const getUsersFromState = (state: GlobalStateType) => state.usersPage.users

export const getUsersSelector = createSelector(getUsersFromState, (users) => {
    return users
})

export const getAuthorizedUserIdFormState = (state: GlobalStateType) => state.auth.userId
export const getIsAuthFromState = (state: GlobalStateType) => state.auth.isAuth