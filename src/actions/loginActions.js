import axios from "../libs/axios";

export const getMoviesList = () => {
    return axios.get("/films");
}