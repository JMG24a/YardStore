import React from 'react'
// useHelpers
//styles
import '../styles/containers/layout.scss'

function Layout(props: Props){
    return(
        <div className='layout'>
            {props.children}
        </div>
    )
}

export {Layout}

type Props = {
    children: React.ReactNode
}