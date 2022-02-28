import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as ProductActions from '../redux/actionCreators/ProductActions'
import { rootState } from '../redux/reducers';
//styles
import '../styles/components/productCar.scss'
const icon_close = require('../assets/icons/icon_close.png');

function ListCarProducts(){

    const {car} = useSelector((state:rootState) => state.pro)

    const dispatch = useDispatch();
    const{
        removed_a_product
    } = bindActionCreators(ProductActions, dispatch)

 
    const handleRemove = (id:number):void =>{
        removed_a_product(id)
    }

    useEffect(()=>{

    },[car.length])

    return(
        <>  
            {car.length > 0 &&
                <>
                    {car.map(item => (
                        <div 
                            key={item.id}
                            className="shopping-cart"
                        >
                            <figure className='img-container'>
                                <img 
                                    src={item.image}
                                    alt={item.title}
                                />
                            </figure>

                            <div className='container-details'>
                                <p className="title">{item.title}</p>
                                <p className="price">${item.price}</p>
                                <img 
                                    onClick={()=>handleRemove(item.id)}
                                    className='icon_close'
                                    src={icon_close}
                                    alt="close"
                                />
                            </div>
                        </div>
                    ))}
                </>
            }   
        </>
    )
}

export {ListCarProducts}
