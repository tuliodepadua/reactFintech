import React from 'react';
// import { Link } from 'react-router-dom';
import marca from '../../assets/marca.jpg';
import Cabecalho from './style';
// import './header.scss'
// import Grid from '@material-ui/core/Grid';
// import { Container } from './styles';

export default function  Header() {
  return (
    <Cabecalho id="main-header">
        <div>
            <img src={marca} alt="sads" id="marca" />
            <h2>Fintech</h2>
        </div>
        
    </Cabecalho>
  );
}
