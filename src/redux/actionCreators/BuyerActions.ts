import { Dispatch } from "react";
import { IBuyerAction, IBuyer, IBuyerType } from "../actionTypes/BuyerType";

export const form_buyer = (data:IBuyer) =>{
    return (dispatch:Dispatch<IBuyerAction>) =>{

        dispatch({
            type: IBuyerType.update,
            payload: data
        })
    }
}

/*

export const save_sale_check = () =>{
    return (dispatch:Dispatch<IBuyerAction>, getState: () => rootState) =>{
        const { saleCheck, saleChecks} = getState().buyerState

        let newSaleCheck = saleChecks
        let pushSaleCheck = saleCheck

        newSaleCheck.push(pushSaleCheck) //api

        dispatch({
            type: IBuyerType.addInvoice,
            payload: newSaleCheck
        })
    }
}









        let newBuyer:IBuyer = {
            id: 0,
            name: '',
            lastName: '',
            email: '',
            age: 0,
            phon: 0,
            address: {
                country: '',
                state_address: '',
                city: '',
                CP: 0
            },
            buyer_error:[]
            
        }
    
        if(data.name[0].length > 3){
            newBuyer.name = data.name[0].toLowerCase()
        }else{
            newBuyer.buyer_error.push('El nombre es muy corto')
        }

        if(data.lastName[0].length > 5){
            newBuyer.lastName = data.lastName[0].toLowerCase()
        }else{
            newBuyer.buyer_error.push('El apellido es muy corto')
        }

        if(data.email[0].length > 3){
            newBuyer.email = data.email[0]
        }else{
            newBuyer.buyer_error.push('El email no existe')
        }

        if(data.phon > 10){
            newBuyer.phon = data.phon
        }else{
            newBuyer.buyer_error.push('Numero de telefono invaludo')
        }

        if(data.address.country){
            newBuyer.address.country = data.address.country
        }else{
            newBuyer.buyer_error.push('campo requerido')
        }

        if(data.address.state_address){
            newBuyer.address.state_address = data.address.state_address
        }else{
            newBuyer.buyer_error.push('campo requerido')
        }

        if(data.address.city){
            newBuyer.address.city = data.address.city
        }else{
            newBuyer.buyer_error.push('ciudad invalida') 
        }
*/
