import styled from "styled-components";

export const ListaUsuarios = styled.div`
    #centroInfo{
    position: relative;
    margin-top: 40px;
    height: calc(100vh - 80px);
    max-height: 500px;
    text-align: center;
    #corpo{
      text-align: left;
      width: 100%;
      max-width: 350px;
      background: #fff;
      height: 100%;
      border-radius: 7px;
      position: relative;
      padding: 20px .75rem;
      z-index: 1;
      display: inline-block;
      .det1{
        background: #00e676;
        transform: rotate(3deg);
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0px;
        top: 0px;
        border-radius: 7px;
        z-index: -1; 
      }
      .det2{
        background: #fff;
        /* transform: rotate(3deg); */
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0px;
        top: 0px;
        border-radius: 7px;
        z-index: -1; 
      }

    }
  } 
`

export default ListaUsuarios