 
 const API_KEY = `14951c93f3d11e8ac8bed96dd90e8bc7`;

 
 const searchTemp = () => {
 const naam = document.getElementById('city-name').value
const url = `https://api.openweathermap.org/data/2.5/weather?q=${naam}&appid=${API_KEY}&units=metric`;
fetch(url)
.then(res => res.json())
.then(data => displayTemp(data))

// console.log(naam)
 }

 const setInnerText = (id, text) => {
   document.getElementById(id).innerText = text
 }

 const displayTemp =  disco => {
    console.log(disco)
     setInnerText('city', disco.name);
     setInnerText('value1', disco.weather[0].main)
     setInnerText('value', disco.main.temp)
     
 }