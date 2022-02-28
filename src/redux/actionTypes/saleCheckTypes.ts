import { IProduct } from './ProductTypes';
import { IBuyer, IBuyerType } from './BuyerType';

export interface ISaleCheckState{
    codeSale: number,
    client: IBuyer,
    date: string,
    price: number,
    product: IProduct[],
}


export enum ISaleCheckType{
    addSale = 'ADD_SALE'
}

interface IUpdateSale{
    type: ISaleCheckType.addSale
    payload: ISaleCheckState
}

export type ISaleCheckAction = IUpdateSale