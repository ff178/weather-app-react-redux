import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './../WeatherLocation';
import './styles.css';


const LocationList = ({cities, selectedLocation}) => {
	const handleWeatherClick = city => {
		console.log("handleWeatherClick");
		selectedLocation(city);
	};
	const listCities = cities => (
		cities.map(city => (
			<WeatherLocation 
					key={city.key} 
					city={city.name}
					weatherClick={() => handleWeatherClick(city.name)} 
					data={city.data} 
			/>))
	);
	return(
		<div className="listCities">
			{listCities(cities)}
		</div>
	);
};

LocationList.propTypes = {
	cities: PropTypes.array.isRequired,
	selectedLocation: PropTypes.func,
}
export default LocationList;