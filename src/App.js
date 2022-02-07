import './App.css';

import Alert from './components/Alert';
import Text from './components/Text';
import Navbar from './components/Navbar';
import React, {Fragment, useState} from 'react';

 import  About from './components/About';


 import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom"; 


function App() {

  const [mode,setmode]=useState('light');
  const [alert,setalert]=useState(null);
  
  const showalert =(messsage,type)=>
  {
       setalert({
         mag:messsage,
         type:type
       }) 
       
       setTimeout(() => {
           setalert(null);
       }, 3000);
  }
  const togglemode = ()=>
  {
    if(mode==='light')
    {
      setmode('dark');
      document.body.style.backgroundColor='#255583';
      showalert("drak mode enable ","success")
      document.title='TextInfo-dark Mode';
         /* setInterval(() => {
            document.title='TextInfo is very amazing Mode';
          }, 2000);

         setInterval(() => {
          document.title='Install TextInfo app';
         }, 1500);*/
    }
    else
    {
      setmode('light');
      document.body.style.backgroundColor='white';
      showalert("light mode enable ","success")
      document.title='TextInfo-Light Mode';
    }
  }
  return (
      <>
          
         
        
         <Router>
         
        <Navbar title="textInfo"  about="About TextInfo app" mode={mode} togglemode={togglemode}/> 
      
       <Alert alert={alert}/>
         <div className='container my-3'>
           <Routes>
            <Route  path="/Text_changer" element={<Text heading="Enter the text to analysis" showalert={showalert} mode={mode}/> }/>
             <Route path="/about"  element={<About mode={mode}/>}/>

           </Routes>
         
         </div> 
        </Router> 
      </>
  );
}

export default App;
