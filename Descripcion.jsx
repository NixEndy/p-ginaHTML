import React, {useState} from 'react';

function Descripcion() {
    const [count,setCount] = useState(0);
    return (
        <div>
            <p>Tienes {count} años</p>
            <p>Eres {count <18 ? 'Menor de edad' : 'Mayor de edad'}</p>
            <button onClick={()=> setCount(count+1)}>Aumentar edad</button>
        </div>
    )
}

export default Descripcion;
