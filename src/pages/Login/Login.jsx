import styles from "./Login.module.css";
import or from "../../assets/Content divider.svg";

import { React, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

const Login = () => {
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      const res = await fetchProfileData(codeResponse.access_token);
      axios
        .post(
          "http://localhost:3000/auth",
          { withCredentials: true },
          {
            accessToken: codeResponse.access_token,
            username: res.name,
            avatar: res.picture,
          }
        )
        .then((res) => {
          localStorage.removeItem("name");
          localStorage.removeItem("avatar");
          localStorage.setItem("accessToken", res.data.accessToken);
          localStorage.setItem("refreshToken", res.data.refreshToken);
          localStorage.setItem("expiresIn", res.data.exp);
          setIsAuth(true);
          window.location.reload();
        })
        .catch((error) => {
          console.log("Login Failed:", error);
        });
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  const refreshAccessToken = () => {
    const refreshToken = localStorage.getItem("refreshToken");
    axios
      .post(
        "http://localhost:3000/auth/refresh",
        { withCredentials: true },
        {
          refresh_token: refreshToken,
        }
      )
      .then((res) => {
        const newAccessToken = res.data.accessToken;
        localStorage.setItem("accessToken", newAccessToken);
        localStorage.setItem("expiresIn", res.data.exp);
      })
      .catch((error) => {
        console.log("Failed to refresh access token:", error);
      });
  };

  useEffect(() => {
    const expiresIn = localStorage.getItem("expiresIn");
    const currentTime = new Date().getTime();
    if (currentTime / 1000 - 5 > expiresIn) {
      refreshAccessToken();
    }
  });

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const tokenExpiration = localStorage.getItem("tokenExpiration");

    const refreshInterval = setInterval(refreshAccessToken, 1 * 60 * 1000); // Refresh every 10 minutes

    return () => {
      clearInterval(refreshInterval);
    };
  }, []);

  useEffect(() => {
    const storedProfile = localStorage.getItem("accessToken");
    if (storedProfile) {
      axios.get(
        "http://localhost:3000/auth",
        { withCredentials: true },
        {
          headers: {
            Authorization: `Bearer ${storedProfile}`,
            Accept: "application/json",
          },
        }
      );
    }
  }, []);

  const handleLogout = () => {
    googleLogout();
    const refreshToken = localStorage.getItem("refreshToken");
    navigate("/");
    handleButtonClick(0);
    setShowDropdown(false);
    localStorage.removeItem("accessToken");
    axios
      .delete(config.API_URL + "/auth/logout", {
        data: { refresh_token: refreshToken },
      })
      .then(() => {
        googleLogout();
        localStorage.removeItem("refreshToken");
      })
      .catch((error) => {
        console.log("Logout Failed:", error);
      });
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <div>
      <div>
        <div className={styles.login_wrapper}>
          <div className={styles.content_wrapper}>
            <h1
              style={{
                fontWeight: "500",
              }}
            >
              Вход
            </h1>
            <input
              className={styles.input_style}
              type="text"
              placeholder="Почта"
            />
            <input
              className={styles.input_style}
              type="text"
              placeholder="Пароль"
            />
            <p className={styles.forgot_password}>Забыли пароль?</p>
            <button className={styles.login_button}>Войти</button>
            <img className={styles.or} src={or} />
            <div className={styles.google_wrapper}>
              <GoogleLogin onSuccess={login} onError={errorMessage} />
            </div>
            <p className={styles.no_title}>
              Нет аккаунта?{" "}
              <span className={styles.no_main}>Зарегистрироваться</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
