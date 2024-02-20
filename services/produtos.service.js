import { produtos } from "../db/produtos.js";

export const produtoService = {
  buscarProdutos: (request, reply) => {
    return produtos;
  },
  buscarProdutoPorId: (req, res) => {
    let idReq = req.params.id;

    let produto = produtos.find((p) => p.id === parseInt(idReq));
    return produto;
  },
  criarProduto: (req, res) => {
    let produtoReq = req.body;
    return produtos.push(produtoReq);
  },
  atualizarProdutoParcial: (req, res) => {
    const id = req.params.id;

    const produto = produtos.find((p) => p.id === parserInt(id));

    //Se não existir ->
    // undefined, null, 0
    if (!produto) {
      res.status(404).send({ message: "Produto não encontrado..." });
      //o return interrompe, caso não haja um produto...
      return;
    }

    //atualiza cada propriedade do array com o produto do body
    
    produto.nome = req.body.nome ?? produto.nome;
    produto.preco = req.body.preco ?? produto.preco;
    produto.off = req.body.off ?? produto.off;

    res.status(201).send(produto)
  },

  atualizarProduto: (req, res) => {
    const id = req.params.id;

    const produto = produtos.find((p) => p.id === parserInt(id));

    //Se não existir ->
    // undefined, null, 0
    if (!produto) {
      res.status(404).send({ message: "Produto não encontrado..." });
      //o return interrompe, caso não haja um produto...
      return;
    }

    //atualiza cada propriedade do array com o produto do body
    
    produto.nome = req.body.nome ?? produto.nome;
    produto.preco = req.body.preco ?? produto.preco;
    produto.off = req.body.off ?? produto.off;

    res.status(201).send(produto)
  },

  removerTodos: (req, res) => {
    
    return produtos = [];
  },

  removeProdutoId: (req, res) => {
    const id = req.params.id;

    const produto = produtos.slice(produto, 22);
    return produto.delete(produto);

  }
};

