import { faker } from '@faker-js/faker';

class ProdutoPage{
visitarUrl(){
    cy.visit('produtos')
}


buscarProduto(nomeProduto){
    cy.get('[name = "s"]').eq(1).type(nomeProduto)
    cy.get('.button-search').eq(1).click()
}
adicionarNoCarrinho(tamanho,cor,quantidade){
    cy.get('.button-variable-item-' + tamanho).click()
    cy.get('.button-variable-item-'+cor).click()
    cy.get('.input-text').clear().type(quantidade)
    cy.get('.single_add_to_cart_button').click()
    cy.get('.woocommerce-message').should('contain',' foi adicionado no seu carrinho.')
}
finalizarCompra(){
    cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
    cy.get('#cart .buttons > .checkout').click()
        cy.get('#billing_first_name').type(faker.person.firstName())
        cy.get('#billing_last_name').type(faker.person.lastName())
        cy.get('#billing_address_1').type('avenida colombo 597')
        cy.get('#billing_city').type('colombo')
        cy.get('#select2-billing_state-container').click().type('Paraná{enter}')
        cy.get('#billing_postcode').type('86010-230')
        cy.get('#billing_phone').type('41995588663')
        cy.get('#billing_email').type(faker.internet.email())
        cy.get('#payment_method_cod').click()
        cy.get('#terms').click()
        cy.get('#place_order').click()

        
        cy.get('.woocommerce-notice--success').should('contain','Obrigado. Seu pedido foi recebido.')
    }

}
export default new ProdutoPage()