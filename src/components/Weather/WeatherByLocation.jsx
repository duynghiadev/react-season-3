import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WeatherState from "./Child/WeatherState";

const WeatherByLocation = () => {
  const { woeid } = useParams();
  const [locationWeather, setLocationWeather] = useState();

  useEffect(() => {
    getWeatherByLocation();
  }, []);

  const getWeatherByLocation = async () => {
    let response = await axios({
      method: "post",
      url: "http://localhost:8080/get-data-by-url",
      data: {
        url: `https://www.metaweather.com/api/location/${woeid}`,
      },
    });

    if (response && response.data) {
      setLocationWeather(response.data);
    }
  };

  return (
    <div>
      {/* {JSON.stringify(locationWeather)} */}
      <WeatherState weatherState={"Heavy Rain"} />
    </div>
  );
};

export default WeatherByLocation;
