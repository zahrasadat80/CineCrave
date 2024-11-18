import axios from "axios";

const API_KEY = "dfc079be549cf7c86fa3e55f116d52b9";
const BASE_URL = "https://api.themoviedb.org/3";

export default async function fetchFromApi({
  endpoint,
  method = "GET",
  params = {},
}) {
  const response = await axios({
    url: `${BASE_URL}/${endpoint}`,
    method,
    params: {
      api_key: API_KEY,
      ...params,
    },
  });
  return response.data;
}
