import React from 'react'
import '../styles/containers/mainSuccess.scss'

function MainSuccess(props: IProps){
    return(
        <>
            {!!props.loading ? 
                <p className='loader'>Cargando...</p>
                :
                <main className='main-container'>
                    {props.children[0]}
                    {props.children[1]}
                </main>
            }
        </>
    )
}

export {MainSuccess}

interface IProps{
    children: React.ReactChild[]
    loading?: boolean
}