import axios from "axios";

export const getSickApi = async (keyword: string) => {
  try {
    const res = await axios.get(`http://localhost:4000/sick?q=${keyword}`);
    const data = res.data;
    return data;
  } catch (err) {
    console.log(err);
  }
};
