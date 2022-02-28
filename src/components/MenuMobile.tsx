import React from 'react'
//styles
import '../styles/components/menuMobile.scss'
const icon_close = require("../assets/icons/icon_close.png")

function MenuMobile({setIsMenuMobile}:IProps){
    return(
        <React.Fragment>
            <div className="mobile_menu-container">
                <img 
                    src={icon_close}
                    className="close_img"
                    onClick={()=>{setIsMenuMobile(false)}}
                />
                <ul className='mobile_menu-categorys'>
                    <li>
                        <a href="/">CATEGORIES</a>
                    </li>
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
                        <a href="/">Other</a>
                    </li>
                </ul>

                <ul className='mobile_menu-user'>
                    <li>
                        <a href="/">My orders</a>
                    </li>
                    <li>
                        <a href="/">My account</a>
                    </li>
                </ul>
                
                <ul className='mobile_menu-config'>
                    <li>
                        <a href="/" className="email">
                            platzi@example.com
                        </a>
                    </li>
                    <li>
                        <a href="/" className="sign-out">
                            Sign out
                        </a>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}

export {MenuMobile}

interface IProps{
    setIsMenuMobile: any
}