
const url = 'https://jsonplaceholder.typicode.com/posts'

fetch(url)
  .then(response => response.json())
  .then(posts => {
    const lista = posts.map(post =>
      `<li class="list-group-item list-group-item-light"><a href ="detalle.html?id=${post.id}">${post.id}</a>${post.title}</li>`
    ).join('')
    //console.log(lista)
    const listaHTML = document.getElementById('lista')
    listaHTML.innerHTML = lista;
  })
