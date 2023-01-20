// import './css/styles.css';
// import debounce from 'lodash.debounce';
// // import fetchCountries from './fetchCountries';


// const inputEl = document.querySelector('#search-box')
// const listEl = document.querySelector('.country-list')
// const countryContainer = document.querySelector('.country-info')

// const DEBOUNCE_DELAY = 300;


// const BASE_URL = 'https://restcountries.com/v3.1/'

// function fetchCountries(name) {
    
//     return fetch(`${BASE_URL}name/${name}?fields=capital,population,languages,flags,name`)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error(response.statusText)
//             }
//             return response.json()
//         })
// }
// // fetchCountries('sw').then(data => { console.log(data)}).catch()
//       function createCountryMarkup(data) {
//     const markup = data.map(item =>`<li class="country-item"><img class="country-img" src="${item.flags.svg}" alt="" width=30><p>${item.name.official}</p></li>`).join('')
//         // console.log(markup)
//        listEl.innerHTML = markup
//       }
//    function createCountryInfoMarkup(data) {
//     const markup = data.map(item =>`<img class="country-info-img" src="${item.flags.svg}" alt="" width=30>
//       <p class="country-info-title">${item.name.official}</p>
//       <p class="country-info-heading">Capital:${item.capital}</p>
//       <p class="country-info-heading">Population:${item.population}</p>
//       <p class="country-info-heading">Languages:${Object.values(item.languages)}</p>`).join('')
//      countryContainer.innerHTML = markup
// }

// const checkCountriesHandler = (event) => {
//     const name = event.target.value
//     // console.log(name)
    
//     fetchCountries(name).then(data => {
// // console.log(data)
   
//     //   return createCountryMarkup(data)
//         return createCountryInfoMarkup(data)
        
//     })

// }



// inputEl.addEventListener('input', checkCountriesHandler)