
const countryName = document.querySelector('#cname');
const activeCases=  document.querySelector('#activecase');
const population=  document.querySelector('#population');
const deaths=  document.querySelector('#deaths');
const recover=  document.querySelector('#recover');
const TodayRecover=  document.querySelector('#today');
const img = document.querySelector('#img');
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchbox.value);
    }
  }



function getResults(query)
{
  
fetch(`https://disease.sh/v3/covid-19/countries/${query}`)
  .then(response => response.json())
  .then( data =>{
      //console.log(data);
      population.innerText = `${data.population}`;
      countryName.innerText = `${data.country} , ${data.continent}`;
      activeCases.innerHTML= `${data.active}`;
      deaths.innerHTML= `${data.deaths}`;
      recover.innerHTML= `${data.recovered}`;
      TodayRecover.innerHTML= `${data.todayRecovered}`;
      img.setAttribute('src', data.countryInfo.flag);
    
  })
  .catch((error) => {
    console.error('Error:', error);
    alert("Please Enter a Valid Country Name");
  });

}