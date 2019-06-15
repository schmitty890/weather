import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

export default {
    getIcon: function(icon) {
        switch(icon) {
            case '01d':
                return ReactHtmlParser('<i class="wi wi-day-sunny"></i>');
            case '01n':
                return ReactHtmlParser('<i class="wi wi-night-clear"></i>');
            default:
                // code block
                return 'no icon available!';
          }
    }
};