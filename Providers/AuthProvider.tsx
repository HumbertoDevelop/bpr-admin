"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import IAuthProviderProps from "Interfaces/IAuthProviderProps";
import { AuthContext } from "Context/AuthContext";
import IUser from "Interfaces/IUser";
import { validateToken } from "services/auth/validateToken";
import { loginAuthPost } from "services/auth/login";
import { logoutAuth } from "services/auth/logout";

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Get the token from the local storage.
    const token = localStorage.getItem("token");

    // Token in localstorage.
    if (token) {
      // Validate the token.
      const response = validateToken(token);

      // If the token is invalid, redirect to the login page.
      if (response) {
        router.push("/");
      } else {
        // If the token is invalid, redirect to the login page.
        router.push("/authentication/sign-in");
      }
    } else {
      // If there is not token, redirect to the login page.
      router.push("/authentication/sign-in");
    }
  }, [router]);

  const login = async (user: IUser) => {
    // const responseLogin = await loginAuthPost(user);
    // setUser(responseLogin);
    
    localStorage.setItem('token', 'd');
    setUser({email: 'd', password: 'd', token: 'd'});
    router.push("/");
  };

  const logout = () => {
    // Remove the user state and the token from the local storage.
    const responseLogout = logoutAuth();
    if (responseLogout) {
      setUser(null);
      router.push("/authentication/sign-in");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
