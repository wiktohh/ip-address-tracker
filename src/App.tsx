import React from 'react';
import logo from './logo.svg';
import './App.css';
import bgc from "./assets/pattern-bg-desktop.png"
import { ReactComponent as ArrowIcon } from './assets/icon-arrow.svg';

import styled from 'styled-components'

const Header = styled.header`
background-image: url(${bgc});
background-position: center;
background-size:cover;
height: 16rem;
`
const H1 = styled.h1`
text-align:center;
padding: 1rem 0;
margin: 0 auto;
color: #fff;
width:90%;
font-size: 32px;
line-height: 2rem; 
font-weight: bold; 
`
const Form = styled.form`
  display:flex;
  max-width: 36rem;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`
const Input = styled.input`
padding: .5rem 1rem;
font-size: 20px;
width: 100%; 
outline: none;
border: none;
border-radius: 15px 0px 0px 15px
`
const Button = styled.button`
  background: black;
  padding: 0 1rem;
  border-radius: 0px 15px 15px 0px
`



function App() {
  return (
    <>
      <Header>
        <H1>IP Address Tracker</H1>
        <Form>
          <Input type="text" placeholder='Search for any IP address or domain' name="address" />
          <Button type="submit"><ArrowIcon/></Button>
        </Form>
      </Header>
    </>
  );
}

export default App;
