const marvel = {
    render: () => {
      const urlAPI = 'https://gateway.marvel.com/v1/public/characters?ts=1&apikey=e3b6cd13afe5e9aedc8f5cece55c33a3&hash=de285c65408cacd2481d09cc689822ec';
      const container = document.querySelector('#marvel-row');
      let contentHTML = '';
  
      fetch(urlAPI)
        .then(res => res.json())
        .then((json) => {
          for (const Character of json.data.results) {
            let urlC = Character.urls[0].url;
            contentHTML += `
              <div class="col-md-8">
                  <a href="${urlC}" target="_blank">
                    <img src="${Character.thumbnail.path}.${Character.thumbnail.extension}" alt="${Character.description }" alt="${Character.id}" alt="${Character.name}" class="img-thumbnail"></a>
                  <h1 class="title">Name: ${Character.name}</h3>
                  <h2 class="title">ID: ${Character.id}</h4>
                  <p class="card-text">Description: ${Character.description}</p>

              </div>`;
          }
          container.innerHTML = contentHTML;
        })
    }
  };
  marvel.render();