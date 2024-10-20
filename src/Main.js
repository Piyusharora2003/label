import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

function Main({values,setValues , ProductName , setProductName}) {
    const labels = ['Batch No','Baking Schedule','D.O.MFG']

    return (
    <div className='app1'>
      <div className='row'>
            <label htmlFor = "ProductName" className='labell'>ProductName</label>
            <input name={ProductName} id = "ProductName" onChange={(e)=>{
              setProductName(e.target.value);
            }}/>
          </div>
      {
        labels.map((elem)=>{

          return (<div className='row'>
            <label htmlFor={elem} className='labell'>{elem.toUpperCase()}</label>
            <input name={elem} id={elem} onChange={(e)=>{
              let newValues = values;
              newValues[elem] = e.target.value;
              setValues(newValues);
            }}/>
          </div>)
        })
      }
      <Link to={"/printpage"}>Submit</Link>
      <Outlet/>
    </div>  )
}

export default Main;