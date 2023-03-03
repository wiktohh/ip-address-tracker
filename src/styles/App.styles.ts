import styled from 'styled-components'
import bgc from "../assets/pattern-bg-desktop.png"

export const Header = styled.header`
  width:100vw;
  background-image: url(${bgc});
  background-position: center;
  display:flex;
  flex-direction:column;
  align-items:center;
  background-size:cover;
  height: 16rem;
  z-index: 10;
  overflow: visible; 
`
export const H1 = styled.h1`
  text-align:center;
  color: #fff;
  width:90%;
  font-size: 32px;
  line-height: 2rem; 
  font-weight: bold; 
`
export const Form = styled.form`
  padding: 1rem 0;
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
  padding: 0 2rem;
  border-radius: 0px 15px 15px 0px
`
export const Section = styled.section`
  position: absolute;
  margin: 0 auto;
  width: 60%;
  padding: 2rem 0;
  min-height: min-content;
  top: 23%;
  z-index: 500;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 0 0 1.2rem rgba(0, 0, 0, .25);
  display: flex;
  flex-wrap:wrap;
  justify-content: space-around;
  font-size:25px;
`
export const Title = styled.h3`
  font-size:14px;
  color:gray;
  text-align:center;
  text-transform: uppercase;
`
export const Box = styled.div`
  text-align:center;
  min-width:200px;
  width: 25%;
`