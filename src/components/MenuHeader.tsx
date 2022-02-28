import React from 'react'
//styles
import '../styles/components/menuHeader.scss' 

function MenuHeader(){
    return(
        <React.Fragment>
            <div className="desktop_menu-container">
                <ul>
                    <li>
                        <a href="/">My orders</a>
                    </li>

                    <li>
                        <a href="/">My account</a>
                    </li>

                    <li>
                        <a href="/" className="out">Sign out</a>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}

export {MenuHeader}