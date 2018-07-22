import moment from 'moment';

const date = () => {
    return moment().format('dddd Do MMMM YYYY');
}

export default date;