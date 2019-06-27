import React, { Component } from 'react'
import { Input } from './styles';

class InputText extends Component{
    render() {
        return (
            <Input className={`input-field ${this.props.grid}`}>
                <input placeholder={this.props.nome} name={this.props.ident} autoComplete="off" ref={this.props.ident}
                       id={this.props.ident} type={this.props.tipo} onChange={this.props.change}/>        
            </Input> 
        )
    }
}

InputText.defaultProps = {
    tipo: 'text',
}

export default InputText
 


