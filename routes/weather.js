const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");

const API = require("../controller/weatherController");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/', API.getCurrentWeatherData);
router.post('/search', API.getSearchedWeatherData);

module.exports = router;