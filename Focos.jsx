import React, {useState, useEffect} from 'react'

const Focos = () => {

    const [foco1, updateFoco1] = useState(false)
    const [foco2, updateFoco2] = useState(false)
    const [foco3, updateFoco3] = useState(false)
    const [foco4, updateFoco4] = useState(false)
    const [foco5, updateFoco5] = useState(false)
    const [foco6, updateFoco6] = useState(false)

    const focos = [null, foco1, foco2, foco3, foco4, foco5, foco6]

    const header ={
         'color': 'teal',
         'font-style':'italic',
         'font-family': "Times New Roman",
    }
    const textStyle = {
        'text-align': 'center',
        color:'teal',

    }

    const getImage = (i) => {
        return focos[i] ? "https://t4.ftcdn.net/jpg/03/06/87/83/240_F_306878330_CBqmOePUH5dsJBbqp35BH1EZFPUkF48I.jpg" : "https://t4.ftcdn.net/jpg/02/65/82/01/240_F_265820182_Rwy0kyf0qXcb5ssJVYDnGv4rPBcVkVI2.jpg"
    }

    return (
        <div>
            <h1 style={header}>FOCOS DE LA CASA</h1>
            <table>
                <tr>
                    <td><img src={getImage(1)} alt="foco" width="128px" onClick={() => updateFoco1(foco => !foco)}/></td>
                    <td><img src={getImage(2)} alt="foco" width="128px" onClick={() => updateFoco2(foco => !foco)}/></td>
                    <td><img src={getImage(3)} alt="foco" width="128px" onClick={() => updateFoco3(foco => !foco)}/></td>
                </tr>
                <tr>
                    <td style={textStyle}>Foco 1:<br/>Sala</td>
                    <td style={textStyle}>Foco 2:<br/>Comedor</td>
                    <td style={textStyle}>Foco 3:<br/>Cocina</td>
                </tr>
            </table>

            <table>
                <tr>
                    <td><img src={getImage(4)} alt="foco" width="128px" onClick={() => updateFoco4(foco => !foco)}/></td>
                    <td><img src={getImage(5)} alt="foco" width="128px" onClick={() => updateFoco5(foco => !foco)}/></td>
                    <td><img src={getImage(6)} alt="foco" width="128px" onClick={() => updateFoco6(foco => !foco)}/></td>
                </tr>
                <tr>
                    <td style={textStyle}>Foco 4:<br/>Estancia</td>
                    <td style={textStyle}>Foco 5:<br/>Recamara<br/>principal</td>
                    <td style={textStyle}>Foco 6:<br/>Recamara<br/>de los niños</td>
                </tr>
            </table>
        </div>
    )
}

export default Focos