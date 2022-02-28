import React from 'react'
import '../styles/containers/main.scss'

function Main(props: IProps){

    return(
        <>
            {!!props.loading ? 
                <p className='loader'>Cargando...</p>
                :
                <main className='main-container'>
                    {props.children}
                </main>
            }
        </>
    )
}

export {Main}

interface IProps{
    loading?: boolean,
    children: React.ReactNode
}
