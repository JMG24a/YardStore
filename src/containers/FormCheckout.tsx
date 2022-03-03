//react
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
//redux
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '../redux/reducers';
import * as addressActions from '../redux/actionCreators/FormActions';
import * as buyerActions from '../redux/actionCreators/BuyerActions';
import * as productActions from '../redux/actionCreators/ProductActions'
import { IBuyer } from '../redux/actionTypes/BuyerType';
import { bindActionCreators } from 'redux';
//components
import { AlternativeForm } from '../components/AlternativeForm'
//styles
import '../styles/containers/formCheckout.scss'


function FormCheckout(){
  
    //redux
    const { country } = useSelector((state:rootState) => state.form)
    const { car } = useSelector((state:rootState) => state.pro)

    console.log("form_car: ", car)

    const dispatch = useDispatch()

    const{ 
        form_buyer
    } = bindActionCreators(buyerActions, dispatch)

    const{ 
        get_countrys,
        get_states_address, 
        get_citys,
    } = bindActionCreators(addressActions, dispatch)

    const{
  
    } = bindActionCreators(buyerActions, dispatch)

    const{
        car_sum
    } = bindActionCreators(productActions, dispatch) 

    //react-hooks
    const [getBuyerForm, setBuyerForm] = useState<IBuyer>({
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
        }
    })

    const navigate = useNavigate()

    useEffect(()=>{
        if (!country){
            get_countrys()
        }
        car_sum()
    },[car.length])

    const handleInput = (e:ChangeEvent<HTMLInputElement>) =>{
        let name = e.target.name;
        let value = e.target.value;
        
        setBuyerForm({
            ...getBuyerForm,
            [name]: [value]
        })
    }

    const handleSelect = (e:ChangeEvent<HTMLInputElement>) =>{
        let name = e.target.name;
        let value = e.target.value;

        setBuyerForm({
            ...getBuyerForm,
            address:{
                ...getBuyerForm.address,
                [name]: [value]
            }
        })
    }

    const handleSubmit = (e:FormEvent) =>{
        e.preventDefault()

        form_buyer(getBuyerForm)
        redirec()
    }

    const redirec = () =>{
        navigate('/payment')
    }

    return (
        <div className='container-form'>
            <form className='form-container' onSubmit={(e)=>handleSubmit(e)}>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input 
                        type="text"
                        name='name'
                        id="name" 
                        placeholder='Nombre'
                        onChange={(e)=>handleInput(e)}
                    /> 

                    <label htmlFor="lastName">Apellido</label>    
                    <input 
                        type="text" 
                        name='lastName'
                        id="lastName" 
                        placeholder='Apellido'
                        onChange={(e)=>handleInput(e)}
                    />
                    
                </div>

                <label htmlFor="email">Correo</label>
                <input 
                    type="text" 
                    id="email" 
                    name='email'
                    placeholder='example@example.com'
                    onChange={(e)=>handleInput(e)}
                />
            
                <label htmlFor="phon">Telefono</label>
                <input 
                    type="number"  
                    id="phon" 
                    name='phon'
                    placeholder='04169599907'
                    onChange={(e)=>handleInput(e)}
                />
                    
                {country.length > 0 ?
                    <>
                        <label htmlFor="country">Paìs</label>
                        <select id='country'>
            
                            <option
    
                            >
            
                            </option>
            
                        </select>

                        <label htmlFor="state">Paìs</label>
                        <select id='state'>
                
                            <option
            
                            >
                    
                            </option>
                        
                        </select>
                        
                        <label htmlFor="city">Paìs</label>
                        <select id='city'>
            
                            <option
                    
                            >
                            
                            </option>
            
                        </select>
                    </>
                    :
                    <AlternativeForm handleSelect={handleSelect}/>
                }
                
                <button
                    type='submit'
                >   
                    Enviar
        
                </button>

            </form>
        </div>
    )
}

export {FormCheckout}

