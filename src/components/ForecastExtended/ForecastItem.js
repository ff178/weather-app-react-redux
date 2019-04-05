import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import WeatherData from './../WeatherLocation/WeatherData';
import './styles.css';


const ForecastItem = ({weekday, data, hour}) => (
	<div className="ForecastItem">
		<AppBar position='relative' color='inherit'>
      		<Toolbar>
				<Typography variant='title'>{weekday} {hour}:00 hours</Typography>
			</Toolbar>
      	</AppBar>
		<WeatherData data={data}/>
	</div>
	
);

ForecastItem.propTypes = {
	weekday: PropTypes.string.isRequired,
}

export default ForecastItem;