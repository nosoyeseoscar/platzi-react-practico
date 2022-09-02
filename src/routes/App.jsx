import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '../styles/global.css'
import '../context/AppContext'
//Containers
import { Layout } from './../containers/Layout';
import { Login } from '../pages/Login';
import { RecoveryPassword } from './../containers/RecoveryPassword';
//Pages
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { SendEmail } from './../pages/SendEmail';
import { NewPassword } from './../pages/NewPassword';
import { MyAccount } from './../pages/MyAccount';
import { CreateAccount } from './../pages/CreateAccount';
import Checkout from './../pages/Checkout';
import { Orders } from './../pages/Orders';
import { useInitalState } from '../hooks/useInitialState';
import { AppContext } from '../context/AppContext';

const App = () => {
    const initialState = useInitalState()
    return (
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path="/login" element={<Login />} /> //cambiar
                        <Route exact path="/recovery-password" element={<RecoveryPassword />} />
                        <Route exact path="/send-email" element={<SendEmail />} />
                        <Route exact path="/new-password" element={<NewPassword />} />
                        <Route exact path="/account" element={<MyAccount />} />
                        <Route exact path="/signup" element={<CreateAccount />} />
                        <Route exact path="/checkout" element={<Checkout />} />
                        <Route exact path="/orders" element={<Orders />} />

                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App