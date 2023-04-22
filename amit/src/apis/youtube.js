import React from "react";
import axios from "axios";

//here in this file we are crating an instance of api not calling it
//byt defalut max results are 5

const key = process.env.REACT_APP_YOUTUBE_API

 export default axios.create(
    {
        baseURL: "https://www.youtube.com/watch?v=tTSHnspk6CU&list=RDtTSHnspk6CU&start_radio=1",
        params: {
            key: key,
            part: "snippet",
            maxResults: 5,
        }
    }
)