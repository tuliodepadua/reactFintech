import React, { Component } from 'react';

// import { Link } from 'react-router-dom';
import CadastroUsuario from './styles'
import Titnav from '../../molecules/titnav'
import Formcadastro from '../../molecules/formcadastro'


class Novo extends Component {
    state = {
        author: "",
        place: "",
        description: "",
        hashtags:"", 
    };
    handleSubmit = async e =>{

        // e.preventDefault();
        // const data = new FormData();

        // data.append('image', this.state.image);
        // data.append('author', this.state.author);
        // data.append('place', this.state.place);
        // data.append('description', this.state.description);
        // data.append('hashtags', this.state.hashtags);

        // await api.post('posts', data)

        // this.props.history.push('/')
    }
    handleImageChange = e => {
        this.setState({
            image: e.target.files[0]
        })
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <CadastroUsuario className='col s12'> 
                <Titnav url="/" icon="keyboard_arrow_left" title="Cadastro e usuário" />
                <Formcadastro />
            </CadastroUsuario>
        )
    }
}

export default Novo