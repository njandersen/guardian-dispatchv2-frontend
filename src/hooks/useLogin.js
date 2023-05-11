import { useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { setUser, setAccessToken, setRefreshToken } from "../store/authSlice";

export default function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const refreshToken = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/guardian-dispatch/refresh",
        {
          token: user.refreshToken,
        }
      );
      dispatch(setAccessToken(response.data.accessToken));
      dispatch(setRefreshToken(response.data.refreshToken));
      return response.data;
    } catch (error) {
      console.error("Error refreshing token:", error);
      alert("Error refreshing token. Please log in again.");
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      let currDate = new Date();
      const decodedToken = jwtDecode(user.accessToken);
      if (decodedToken.exp * 1000 < currDate.getTime()) {
        const data = await refreshToken();
        config.headers["Authorization"] = `Bearer ${data.accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  async function handleLogin(email, password) {
    try {
      const response = await axios.post(
        "http://localhost:3000/guardian-dispatch/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        dispatch(setUser(data));

        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("user", JSON.stringify(data.username));
        return true;
      } else {
        const data = response.data;
        alert(data.error);
        return false;
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Error logging in. Please try again.");
      return false;
    }
  }

  async function handleLogout() {
    const refreshToken = localStorage.getItem("refreshToken");

    try {
      const response = await axios.post(
        "http://localhost:3000/guardian-dispatch/logout",
        {
          refreshToken,
        }
      );

      console.log("Logout response:", response);

      if (response.status === 204) {
        // clear token from local storage
        localStorage.removeItem("accesstoken");
        localStorage.removeItem("refreshToken");
        // clear user from Redux store
        dispatch(setUser(null));
        dispatch(setAccessToken(null));
        dispatch(setRefreshToken(null));
        // redirect to login page
        window.location.href = "/enter";
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.error);
      } else {
        console.error("Error logging out:", error);
        alert("Error logging out. Please try again.");
      }
    }
  }

  return { email, setEmail, password, setPassword, handleLogin, handleLogout };
}
