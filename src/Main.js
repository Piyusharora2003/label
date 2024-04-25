import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

function Main({values,setValues}) {
    const labels = ['Product','Batch No','Curing','D.O.MFG']

    function submitbtn() {

    }

  return (
    <div className='app1'>
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