const WeatherCard = (props) =>{
    return <div>
        <p> current temp:{props.currentTemp || 'N/A'} &deg;F </p>
        <p> high:{props.highTemp} &deg;F</p>
        <p> Low: {props.lowTemp}&deg;F</p>
    </div>
}
export { WeatherCard};