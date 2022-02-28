import { bindActionCreators } from 'redux'
import { ISaleCheckState, ISaleCheckType, ISaleCheckAction } from '../actionTypes/saleCheckTypes'

const INITIAL_STATE:ISaleCheckState = {
    codeSale: 0,
    client:     {
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
        buyer_error:{
        }
    },
    date: '',
    price: 0,
    product: [],
}

export const saleCheckReducer = (state:ISaleCheckState = INITIAL_STATE, action:ISaleCheckAction):ISaleCheckState => {
    switch(action.type){
        case ISaleCheckType.addSale:{
            return { 
                ...state,
                codeSale: action.payload.codeSale,
                date: action.payload.date,
                client: action.payload.client,
                price: action.payload.price,
                product: action.payload.product
            }
        }
        default:{
            return state
        }
    }
}