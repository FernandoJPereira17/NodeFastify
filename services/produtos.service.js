import { produtos } from "../db/produtos.js"


export const produtoService = {
    buscarProdutos: (request, reply) => {
        return produtos
    },
    buscarProdutoPorId: (req, res) => {
        let idReq = req.params.id

        let produto = produtos.find(p => p.id === parseInt(idReq))
        return produto[0]
    },
    criarProduto: (req, res) => {
        let produtoReq = req.body
        return produtos.push(produtoReq)
    },
    atualizarProduto: (req, res) => {

    },
    removerProduto: (req, res) => {

    },
}