import React, { Component } from 'react'
import M from 'materialize-css' 
import Input from './styles'

class Datepicker extends Component{
    
    async componentDidMount(){
        let self = this;
        var elems = document.querySelectorAll('.datepicker');
        let dataVencimento= new Date();
        var instances = M.Datepicker.init(elems, {
            format: "dd/mm/yyyy",
            autoClose: true,
            maxDate: dataVencimento,
            cancel: "Cancelar",
            onClose: self.props.change,
            yearRange: 100,
            i18n: {
                months:  [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
                monthsShort	: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
                weekdays:[ 'Domingo','Segunda','Terça','quarta','Quinta','Sexta', 'Sábado' ],
                weekdaysShort: [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab' ],
                weekdaysAbbrev:	['D','S','T','Q','Q','S','S']
            }
        });
    }

    defineData = e => {
        console.log('Preciso chamar datepicker')
        e.target.value = '';
    }

    render() {
        return (
            <Input className={this.props.grid}>
                <input placeholder={this.props.nome} name={this.props.ident}
                id={this.props.ident} type="text" className="datepicker" onChange={this.defineData} ref="datanasc"></input>
            </Input>
        )
    }
}


export {  Datepicker }


