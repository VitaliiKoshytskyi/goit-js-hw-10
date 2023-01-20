
const BASE_URL = 'https://restcountries.com/v3.1/'
export  function fetchCountries(name) {
    
    return fetch(`${BASE_URL}name/${name}?fields=capital,population,languages,flags,name`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json()
        })
}
