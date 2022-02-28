import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTypeSelector } from '../hook/useTypeSelector'
import { rootState } from '../redux/reducers';
//styles
import '../styles/containers/header.scss';
//import icon_menuMovil from '../assets/icons/icon_menu.svg'; 
const icon_menuMobil = require("../assets/icons/icon_menu.svg") as string;
const logo_favicon = require("../assets/logos/logo_yard_sale.svg") as string;
const icon_car = require("../assets/icons/icon_shopping_cart.svg")

function Header({
    isMyOrder,
    setIsMyOrder,
    isMenuMobile,
    setIsMenuMobile, 
    children
}:IProps){

    //redux
    const counter = useTypeSelector((state:rootState) => state.pro.car)
    //react-state
    const [isMenuHeader, setIsMenuHeader] = useState<boolean>(false)

    return(
        <header className='header_container'>
            <nav className='header_nav'>
              
                {!!isMenuMobile && children[0] /**MenuMovile*/}
                                                                                    
                {!!isMenuHeader && children[1] /**MenuHeader*/}

                <img 
                    src={icon_menuMobil}
                    alt="menu" 
                    className="header_icon-mobileMenu"
                    onClick={()=>{setIsMenuMobile(!isMenuMobile)}}
                />

                <div className="header_navbar-left">

                    <Link to="/">
                        <img src={logo_favicon} alt="logo" className="header_logoHome"/>
                    </Link>

                    <ul className='header_menu'>
                        <li>
                            <a href="/">All</a>
                        </li>
                        <li>
                            <a href="/">Clothes</a>
                        </li>
                        <li>
                            <a href="/">Electronics</a>
                        </li>
                        <li>
                            <a href="/">Furnitures</a>
                        </li>
                        <li>
                            <a href="/">Toys</a>
                        </li>
                        <li>
                            <a href="/">Others</a>
                        </li>
                    </ul>
                </div>

                <div className="navbar-right">
                    <ul>
                        <li 
                            onClick={()=>{setIsMenuHeader(!isMenuHeader)}}
                            className="navbar-email"
                        >
                            platzi@example.com
                        </li>
                        
                        <li className="navbar-shopping-cart"
                            onClick={()=>setIsMyOrder(!isMyOrder)}
                        >
                            <img src={icon_car} alt="shopping cart"/>
                            {counter.length > 0 && <div>{counter.length}</div>}
                        </li>
                    </ul>
                </div>

            </nav>
        </header>

    )
}

export {Header}

interface IProps{
    isMyOrder: any;
    setIsMyOrder: any;
    setIsMenuMobile: any;
    isMenuMobile: any
    children: React.ReactChild[];
}