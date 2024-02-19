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
        produtoPage.buscarProduto(dados[0].nomeProduto)
        produtoPage.adicionarNoCarrinho(
            dados[0].tamanho,
            dados[0].cor,
            dados[0].quantidade
        )
     })
     cy.fixture('produtos').then(dados =>{
        produtoPage.buscarProduto(dados[1].nomeProduto)
        produtoPage.adicionarNoCarrinho(
            dados[1].tamanho,
            dados[1].cor,
            dados[1].quantidade
        )
     })
     cy.fixture('produtos').then(dados =>{
        produtoPage.buscarProduto(dados[2].nomeProduto)
        produtoPage.adicionarNoCarrinho(
            dados[2].tamanho,
            dados[2].cor,
            dados[2].quantidade
        )
     })
     cy.fixture('produtos').then(dados =>{
        produtoPage.buscarProduto(dados[3].nomeProduto)
        produtoPage.adicionarNoCarrinho(
            dados[3].tamanho,
            dados[3].cor,
            dados[3].quantidade
        )
     })
    
        produtoPage.finalizarCompra()
    
      
    
      
      
  });
  

})