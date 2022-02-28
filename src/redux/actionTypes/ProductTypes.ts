export interface IProduct{
    title: string,
    price: number,
    id: number,
    image: string,
    description: string,
}

export interface ProductState{
    products: IProduct[],
    car: IProduct[],
    total: number,
    loading: boolean,
    error: string
}

export enum productsTypes{
    ACTUALIZATION = 'TRAER_PRODUCTOS_PRODUCTS',
    CAR_ACTUALIZATION = 'CAR_ACTUALIZATION',
    CAR_ACTUALIZATION_TOTAL = 'CAR_ACTUALIZATION_TOTAL',
    LOADING = 'LOADING_PRODUCTS',
    ERROR = 'ERROR_PRODUCTS'
}

interface traerProductos{
    type: productsTypes.ACTUALIZATION
    payload: []
}

interface CarUpdate{
    type: productsTypes.CAR_ACTUALIZATION
    payload: IProduct[]
}

interface onLoading{
    type: productsTypes.LOADING
}

interface onError{
    type: productsTypes.ERROR
    payload: string
}

interface TotalCar{
    type: productsTypes.CAR_ACTUALIZATION_TOTAL,
    payload: number
}

export type ProductAction = CarUpdate | traerProductos | onError | onLoading | TotalCar
