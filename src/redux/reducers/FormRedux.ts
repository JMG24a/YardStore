import { IFormTypes, IFormActions, IFormState } from "../actionTypes/FormTypes"

const INITIAL_STATE:IFormState = {
    form_error: {
        is_error: false,
        name: '', 
        lastName: '',
        email: '',
        phon: '',
        country: '',
        state_address: '',
        city: ''
    },
    country: [],
    states_address: [],
    city: [],
    loading: false,
    error: false
}

export const formReducer = (state:IFormState = INITIAL_STATE, action: IFormActions):IFormState =>{
    switch(action.type){
        case IFormTypes.get_countrys_address:{
            return {
                ...state,
                country: action.payload,
                loading:false,
                error: false
            }
        }
        case IFormTypes.get_states_address:{
            return{
                ...state,
                states_address: action.payload,
                loading:false,
                error: false
            }
        }
        case IFormTypes.get_citys_address:{
            return{
                ...state,
                country: action.payload,
                loading:false,
                error: false
            }
        }
        case IFormTypes.loading:{
            return{
                ...state,
                loading: true
            }
        }
        case IFormTypes.error:{
            return{
                ...state,
                error: true
            }
        }
        default:{
            return{
                ...state
            }
        }
    }
    return state
}