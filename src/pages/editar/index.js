import React, { Component } from 'react';

// import { Link } from 'react-router-dom';
import CadastroUsuario from './styles'
import Titnav from '../../molecules/titnav'
import Formcadastro from '../../molecules/formcadastro'
import api from '../../services/api'

class Editar extends Component {
    state = {
        obj : [] 
    };

    render() {
        return (
            <CadastroUsuario className='col s12'> 
                <Titnav url="/" icon="keyboard_arrow_left" title="Cadastro e usuário" />
                <Formcadastro param={this.props.match.params}/>
            </CadastroUsuario>
        )
    }
}

export default Editar