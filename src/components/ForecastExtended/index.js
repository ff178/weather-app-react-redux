import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import ForecastItem from './ForecastItem';
import './styles.css';

const renderForecastItemDays = (forecastData) => {
	return forecastData.map(forecast =>(
		<ForecastItem 
			key={`${forecast.weekday}${forecast.hour}`} 
			weekday={forecast.weekday} 
			hour={forecast.hour} 
			data={forecast.data}
		/>)
	);
}
const renderProgress = () => {
	return (<CircularProgress className="loaders" size={50} color={'secondary'}/> );
}

const ForecastExtended = ({city, forecastData}) => (
	<div className="ForecastExtended">
		<div className="titleCityExtend">
			<AppBar position='fixed' color='inherit'>
      			<Toolbar>
					<Typography variant='title'>{city}</Typography>
				</Toolbar>
      		</AppBar>
		</div>
      	{forecastData ? renderForecastItemDays(forecastData) : renderProgress()}
	</div>
);

ForecastExtended.propTypes = {
	city: PropTypes.string.isRequired,
	forecastData: PropTypes.array,
}

export default ForecastExtended;