import React from 'react';
import '../styles/components/footer.scss'
const logo = require("../assets/logos/favicon_bota_fora.svg")

function Footer(){
    return(
        <div className='footer-container'>
            <img src={logo} alt="logo" />
        </div>
    );
}

export {Footer}