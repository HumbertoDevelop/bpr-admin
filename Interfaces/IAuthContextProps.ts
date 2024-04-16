import IUser from "./IUser";

export default interface AuthContextProps {
    user: IUser | null;
    login: (user: IUser) => void;
    logout: () => void;
  }
  