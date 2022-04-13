

const AuthReducer = (state, action)=>{
    switch (action.type) {
        case 'LOGIN_START':
            return({
                user:null,
                isFetching: true,
                error: false
            })
        case 'LOGIN_SUCCESS':
            return({
                user:action.payload,
                isFetching: false,
                error: false
            })
        case 'LOGIN_FAILURE':
            return({
                user:null,
                isFetching: false,
                error: true
            })
            
        case 'FOLLOW':
            return({
                user:{
                    ...state.user,
                    followings: [...state.user.followings, action.payload]
                },
                isFetching: false,
                error: false
            })
            
        case 'UNFOLLOW':
            return({
                user:{
                    ...state.user,
                    followings: state.user.followings.filter(friendId => friendId!==action.payload)
                },
                isFetching: false,
                error: false
            })
            
        default:
            break;
    }
}
export default AuthReducer