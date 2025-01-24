const cards = document.querySelector(".cards");

const url = "https://swapi.dev/api/planets/";
fetch(url)
  .then((response) => {
    return response.json()
  })
  .then(data => {
    console.log("données", data.results);
    data.results.forEach(element => {
      cards.insertAdjacentHTML('beforeend',
        `
          <div class="card">
            <h2>${element.name}</h2>
            <p>${element.climate}</p>
          </div>
        `
      )

    });
  })

