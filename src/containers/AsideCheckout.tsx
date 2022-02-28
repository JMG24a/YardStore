import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
//redux
import { useTypeSelector } from '../hook/useTypeSelector';
import { useDispatch } from 'react-redux';
import * as productActions from '../redux/actionCreators/ProductActions';
import { rootState } from '../redux/reducers';
//styles
import '../styles/containers/asideCheckout.scss'
const icon_arrow = require("../assets/icons/flechita.svg")
const icon_close = require("../assets/icons/icon_close.png")



function AsideCheckout({children, setIsMyOrder}: IProps){

    const {total, car} = useTypeSelector((state:rootState)=> state.pro)
    const dispatch = useDispatch()
    const {
        car_sum
    } = bindActionCreators(productActions, dispatch) 

    useEffect(()=>{
        car_sum()
    },[car.length]) 


    

    return(
        <React.Fragment>
            <aside className="asideCheckout-container">
                <div className="aisdeCheckout_title-container">
                    <img 
                        onClick={()=>setIsMyOrder(false)}
                        className='icon_close'
                        src={icon_close}
                        alt="arrow"
                    />
                    <img 
                        className='icon_arrow'
                        src={icon_arrow}
                        alt="arrow"
                    />
                    <h3 className="title">My order</h3>
                </div>

                <div className="myOrder-content">

                    {car.length === 0 && <p className='products-null'>Sin productos agregados</p>}
                    {children}
                </div>

                {car.length > 0 ? 
                        <div className='order-container'>
                            <div className="order">
                                <p><span>Precio Total: </span>${total}</p>
                            </div>
                            <Link to="/checkout">
                                <button className="button-checkout">
                                Checkout
                                </button>
                            </Link> 
                        </div>
                       :
                        <div className='order-null'>
                            <div className='order-null_card'>
                                <p>Aqui puedes ver los productos que agreges al carrito</p>
                            </div>
                        </div>
                    }  
            </aside>
        </React.Fragment>
    )
}

export {AsideCheckout}

interface IProps{
    children: React.ReactNode,
    setIsMyOrder: any
}