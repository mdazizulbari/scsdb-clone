import axios from "../../utils/axios";
import { loadTv } from "../reducers/tvSlice";
export { removeTv } from "../reducers/tvSlice";

export const asyncloadtv = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/tv/${id}`);
    const externalid = await axios.get(`/tv/${id}/external_ids`);
    const recommendations = await axios.get(`/tv/${id}/recommendations`);
    const similar = await axios.get(`/tv/${id}/similar`);
    const videos = await axios.get(`/tv/${id}/videos`);
    const translations = await axios.get(`/tv/${id}/translations`);
    const watchproviders = await axios.get(`/tv/${id}/watch/providers`);
    let allTheDetails = {
      detail: detail.data,
      externalid: externalid.data,
      recommendations: recommendations.data.results,
      similar: similar.data.resutls,
      translations: translations.data.translations.map(
        (translations) => translations.english_name
      ),
      videos: videos.data.results.find((tv) => tv.type === "Trailer"),
      watchproviders: watchproviders.data.results.US,
    };
    dispatch(loadTv(allTheDetails));
  } catch (error) {
    console.log("Error: ", error);
  }
};
