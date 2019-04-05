import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import ForecastExtended from './../components/ForecastExtended';

class ForecastExtendedContainer extends Component {
	render(){
		return(
			!this.props.city ? 
								<AppBar position='sticky' color='inherit'>
				      				<Toolbar>
				      					<Typography variant='title'>
				      						Forecast Extended
				      					</Typography>
				      				</Toolbar>
				      			</AppBar>   
      						:
      							<ForecastExtended city={this.props.city} />
			
		);
	}
}

ForecastExtendedContainer.protoTypes = {
	city: PropTypes.string.isRequired,
}

const mapStateToProps = ({city}) => ({city});

export default connect(mapStateToProps, null)(ForecastExtendedContainer);