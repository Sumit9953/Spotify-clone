import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c156847defmsh434c9117b40c400p1e69a5jsn88bf8c86aa52',
      'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
    }
  };
  
  fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi'
    })