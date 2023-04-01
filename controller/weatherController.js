const XMLHttpRequest = require('xhr2');

const getCurrentWeatherData = (req, res) => {

    const xhr = new XMLHttpRequest();
    const URL = "https://api.openweathermap.org/data/2.5/weather?q=faisalabad&units=metric&appid=92bf29af468b68a73c4d48354fe9f94d";
    xhr.open('GET', URL);
    xhr.onload = () => {
        const data = JSON.parse(xhr.responseText);
        res.render("index", { data });
    }
    xhr.send();

}

const getSearchedWeatherData = (req, res) => {

    const city = req.body.city;
    const xhr = new XMLHttpRequest();
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=92bf29af468b68a73c4d48354fe9f94d`;
    xhr.open('GET', URL);
  
    xhr.onload = () => {

            const data = JSON.parse(xhr.responseText);
            if(data.cod == '404')
            {
                res.send(data.message);
            }
            else
            {
                res.render("index", { data });
            }
    }
    xhr.send();

}

module.exports = { getCurrentWeatherData, getSearchedWeatherData};