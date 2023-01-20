import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries} from './fetchCountries.js';
import { Notify } from 'notiflix';



const inputEl = document.querySelector('#search-box')
const listEl = document.querySelector('.country-list')
const countryContainer = document.querySelector('.country-info')

const DEBOUNCE_DELAY = 300;





// fetchCountries('sw').then(data => { console.log(data)}).catch()
      function createCountryMarkup(data) {
    const markup = data.map(item =>`<li class="country-item"><img class="country-img" src="${item.flags.svg}" alt="" width=30><p>${item.name.official}</p></li>`).join('')
        // console.log(markup)
       listEl.innerHTML = markup
      }
   function createCountryInfoMarkup(data) {
    const markup = data.map(item =>`<img class="country-info-img" src="${item.flags.svg}" alt="" width=30>
      <p class="country-info-title">${item.name.official}</p>
      <p class="country-info-heading">Capital:${item.capital}</p>
      <p class="country-info-heading">Population:${item.population}</p>
      <p class="country-info-heading">Languages:${Object.values(item.languages)}</p>`).join('')
     countryContainer.innerHTML = markup
}

const checkCountriesHandler = (event) => {
    const name = event.target.value
    // console.log(name)
    
    fetchCountries(name).then(data => {
console.log(data.length)
        if (data.length > 10) {
            countryContainer.innerHTML = ''
            listEl.innerHTML = ''
            return  Notify.info("Too many matches found. Please enter a more specific name.")
        } else if (data.length >= 2 && data.length <= 10) {
            countryContainer.innerHTML = ''
            return createCountryMarkup(data)
        } else  {
            listEl.innerHTML = ''
            return createCountryInfoMarkup(data)
   }
       
    }).catch(()=>Notify.failure("Oops, there is no country with that name"))

}



inputEl.addEventListener('input', debounce(checkCountriesHandler,DEBOUNCE_DELAY))