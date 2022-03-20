import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import WeatherCard from './WeatherCard';
import setImg from '../img/notfound.png';

const WeatherForm = () => {
    const [wdata, setData] = useState('');
    const [location, setLocation] = useState('');
    const [picture, setPicture] = useState(null);
 
    const API_KEY = 'niNQu4m6GT4Wz7TPoAAt6zD5HqxH6K2L';


    const currentWeather = async (city) => {
        const base = (`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${city}`);
        const response = await fetch(base);
        const data = await response.json();
        return data[0];
    }

    const cityKey = async (id) => {
        const base = (` https://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${API_KEY}`);
        const response = await fetch(base);
        const data = await response.json()
        return data[0];
    }

    const updateCity = async (cityName) => {
        try {
            const cityId = await currentWeather(cityName);
            const weatherData = await cityKey(cityId.Key)
            setData(weatherData);
        } catch (error) {
            setData(null);
            setPicture(setImg);
        }
    };
    const onSubmit = e => {
        e.preventDefault();
        if (!location || location === '') return;
        updateCity(location);
    };
    return (
        <div>
            <div className='weather'>
                <input className="form-control"
                    type="text"
                    placeholder="Search for location"
                    required
                    value={location}
                    onChange={e => setLocation(e.target.value)} />
                <button className="btn btn-primary" type="submit" onClick={onSubmit}>Search Weather Info </button>
                <br />

            </div>
            <div>
                <WeatherCard wdata={wdata} picture = {picture}  />
            </div>


        </div>


    );

}
/*WeatherForm.propTypes = {
    submitSearch: PropTypes.func.isRequired, 
   
};
 */
export default WeatherForm;