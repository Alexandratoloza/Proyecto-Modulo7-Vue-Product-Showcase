describe('ProductList', () => {
  it('muestra los productos correctamente', () => {
    cy.visit('/')

    cy.contains('Nuestros productos').should('be.visible')

    cy.get('.product-card').should('have.length.at.least', 1)
  })

  it('permite buscar un producto', () => {
    cy.visit('/')

    cy.get('input[placeholder="🔍 Buscar productos..."]')
      .type('Laptop')

    cy.contains('Laptop Pro').should('be.visible')
  })

  it('permite agregar un producto al carrito', () => {
    cy.visit('/')

    cy.contains('Laptop Pro')
      .parents('.product-card')
      .find('button')
      .click()

    cy.contains('1 producto(s) agregado(s)').should('be.visible')
  })
})
