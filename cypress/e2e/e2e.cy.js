/// <reference types="cypress" />
const dadosProduto = require('../fixtures/produto.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        @ Quero acessar a Loja EBAC 
        @ Para fazer um pedido de 4 produtos 
        @ Fazendo a escolha dos produtos
        @ Adicionando ao carrinho

        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        //cy.visit('/')
        cy.visit('minha-conta') 
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        //TODO 

        cy.fixture('perfil').then((dados) => {
            cy.login(dados.usuario, dados.senha)
        })

        cy.get('.page-title').should('contain', 'Minha conta')

        cy.get('#primary-menu > .menu-item-629 > a').click()

        
        // item 1
        // selecionando o produto, tamanho , cor, quantidade + 
        //cy.get('[class="product-block grid"]').contains('Abominable Hoodie').click()
        //cy.get('.button-variable-item-XS').click()
        //cy.get('.button-variable-item-Green').click()
        //cy.get('.input-text').clear().type('1')
        //cy.get('.single_add_to_cart_button').click()


        // item 1
        // selecionando o produto, tamanho , cor, quantidade + 
        cy.get('[class="product-block grid"]').contains(dadosProduto[0].nome).click()
        cy.get('.button-variable-item-' + dadosProduto[0].tamanho ).click()
        cy.get('.button-variable-item-' + dadosProduto[0].cor ).click()
        cy.get('.input-text').clear().type(dadosProduto[0].quantidade)
        cy.get('.single_add_to_cart_button').click()

        //voltando tela anterior
        cy.get('#primary-menu > .menu-item-629 > a').click()

        // item 2
        // selecionando o produto, tamanho , cor, quantidade + 
        cy.get('[class="product-block grid"]').contains(dadosProduto[1].nome).click()
        cy.get('.button-variable-item-' + dadosProduto[1].tamanho ).click()
        cy.get('.button-variable-item-' + dadosProduto[1].cor ).click()
        cy.get('.input-text').clear().type(dadosProduto[1].quantidade)
        cy.get('.single_add_to_cart_button').click()
        

        
        //voltando
        cy.get('#primary-menu > .menu-item-629 > a').click()
        // Outra Página
        cy.get(':nth-child(4) > .page-numbers').click()

        // item 3
        // selecionando o produto, tamanho , cor, quantidade + 
        cy.get('[class="product-block grid"]').contains(dadosProduto[2].nome).click()
        cy.get('.button-variable-item-' + dadosProduto[2].tamanho ).click()
        cy.get('.button-variable-item-' + dadosProduto[2].cor ).click()
        cy.get('.input-text').clear().type(dadosProduto[2].quantidade)
        cy.get('.single_add_to_cart_button').click()

        
        //voltando
        cy.get('#primary-menu > .menu-item-629 > a').click()
        // item 4
        // selecionando o produto, tamanho , cor, quantidade + 
        cy.get('[class="product-block grid"]').contains(dadosProduto[3].nome).click()
        cy.get('.button-variable-item-' + dadosProduto[3].tamanho ).click()
        cy.get('.button-variable-item-' + dadosProduto[3].cor ).click()
        cy.get('.input-text').clear().type(dadosProduto[3].quantidade)
        cy.get('.single_add_to_cart_button').click()


        //indo para o carrinho
        cy.get('#cart > .dropdown-toggle').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()

        //dados do comprador
        cy.get('#billing_first_name').clear().type('marcio')
        cy.get('#billing_last_name').clear().type('pinheiro')
        cy.get('#billing_company').clear()
        cy.get('#billing_address_1').clear().type('rua do enderedo do cliente')
        cy.get('#billing_address_2').clear().type('2543')
        cy.get('#billing_city').clear().type('São Paulo')
        cy.get('#select2-billing_state-container').click().type('São Paulo').click()
        cy.get('#billing_postcode').clear().type('09760300')
        cy.get('#billing_email').clear().type('marcioemail@email.com')

        cy.get('#payment_method_cod').check()
        cy.get('#terms').click()
        cy.get('#place_order').click()

        
        cy.get('.page-title').should('contain',  'pedido recebido')


    });

});

