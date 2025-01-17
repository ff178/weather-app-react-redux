import convert from 'convert-units';
import {
	
	DAY,
	NIGHT,
	CLOUD,
	RAIN,
	SNOW,
	THUNDER,
	DRIZZLE,
	
} from './../constants/weathers';	
	
	const getWeatherState = weather => {
		const {id} = weather;
		if(id < 200){
			return NIGHT;
		}else if (id < 300){
			return THUNDER;
		}else if (id < 400){
			return DRIZZLE;
		}else if (id < 600){
			return RAIN;
		}else if (id < 700){
			return SNOW;
		}else if (id === 800){
			return DAY;
		}else{
			return CLOUD;
		}
		
	}
	const getTemp = kelvin =>{
		return Number(convert(kelvin).from("K").to("C").toFixed(0));
	}
	const transforWeather = weather_data => {
		const {humidity,temp} = weather_data.main;
		const {speed} = weather_data.wind;
		const weatherState = getWeatherState(weather_data.weather[0]);
		const temperature = getTemp(temp);
		const data = {
			humidity,
			temperature,
			weatherState,
			wind: speed,
		}
		return data;
	}

export default transforWeather;