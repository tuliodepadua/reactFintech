import React, { Component } from 'react'

 class Icon extends Component{
    render() {
        return (
            <i className={`material-icons ${this.props.classe}`} onClick={this.props.acao}>
                        {this.props.icon}
            </i>
        )
    }
}
 
export { Icon }
