//URL Soulin säästä

fetch('https://api.openweathermap.org/data/2.5/weather?lang=fi&q=soul&units=metric&APPID=314de1b8dabfbace7321a5ff474e27d1')
.then(function(response) {
    return response.json();
})
.then(function(responseJson) {
    saa(responseJson);
})
.catch(function (error) {
    document.getElementById("vastaus").innerHTML = 
    "<p>Tietoa ei pystytä hakemaan</p>" + error; 
})

function saa(data) {
    var teksti = "<div class='saa-info'>";

    
    // Kaupungin nimi
    teksti += "<p>Kaupunki: " + data.name + "</p>"; 
    
    // Säätilan kuvaus
    teksti += "<p>Säätila: " + data.weather[0].description + "</p>";
    
    // Lämpötila
    teksti += "<p>Lämpötila: " + data.main.temp + "°C</p>";
    
    // Tuulen nopeus
    teksti += "<p>Tuulen nopeus: " + data.wind.speed + " m/s</p>";
    
    // Säätilan kuva (kuvakkeen URL)
    var kuva = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
    teksti += "<p><img src='" + kuva + "' alt='Säätilan kuva' loading='lazy'></p>";
    
    // Lisää tiedot HTML-sivulle
    document.getElementById("vastaus").innerHTML += teksti;
}

