import React from 'react';
import PropTypes from 'prop-types';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css';

const WeatherData = ({data: {temperature, weatherState, humidity, wind}}) => (
	<div className="weatherDataCont"> 
			<WeatherTemperature 
				temperature={temperature} 
			weatherState={weatherState}
		/>
		<WeatherExtraInfo 
			humidity={humidity} 
			wind={wind}
		/>
	</div>
);

WeatherData.propTypes = {
	data: PropTypes.shape({
		temperature: PropTypes.number.isRequired,
		weatherState: PropTypes.string.isRequired,
		humidity: PropTypes.number.isRequired,
		wind: PropTypes.number.isRequired,
	}),
};

export default WeatherData;