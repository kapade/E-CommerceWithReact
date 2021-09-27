import { createContext, useEffect, useReducer } from 'react'
import Reducer from './Reduser'

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    admin: JSON.parse(localStorage.getItem('admin')) || null,
    isFetching: false,
    error: false,
}

export const Context = createContext(INITIAL_STATE)

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE)
    console.log(dispatch)

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user))
        localStorage.setItem('admin', JSON.stringify(state.admin))
    }, [state.user])

    return (
        <Context.Provider value={{
            user: state.user,
            admin: state.admin,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>
            {children}
        </Context.Provider>
    )
}