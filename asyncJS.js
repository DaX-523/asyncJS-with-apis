const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

const fetchcountries = async url => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        
        data.filter(function (x) {
            console.log(x.name)
            console.log(x.capital)
            console.log(x.languages)
            console.log(x.population)
            console.log(x.area)

        })

      } catch (err) {
        console.error(err)
      }
    }


//fetchcountries(countriesAPI);
const fetchcats = async url => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        data.filter(function(x) {
            console.log(x.name);
        })
    } catch (err) {
        console.log(err)
    }
}

//top 10 largest countries areawise
const top10countries = async url => {
    let arr = [],
    fin = [],
    obj = {};
    try {
        const response = await fetch(url)
        const data = await response.json()
        data.map(function(x) {
            arr.push(x.area);
            obj[`${x.area}`] = x.name;
        })
        arr.sort(function(a,b) {
            return b-a;
        })
        arr = arr.slice(0,10);
        for(let i = 0; i < arr.length; i++) {
            fin.push(obj[`${arr[i]}`]);
        }
        console.log(fin);

      } catch (err) {
        console.error(err)
      }
    }

top10countries(countriesAPI);