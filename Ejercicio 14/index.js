const limpiarcuarto=()=>{
    return new Promise((resolve,reject)=>{
        console.log("Estoy limpiando mi cuarto")
        setTimeout(function(){
            resolve(hacerTarea())
        },4000);
    })
}

const hacerTarea = () => {
    return new Promise((resolve, reject) => {
      console.log("Estoy haciendo tarea");
      setTimeout(function() {
        resolve(salirDeAntro());
      },4000);
    })
  }

  const salirDeAntro = () => {
    return new Promise((resolve, reject) => {
      resolve("Ya me perdieron, ya ando en el antro");
    })
   }

limpiarcuarto()
    .then(res => {
      return res;
    })
    .then(res => {
      console.log(res)
    })
    .then(res => {
      console.log(res)
    })