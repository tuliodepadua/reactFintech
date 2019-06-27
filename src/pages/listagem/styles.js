import styled from "styled-components";

export const ListaUsuarios = styled.div`
     padding: 10px 0px;
     max-height: 200px;
     overflow: auto;
     
     a{
          color: #000;
     }
     .RemoverItem{
        position: absolute;
        left: 100%;
        top: 0px;
        width: 100%;
        height: 100%;
        background: red;
        transition:all .3s linear !important;
        -webkit-transition:all .3s linear !important;
        -moz-transition:all .3s linear !important;
        border-radius: 20pc;
        padding-top: 20px;
        .voltar{
          position: absolute;
          right: 4px;
          top: 0px;
          font-size: 35px;
          color: #757575;
        }
        span{
               position: absolute;
               left: 0px;
               top: 18px;
               font-size: 10px;
               color: #000;
               margin: 0px;
               padding: 5px 0 0 .75rem;
               /* font-weight: bold; */
          }
          p{
               position: absolute;
               left: 0px;
               top: 0px;
               font-size: 12px;
               color: #b71c1c;
               margin: 0px;
               padding: 5px 0 0 .75rem;
               font-weight: bold;
          }
          input{
               
               color: #000;
          }
    }
    .ativo { 
         height: 90px;
          .RemoverItem{
               position: absolute;
               left: 0%;
               top: 0px;
               width: 100%;
               height: 100%;
               border-radius: 0pc;

               background: #fff;
               border-left: 2px solid #b71c1c;
               transition:all .3s linear !important;
               -webkit-transition:all .3s linear !important;
               -moz-transition:all .3s linear !important;
               
          }
     }
`

export default ListaUsuarios