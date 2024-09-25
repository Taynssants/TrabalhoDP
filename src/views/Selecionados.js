import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../views/Card';
import { removerProduto, adicionarProduto } from '../redux/action';
import { Button } from 'react-bootstrap';

const Selecionados = () => {
    const dispatch = useDispatch();
    const listaDeProdutos = useSelector((state) => state.listaDeProdutos);

    const handleRemover = (id) => {
        dispatch(removerProduto(id)); 
    };

    const handleAdicionar = (produto) => {
        dispatch(adicionarProduto(produto)); 
    };

    return (
        <div className="container">
            <h1>Produtos Selecionados</h1>
            <div className="row">
                {listaDeProdutos.map((produto) => (
                    <div className="col-md-4" key={produto.id}>
                        <Card
                            title={produto.nome} 
                            description={`Preço: R$ ${parseFloat(produto.preco).toFixed(2)}, Validade: ${produto.validade}`} 
                            image={produto.imagemUrl} 
                            onButtonClick={() => handleRemover(produto.id)} // Passa o ID do produto para remover
                            buttonText="Remover" 
                        />
                        <Button
                            variant="success" 
                            onClick={() => handleAdicionar(produto)} // Adiciona o produto novamente
                        >
                            Adicionar
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Selecionados;
