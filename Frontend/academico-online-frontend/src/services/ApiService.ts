import axios from "axios";

class ApiService {

    private api;

    constructor() { 
        this.api = axios.create({ baseURL: 'http://localhost:5231/' });
    }

    public async login(dados: Object) {
        const response = await this.api.post('/aluno' , { dados });

        if(response.data.status !== 200) {
            return;
        }

        console.log('login realizado com sucesso');
    }
}

export const Api = new ApiService();