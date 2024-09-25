import axiosInstance from '../services/my-axios'
import axios from 'axios';

const getProdutos = () => {
    return axiosInstance.get('/produtos');
};


const getProdutoById = (id) => {
    return axiosInstance.get(`/produtos/${id}`);
};


const addProduto = (produto) => {
    return axiosInstance.post('/produtos', produto);
};


const updateProduto = (id, produto) => {
    return axiosInstance.put(`/produtos/${id}`, produto);
};


const deleteProduto = (id) => {
    return axiosInstance.delete(`/produtos/${id}`);
};

const criaProduto = (produto) => { 
    return axiosInstance.post('/produtos', produto);
};

export default {
    getProdutos,
    getProdutoById,
    addProduto,
    updateProduto,
    deleteProduto,
    criaProduto
};