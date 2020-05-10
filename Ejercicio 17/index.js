const pagarComida = () => {
    return new Promise((resolve,reject) => {
      console.log("Pagando...");
      setTimeout(async() => {
        const formaDePago = await Promise.race([paypal(),tarjeta()]);
        resolve({done:true, idCliente: 123, pago:formaDePago});
      },3000);
    })
  }

  const paypal = () => {
    return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Paypal")
    },12000)
  })
}
  const tarjeta = () => {
    new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve("Tarjeta")
      console.log("Paga con tarjeta");
    },5000)
  })
}
  const enviarComida = () => {
    return new Promise((resolve,reject) => {
    setTimeout(() => {
      console.log("Enviando comida...");
      resolve("Comida enviada!")
    },10000)
  })
}
  const pedirComida = async() => {
    try {
      await pagarComida();

      let orden = await enviarComida();

      console.log(orden);

    } catch (e) {

      console.error(e);
    } finally {
      console.log("Proceso terminado");
    }
  }
  pedirComida();