import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { api, getToken, setToken, setUnauthorizedHandler } from "../api.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [email, setEmail] = useState(null);
  const [loading, setLoading] = useState(true);

  const logout = useCallback(() => {
    setToken(null);
    setEmail(null);
  }, []);

  useEffect(() => {
    setUnauthorizedHandler(() => {
      setEmail(null);
    });
  }, []);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      setLoading(false);
      return;
    }
    api
      .get("/api/auth/me")
      .then((data) => setEmail(data.email))
      .catch(() => {
        setToken(null);
        setEmail(null);
      })
      .finally(() => setLoading(false));
  }, []);

  const login = useCallback(async (loginEmail, password) => {
    const data = await api.post("/api/auth/login", { email: loginEmail, password });
    setToken(data.token);
    // Confirm the token and get the canonical email back from the server.
    const me = await api.get("/api/auth/me");
    setEmail(me.email);
    return me;
  }, []);

  const value = {
    email,
    isAuthenticated: !!email,
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
}
