import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

//Destructuring
/*const Location = (props) => {
	const city = props.city;
	return (
		<div><h1>{city}</h1></div>);
};*/
const Location = ({city}) => (
		<div className="location">
			<h1 className="nameCity">
				{city}
			</h1>
		</div>
);

Location.propTypes = {
	city: PropTypes.string.isRequired
};
export default Location;