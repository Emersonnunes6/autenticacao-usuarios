import axios from "axios"

interface HttpParameters {
    method: string;
    url: string;
    body?: any;
    config?: any;
}

export const HttpRequest = async ({ url, method, body, config }: HttpParameters) => {
    if (method === 'POST') {
        return await axios.post(`https://api.staging.aca.so/${url}`, body, config)
            .then((res) => {
                return res;
            }).catch((err) => {
                return err.response.data;
            })
    } else if (method === 'GET') {
        return await axios.get(`https://api.staging.aca.so/${url}`, config)
            .then((res) => {
                return res;
            }).catch((err) => {
                return err;
            })
    }
}