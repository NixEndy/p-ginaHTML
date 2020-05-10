const obtenerClima = () => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve("Clima soleado: 30C")
      },5000)
    })
  }
  const obtenerTrafico = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Sin trafico");
      },6000)
    })
  }
  const planViaje = async () => {
    try{
      const clima = obtenerClima();
      const trafico = obtenerTrafico();
      const plan = await Promise.all([clima, trafico]);
      return plan
    } catch(error){
      throw error
    }
  }
  
  planViaje()
  .then(infoPlan => {
    console.log(infoPlan);
    document.getElementById("Resultado").innerHTML = infoPlan;
  })
  .catch(error => {
    console.error(error);
  })
  