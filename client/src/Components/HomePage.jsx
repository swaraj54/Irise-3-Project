import { useContext } from "react";
import { MyContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function HomePage() {

    const { state, Logout } = useContext(MyContext)
    console.log(state, "state")
    const router = useNavigate();

    return (
        <div>
            <h1>Home Page user : {state?.user?.name}</h1>
        </div>

    )
}

export default HomePage;