

const saludar=(nombre,genero)=>{
    let mensaje="";
    genero== 'Masculino' ? mensaje="Bienvenido" : mensaje="Bienvenida";
    window.alert(mensaje+", "+nombre);
}