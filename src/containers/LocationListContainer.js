import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from './../actions';
import {getWeatherCities, getCity} from './../reducers';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
	componentDidMount() {
		const {setWeather, setSelectedCity, cities, city} = this.props;
		setWeather(cities);
		setSelectedCity(city);
	}
	handleLocation = city =>{
    	this.props.setSelectedCity(city);
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
	setSelectedCity: PropTypes.func.isRequired,
	setWeather:  PropTypes.func.isRequired,
	cities: PropTypes.array.isRequired,
	citiesWeather: PropTypes.array,
	city: PropTypes.string,
}

const mapDispatchToPropsActions = dispatch  => bindActionCreators(actions, dispatch);
/*const mapDispatchToPropsActions = dispatch => (
  {
  setCity: value => dispatch(setSelectedCity(value)),
  setWeather: cities => dispatch(setWeather(cities)),
  }
);*/

const mapStateToProps = state =>({
	citiesWeather: getWeatherCities(state),
	city: getCity(state),
});

export default connect(mapStateToProps, mapDispatchToPropsActions)(LocationListContainer);
