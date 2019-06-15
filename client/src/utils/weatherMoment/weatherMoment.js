import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Moment from 'moment';

export default {
    getTimeFromNow: function(time) {
        var date = Moment(time);
        var day = date.day();

        switch(day) {
            case 0:
                return 'sunday';
            case 1:
                return 'monday';
            case 2:
                return 'tuesday';
            case 3:
                return 'wednesday';
            case 4:
                return 'thursday';
            case 5:
                return 'friday';
            case 6:
              return 'saturday';
            default:
                return 'the day does not exist';
          }
    }
};