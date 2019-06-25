import React, { Component } from 'react';
import BaseApp from './styles'
import { BrowserRouter } from 'react-router-dom'
 
import Header from '../../components/Header/Header';
import Routes from '../../routes';

export default class Estrutura extends Component {
    render() {
        return (
            <BaseApp className="row">
                <div className='col s12'>
                    <div id="centroInfo" className='col s12 l6'>
                        <div id="corpo">
                        <BrowserRouter>
                            <Header /> 
                            <Routes />
                        </BrowserRouter>
                        <div className="det1"></div> 
                        <div className="det2"></div> 
                        </div>
                    </div>
                </div>
           </BaseApp>
        )
    }
}
 







