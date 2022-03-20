import React from 'react';
import moment from "moment";
import day from '../img/day.png';
import night from '../img/night.png';

const WeatherCard = ({ wdata  , picture  }) => {
    const weather = wdata;
    if (!weather) {
        return (
            <div><img src={picture} alt = ''/>
            </div>
        ) 
    } 
    return (
        <div className='wcontainer'>
           <img className="time card-img-top" src={weather.IsDayTime === true ? day : night} alt='' />
            <div className='temp'> {weather.Temperature.Metric.Value}°{weather.Temperature.Metric.Unit} </div>
            <img src={"https://www.accuweather.com/images/weathericons/" + weather.WeatherIcon + ".svg"} height="150" alt=''   />
            <div>{weather.WeatherText}</div>
            <div>{moment(weather.LocalObservationDateTime).utc().local().format('LT')}</div>

        </div>
    )

}

export default WeatherCard;


/*
<!--<img
        className="time card-img-top" src={weather.IsDayTime === true ? day : night}
      /> --!>

*/