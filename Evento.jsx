import React,{Fragment, useState} from 'react'

const Evento = () => {
        const[texto,setTexto]=useState("Texto desde el estado");
        const cambiarTexto=()=>{
            //console.log("Click en el botón")
            setTexto("Texto modificado")
        }
    
        return (
            <Fragment>
                <h2>{texto}</h2>
                <button onClick={()=> cambiarTexto()}Click Aqui>Click</button>
            </Fragment>
        )
}

export default Evento




