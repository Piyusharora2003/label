import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from "./Main.js"
import PrintPage from './PrintPage.js';
function App() {
  const [values,setValues] = useState({
    'Product':'',
    'Batch No':'',
    'Curing': '',
    'D.O.MFG': ''
  })

  const testObj = {
    'Product':'Grey 70 35 str Glossy',
    'Batch No':'JC-01-21-22',
    'Curing': '180 ;c 110 min (EMT)',
    'D.O.MFG': '16/05/2021'
  }

  function submitbtn(){ 

  }

  return (
    <Routes>
      <Route path="/" exact element={<Main values ={values} setValues={setValues} />}/>
      <Route path="/printpage" exact element={<PrintPage value={values} />}/>
  </Routes>
  );
}

export default App;
