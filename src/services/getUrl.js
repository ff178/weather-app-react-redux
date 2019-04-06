import {url_base_weather, url_forecast_weather, api_key} from './../constants/api_url';

export const getUrlCity = city => {
	return `${url_base_weather}?q=${city}&appid=${api_key}`;
}

export const getUrlForecast = payload => {
	return `${url_forecast_weather}?q=${payload}&appid=${api_key}`;
}
