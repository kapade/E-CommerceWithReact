const Reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_START':
            return {
                user: null,
                admin: null,
                isFetching: true,
                error: false
            }
        case 'LOGIN_SUCCESS':
            return {
                user: action.payload,
                admin: action.payload,
                isFetching: false,
                error: false
            }
        case 'LOGIN_FAILURE':
            return {
                user: null,
                admin: null,
                isFetching: false,
                error: true
            }
        case 'LOGOUT':
            return {
                user: null,
                admin: null,
                isFetching: false,
                error: false
            }
        default:
            return state
    }
}

export default Reducer