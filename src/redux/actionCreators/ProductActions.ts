import axios from 'axios';
import { Dispatch } from 'redux';
import { ProductAction, productsTypes, IProduct } from '../actionTypes/ProductTypes'
import { rootState } from '../reducers';

export const get_products = () => {
    return async (dispatch: Dispatch<ProductAction>) =>{

        dispatch({
            type: productsTypes.LOADING 
        })

        try{
            const {data} = await axios.get('https://us-central1-gndx-fake-api.cloudfunctions.net/api')
        
            dispatch({
                type: productsTypes.ACTUALIZATION,
                payload: data
            })
        }
        catch(e){
            dispatch({
                type: productsTypes.ERROR,
                payload: 'Lo sentimos no hay internet'
            })
        }

    }   
}

export const add_to_car = (item:IProduct) => {
    return (dispatch: Dispatch<ProductAction>, getState: ()=> rootState):void =>{

        const { car } = getState().pro

        const newProduct = [...car,item]

        dispatch({
            type: productsTypes.CAR_ACTUALIZATION,
            payload: newProduct
        })
    }
}

export const removed_a_product = (id:number) => {
    return (dispatch: Dispatch<ProductAction>, getState: () => rootState):void =>{

        const { car } = getState().pro

        let newCar: IProduct[] = car;
    
        const index = newCar.findIndex(item => item.id === id)

        newCar.splice(index,1)

        dispatch({
            type: productsTypes.CAR_ACTUALIZATION,
            payload: newCar
        })
    }
}

export const car_sum = () => {
    return (dispatch:Dispatch<ProductAction>, getState:()=>rootState) =>{
        
        const {car} = getState().pro

        let sum: number = 0;  //uso de clousure 
        for (let index = 0; index < car.length; index++){
            const element = car[index].price;
            sum = sum + element
        }
        
        dispatch({
            type: productsTypes.CAR_ACTUALIZATION_TOTAL,
            payload: sum
        })
    }
}