/*NOTAS DEL AUTOR:
INTENTÉ HACER QUE PUDIERA INGRESAR AL LINK DEL PERSONAJE POR MEDIO
DEL CLICK A UN BOTON DE ESTA MANERA:
 <a href= "${character.url}" target="_blank" >
 PERO POR MÁS QUE INTENTABA NO SE PODÍA
*/ 

const url = 'http://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=e3b6cd13afe5e9aedc8f5cece55c33a3&hash=de285c65408cacd2481d09cc689822ec'
fetch(url)
  .then(response => response.json())
  .then(function(myJson) {
    console.log(myJson)
  })

fetch(url)
  .then(response => response.json())
  .then(characters => {
    const charactersList = characters.data.results.map(character =>
      `<div class="card">
        <div class="card-body">
          <h5 class="card-title">${character.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">ID: ${character.id}</h6>
          <img src=${character.thumbnail.path}/portrait_xlarge.${character.thumbnail.extension}>
          <p class="card-text">${character.description}</p>
          <a href= "${character.url}" target="_blank" >
          <button type="button" class="btn btn-danger">MORE INFO</button>
          </a>
        </div>
      </div>`
    ).join('')
    const listaHTML = document.getElementById('lista')
    listaHTML.innerHTML = charactersList;
})