const hacerTarea = (tarea, callback) => {
    console.log(`Haciendo tarea de ${tarea}...`);
    setTimeout(()=>{
      console.log('Tarea \"terminada\"');
      callback();
    }, 3000);
  }
  hacerTarea("Paradigmas de Programación", ()=>{
    console.log("Salir de antro");
  });