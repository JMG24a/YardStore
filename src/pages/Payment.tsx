//react
import React, {useState} from 'react';
//redux
import { rootState } from '../redux/reducers';
import { useSelector } from 'react-redux';
//components
import { Layout } from '../containers/Layout';
import { Header } from '../containers/Header';
import { MenuMobile } from '../components/MenuMobile';
import { MenuHeader } from '../components/MenuHeader';
import { Main } from '../containers/Main';
import { Pay } from '../components/Pay'
import { ListCarProducts } from '../components/ListCarProducts';
import { Footer } from '../components/Footer';
//styles

function Payment(){

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
            
            <Main>
                <Pay>
                    <ListCarProducts/>
                </Pay>
            </Main>

            <Footer/>
        </Layout>   
    ); 
}

export { Payment }
