import React, { Component } from 'react';
import Form from './styles'
import { ButtonSp } from '../../atoms/button'
import InputText from '../../atoms/input'
import {  Datepicker } from '../../atoms/datepicker'
import Utils from '../../utils'
import api from '../../services/api'
import M from 'materialize-css'


export default class Formcadastro extends Component {
    state = {
        nome: "",
        datanasc: "",
        cpf: "",
        telefone: "", 
        email: "", 
        objUs: {}, 
        envio: "disabled"
    }

    async componentDidMount(){
        this.loadDadosUsuarios();
        
    }
  
    async loadDadosUsuarios(){
        let aId = this.props.param;
        
        if (aId !== undefined) {
            const response = await api.get(`busca/${aId.id}/`);
            let ret = response.data;
            let self = this;

            this.setState({
                nome: ret.nome,
                datanasc: ret.idade,
                cpf: ret.cpf,
                telefone: ret.telefone, 
                email: ret.email,
                objUs: ret
            }, () => {
                document.getElementById("nome").value = ret.nome
                document.getElementById("datanasc").value = Utils.MontDatal(ret.idade, 'ptbr')
                document.getElementById("cpf").value = Utils.MontCPF(ret.cpf);
                document.getElementById("telefone").value =  Utils.MontPhone(ret.telefone);
                document.getElementById("email").value = ret.email;
                self.verificaForm();
            })
        }
    }

    handleChange = e => {
         
        if (e.target.name === 'cpf') {
            e.target.value = Utils.MontCPF(e.target.value.replace(/[^0-9]/g, ""));
            this.setState({[e.target.name]: e.target.value.replace(/[^0-9]/g, "")},
            () => this.verificaForm())
        } else if( e.target.name === "telefone" ) {
            e.target.value = Utils.MontPhone(e.target.value.replace(/[^0-9]/g, ""))
            this.setState({[e.target.name]: e.target.value.replace(/[^0-9]/g, "")},
            () => this.verificaForm())
        } else {
            this.setState({[e.target.name]: e.target.value}, () => this.verificaForm())
        }

    }

    

    datePickerChange = (e) => {
        let valor = document.getElementById("datanasc").value.split('/');
        valor = `${valor[2]}${valor[1]}${valor[0]}`;
        this.setState({ datanasc: valor })
        this.verificaForm()
    }
    
    verificaForm(){
        let error = [];

        if (this.state.nome.indexOf(' ') !== -1) {
            let vlr = this.state.nome.split(' ');
            if(vlr[1].length == 0){
                error.push('nomecompleto')
            }
        } else {
                error.push('nomecompleto')
        }
    
        if(this.state.datanasc == ''){
            error.push('datanasc') 
        }

        if (Utils.CPF(this.state.cpf) == 1) {
            error.push('cpf')             
        }

        if (this.state.telefone.length < 10) {
            error.push('Telefone')             
        }

        if (Utils.email(this.state.email) == 1) {
            error.push('Email')             
        }
        
        if (this.state.objUs.hasOwnProperty('_id')) {
            if (
                this.state.objUs.nome === this.state.nome &&
                this.state.objUs.idade === this.state.datanasc &&
                this.state.objUs.cpf === this.state.cpf &&
                this.state.objUs.telefone === this.state.telefone &&
                this.state.objUs.email === this.state.email 
                ) {
                    error.push('Dados iguais')                
            }
        }

        if(error.length == 0){
            this.setState({ envio : '' });
        }else{
            this.setState({ envio : 'disabled' });
        }

    }

    enviarForm = () => {

        let obj = {
            nome: this.state.nome,
            idade: Number(this.state.datanasc),
            cpf: this.state.cpf,
            telefone: this.state.telefone, 
            email: this.state.email, 
        }
        
        if (this.state.objUs.hasOwnProperty('_id')){
            api.put(`/registro/${this.state.objUs._id}/atualizar`,  obj ).then(function (response) {
                switch (response.status) {
                    case 201:
                        M.toast({html: 'Sucesso !'})
                        break;
                    case 404:
                        M.toast({html: 'Registro não encontrado'})
                        break;
                    default:
                        break;
                }
                
            }).catch(function (error) {              
                console.log(error);
            }).finally(function () {});
        } else {
            api.post(`/registro`,  obj ).then(function (response) {
                console.log(response)
                switch (response.status) {
                    case 201:
                        M.toast({html: response.data})
                        break;
                    case 403:
                        M.toast({html: response.data})
                        break;
                    case 404:
                        M.toast({html: 'Não foi possível cadastrar sua requisição'})
                        break;
                    case 409:
                        M.toast({html: response.data})
                        break;
                    default:
                        break;
                }
            }).catch(function (error) {              
                switch (error.response.status) {
                    case 409:
                        M.toast({html: error.response.data})
                        break;
                    default:
                        break;
                }
            }).finally(function () {});
        }
    }


    render() {
        return (
            <Form id="novo-post">
                
                <InputText grid="col s12" nome="Nome completo" ident="nome" change={this.handleChange} />
                <Datepicker grid="col s6" nome="Nascimento" ident="datanasc"  change={this.datePickerChange} />
                <InputText grid="col s6" nome="CPF" ident="cpf"  change={this.handleChange}  />
                <InputText grid="col s4" nome="Telefone" ident="telefone" tipo="tel" change={this.handleChange}  />
                <InputText grid="col s8" nome="E-mail" ident="email" change={this.handleChange} />

                <ButtonSp label="Cadastrar" acao={this.enviarForm} classe={`enviar z-depth-0 ${this.state.envio}`}/>
             </Form> 
        )
    }
}
 







