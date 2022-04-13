export const LoginStart = ()=>({
    type: 'LOGIN_START'
})
export const LoginSuccess = (payload)=>({
    type: 'LOGIN_SUCCESS',
    payload
})
export const follow = (payload)=>({
    type: 'FOLLOW',
    payload
})
export const unfollow = (payload)=>({
    type: 'UNFOLLOW',
    payload
})
export const LoginFailure = ()=>({
    type: 'LOGIN_FAILURE',
})