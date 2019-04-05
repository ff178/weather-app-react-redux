import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {PropTypes} from 'prop-types';
import transforWeather from './../../services/transforWeather';
import getUrlCity from './../../services/getUrlCity';
import Location from './Location';
import WeatherData from './WeatherData';


class WeatherLocation extends Component {
	constructor(props){
		super(props);
		const {city} = props;
		this.state = {
			city,
			data: null,
		};
	}
	componentDidMount() {
		this.updateState();
	}
	updateState = () => {
		const api_weather = getUrlCity(this.state.city);
		fetch(api_weather).then(resolve =>{
			return resolve.json();
		}).then(data => {
			const newWeather = transforWeather(data);
			this.setState({
				data: newWeather
			});
		});
	}
	render(){
		const {weatherClick} = this.props;
		const {city,data} = this.state;
		return(
			<div className="weatherLocationCont" onClick={weatherClick}> 
				<Location city={city}></Location>
				{data ? <WeatherData data={data}></WeatherData> : <CircularProgress className="loaders" size={50} color={'secondary'} /> }
			</div>	
		);
	}
}
WeatherLocation.propTypes = {
	city: PropTypes.string.isRequired,
	weatherClick: PropTypes.func,
}
export default WeatherLocation;

