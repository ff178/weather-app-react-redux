import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {
	DAY,
	NIGHT,
	CLOUD,
	RAIN,
	SNOW,
	THUNDER,
	DRIZZLE,
} from './../../../constants/weathers';
import './styles.css';

const icons = {
	[DAY]: "day-sunny",
	[NIGHT]: "night-clear",
	[CLOUD]: "cloud",
	[RAIN]: "rain",
	[SNOW]: "snow",
	[THUNDER]: "day-thunderstore",
	[DRIZZLE]: "day-showers",
};

const getWeatherIcon = weatherState => {
	const icon = icons[weatherState];
	if (icon)
		return <WeatherIcons className="wicon" name={icon} size="4x"/>
	else
		return <WeatherIcons className="wicon" name={"night-clear"} size="2x"/>

};

const WeatherTemperature = ({temperature, weatherState}) => (
	<div className="weatherTemperatureCont">
		{
			getWeatherIcon(weatherState)
		}
		<span className="temperature">{`${temperature}`}</span>
		<span className="temperatureType">{`Cº`}</span>
	</div>
);

WeatherTemperature.propTypes ={
	temperature: PropTypes.number.isRequired,
	weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;