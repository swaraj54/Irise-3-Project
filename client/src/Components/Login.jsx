import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../Context/AuthContext";
import toast from "react-hot-toast";


function Login() {

    const { state, Login } = useContext(MyContext);
    // console.log(state,"state")
    const router = useNavigate();
    const [userData, setUserData] = useState({ email: "", password: "" })
    // console.log(userData, "userData")
    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (userData.email && userData.password) {
            // try {
            //     const response = await axios.post("http://localhost:8000/login", { userData })
            //     if (response.data.success) {
            //         alert("Registeration successfull");
            //     }
            // } catch (error) {
            //     alert(error.response.data.message)
            // }

            const LS = JSON.parse(localStorage.getItem("USERS"));

            for (var i = 0; i < LS.length; i++) {
                if (LS[i].email === userData.email && LS[i].password === userData.password) {
                    // abc@gmail.com -> jwt -> ctrybuinmbugvyfctdrxsdctvbghn67
                    localStorage.setItem("Logged_In_User", JSON.stringify({ email: LS[i].email }))
                    Login({ name: LS[i].name, email: LS[i].email });
                    setUserData({ email: "", password: "" })
                    router("/")
                    return toast.success("Login Successfull.")
                }
            }

            return toast.error("Please check you creds.")


        } else {
            toast.error("Please fill the all values.")
        }
    }


    useEffect(() => {
        if (state?.user?.name) {
            router('/')
        }
    }, [state])

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>Email</label><br />
                <input type="email" onChange={handleChange} name='email' required value={userData.email} /><br />
                <label>Password</label><br />
                <input type="password" onChange={handleChange} name='password' required value={userData.password} /><br />
                <input type="submit" value="Login" /><br />
            </form>
        </div>
    )
}

export default Login;