function loadData() {
    fetch('https://restcountries.com/v3.1/all')
    .then(response=>response.json())
    .then(data=>displayData(data))
    
}


function displayData(data){

const countryDiv=document.getElementById('count')
for(const country of data)

{
    console.log(country.name.official);

const div=document.createElement('div');
    const h3=document.createElement('h3');
    h3.innerText=country.name.common;
    div.appendChild(h3);
    const p=document.createElement('p');
    p.innerText=country.name.common;
  div.appendChild(p);
div.classList.add('coun');
  countryDiv.appendChild(div);

}

}