import styled from 'styled-components'
import bgc from "../assets/pattern-bg-desktop.png"

export const Header = styled.header`
width:100vw;
background-image: url(${bgc});
background-position: center;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-size:cover;
height: 16rem;
z-index: 10;
overflow: visible; 
`
export const H1 = styled.h1`
text-align:center;
margin: 1.5rem 0;
margin: 0 auto;
color: #fff;
width:90%;
padding: 2rem 0;
font-size: 32px;
line-height: 2rem; 
font-weight: bold; 
`
export const Form = styled.form`
  display:flex;
  max-width: 36rem;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`
export const Input = styled.input`
padding: 1rem 1rem;
font-size: 20px;
width: 100%; 
outline: none;
border: none;
border-radius: 15px 0px 0px 15px
`
export const Button = styled.button`
  background: black;
  outline: none;
  border: none;
  padding: 0 1rem;
  border-radius: 0px 15px 15px 0px
`
export const Section = styled.section`
    position: relative;
    margin: 0 auto;
    padding: 1.5rem 0;
    width: 60%;
    min-height: 10vh;
    top: 20%;
    z-index: 500;
    border-radius: 1rem;
    background-color: white;
    box-shadow: 0 0 1.2rem rgba(0, 0, 0, .25);
    display: flex;
    justify-content: space-around;
    font-size:25px;
`
export const Title = styled.h3`
  font-size:14px;
  color:gray;
  text-align:left;
  text-transform: uppercase;
`