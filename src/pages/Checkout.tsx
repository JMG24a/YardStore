import React, { useState } from 'react';
import { rootState } from '../redux/reducers';
import { useSelector } from 'react-redux';
//components
import { Layout } from '../containers/Layout';
import { Header } from '../containers/Header';
import { MenuMobile } from '../components/MenuMobile';
import { MenuHeader } from '../components/MenuHeader';
import { Main } from '../containers/Main';
import { FormCheckout } from '../containers/FormCheckout';
import { AsideCheckout } from '../containers/AsideCheckout';
import { ListCarProducts } from '../components/ListCarProducts';
import { Footer } from '../components/Footer'; 

function Checkout(){
    //useRedux
    const {loading} = useSelector((state:rootState) => state.address)
    //useState
    const [isMyOrder, setIsMyOrder] = useState<boolean>(false)
    const [isMenuMobile, setIsMenuMobile] = useState<boolean>(false)

    return(
        <Layout>
            <Header     
                isMyOrder={isMyOrder}
                setIsMyOrder={setIsMyOrder}
                isMenuMobile={isMenuMobile}
                setIsMenuMobile={setIsMenuMobile}
            >
                <MenuMobile setIsMenuMobile={setIsMenuMobile}/>
                <MenuHeader/>
            </Header>
    
            <Main loading={loading}>
                <FormCheckout/>
            </Main>
            
            {!!isMyOrder &&
                <AsideCheckout
                    setIsMyOrder={setIsMyOrder}
                >
                    <ListCarProducts/>
                </AsideCheckout>
            }
            
            <Footer/>
        </Layout>
    );
}

export {Checkout}