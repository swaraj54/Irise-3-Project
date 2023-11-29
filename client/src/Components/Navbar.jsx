import { useNavigate } from 'react-router-dom';
import './Styles/Navbar.css'
import { useContext, useState } from 'react';
import { MyContext } from '../Context/AuthContext';

function Navbar() {

    const [search, setSearch] = useState("");
    console.log(search, "search")

    const { Logout, state } = useContext(MyContext)
    const router = useNavigate();

    function SearchProduct() {
        router(`/search/${search}`)
    }

    return (
        <div id='nav-div'>
            <div onClick={() => router('/')}>Home</div>
            <div className='d-f jc-sb' >
                <div onClick={() => router('/mens')}>MENS</div>
                {/* <div onClick={() => router('/mens')}>WOMENS</div> */}
                {/* <div onClick={() => router('/mens')}>KIDS</div>
                <div onClick={() => router('/mens')}>ELECTRONICS</div> */}
                <input type='text' onChange={(event) => setSearch(event.target.value)} />
                <button onClick={SearchProduct}>Search</button>
            </div>
            <div className='d-f jc-r' >
                {state?.user?.name ? <div className='profile'>
                    <div className='c-p'>Profile </div>
                    <div onClick={Logout} className='c-p'>Logout</div>
                </div> : <div className='c-p' onClick={() => router('/login')}>Login</div>}
                <div className='c-p'>Cart</div>
            </div>
        </div>
    )
}

export default Navbar;