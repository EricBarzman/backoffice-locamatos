import axios from "axios";
import { TokenDto, UserSentDto } from "../types/user.type";

export const useAuth = () => {

  const str = process.env.REACT_APP_BASE_URL + "/user";

  async function login(data: { email: string; password: string }) {
    try {
      const result = await axios.post(`${str}/login`, data);
      if (!(result.status === 200))
        throw new Error(result.data.message);

      return result.data as unknown as TokenDto;

    } catch (error) {
      console.error(error);
    }
  }

  async function register(data: UserSentDto) {
    try {
      const result = await axios.post(`${str}/register`, data);
      return result.data as unknown as TokenDto;

    } catch (error: any) {
      alert(JSON.parse(error.request.response).message);
      console.error(error);
    }
  }

  async function changePassword(id: string, password: string) {
    try {
      const result = await axios.put(`${str}/reset-password`, { id, password });
      if (!(result.status === 200))
        throw new Error(result.data.message);

      return result.data as { message: string };

    } catch (error) {
      console.error(error);
    }
  }

  return { register, login, changePassword };
}