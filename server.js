import Fastify from 'fastify'
import { produtoService } from './services/produtos.service.js'

const fastify = Fastify({
    logger: false
  })

const PORT = 5005

fastify.get('/', (request, reply) => {
    reply.send('Servidor Rodando - Fastify')
})

fastify.get('/produtos', produtoService.buscarProdutos)

fastify.get('/produto/:id', produtoService.buscarProdutoPorId)

fastify.post('/produto', produtoService.criarProduto)

fastify.put('/produto/:id', produtoService.atualizarProduto)

fastify.patch('/produto/:id', produtoService.atualizarProdutoParcial)

fastify.delete('/produto', produtoService.removerTodos)

fastify.delete('/produto/:id', produtoService.removeProdutoId)

fastify.listen({ port: PORT}, (err, address) => {
    if(err) {
        console.error('Erro ao subir o servdor', err)
        return;
    }
    console.log(`Server is now listening on ${address}`);
})
