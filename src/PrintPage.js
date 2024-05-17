import React from 'react'
import "./index.css"

function Slip({value}) {
    
    return (
        <div className='slip'>
        {
            Object.keys(value).map((key)=>{
                return <div className='roww'>
                    <div className='' style={{
                        width: '29%',
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

function PrintPage({value}) {
//   console.log(value);
    let arr = [1,2,3,4,5,6,7,8,9,10];
    return (
        <>
    <div className='flx'>
        {
            arr.map((elem)=>{
                return <Slip value={value} key={elem}/>
            })
        }


    </div>

        </>
  )
}

export default PrintPage