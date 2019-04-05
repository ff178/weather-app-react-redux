import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CircularProgress from '@material-ui/core/CircularProgress';
import ForecastItem from './ForecastItem';
import transforForecast from './../../services/transforForecast';
import {url_forecast_weather, api_key} from './../../constants/api_url';
import './styles.css';


class ForecastExtended extends Component{
	constructor(){
		super();
		this.state = { forecastData: null}
	}
	componentDidMount(){
		this.forecastUpdateCity(this.props.city);
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.city !== this.props.city){
			this.setState({forecastData: null});
			this.forecastUpdateCity(nextProps.city);
		}
	}
	forecastUpdateCity = city => {
		const url_forecast = `${url_forecast_weather}?q=${city}&appid=${api_key}`;
		fetch(url_forecast).then(
			data => (data.json()
		).then(
				weather_data =>{
					console.log(weather_data);
					const forecastData = transforForecast(weather_data);
					console.log(forecastData);
					this.setState({forecastData});
				}
			)
		)
	}
	renderForecastItemDays(forecastData){
		return forecastData.map(forecast =>(<ForecastItem 
												key={`${forecast.weekday}${forecast.hour}`} 
												weekday={forecast.weekday} 
												hour={forecast.hour} 
												data={forecast.data}
											/>));
	}
	renderProgress= () => {
		return (<CircularProgress className="loaders" size={50} color={'secondary'}/> );
	}
	render(){
		const {city} = this.props;
		const {forecastData} = this.state;
		return (
			<div className="ForecastExtended">
				<div className="titleCityExtend">
					<AppBar position='fixed' color='inherit'>
      					<Toolbar>
							<Typography variant='title'>{city}</Typography>
						</Toolbar>
      				</AppBar>
				</div>
      			{forecastData ? this.renderForecastItemDays(forecastData) : this.renderProgress()}
			</div>
      	);	
	}
}

ForecastExtended.propTypes = {
	city: PropTypes.string.isRequired,
}
export default ForecastExtended;