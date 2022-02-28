import React from 'react';

//styles
import '../styles/components/alternativeForm.scss'

interface IProps{
    handleSelect: any
}

function AlternativeForm({handleSelect}:IProps){


    return(
        <>
            <label htmlFor="country">Paìs</label>
            <input 
                type="text" 
                id="country"
                name='country'
                onChange={(e)=>handleSelect(e)}

            />

            <label htmlFor="state">Estado</label>
            <input 
                type="text" 
                id="state"
                name='state'
                onChange={(e)=>handleSelect(e)}
            />

            <label htmlFor="city">Ciudad</label>
            <input 
                type="text" 
                id="city"
                name='city'
                onChange={(e)=>handleSelect(e)}
            />
        </>
    );
}

export {AlternativeForm}
