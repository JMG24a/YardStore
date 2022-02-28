//react
import React, {useState} from 'react';
//components
import { Layout } from '../containers/Layout';
import { Header } from '../containers/Header';
import { MenuMobile } from '../components/MenuMobile';
import { MenuHeader } from '../components/MenuHeader';
import { SaleCheck } from '../modals/SaleCheck';
import { MainSuccess } from '../containers/MainSuccess';
import { Confirmed } from '../components/Confirmed';
import { Map } from '../components/Map';
import { Footer } from '../components/Footer';



function Success(){

    //react
    const [isMyOrder, setIsMyOrder] = useState<boolean>(false)
    const [isMenuMobile, setIsMenuMobile] = useState<boolean>(false)
    const [isSaleCheck, setIsSaleCheck] = useState<boolean>(false)
    

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

            {!!isSaleCheck &&
                <SaleCheck/>
            }     
            
            <MainSuccess>
                <Confirmed 
                    setIsSaleCheck={setIsSaleCheck}
                    isSaleCheck={isSaleCheck}
                />
                <Map/>
            </MainSuccess>

            <Footer/>
        </Layout>  
    ); 
}

export { Success }