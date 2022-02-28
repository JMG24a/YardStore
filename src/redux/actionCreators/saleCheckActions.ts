import {Dispatch} from 'redux'
import { ISaleCheckState, ISaleCheckAction, ISaleCheckType } from '../actionTypes/saleCheckTypes';

export const sale_check = (data:ISaleCheckState) =>{
    return (dispatch:Dispatch<ISaleCheckAction>) =>{
        
        //api
        console.log("actionsSale",data)

        dispatch({
            type: ISaleCheckType.addSale,
            payload: data
        })
    }
}
