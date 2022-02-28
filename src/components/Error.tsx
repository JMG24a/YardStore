import React from 'react';
//styles
import '../styles/components/error.scss'

function Error(props: IProps){
    return(
        <>
            <p className='error-message'>
                {props.message} 
            </p>
        </>
    )
}

export { Error }

interface IProps{
    message: string
}