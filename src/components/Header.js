import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log('context', user);

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-base-100 bg-primary text-primary-content pl-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='text-black'><Link to='/'>Home</Link></li>
                            <li className='text-black'><Link to='/orders'>Orders</Link></li>
                            <li className='text-black'><Link to='/login'>Login</Link></li>
                            <li className='text-black'><Link to='/register'>Registration</Link></li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Awesome Auth</Link>
                    {user?.email &&
                        <span>Welcome {user.email}</span>
                    }
                    {
                        user?.email ?
                            <button onClick={handleSignOut} className="btn btn-sm">Sign Out</button>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm">Login</button>
                            </Link>
                    }
                </div>
                <div className="navbar-end pr-24 hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/orders'>Orders</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/register'>Registration</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;