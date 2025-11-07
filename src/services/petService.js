import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;

const index = async () => {
  try {
    console.log("Fetching from:", BASE_URL);
    const res = await axios.get(BASE_URL);
    console.log("Response:", res.data);
    return res.data;
  } catch (err) {
    console.error(" Axios error:", err.message);
  }
};

const create = async (formData) => {
  try {
    const res = await axios.post(BASE_URL, formData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data; 
  } catch (err) {
    console.error("Error creating pet:", err);
  }
};

export { index, create };