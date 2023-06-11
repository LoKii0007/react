import React, {useState} from 'react'

export default function Form(props) {
  const[text, settext]= useState('enter text here')

  const handleUpclick= () => {
    let newText= text.toUpperCase()
    settext(newText)
    props.showAlert("converted to uppercase", "success")
  }

  const handleOnChange = (event) => {
    settext(event.target.value)
  }

  // text='hii1' wrong way to change state
  const handleLowclick= () => {
    let newText= text.toLowerCase()
    settext(newText)
    props.showAlert("converted to lowercase", "success")
  }



  return (

    <>
    <div className='container' >
      <h1>{props.heading}</h1>
      <div  className="input-group bg-warning">
      <textarea onChange={handleOnChange} className="form-control" value={text} id="myBox"aria-label="With   textarea" rows='8'></textarea>
      </div>
      <button onClick={handleUpclick} className="btn btn-primary mx-2">convert to uppercase</button>
      <button onClick={handleLowclick} className="btn btn-primary">convert to lowercase</button>
    </div>

    <div className="container">
      <h1>your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters </p>
    </div>
    </>
  )
}
