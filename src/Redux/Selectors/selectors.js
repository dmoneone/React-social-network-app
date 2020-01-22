import { createSelector } from "reselect"

const getProfileFromState = state => {
    
    return state.profilePage.currentProfile
}

export const getProfileSelector = createSelector(getProfileFromState, (currentProfile) => {
    
    return currentProfile
})

export const getUsersFromState = state => state.usersPage.users

export const getUsersSelector = createSelector(getUsersFromState, (users) => {
    
    return users
})

export const getAuthorizedUserIdFormState = state => state.auth.userId
export const getIsAuthFromState = state => state.auth.isAuth