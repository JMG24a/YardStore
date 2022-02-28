import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Checkout } from '../pages/Checkout';
import { Payment } from '../pages/Payment';
import { Success } from '../pages/Success'
 


function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/checkout' element={<Checkout/>} />
                <Route path='/payment' element={<Payment/>} />
                <Route path='/success' element={<Success/>} />
            </Routes>
        </BrowserRouter>
    )
}

export {App}