import React, {useState} from 'react'

export default function TextForm(props) {
  

const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to UPPERCASE","success");

}
const handleLoClick = () => {
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("converted to lowercase","success");

}
const handleClearClick = () => {
  let newText = '';
  setText(newText);
  props.showAlert("Textbox has been cleared","success");

}
const handleOnChange = (event) => {
    setText(event.target.value);

}


const handleCopy = () => {
  let text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Text copied successfully","success");
}

const handleExtraSpaces = () =>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("extra spaces has been removed from the text","success");
}
const[text,setText] = useState("");




    

  return (
    <>
    <div className = "container" style={{color:props.darkMode==='dark'?'white':'black'}} >
      <h1>{props.heading}</h1>
      <div className="mb-3" >
       
       <textarea className="form-control" style = {{backgroundColor: props.darkMode ==='dark'?'grey':'white',color:props.darkMode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
       </div>

       <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>CONVERT TO UPPERCASE</button>
       <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>convert to lowercase</button>
       <button className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear Text       </button>
       
       <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy Text </button>
       
       
       <button className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
       </div>
      

        <div className="container my-3" style={{color:props.darkMode==='dark'?'white':'black'}}>
            <h2>Your Text Summary...</h2>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p>{0.008 * text.split(" ").length} minutes took to read.</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter text in the above textbox to preview it here...'}</p>

        </div>
        </>

    
  )
}
