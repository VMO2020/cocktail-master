import axios from "axios";

export const getByLetter = async ({ setLetterData, search }) => {
  const URL = process.env.REACT_APP_URL;
  // console.log(search);

  try {
    const API = `${URL}/byletter?f=${search}`;
    const res = await axios.get(API);
    // console.log(res.data);
    setLetterData(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
