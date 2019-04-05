import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Row, Col} from 'react-flexbox-grid';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

import './App.css';

const cities = [
	'Cali,co',
	'London,uk',
	'Paris,fr',
	'New York,us',
	'Barcelona,es',
	'Buenos Aires,ar',
];

class App extends Component {
  render() {
    return (
      <Grid className="App">
      	<Row>
      		<AppBar position='sticky' color='inherit'>
      			<Toolbar>
      				<Typography variant='title'>
      					Weather App
      				</Typography>
      			</Toolbar>
      		</AppBar>
      	</Row>
      	<Row>
      		<Col xs={12} md={6}>
                <LocationListContainer cities={cities} />
      		</Col>
      		<Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="detalis">
                <ForecastExtendedContainer /> 
              </div>
            </Paper>
      		</Col>
      	</Row>
      </Grid>  
    );
  }
}

export default App;


