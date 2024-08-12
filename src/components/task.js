import React,{useState} from 'react'
function Changebg(){
    const[dark,setDark]=useState(false)
    const changed=dark? "black":"white"
    const Changetheme=()=>{
        setDark(!dark)
    }
    return(
         <div style={{backgroundColor:changed,height:'100vh'}}>
            <button onClick={Changetheme}>SWITCH THEME</button>
            </div>
    )
}
export{Changebg}