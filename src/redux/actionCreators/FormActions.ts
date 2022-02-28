import { Dispatch } from "redux"
import { IFormActions, IFormTypes } from "../actionTypes/FormTypes"
import axios from "axios"

export const get_countrys = () =>{
    return async (dispatch:Dispatch<IFormActions>) =>{

        const token2 = 'SJP2np64ZOLEqsW8Fs7J6PWejvKXRTgZNSIVCBcgDvEuAqo_FTdE8akJI-BXNKAkXtQ'
        const token = '3TXkmPiOtdO3F54NlKmwYPuK7JBRnuX4A5QuA811YMA3ulBXY73hQEYX6RRl-zbSKm0'

        /*const {data} = await axios({
            method: 'get',
            url: 'https://www.universal-tutorial.com/api/getaccesstoken',
            headers:{
                'Authorization': 
            }
        });*/

        const {data} = await axios.get("hazlo tu")

        console.log('data',data)

        dispatch({
            type: IFormTypes.get_countrys_address,
            payload: data
        })
    }
}

export const get_states_address = (country?:string) =>{
    return async (dispatch:Dispatch<IFormActions>) =>{

        const {data} = await axios.get('') 

        dispatch({
            type: IFormTypes.get_states_address,
            payload: data
        })
    }
}


export const get_citys = (states_address?:string) =>{
    return async (dispatch:Dispatch<IFormActions>) =>{

        const {data} = await axios.get('') 

        dispatch({
            type: IFormTypes.get_citys_address,
            payload: data
        })
    }
}