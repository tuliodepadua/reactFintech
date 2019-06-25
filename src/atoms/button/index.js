import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Icon } from '../icon';

 class Button extends Component{
    render() {
        return (
            <Link className={`btn-floating btn-small waves-effect waves-light btn-theme ${this.props.classe}`} to={this.props.url}>
                <Icon icon={this.props.icon}/>
            </Link>
        )
    }
}

class ButtonSp extends Component {
    render() {
        return(
            <a onClick={this.props.acao} className={`waves-effect waves-light btn ${this.props.classe}`}>{this.props.label}</a>
        )
    }
}
export { Button, ButtonSp }


