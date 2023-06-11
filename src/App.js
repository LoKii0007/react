import Alert from "./components/alert";
import Form from "./components/form";
import Navbar from "./components/navbar";
import React, { useState } from 'react'


function App() {

  const [mode, setMode] = useState('light')
  const [alert, setalert] = useState(null)

  const showAlert=(message, type)=>{
    setalert({
      message : message,
      type : type
    })

    setTimeout(() => {
      setalert(null)
    }, 2500);
  }

  const changeMode = () =>{
      if(mode ==='light'){
        setMode('dark')
        document.body.style.backgroundColor='grey'
        showAlert("dark mode has been enabled", "success")
        document.title='textutils- dark mode'
        setInterval(()=>{
        document.title='textutils is amazing'
        },2000)
        setInterval(()=>{
        document.title='textutils is  trash'
        },3000)
      }
      else{
        setMode('light')
        document.body.style.backgroundColor='white'
        showAlert("light mode has been enabled", "success")
        document.title='textutils - light mode'

      }
  }


  const changeColorToRed = ()=>{
    document.body.style.backgroundColor="red"
    document.body.style.transition="4s"
  }

 const changeColorToYellow = ()=>{
    document.body.style.backgroundColor="yellow"
    document.body.style.transition="2s"
  }

 const changeColorToCyan = ()=>{
    document.body.style.backgroundColor="cyan"
    document.body.style.transition="0.5s"
  }

  return (
    <>

      <Navbar title="BItch" mode={mode} changeMode={changeMode} changeColorToCyan={changeColorToCyan} changeColorToRed={changeColorToRed} changeColorToYellow={changeColorToYellow} />

      <Alert alert={alert}/>

      <Form showAlert={showAlert}  heading="enter text"/>

    </>
  );
}

export default App
