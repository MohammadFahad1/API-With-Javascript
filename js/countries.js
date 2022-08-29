const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {
            displayCountries(data);
            const countriesContainer = document.getElementById('countries-container');
            countriesContainer.removeChild(countriesContainer.children[0]);
        })
}


const displayCountries = (countries) => {
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h3>Country Name: ${country.name.common}</h3>
            <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
            <button onclick='loadCountryDetail()'>Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
    });
}

const loadCountryDetail = () => {
    console.log('Get Contry Detail');
}

loadCountries();