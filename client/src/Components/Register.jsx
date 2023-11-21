import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
    const router = useNavigate();
    const [userData, setUserData] = useState({ name: "", email: "", password: "" })
    console.log(userData, "userData")
    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (userData.name && userData.email && userData.password) {
            // try {
            //     const response = await axios.post("http://localhost:8000/register", { userData })
            //     if (response.data.success) {
            //         alert("Registeration successfull");
            //     }
            // } catch (error) {
            //     alert(error.response.data.message)
            // }

            const myUsers = JSON.parse(localStorage.getItem("USERS")) || [];

            myUsers.push(userData)

            localStorage.setItem("USERS", JSON.stringify(myUsers))

            setUserData({ name: "", email: "", password: "" })

            router("/login")

            alert("Registeration Successfull.")

        } else {
            alert("Please fill the all values.")
        }
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label><br />
                <input type="text" onChange={handleChange} name='name' required value={userData.name} /><br />
                <label>Email</label><br />
                <input type="email" onChange={handleChange} name='email' required value={userData.email} /><br />
                <label>Password</label><br />
                <input type="password" onChange={handleChange} name='password' required value={userData.password} /><br />
                <input type="submit" value="Register" /><br />
            </form>
        </div>
    )
}

export default Register;