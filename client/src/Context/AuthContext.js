import { createContext, useEffect, useReducer } from 'react'

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
        localStorage.removeItem("Logged_In_User")
        dispatch({ type: 'LOGOUT' })
    }

    useEffect(() => {
        // alert("Usre refreshed page..")

        const isUserLoggedIn = JSON.parse(localStorage.getItem("Logged_In_User"))
        // console.log(isUserLoggedIn, "isUserLoggedIn")
        if (isUserLoggedIn) {
            const users = JSON.parse(localStorage.getItem("USERS"));

            for (var i = 0; i < users.length; i++) {
                if (isUserLoggedIn.email === users[i].email) {
                    Login({ name: users[i].name, email: users[i].email })
                }
            }
        }

    }, [])

    return (
        <MyContext.Provider value={{ state, Login, Logout }}>
            {children}
        </MyContext.Provider>
    )
}

export default AuthContext;