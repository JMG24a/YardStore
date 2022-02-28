import { IBuyerState, IBuyerAction, IBuyerType } from "../actionTypes/BuyerType"

const INITIAL_STATE:IBuyerState = {
    buyer:{
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
    },
    saleChecks: []
}


export const buyerReducer = (state:IBuyerState = INITIAL_STATE, action: IBuyerAction):IBuyerState =>{
    switch(action.type){
        case IBuyerType.update:{
            return {
                ...state,
                buyer: action.payload
            }
        }
        case IBuyerType.addInvoice:{
            return {
                ...state,
                saleChecks: action.payload
            }
        }
        default:{
            return{ 
                ...state
            }
        }
    }
}