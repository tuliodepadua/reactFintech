import styled from "styled-components";

export const ItemList = styled.div`
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    width: 100%;
    background: rgba($color: #fff, $alpha: .3);
    transition:all .3s linear !important;
    -webkit-transition:all .3s linear !important;
    -moz-transition:all .3s linear !important;  
    :nth-child(even) {background: rgba(0,0,0,.1)} 
    :hover{
        opacity: .8;
        cursor: pointer;
    }
    
        
        .nome{
            margin: 0px;
            font-weight: bold;
            font-size: 12px;
        }
        .cpf{
            margin: 0px;
            font-size: 11px;
        }
        .acoes{
            text-align: right;
            .material-icons{
                color: #757575;
                cursor: pointer;
                display: inline-block;
                transition:all .3s linear !important;
    -webkit-transition:all .3s linear !important;
    -moz-transition:all .3s linear !important;
            }
             
            .delete:hover{
                color: #b71c1c;  
                transition:all .3s linear !important;
        -webkit-transition:all .3s linear !important;
        -moz-transition:all .3s linear !important;         
            }
             
        }
        
    
    
`

export default ItemList