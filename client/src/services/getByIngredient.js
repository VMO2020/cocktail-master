import axios from "axios";

export const getByIngredient = async ({ setData, search }) => {
  const URL = process.env.REACT_APP_URL;
  // console.log(search);

  try {
    const API = `${URL}/byingredient?i=${search}`;
    const res = await axios.get(API);
    // console.log(res.data);

    if (res.data?.drinks === "no data found") {
      setData([]);
      return;
    }
    setData(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
