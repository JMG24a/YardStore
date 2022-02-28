//Dependencies
import React, {useState} from "react";
import { rootState } from '../redux/reducers';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from "redux";
import { useTypeSelector } from "../hook/useTypeSelector";
import * as ProductActions from '../redux/actionCreators/ProductActions';
//components
import { Layout } from '../containers/Layout'
import { Header } from "../containers/Header";
import { MenuMobile } from '../components/MenuMobile';
import { MenuHeader } from '../components/MenuHeader'
import { Main } from '../containers/Main';
import { ListProducts } from '../components/ListProducts';
import { AsideCheckout } from "../containers/AsideCheckout";
import { ListCarProducts } from "../components/ListCarProducts";
import { Footer } from '../components/Footer'
import { Error } from "../components/Error";
//styles

function Home(){

    //redux
    const dispatch = useDispatch(); 
    const { get_products } = bindActionCreators(ProductActions, dispatch);
    const {loading, error} = useTypeSelector((state:rootState) => state.pro);
    //React-state
    const [isMyOrder, setIsMyOrder] = useState<boolean>(false)
    const [isMenuMobile, setIsMenuMobile] = useState<boolean>(false)

    React.useEffect(()=>{
        get_products()
    }, [])

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
            
            {!loading && !!error && <Error message={error}/>}

            
            <Main loading={loading}>
                <ListProducts/>
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
    )
}

export {Home}
