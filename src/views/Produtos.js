import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import produtoService from '../services/ProdutoService';
import { adicionarProduto, removerProduto } from '../redux/action';
import Card from './Card'; 
import { Button } from 'react-bootstrap';

const Produtos = () => {
    const dispatch = useDispatch();
    const [produtos, setProdutos] = useState([]); 
    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await produtoService.getProdutos(); 
                setProdutos(response.data); 
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        };

        fetchProdutos(); 
    }, []); 

    const handleAdicionar = (produto) => {
        dispatch(adicionarProduto(produto)); 
    };

    const handleRemover = (id) => {
        dispatch(removerProduto(id)); 
    };

    return (
        <div className="container">
            <h1>Produtos</h1>
            <div className="row">
                {produtos.map((produto) => (
                    <div className="col-md-4" key={produto.id}>
                        <Card
                            title={produto.nome} 
                            description={`Preço: R$ ${produto.preco.toFixed(2)}, Validade: ${produto.validade}`} // Usando descrição para combinar os dados
                            image={produto.imagemUrl} 
                            onButtonClick={() => handleAdicionar(produto)} 
                            buttonText="Adicionar" 
                        />
                        <Button
                            variant="danger" 
                            onClick={() => handleRemover(produto.id)}
                        >
                            Remover
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Produtos;
