import React,{ useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () => (
    <>
    <p><a href=''>Home</a></p>
    <p><a href=''>What is GPT ?</a></p>
    <p><a href=''>Open AI</a></p>
    <p><a href=''>Case Studies</a></p>
    <p><a href=''>Library</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='gpt3__navbar'>
            <div className='gpt3__navbar-links'>
                <div className='gpt3__navbar-links_logo'>
                    {/* <img src={logo} alt="logo" /> */}
                    <h1 className='logo__pabo'>contoh saja</h1>
                </div>
                <div className='gpt3__navbar-links_container'>
                   <Menu />
                </div>
            </div>
            <div className='gpt3__navbar-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
            </div>
            <div className='gpt3__navbar-menu'>
            {toggleMenu
                ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
                : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
            }
            {toggleMenu && (
                <div className='gpt3__navba-menu_coontainer scale-up-center'>
                <div className='gpt3__navbar-menu_container-links'>
                    <Menu />
                    <div className='gpt3__navbar-menu_container-links-sign'>
                        <p>Sign in</p>
                        <button type='button'>Sign up</button>
                    </div>
                </div>
                </div>
            
            )}
            </div>
        </div>
    )
}

export default Navbar
