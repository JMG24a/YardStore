import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
//redux
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { rootState } from '../redux/reducers'
import { ListCarProducts } from '../components/ListCarProducts'
import * as saleActions from '../redux/actionCreators/saleCheckActions'
//styles
import '../styles/components/pay.scss'
import { ISaleCheckState } from '../redux/actionTypes/saleCheckTypes';

function Pay({children}:IProps){

    //redux
    const { buyer } = useSelector((state:rootState)=> state.buyerState)
    const { total, car } = useSelector((state:rootState)=> state.pro)
    const dispatch = useDispatch()
    const{
        sale_check
    } = bindActionCreators(saleActions, dispatch)

    //react
    const [getSale, setSale] = useState<ISaleCheckState>({
        codeSale: 0,
        client: buyer,
        date: '',
        price: total,
        product: [...car],
    })

    const navigate = useNavigate()

    const handleReset = () =>{
        navigate('/checkout')
    }

    const handlePay = () =>{
        console.log("pay get Sale",getSale)
        sale_check(getSale);

        navigate('/success')
    }

    console.log('pay: ', buyer)
    return(
        <div className='container-pay'>
            <div className="pay-card">

                <h3>{buyer.name}{' '}{buyer.lastName}</h3>
                <p>Genial solo falta tu pago y listo</p>

                <div className='pay-main_list'>
                   {children}
                </div>

                <div className='pay-bottom'>
                    <div className='pay_address'>
                        <p>chequea tu direccion de entrega</p>

                        <div className='address'>
                            <p>Email: {buyer.email}</p>
                            <p>Pais: {buyer.address.country}</p>
                            <p>Estado: {buyer.address.state_address}</p>
                            <p>Ciudad: {buyer.address.city}</p>

                            <button 
                                type='button'
                                onClick={handleReset}
                            >
                                combiar direccion
                            </button>
                        </div>
                    </div>
                    <p>Total: <span>${total}</span></p>
                    <button 
                        className='pay'
                        onClick={handlePay}
                    >
                        PayPal
                    </button>
                </div>
  
            </div>
        </div>  
    )
}

export {Pay}

interface IProps{
    children: React.ReactNode
}