import React, {useLayoutEffect} from 'react'
//redux
import { useSelector } from 'react-redux';
import { rootState } from '../redux/reducers';
//style
const icon_close = require('../assets/icons/icon_close.png') as string


function SaleCheck(){

    //redux
    const { saleCheck } = useSelector((state:rootState)=>state)

    //react

    return(
        <div className='container-saleCheck'>
            <div className='saleCheck-card'> 
                <img src={icon_close}></img>
                <h2>Tu Factura</h2>
                <div>
                    <p>{saleCheck.client.name}</p>
                    <p>{saleCheck.codeSale}</p>
                    <p>{saleCheck.date}</p>
                    <div>
                        {saleCheck.product.map(item =>(
                            <div key={item.id}>
                                <p>{item.title}</p>
                                <p>{item.price}</p>
                            </div>
                        ))

                        }
                    </div>
                    <p>{saleCheck.price}</p>
                </div>
            </div>
        </div> 
    )
}

export {SaleCheck}