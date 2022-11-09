import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [title, setTitle] = useState("");

  // useEffect(async () => {
  //   console.log(">>> run use effect");
  //   let response = await axios({
  //     method: "post",
  //     url: "http://localhost:8080/get-data-by-url",
  //     data: { url: "https://www.metaweather.com/api/location/1236594/" },
  //   });
  //   console.log(">>> check data: ", response.data);

  //   setTimeout(() => {
  //     setTitle(response.data.title);
  //   }, 1000);
  // }, []);

  useEffect(() => {
    async function fetchData() {
      console.log(">>> run use effect");
      let response = await axios({
        method: "post",
        url: "http://localhost:8080/get-data-by-url",
        data: { url: "https://www.metaweather.com/api/location/1236594/" },
      });
      console.log(">>> check data: ", response.data);

      setTimeout(() => {
        setTitle(response.data.title);
      }, 1000);
    }
    fetchData();
  }, []);

  console.log(">>> Thứ tự Run Code <<<");
  console.log(">> run render");
  return <div> inside weather component: title = {title}</div>;
};

export default Weather;
