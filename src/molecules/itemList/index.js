import React, { Component } from 'react';
import ItemList from './styles'
import { Icon } from '../../atoms/icon'
import { Link } from 'react-router-dom';
 
export default class ItemLista extends Component {
   
    render() {
        return (
            <ItemList className='col s12'>
                 <Link to={`/editar/${this.props.chave}`}>
                    <div className='col s9'>
                        <h2 className='nome'>
                            {this.props.nome}
                        </h2>
                        <p className='cpf' >
                            {this.props.cpf}
                        </p>
                    </div>
                </Link>  
                <div className="col s3 acoes">              
                    <Icon classe='delete' icon="delete" acao={this.props.acao} />
                </div>
            </ItemList>
        )
    }
}
 







