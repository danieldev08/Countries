const row = document.querySelector('.row');
fetch('https://restcountries.com/v3.1/all')
    .then(data => data.json())
    .then(result => {
        console.log(result)
        result.map(el => {
            row.innerHTML += `
        <div class="col-4 block">
        <img src="${el.flags.svg}" alt="${el.alt}" class="img">
        <h1>${el.name.common}</h1>
        <h2>Population: ${el.population}m</h2>
        <h3>Area: ${el.area}km <sup>2</sup></h3>
        <h4>Capital: ${el.capital}</h4>
        <h5>Region: ${el.region}</h5>
        <h6>Continents: ${el.continents}</h6>
        </div>
        `
        })
    })