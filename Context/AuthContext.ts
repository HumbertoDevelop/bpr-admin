'use client'
import AuthContextProps from "Interfaces/IAuthContextProps";
import { createContext, useContext } from "react";

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: (user) => { 
    
  },
  logout: () => { 
    
  },
});

export const useAuth = () => useContext(AuthContext);