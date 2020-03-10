var nombres = [];
ul = document.getElementById('lista')
    const agregar = () =>{
        ul.innerHTML="";
        nombres.push(document.getElementById('nombre').value);
        document.getElementById('nombre').value="";
    }
    
    const imprimir = () => nombres.forEach((element) =>{
            console.log(element);
            let li = document.createElement('li');
            li.innerHTML += element;
            ul.appendChild(li);
    });
    