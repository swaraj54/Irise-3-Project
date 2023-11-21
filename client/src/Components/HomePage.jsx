import { useContext } from "react";
import { MyContext } from "../Context/AuthContext";

function HomePage() {

    const { state } = useContext(MyContext)
    console.log(state,"state")

    return (
        <div>Home Page user : {state?.user?.name}</div>
    )
}

export default HomePage;