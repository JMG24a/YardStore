interface IFormError{
    is_error: boolean,
    name: string, 
    lastName: string,
    email: string,
    phon: string,
    country: string,
    state_address: string,
    city: string
}

export interface IFormState{
    form_error: IFormError,
    country: string[],
    states_address: string[],
    city: string[],
    loading: boolean,
    error: boolean
}

export enum IFormTypes {
    get_countrys_address = 'GET_COUNTRYS_FORM',
    get_states_address = 'GET_STATES_FORM',
    get_citys_address = 'GET_CITYS_FORM',
    form_error = 'FORM_ERROR_FORM',
    error = 'ERROR_ADDRESS_FORM',
    loading = 'LOADING_FORM',

}

interface ICountrys {
    type: IFormTypes.get_countrys_address,
    payload: []
}

interface IStates {
    type: IFormTypes.get_states_address,
    payload: []
}

interface ICitys{
    type: IFormTypes.get_citys_address,
    payload: []
}

interface tFormError{
    type: IFormTypes.form_error,
    payload: IFormError
}

interface IError{
    type: IFormTypes.error
}

interface ILoading{
    type: IFormTypes.loading
}

export type IFormActions = ICountrys | IStates | ICitys | tFormError | IError | ILoading
