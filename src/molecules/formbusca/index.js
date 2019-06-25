import React, { Component } from 'react';
import Buscar from './styles'
import { Icon } from '../../atoms/icon'
import InputText from '../../atoms/input'

export default class FormBusca extends Component {
    render() {
        return (
            <Buscar id="" className="col s12 posrel no-padding">
                <Icon icon="search" />
                <InputText grid="" nome={this.props.nome} ident="nomecompleto" tipo="email" change={this.props.change} />
            </Buscar>
        )
    }
}
 







