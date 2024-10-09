import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import React from 'react';
import { useState } from 'react';
import Alert from './components/Alert';
// import bootstrap from 'bootstrap';
import TextForm from './components/TextForm';
// import About from './components/About';
function App() {
  const toggleState=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#00305e';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }
  return (<>
  <NavBar title="SamSite" mode={mode} toggleState={toggleState}/>
  <Alert alert={alert}/>
  {/* <div className='container my-3'>
  <About/></div> */}
  <div className='container my-3'>  
    <TextForm title="Enter Text Here" mode={mode}/></div>

  </>
  );
}

export default App;