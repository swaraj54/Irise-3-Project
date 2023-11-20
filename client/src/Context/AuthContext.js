import { createContext, useReducer } from 'react'

export const MyContext = createContext();

const Reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload }
        case 'LOGOUT':
            return { ...state, user: null }
        default:
            return state
    }
}

const initialState = { user: null }

const AuthContext = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    const Login = (data) => {
        dispatch({ type: "LOGIN", payload: data })
    }

    const Logout = () => {
        dispatch({ type: 'LOGOUT' })
    }

    return (
        <MyContext.Provider value={{ state, Login, Logout }}>
            {children}
        </MyContext.Provider>
    )
}

export default AuthContext;