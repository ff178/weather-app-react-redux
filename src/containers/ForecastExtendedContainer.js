import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {getForecastDataFromCities, getCity} from './../reducers';
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
	render(){
		const {city, forecastData} = this.props;
		return(
			!city ? 
					<AppBar position='sticky' color='inherit'>
				    	<Toolbar>
				      		<Typography variant='title'>
				      			Forecast Extended
				      		</Typography>
				      	</Toolbar>
				    </AppBar>   
      			 :
      				<ForecastExtended city={city} forecastData={forecastData}/>
			
		);
	}
}

ForecastExtendedContainer.protoTypes = {
	city: PropTypes.string.isRequired,
	forecastData: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({ city: getCity(state), forecastData: getForecastDataFromCities(state)});

export default connect(mapStateToProps, null)(ForecastExtendedContainer);