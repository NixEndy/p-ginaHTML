const calcularEdad=(edad)=>{
    return new Promise((resolve,reject)=>{
        if(edad>=18){
            resolve("Eres mayor de edad, puedes acceder")
        }else{
            reject("Eres menor de edad, no puedes acceder")
        }
    })
}

const getEdad = (edad) => {
    calcularEdad(edad)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error))
    .finally(() => console.log("Termina el proceso"))
  }