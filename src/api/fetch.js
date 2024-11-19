import axios from "axios";

const API_KEY = "dfc079be549cf7c86fa3e55f116d52b9";
const BASE_URL = "https://api.themoviedb.org/3";

export default async function fetchFromApi({
  endpoint,
  method = "GET",
  params = {},
}) {
  try {
    const response = await axios({
      url: `${BASE_URL}/${endpoint}`,
      method,
      params: {
        api_key: API_KEY,
        ...params,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.response?.data?.status.message || "API error");
  }
}
