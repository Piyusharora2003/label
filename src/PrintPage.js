import React from 'react'
import "./index.css"

function Slip({value , ProductName}) {
    
    return (
        <div className='slip'>
            <div className={`fslarge roww ${ProductName.length < 15 ? "text-center" : ""}`}>
                {ProductName} 
            </div>
        {
            Object.keys(value).map((key)=>{
                return <div className='roww'>
                    <div className='' style={{
                        width: '40%',
                        paddingLeft: '10px',
                        // padding-left: '10px'
                    }}>
                    {key.toUpperCase()} :
                    </div>                    
                       {value[key].toUpperCase()}    
                </div>
            })
        }
        </div>
    )
}

function PrintPage({value , ProductName}) {
    let arr = [1,2,3,4,5,6,7,8,9,10];
    return (
        <>
    <div className='flx'>
        {
            arr.map((elem)=>{
                return <Slip value={value} key={elem} ProductName = {ProductName}/>
            })
        }


    </div>

        </>
  )
}

export default PrintPage