/// <reference types="cypress" />

import produtoPage from "../support/page_objects/produtos.page"

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      produtoPage.visitarUrl()
  });

  it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
      //TODO: Coloque todo o fluxo de teste aqui, considerando as boas práticas e otimizações
     cy.fixture('produtos').then(dados =>{
        dados.forEach(produto=>{
            produtoPage.buscarProduto(produto.nomeProduto);
            produtoPage.adicionarNoCarrinho(produto.tamanho,produto.cor,produto.quantidade)
        })
     })
        produtoPage.finalizarCompra()
      
  });
  

})