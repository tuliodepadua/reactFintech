import React, { Component } from 'react';
import { Button } from '../../atoms/button'; 
import { Titlista } from './styles';

export default  class Titnav extends Component {
    render() {
        return (
            <Titlista className='col s12 l12 no-padding'>
                <h2>{this.props.title}
                    <Button url={this.props.url} icon={this.props.icon}/>
                </h2>
            </Titlista>
        )
    }
}
 






