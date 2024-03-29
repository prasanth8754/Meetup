import styled from 'styled-components'

// {HomeCont,HomeImg,Heading2}

export const HomeCont = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    align-self:center;
`
export const HomeImg = styled.img`
    width:70%;
    margin-top:30px;
`
export const Heading2 = styled.h1`
    color:${props => (props.bold ? '#334155' : '#2563eb')};
    font-size:${props => (props.bold ? '20px' : '40px')};
    font-weight:bold;
`
