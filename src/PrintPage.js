import React from 'react'
import "./index.css"

function Slip({value}) {
    return (
        <div className='slip'>
        {
            Object.keys(value).map((key)=>{
                return <div className='roww'>
                    {key.toUpperCase()} : {value[key].toUpperCase()}
                </div>
            })
        }
        </div>
    )
}

function PrintPage({value}) {
//   console.log(value);
    let arr = [1,2,3,4,5,6,7,8,9,10];
    return (
    <div className='flx'>
        {
        arr.map((elem)=>{
            return <Slip value={value} key={elem}/>
        })
    }
    </div>
  )
}

export default PrintPage