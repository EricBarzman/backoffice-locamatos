import axios from "axios";
import { UserDto, UserSentDto } from "../types/user.type";

export const useUsers = () => {

  const str = process.env.REACT_APP_BASE_URL + "/user";

  async function getAllUsers() : Promise<UserDto[] | undefined> {
    try {
      const result = await axios.get(str);
      return result.data as unknown as UserDto[];
      
    } catch (error) {
      console.error(error);
    }
  }

  async function getOneUserById(id: string) : Promise<UserSentDto | undefined> {
    try {
      const result = await axios.get(str + "/" + id);
      return result.data as unknown as UserSentDto;
      
    } catch (error) {
      console.error(error);
    }
  }

  async function addUser(data: UserSentDto) {
    try {
      const result = await axios.post(str, data);
      return result.data as unknown as UserDto;
      
    } catch (error: any) {
      alert(JSON.parse(error.request.response).message);
      console.error(error);
    }
  }

  async function editUser(id: string, data: UserDto) {
    try {
      const result = await axios.put(`${str}/${id}`, data);
      return result.data as unknown as UserDto;

    } catch (error) {
      console.error(error);
    }
  }

  async function deleteUser(id: string) {
    try {
      return await axios.delete(`${str}/${id}`);
      
    } catch (error) {
      console.error(error);
    }
  }

  return { getAllUsers, getOneUserById, editUser, addUser, deleteUser };
}