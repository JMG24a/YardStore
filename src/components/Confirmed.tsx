//react
import React from 'react'
//redux
import { useSelector } from 'react-redux'
import { rootState } from '../redux/reducers'


function Confirmed(props: IProps){

    const { buyer } = useSelector((state:rootState) => state.buyerState)

    return(
        <div className='container-user'>
            <button
                onClick={()=>props.setIsSaleCheck(!props.isSaleCheck)}
            >Factura</button>
            <div className='use-container'>
                <h3>{buyer.name}{" "}{buyer.lastName}</h3>
                <p>{buyer.email}</p>
                <p>{buyer.address.country}</p>
                <p>{buyer.address.state_address}</p>
                <p>{buyer.address.city}</p>
            </div>
        </div>
    )
}

export {Confirmed}

interface IProps{
    setIsSaleCheck: any
    isSaleCheck: any
}