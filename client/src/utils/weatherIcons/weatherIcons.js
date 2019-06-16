import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export default {
    getIcon: function(icon) {
        switch(icon) {
            case '01d': // clear day
                return ReactHtmlParser('<i class="wi wi-day-sunny"></i>');
            case '01n': // clear night
                return ReactHtmlParser('<i class="wi wi-night-clear"></i>');
            case '02d': // cloudy day
            case '03d':
            case '04d':
                return ReactHtmlParser('<i class="wi wi-day-cloudy"></i>');
            case '02n':// clouds night
            case '03n':
            case '04n':
                return ReactHtmlParser('<i class="wi wi-night-alt-cloudy"></i>');
            case '09d': // rain day
            case '10d':
                return ReactHtmlParser('<i class="wi wi-day-rain"></i>');
            case '09n': // rain night
            case '10n':
                return ReactHtmlParser('<i class="wi wi-night-alt-rain"></i>');
            case '11d': // thunderstorm day
                return ReactHtmlParser('<i class="wi wi-day-thunderstorm"></i>');
            case '11n': // thunderstorm night
                return ReactHtmlParser('<i class="wi wi-night-alt-thunderstorm"></i>');
            case '13d': // snow day
                return ReactHtmlParser('<i class="wi wi-day-snow"></i>');
            case '13n': // snow night
                return ReactHtmlParser('<i class="wi wi-night-snow"></i>');
            case '50d': // mist day
                return ReactHtmlParser('<i class="wi wi-day-fog"></i>');
            case '50n': // mist night
                return ReactHtmlParser('<i class="wi wi-night-fog"></i>');

            default: // default N/A icon shown
                return ReactHtmlParser('<i class="wi wi-na"></i>');
          }
    }
};