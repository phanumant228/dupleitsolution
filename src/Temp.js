import React, { useEffect } from "react";

const Temp = ({
  temp,
  temp_min,
  pressure,
  weathermood,
  name,
  speed,
  country,
  sunset,
}) => {
  const [weatherState, setWeatheState] = React.useState("");

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatheState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatheState("wi-fog");
          break;
        case "Clear":
          setWeatheState("wi-day-sunny");
          break;
        case "Mist":
          setWeatheState("wi-dust");
          break;

        default:
          setWeatheState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
    <div>
      <article className="widget" >
        <div className="weatherIcon" >
          <i className={`wi ${weatherState}`}></i>
          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
              <div className="place">
                {name}, {country}
              </div>
            </div>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
            
          </div> 
          <h1 className="Tempreture">Tempreture</h1> 
          </div>

        <div className="date"> {new Date().toLocaleString()} </div>

        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} PM <br />
                Sunset
              </p>
              
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-direction-down"}></i>
              </p>
              <p className="extra-info-leftside">
                {temp_min} <br />
                Min Temp
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                Wind
              </p>
            </div>
          </div>
        </div>
      </article>
      </div>
    </>
  );
};

export default Temp;