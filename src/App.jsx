import React from "react"
import styled from 'styled-components';
import Menue from "./component/Menue";
import Navbar from "./component/Navbar";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import Video from "./pages/Video";
import './App.css';
import Login from "./component/Login"; 
// Corrected import statement

const Container=styled.div `

display:flex

`

const Main=styled.div `
 flex:9

`
const Wrapper=styled.div `
flex:1


`

function App() {
  
  

  return (
    <>
  <Container>
    <BrowserRouter>
    <Menue/>
    <Main>
    <Navbar/>
    
    <Wrapper>
    <Routes>
    
    
    <Route  path="/" element={<Home type="rendom"/>}/>
    <Route  path="trend" element={<Home type="trend"/>}/>
    <Route  path="subscription" element={<Home type="sub"/>}/>
    <Route path="Video" element={<Video/>}/>
    <Route path=":id" element={<Video/>}/>
    <Route path="Login" element={<Login/>}/>
    </Routes>


    </Wrapper>
    

    </Main>
    </BrowserRouter>
    
    </Container> 
     
    </>
  )
}

export default App
