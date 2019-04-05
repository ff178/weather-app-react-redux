import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {setSelectedCity} from './../actions';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
	handleLocation = city =>{
    	this.props.setCity(city);
 	}	
	render(){
		return (
			<LocationList 
                  cities={this.props.cities} 
                  selectedLocation={this.handleLocation} 
            />
		);
	}
}

LocationListContainer.protoTypes = {
	setCity: PropTypes.func.isRequired,
	cities: PropTypes.array.isRequired,
}

const mapDispatchToPropsActions = dispatch => (
  {
  setCity: value => dispatch(setSelectedCity(value))
  }
);


export default connect(null, mapDispatchToPropsActions)(LocationListContainer);
