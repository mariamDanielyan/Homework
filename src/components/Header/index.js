import {NavLink} from "react-router-dom";

const Header = () =>{
    return(
        <>
            <header className='header'>
                <NavLink to='home'>Home</NavLink>
                <NavLink to='edit'>Edit</NavLink>
                <NavLink to='search'>Search</NavLink>
                <NavLink to='login'>Login</NavLink>
            </header>
        </>
    )
}

export default Header