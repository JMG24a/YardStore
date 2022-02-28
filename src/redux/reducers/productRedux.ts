import { ProductAction, productsTypes, ProductState } from '../actionTypes/ProductTypes'


const INITIAL_STATE = {
    products: [],
    car: [],
    total: 0,
    loading: false,
    error: ''
}

export const productReducer = (state: ProductState = INITIAL_STATE, action: ProductAction):ProductState =>{
    switch(action.type){
        case productsTypes.ACTUALIZATION:{
            return{
                ...state,
                products: action.payload,
                loading: false
            }
        }
        case productsTypes.CAR_ACTUALIZATION:{
            return{
                ...state,
                car: action.payload
            }
        }
        case productsTypes.CAR_ACTUALIZATION_TOTAL:{
            return{
                ...state,
                total: action.payload
            }
        }
        case productsTypes.LOADING:{
            return{
                ...state,
                loading: true
            }
        }
        case productsTypes.ERROR:{
            return{
                ...state,
                error: action.payload,
                loading: false
            }
            
        }
        default:{
            return state
            
        }
    }
}
