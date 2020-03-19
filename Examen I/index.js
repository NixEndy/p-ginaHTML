const costo = 50;
let mesas = [];
let formatDate = formatoFechaHora();

function formatoFechaHora() {
    return date => date.toString().substr(16, 8);//substr:devuelve el número de caracteres, en este caso, para el formato de la hora
}

function onLoad(){//la función se encarga de correr desde el momento en que se carga la página y actualiza de manera constate el status de las mesas
  alert("BIENVENIDO AL BILLAR BOLA 8");
  for (let i = 0; i < 6; i++) {
    const img = document.getElementById(`id${i}`);
    mesas[i] = new Table(
      document.getElementById(`id${i}`),
      document.getElementById(`start${i}`),
      document.getElementById(`end${i}`),
      document.getElementById(`total${i}`),
    );
  }
  setInterval(() => {//estamos refrescando cada segundo el status de cada una de las mesas 
    mesas.forEach(table => {
        return table.crearTabla();
    });
  }, 1);
}

class Table {
    constructor(img, start, end, total){
      this.img = img;
      this.img.onclick = () => this.changeImage();
      this.start = start;
      this.end = end;
      this.total = total;
      this.corriendo = false;
    }
  
  changeImage() {
    if(this.corriendo){
        this.corriendo = false;
        this.img.src = './data/poolOff.png';;
        this.endTime = new Date();
    }
    else{
        this.corriendo = true;
        this.img.src = './data/poolOn.png';;
        this.startTime = new Date();
        this.endTime = null;
    }
  }

  crearTabla() {
    if(this.corriendo) {
      this.start.innerText = formatDate(this.startTime);
      this.end.innerText = '';
      let millis = new Date() - this.startTime;
      let total = millis * costo / 3600000;
      total = Math.ceil(total*100)/100; //redondear el resultado para propósitos más prácticos
      this.total.innerText = `$${total}`;
    }
    if(this.endTime != null) {
      this.end.innerText = formatDate(this.endTime);
    }
  };
}

