import axios from "../../utils/axios";
import { loadMovie } from "../reducers/movieSlice";
export { removeMovie } from "../reducers/movieSlice";

export const asyncloadmovie = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/movie/${id}`);
    const externalid = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const translations = await axios.get(`/movie/${id}/translations`);
    const watchproviders = await axios.get(`/movie/${id}/watch/providers`);
    let allTheDetails = {
      detail: detail.data,
      externalid: externalid.data,
      recommendations: recommendations.data.results,
      similar: similar.data.resutls,
      translations: translations.data.translations.map(
        (translations) => translations.english_name
      ),
      videos: videos.data.results.find((movie) => movie.type === "Trailer"),
      watchproviders: watchproviders.data.results.US,
    };
    dispatch(loadMovie(allTheDetails));
    console.log(allTheDetails);
  } catch (error) {
    console.log("Error: ", error);
  }
};
