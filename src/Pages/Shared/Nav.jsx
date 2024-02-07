import { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../../css/style.css'
import { authContext } from '../../Provider/AuthProvider';

const Nav = () => {
    const { user, logOut } = useContext(authContext);
    console.log(user);
    const handleLogOut = () => [
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })
    ]

    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/ourMenu'>Our Menu</Link></li>
        <li><Link to='/order/salad'>Our Shop</Link></li>
        {
            user ?
                <>
                {/* <li><span>{user.displayName}</span></li> */}
                <img className='w-12 h-12 rounded-full' src={user.photoURL} alt="" />
                    <li><button onClick={handleLogOut} className='btn btn-sm ms-2'><Link>LogOut</Link></button></li>
                </>
                :
                <>
                    <li><button className='btn btn-sm'><Link to='/login'>Login</Link></button></li>
                </>
        }
    </>
    return (
        <div className="navbar px-6 max-w-screen-xl mx-auto flex justify-between items-center fixed z-10 bg-opacity-35 bg-black text-white mt-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black bg-opacity-35 text-white rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="text-center uppercase logo leading-[22px]"><span className='tracking-[1px] text-[32px]'>Bistro Boss</span><br /><span className='text-[18px] tracking-[10px] fond-light'>restaurant</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex items-center justify-center">
                    {navItems}
                </ul>
            </div>
        </div>
    );
};

export default Nav;