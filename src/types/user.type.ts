export interface UserDto {
  _id?: string;
  email: string;
  address: string;
  firstname: string;
  lastname: string;
}

export interface UserSentDto {
  password: string;
  email: string;
  address: string;
  firstname: string;
  lastname: string;
}

export interface TokenDto {
  token: string;
  isLogged: boolean;
}