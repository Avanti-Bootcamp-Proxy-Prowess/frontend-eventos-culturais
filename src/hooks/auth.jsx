import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

import { useNavigate  } from "react-router-dom";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function login({ email, password }) {

        try {
            const response = await api.post("/login", { email, password });
            const { user, token } = response.data;

            localStorage.setItem("@rocketevents:user", JSON.stringify(user));
            localStorage.setItem("@rocketevents:token", token);

            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({ user, token })

            console.log(user, token);
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível entrar");
            }
        }
    }

    function logout() {
        localStorage.removeItem("@rocketevents:token");
        localStorage.removeItem("@rocketevents:user");

        setData({});
    }

    useEffect(() => {
        const token = localStorage.getItem("@rocketevents:token");
        const user = localStorage.getItem("@rocketevents:user");

        if (token && user) {
            api.defaults.headers.authorization = `Bearer ${token}`;
            setData({
                token,
                user: JSON.parse(user)
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            login,
            user: data.user,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };
