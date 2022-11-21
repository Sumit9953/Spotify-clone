import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
          baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
          prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'c156847defmsh434c9117b40c400p1e69a5jsn88bf8c86aa52')

            return headers;
          }
        }),
        endpoints: (builder) => ({
          getTopCharts: builder.query({ query: () => '/charts/world' }),
        })
    })

    export const {
      useGetTopChartsQuery,
    } = shazamCoreApi;