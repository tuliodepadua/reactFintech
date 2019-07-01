import React, { Component } from 'react';
import api from '../../services/api';

import Titnav from '../../molecules/titnav'
import FormBusca from '../../molecules/formbusca'
import ItemLista from '../../molecules/itemList'

import Util from '../../utils'
import ListaUsuarios from './styles'

 
 
class Listagem extends Component {
  state = {
    listagem: [],
    buscaStatus: false,
    idSelect: "",
    
    pg: 0,
    UserSelected: []
  };
  
  tipoBusca = 'string';
  async componentDidMount(){
      this.registerToSocket();
      this.loadUsuarios();
      
      let self = this;
      document.querySelector("#listaUsuarios").addEventListener('scroll', function() { 

        if (self.state.buscaStatus == false) { 
          if (this.scrollTop + this.offsetHeight  + 1 > this.scrollHeight) {
                self.setState({pg : self.state.pg+1 }, () => { 
                self.loadUsuarios() })
          }else{
            
          }
        }
    }); 
  }

  async loadUsuarios(init){
    const response = await api.get(`usuarios/${this.state.pg}`);

    let nArr = []
    for (let i = 0; i < response.data.length; i++) {
      let pd = this.state.listagem.find(userSel => userSel._id == response.data[i]._id);
      if(pd == undefined) { nArr.push(response.data[i]) }      
      
    }
    let arr = [...this.state.listagem, ...nArr];
     
    this.setState({
      listagem: arr
    })
  }
  buscaCpf = e => {
      e.target.value = Util.MontCPF(`${e.target.value.replace(/[^0-9]/g, "")}`);
      if (e.target.placeholder == e.target.value) {
        this.ativarRemocao(e.target.name)
      }
  }
  buscaChange = e => {
       
      let busca = e.target.value;
      
      if(busca.length <= 2) {
        if (isNaN(Number(busca))) {
          this.tipoBusca = 'string';  
        } else {
          this.tipoBusca = 'numero';
        }
     }
     console.log(this.tipoBusca)           

      
      if (this.tipoBusca == 'numero'){

        e.target.value = Util.MontCPF(`${busca.replace(/[^0-9]/g, "")}`);
        busca = busca.replace(/[^0-9]/g, "").substr(0, 11)
        if (busca.length == 11) {
          
            this.setState({buscaStatus: true , pg: 0});            
            let self = this;
            api.post(`/buscar`, {
                  "busca": busca.replace(/[^0-9]/g, "").substr(0, 11)
            }).then(function (response) {
              if (response.data != []) {
                self.setState({listagem : response.data})
              }          

            }).catch(function (error) {              
                  
            }).finally(function () {});
        } else {
          if (this.state.buscaStatus) {
            this.setState({buscaStatus: false}); 
            this.loadUsuarios();
          }
        }
      } else {
        
        if (busca.indexOf(' ') !== -1) {
          let vlr = busca.split(' ');
          if(vlr[1].length >= 1){
              this.setState({buscaStatus: true, pg: 0});            
              let self = this;
              api.post(`/buscar`, {
                busca
              }).then(function (response) {
                
                if (response.data != []) {
                  self.setState({listagem : response.data})
                } 
                   
              }).catch(function (error) {              
                console.log(error);
              })
              .finally(function () {});
          }
        } else {
            if (this.state.buscaStatus) {
              this.setState({buscaStatus: false}); 
              this.loadUsuarios();
            }
        }
      }
  }
  registerToSocket = () => {
      // const socket = io('http://localhost:3333')

      // socket.on('post', newPost => {
          // this.setState( { feed : [newPost, ... this.state.feed]})    
      // })
      // socket.on('like', likedPost => {
      //     this.setState({ 
      //         feed : this.state.feed.map( post => 
      //             post._id == likedPost._id ? likedPost : post
      //         )
      //     })    
      // })
  }

  handleDelete = id => {
    let UserSelecionado = this.state.listagem.filter(el => el._id === id);
    let itemRem = document.getElementById(`id-${UserSelecionado[0]._id}`);
    itemRem.classList.toggle("ativo");
  }

  ativarRemocao(id) {
    api.delete(`/registro/${id}/delete`)
    let ajusteListagem = this.state.listagem.filter(el => el._id !== id);
    let self = this;
    this.setState( { 
      listagem : [],
      pg: 0
    }, () => {
      self.loadUsuarios();
    }) 
    
  }

  render() {
     
  

      return (
      
          <section id="post-list" className="col s12"> 
                <Titnav url="/novo" icon="add" title="Usuários" />
                <FormBusca 
                          nome="Busca CPF / Nome" 
                          change={this.buscaChange} />

                <div className="col s12 no-padding"> 

                <ListaUsuarios id="listaUsuarios">
                  { 
                     
                    this.state.listagem.length != 0 ? (
                    this.state.listagem.map( item => (
                          <ItemLista 
                                  change={this.buscaCpf}
                                  key={item._id} 
                                  chave={item._id} 
                                  nome={item.nome}  
                                  cpf={Util.MontCPF(`${item.cpf}`)} 
                                  acao={(() => this.handleDelete(item._id)).bind(this) } 
                                  />
                    )) ): <p> Não há registros </p>
                  
                  }
                </ListaUsuarios>
                
               
          </div>
          </section>

      )
  }
}

export default Listagem