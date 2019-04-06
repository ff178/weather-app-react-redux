import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setSelectedCity, setWeather} from './../actions';
import {getWeatherCities} from './../reducers';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
	componentDidMount() {
		this.props.setWeather(this.props.cities);
	}
	handleLocation = city =>{
    	this.props.setCity(city);
 	}	
	render(){
		return (
			<LocationList 
                  cities={this.props.citiesWeather} 
                  selectedLocation={this.handleLocation} 
            />
		);
	}
}

LocationListContainer.protoTypes = {
	setCity: PropTypes.func.isRequired,
	cities: PropTypes.array.isRequired,
	citiesWeather: PropTypes.array,
}

const mapDispatchToPropsActions = dispatch => (
  {
  setCity: value => dispatch(setSelectedCity(value)),
  setWeather: cities => dispatch(setWeather(cities)),
  }
);

const mapStateToProps = state =>({citiesWeather: getWeatherCities(state)});
export default connect(mapStateToProps, mapDispatchToPropsActions)(LocationListContainer);
