import styled from "styled-components";

export const Form = styled.form`
    
    margin: 0 -.75rem;
    
    input{
        font-size: 14px !important;
    }
    input::placeholder{
        font-size: 14px;

    }
    .btn-theme{
        margin-top: -5px;
        float: right;
    }

    .enviar{
        margin: 10px .75rem 0 .75rem;
        float:right;
        font-size:12px;
        background: #039be5;
    }
    .enviar:hover{
        background: #039be5;
    }
    
`

export default Form