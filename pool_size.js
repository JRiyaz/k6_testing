import http from "k6/http";
const BASE_URL = "http://localhost:5000/";


export default () => {
    http.get(`${BASE_URL}correspondence/templates/prefills`)
};