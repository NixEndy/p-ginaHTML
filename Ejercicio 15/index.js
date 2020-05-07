const pagarComida = new Promise ((resolve, reject )=>{
    setTimeout(()=>{
        Promise.race([paypal,tarjeta]).then(provedorPago =>{
            resolve(resolve({done:true, provedorPago, clienteId:45613}))
        })
    },3000)
})

const paypal = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Paypal")
    },12000);
})

const tarjeta = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Tarjeta");
    }, 5000);
})

const enviarComida = new Promise((resolve, reject)=>{
    setTimeout(() => {
        reject("Problema con el repartidor")
    }, 1000);
})

const pedirComida = () =>{
    Promise.all([pagarComida, enviarComida])
    .then(orden => console.log(console))
    .catch(error => console.log(error))
    .finally(()=>console.log("Proceso finalizado"))
}

pedirComida()