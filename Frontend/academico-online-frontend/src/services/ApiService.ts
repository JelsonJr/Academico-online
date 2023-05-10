import axios from "axios";

const api = axios.create({ baseURL: 'http://localhost:5231/' });

api.interceptors.request.use((config) => {
    if(!config.headers.Authorization) {
        //configurações de autorização e token
        return config;
    }

    return config;
});

api.interceptors.response.use((response) => {
    if(!response.headers.hasAuthorization) {
        //configurações de header e autorização
        return response;
    }

    return response;
});

export async function login(login: Object) {
    const response = await api.post("/Aluno", login);
    
    if(response.status !== 200) {
        return null;
    }

    return response.data;
}
