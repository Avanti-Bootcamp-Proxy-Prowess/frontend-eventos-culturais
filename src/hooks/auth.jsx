import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function login({ email, password }) {

        try {
            const response = await api.post("/login", { email, password });
            const { user, token } = response.data;

            localStorage.setItem("@rocketevents:user", JSON.stringify(user));
            localStorage.setItem("@rocketevents:token", token);

            // api.defaults.headers.authorization = `Bearer ${token}`;
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
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

    async function updateProfile({ user, avatarFile }) {
        try {

            if(avatarFile){
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile);

                const response = await api.patch("usuarios/avatar", fileUploadForm);
                user.avatar = response.data.avatar;
            }

            await api.put("/usuarios", user); 
            localStorage.setItem("@rocketevents:user", JSON.stringify(user));

            setData({ user, token: data.token });
            alert("Perfil Atualizado!");

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível atualizar o perfil");
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("@rocketevents:token");
        const user = localStorage.getItem("@rocketevents:user");

        if (token && user) {
            // api.defaults.headers.authorization = `Bearer ${token}`;
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({
                token,
                user: JSON.parse(user)
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            login,
            logout,
            updateProfile,
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
