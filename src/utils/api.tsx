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

/* import { useState, useEffect } from 'react';
import axios from 'axios';

interface HttpParameters {
    method: string;
    url: string;
    body?: any;
}

axios.defaults.baseURL = 'https://api.staging.aca.so';

export const HttpRequest = ({ url, method, body }: HttpParameters) => {
    const fetchData = async () => {
        if (method === 'POST') {
            await axios.post(url, body)
                .then((res) => {
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    console.log(false);
                });
        } else if (method === 'GET') {
            await axios.get(url, body)
                .then((res) => {
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    console.log(false);
                });
        }
    };
}; */