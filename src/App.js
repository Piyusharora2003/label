import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from "./Main.js"
import PrintPage from './PrintPage.js';
function App() {
  const [ProductName , setProductName] = useState("");
  const [values,setValues] = useState({
    'Batch No':'',
    'Baking Schedule': '',
    'D.O.MFG': ''
  })

  const testObj = {
    'Batch No':'JC-01-21-22',
    'Baking Schedule': '180 ;c 110 min (EMT)',
    'D.O.MFG': '16/05/2021'
  }

  return (
    <Routes>
      <Route path="/" exact element={<Main values ={values} setValues={setValues} ProductName = {ProductName} setProductName ={setProductName}/>}/>
      <Route path="/printpage" exact element={<PrintPage value={values} ProductName = {ProductName} />}/>
    </Routes>
  );
}

export default App;
