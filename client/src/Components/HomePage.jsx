import { useContext } from "react";
import { MyContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function HomePage() {

    const { state, Logout } = useContext(MyContext)
    console.log(state, "state")
    const router = useNavigate();

    const myLogout = () => {
        Logout()
        alert("Logout successfull !")
    }

    const myLogin = () => {
        router('/login')
    }

    return (
        <div>
            <h1>Home Page user : {state?.user?.name}</h1>
            {state?.user ? <button onClick={myLogout}>Logout ?</button> : <button onClick={myLogin}>Login ?</button>}


        </div>

    )
}

export default HomePage;