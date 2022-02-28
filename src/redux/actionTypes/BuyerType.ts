import { ISaleCheckState } from './saleCheckTypes'

interface IAddress{
    country: string,
    state_address: string,
    city: String,
    CP: number
}

export interface IBuyer{
    id?:number,
    name: string,
    lastName: string,
    email: string,
    age: number,
    phon: number,
    address: IAddress,
}


export interface IBuyerState{
    buyer: IBuyer
    saleChecks: ISaleCheckState[]
}

export enum IBuyerType{
    update = 'UPDATE_BUYER_PROFILE',
    addInvoice = 'ADD_INVOICE_BUYER',
    updateSale = 'UPDATE_SALE_BUYER'
}

interface IBuyerUpdate{
    type: IBuyerType.update,
    payload: IBuyer
}

interface IAddInvoice{
    type: IBuyerType.addInvoice,
    payload: ISaleCheckState[]
}



export type IBuyerAction = IBuyerUpdate | IAddInvoice 