import moment from 'moment';
import transforWeather from './transforWeather';

const transformForecast = data => (
	data.list.filter(item => (
		moment.unix(item.dt).utc().hour() === 6 ||
		moment.unix(item.dt).utc().hour() === 12 ||
		moment.unix(item.dt).utc().hour() === 18
	)).map(item => (
		{
			weekday: moment.unix(item.dt).format('ddd'),
			hour: moment.unix(item.dt).hour(),
			data: transforWeather(item)
		}
	))
);

export default transformForecast;