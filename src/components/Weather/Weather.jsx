import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [title, setTitle] = useState("");
  useEffect(async () => {
    console.log(">>> run use effect");
    let response = await axios({
      method: "post",
      url: "https://test-react-hook-season-3.herokuapp.com/get-data-by-url",
      data: { url: "https://www.metaweather.com/api/location/1236594/" },
    });
    console.log(">>> check data: ", response.data);

    setTimeout(() => {
      setTitle(response.data.title);
    }, 1000);
  }, []);

  console.log(">> run render");
  return <div> inside weather component: title = {title}</div>;
};

export default Weather;
