import React from 'react'

function PopUp({type , setType}) {

  return (
   type==='Supra' ?
       <div className='bg-red-500 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[100px] w-[200px]'>
       {type}
       <button
       className='border bg-white'
       onClick={()=>setType(false)}
       >
        Close
       </button>
       </div>:
    type==='Reborn' ?
    <div className='bg-blue-500 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[100px] w-[200px]'>
       {type}
       <button
       onClick={()=>setType(false)}
       >
        Close
       </button>
    </div>:""



    

    
  )
}

export default PopUp