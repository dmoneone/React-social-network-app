import profilePageReducer, { creatorAddPostAction } from "../ProfilePageReducer";

const state = {
    postsData : [
        {msg: "jopa", quantityOfLikes: 10, time: '6 Dec 2019 22:13:20'},
        {msg: "Chlen", quantityOfLikes: 100, time: '6 Dec 2019 22:13:21'},
        {msg: "1", quantityOfLikes: 100,time: '6 Dec 2019 22:13:22'},
        {msg: "Chl2222en", quantityOfLikes: 100, time: '6 Dec 2019 22:13:23'}
    ]
}


it('post length is incremented', () => {
    const action = creatorAddPostAction(228,'hello')
    const newState = profilePageReducer(state,action)
    console.log(newState)
    expect(newState.postsData.length).toBe(5)
});