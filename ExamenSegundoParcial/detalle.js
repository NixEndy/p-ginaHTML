//muestra los detalles del personaje al que se le haga click



const urlLocal = new URL(window.location.href);
const search_Params = urlLocal.searchParams;
const id = search_Params.get('id');
console.log(id)

const url ='http://gateway.marvel.com/v1/public/comics?ts=1&apikey=e3b6cd13afe5e9aedc8f5cece55c33a3&hash=de285c65408cacd2481d09cc689822ec'
const detalle = fetch(url)
  .then(response => response.json())
  .then(character => {
  document.getElementById('id').innerHTML = character.data.results[0].id;
  document.getElementById('name').innerHTML = character.data.results[0].name;
  document.getElementById('description').innerHTML = character.data.results[0].description;
  var urlImage = character.data.results[0].thumbnail.path 
  var urlExtension = character.data.results[0].thumbnail.extension 
  const comics = character.data.results[0].comics.items.map(item =>
    `<li class="list-group-item">${item.name}</li>`
  ).join('')
  const stories = character.data.results[0].stories.items.map(item =>
    `<li class="list-group-item">${item.name}</li>`
  ).join('')
  const listComics = document.getElementById('comics')
  listComics.innerHTML = comics
  const listStories = document.getElementById('stories')
  listStories.innerHTML = stories
  const image = document.getElementById('image')
  image.innerHTML = `<img class="card-img" src=${urlImage}/portrait_uncanny.${urlExtension}>`
})
