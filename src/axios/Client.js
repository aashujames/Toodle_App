import axios from "axios";
import { clearAllTokens, getToken, setToken } from "./tokenHandler";

//getting access token or refresh token

const requestClient = axios.create({
    baseURL: "https://web-production-a2da.up.railway.app",
    headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`
    }
});

requestClient.interceptors.request.use(
    async (config) => {
        const access = localStorage.getItem("access");
        config.headers = {
            Authorization: access ? "Bearer " + access : "",
            Accept: "application/json"
        };
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

// Response interceptor to refresh auth token if expired
requestClient.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;

        if (error.response?.data?.code === "token_not_valid") {
            if (error.response?.data.detail === "Token is invalid or expired") {
                //refresh token expired
                clearAllTokens();
                return;
            }
            originalRequest._retry = true;
            const response = await requestClient.post("/auth/token/refresh/", {
                refresh: getToken("refresh")
            });
            setToken(response.data.access);
            return requestClient(originalRequest);
        }

        return Promise.reject(error);
    }
);

export default requestClient;
