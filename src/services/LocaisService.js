import { api } from "./api";

export const createLocal = async (data) => {
    try {
        const response = await api.post("/locais", data);
        alert("Local cadastrado com sucesso!");
        return response.data;
    } catch {
        console.log("Erro ao criar local");
    }
}

export const getLocais = async () => {
    try {
        const response = await api.get("/locais")
        return response.data
    } catch(error) {
        console.log("Erro ao buscar locais")
    }
}

export const updateLocalById = async (id, data) => {
    try {
        const response = await api.put(`/locais/${id}`, data)
        return response.data
    } catch(error) {
        console.log('Erro ao atualizar local')
    }
}

export const deleteLocalById = async (id) => {
    try {
        const response = await api.delete(`/locais/${id}`)
        return response.data
    } catch(error) {
        console.log('Erro ao deletar local')
    }
}
