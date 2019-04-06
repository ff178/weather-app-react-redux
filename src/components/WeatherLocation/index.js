import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import Location from './Location';
import WeatherData from './WeatherData';


const WeatherLocation = ({weatherClick, city, data}) => (
	<div className="weatherLocationCont" onClick={weatherClick}> 
		<Location city={city}></Location>
		{data ? <WeatherData data={data}></WeatherData> : <CircularProgress className="loaders" size={50} color={'secondary'} /> }
	</div>	
);

WeatherLocation.propTypes = {
	city: PropTypes.string.isRequired,
	weatherClick: PropTypes.func,
	data: PropTypes.shape({
		temperature: PropTypes.number.isRequired,
		weatherState: PropTypes.string.isRequired,
		humidity: PropTypes.number.isRequired,
		wind: PropTypes.number.isRequired,
	}),
}
export default WeatherLocation;

