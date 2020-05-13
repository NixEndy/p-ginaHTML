const urlLocal = new URL(window.location.href);
const search_Params = urlLocal.searchParams;
const id = search_Params.get('id');
console.log(id)

const url = `https://jsonplaceholder.typicode.com/posts/${id}`
const detalle = fetch(url)
  .then(response => response.json())
  .then(post => {
    document.getElementById('id').innerHTML = "ID: " + post.id;
    document.getElementById('title').innerHTML = post.title;
    document.getElementById('body').innerHTML = post.body;
  })
