
import React,{ useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
//import About from './component/About.js';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";




function App() {

const [darkMode,setDarkMode]  = useState('light');
const[alert,setAlert] = useState(null);

const showAlert = (message,type) =>{
  setAlert({
    message:message,
    type:type
  })
  setTimeout(() =>{
    setAlert(null);
  },1000);
}

const toggleMode = () =>{
   if(darkMode === 'light'){
    setDarkMode('dark');
    document.body.style.backgroundColor = '#1a1a1a';
    showAlert("Dark Mode has been Enabled","success");
   }
   else{
    setDarkMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Dark Mode has been Disabled","success");
   }

}

  return (

    <>
    




     {/* <Router> */}
    <Navbar title='Text Pad'  darkMode = {darkMode} toggleMode = {toggleMode} />
    <Alert alert ={alert}/>
     <div className="container my-5">
      {/* <Routes>
        <Route exact path="/about" element={ <About/>}>
         </Route> */}
        
         {/* <Route exact path="/" element = { */}

          <TextForm heading="Enter Your Text Below:" showAlert = {showAlert} darkMode = {darkMode}/>
          {/* }>  */}
        
         {/* </Route>
       </Routes>
      */}

     </div>
     



     {/* </Router> */}




    

     
     
    </>

  );


}

export default App;
