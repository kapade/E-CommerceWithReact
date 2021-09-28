import { createContext, useEffect, useReducer } from 'react'
import Reducer from './Reduser'

// const INITIAL_STATE = {
//     user: JSON.parse(localStorage.getItem('user')) || 'visitor',
//     isFetching: false,
//     error: false,
// }

export const ProductContext = createContext();

export const ProductContextProvider = ({props }) => {
    const [products, dispatch] = useReducer(ProductReducer, [])

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user))
    }, [state.user])

    return (
        <Context.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>
            {children}
        </Context.Provider>
    )
}