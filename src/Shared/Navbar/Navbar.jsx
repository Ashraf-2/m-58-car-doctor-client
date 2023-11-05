import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Navbar = () => {
    const {user,logOut } = useContext(AuthContext);
    const navItems = <>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/about">About</Link> </li>
        {/* <li> <a className="duration-900" href="#about">About</a> </li> */}
        {
            user?<>
                <li><Link to="/bookings">Bookings</Link></li>
            </>:""
        }

    </>
    const handleLogout =() => {
        logOut()
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <button><img src={logo} alt="logo" /></button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-outline text-red-600 border-red-600 outline-red-600 hover:bg-transparent hover:text-red-600 hover:border-red-600">Appointment</button>
                    {
                        user? <button onClick={handleLogout} className="btn btn-neutral">Logout</button>: <Link to="/login" className="btn btn-neutral">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;