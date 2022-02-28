import React from 'react'
import { useDispatch } from 'react-redux'
import { useTypeSelector } from '../hook/useTypeSelector'
import { rootState } from '../redux/reducers'
import * as ProductActions from '../redux/actionCreators/ProductActions'
import { bindActionCreators } from 'redux'
import { IProduct } from '../redux/actionTypes/ProductTypes'
//styles
import '../styles/components/product.scss'
const add =  require('../assets/icons/bt_add_to_cart.svg')

function ListProducts(){

    const {products} = useTypeSelector((state:rootState) => state.pro)
    const dispatch = useDispatch()
    const { add_to_car } = bindActionCreators(ProductActions, dispatch)

    const handleClick = (product: IProduct) =>{
        add_to_car(product)
    }

    return(
        <>
            {products.map(product => ( 
                <div 
                    key={product.id}
                    className='product_card'
                >
                    <img 
                        className='product-img'
                        src={product.image} 
                        alt={product.title} 
                    />
                    <div
                        className='product-details'
                    >
                        <p className='title' >{product.title}</p>
                        <p className='description'>{product.description}</p>
                        <p className='price'>${product.price}</p>
                        <button
                            onClick={()=>handleClick(product)}
                            ><span className="icon_add"></span>
                        </button>
                    </div>
                </div>
            ))}
        </>
    
    )
}

export {ListProducts}


