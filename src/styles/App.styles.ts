import styled from 'styled-components'
import bgc from "../assets/pattern-bg-desktop.png"

interface Form{
    onSubmit: any
};

export const Header = styled.header`
background-image: url(${bgc});
background-position: center;
background-size:cover;
height: 16rem;
z-index: 10;
overflow: visible; 
`
export const H1 = styled.h1`
text-align:center;
padding: 1rem 0;
margin: 0 auto;
color: #fff;
width:90%;
font-size: 32px;
line-height: 2rem; 
font-weight: bold; 
`
export const Form = styled.form<Form>`
  display:flex;
  max-width: 36rem;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`
export const Input = styled.input`
padding: .5rem 1rem;
font-size: 20px;
width: 100%; 
outline: none;
border: none;
border-radius: 15px 0px 0px 15px
`
export const Button = styled.button`
  background: black;
  padding: 0 1rem;
  border-radius: 0px 15px 15px 0px
`