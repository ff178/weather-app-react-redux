import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({humidity, wind}) => (
	<div className="weatherExtraInfoCont">
		<span className="humidity">{`${humidity}%`}</span>
		<span className="extraInfoText">{`humidity`}</span>
		<span className="wind">{`${wind}`}</span>
		<span className="extraInfoText">{`m/s winds`}</span>
	</div>
);

WeatherExtraInfo.propTypes = {
	humidity: PropTypes.number.isRequired,
	wind: PropTypes.number.isRequired
}

export default WeatherExtraInfo;