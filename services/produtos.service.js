import { produtos } from "../db/produtos.js";

/* Ao importar o módulo produto ele se comportar como readOnly, ou seja, apenas leitura e no método removerTodosProduto() na linha 47 ao tentar setar produtos como vazio, pegamos o erro que não podemos setar em uma constante. Para realizarmos o remover desta forma, devemos declarar a variável dentro do escopo do arquivo como na linha 4 e não usar mais o import*/
//let produtos = []
let produtoss = produtos;

export const produtoService = {
  buscarProdutos: (request, reply) => {
    return {
      qtd: produtos.length,
      data: produtos
    }
  },
  buscarProdutoPorId: (req, res) => {
    let idReq = req.params.id;

    let produto = produtos.find((p) => p.id === parseInt(idReq));
    return produto;
  },
  criarProduto: (req, res) => {
    //Opção 1...
    // let produtoReq = req.body;
    // let id = produtos.length +1

    // req.body.nome = `Produto${id}`
    // req.body.id = id

    // return produtos.push(produtoReq);

    //Opção 2...
    let idNext = produtos.length + 1;
    const { preco, off } = req.body

    let produtoBd = {
      id: idNext,
      produto: `Produto ${idNext}`,
      preco,
      off,
    }
    return produtos.push(produtoBd);
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

    res.status(201).send(produto);
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

    res.status(201).send(produto);
  },

  removerTodos: (req, res) => {
      produtoss = []
      produtoss.splice()
      console.log('Produtos Excluídos...')
      return res.status(200).send(produtos)
},
  removeProdutoId: (req, res) => {
    const id = req.params.id;

    const produtoIndex= produtos.findIndex(p => p.id === parseInt(id))
    if(produtoIndex !== -1){
      //Se for diferente de -1 é pq achou o produto
      produtos.splice(produtoIndex, 1)
      return res.status(201).send(produtos[produtoIndex])
    }else {
      return res.status(404).send('Produto não encontrado...')
    }
  },
};
