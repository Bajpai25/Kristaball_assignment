import axios from "axios";

export const loginApi = async (email: string, password: string) => {
  const res = await axios.post("/api/auth/login", { email, password });
  return res.data;
};
