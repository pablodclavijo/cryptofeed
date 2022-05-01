import React from 'react'
import {Routes, Route, Link} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';

import {Navbar, Exchanges, HomePage, Cryptocurrencies, News, CryptoDetails} from './components';
import './components/App.css'


const App = () => {
  return (
    <div className='App'>
        <div className='Navbar'>
            <Navbar/>
        </div>
        <div className='main'>
            <Layout>
                <div className="routes">
                    <Routes>
                        <Route exact path='/' component={HomePage}/>
                        <Route exact path='/exchanges' component={Exchanges}/>          
                        <Route exact path='/cryptocurrencies' component={Cryptocurrencies}/>                     
                        <Route exact path='/crypto/:coinId' component={CryptoDetails}/>
                        <Route exact path='/news' component ={News}/>
                    </Routes>
                </div>
            </Layout>
        </div>
        <div className='footer'>

        </div>
    </div>
  )
}

export default App