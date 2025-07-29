
import About from './components/About/About'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact';
import { useState } from 'react';
import Parent from './components/parent/Parent';

//parent component
function App() {

const {counter , setCounter} = useState("hamada")

  return (
    <>
      <Parent />
      <Home/>
      <About name = {"counter"} age = {30}/>
      <Contact/>
    </>


  /* {parent child => comp jsx} */

  /* {render comp in another comp} */
 
  /*
    1- use the function navbar one in home , about and contact
    2- share data about two component
    
    Home 1
    notification 1
    profile 1
    settings 1

    calling 4


    send data => about 2 comp => parent and child

    app => calling 1
    home 
    not
    prof
    settings


    how send data about 2 component => parnet to child  PROPS
    attribute comp => like html

  */



  )
}

export default App