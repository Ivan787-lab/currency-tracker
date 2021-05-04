const $ = require('jquery')
import '../css/style.css'
import '../css/style.scss'

var settings = {
    "url": "https://api.coincap.io/v2/assets",
    "method": "GET",
    "timeout": 0,
};

$.ajax(settings).done(function (response) {
    //response
});


