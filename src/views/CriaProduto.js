import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import  produtoService from '../services/ProdutoService';
import { adicionarProduto } from '../redux/action';

const CriaProduto = () => {
    const dispatch = useDispatch();

    const [produto, setProduto] = useState({
        id: '',
        nome: '',
        imagemUrl: '',
        preco: '',
        validade: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduto({ ...produto, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        try {
            // Envia o produto para o servidor
            const response = await produtoService.addProduto(produto); // Alterei para 'addProduto'
            dispatch(adicionarProduto(response.data)); 
            alert('Produto criado com sucesso!');
            setProduto({ id: '', nome: '', imagemUrl: '', preco: '', validade: '' }); 
        } catch (error) {
            console.error('Erro ao criar produto:', error);
            alert('Erro ao criar produto. Tente novamente.');
        }
    };

    return (
        <div>
            <h1>Criar Produto</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID</label>
                    <input
                        type="text"
                        className="form-control"
                        id="id"
                        name="id"
                        value={produto.id}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input
                        type="text"
                        className="form-control"
                        id="nome"
                        name="nome"
                        value={produto.nome}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="imagemUrl" className="form-label">Imagem URL</label>
                    <input
                        type="text"
                        className="form-control"
                        id="imagemUrl"
                        name="imagemUrl"
                        value={produto.imagemUrl}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="preco" className="form-label">Preço</label>
                    <input
                        type="text"
                        className="form-control"
                        id="preco"
                        name="preco"
                        value={produto.preco}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="validade" className="form-label">Validade</label>
                    <input
                        type="date"
                        className="form-control"
                        id="validade"
                        name="validade"
                        value={produto.validade}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submeter</button>
            </form>
        </div>
    );
};

export default CriaProduto;