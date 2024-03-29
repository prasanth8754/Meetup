import styled from 'styled-components'

// {BgCont,Cont,RegisterImg,Form,Heading,Label,Input,Button,Para}

export const BgCont = styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
`
export const Cont = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:70%;
    align-self:center;
    margin-top:50px;
    @media screen and (min-width:1200px){
        width:55%;
    }
`
export const RegisterImg = styled.img`
    width:50%;
`
export const Form = styled.form`
    display:flex;
    flex-direction:column;
    width:40%;
`
export const Heading = styled.h1`
    color:#334155;
    font-size:${props => (props.para ? '20px' : '40px')};
    margin:0;
    padding:10px;
    font-weight:${props => (props.bold ? 'bold' : '')};
`
export const Label = styled.label`
    color:#475569;
    font-size:15px;
    font-weight:bold;
`
export const Input = styled.input`
    width:100%;
    height:40px;
    border:1px solid #7b8794;
    border-radius:4px;
    outline:none;
    background:transparent;
    padding-left:15px;
    margin-top:7px;
    margin-bottom:30px;
`
export const Button = styled.button`
    background-color:#3b82f6;
    width:130px;
    height:40px;
    outline:none;
    cursor:pointer;
    border:0px;
    border-radius:8px;
    color:#ffffff;
    font-weight:bold;
    font-size:15px;
`
export const Para = styled.p`
    color:#ff0b37;
    font-size:15px;
`
