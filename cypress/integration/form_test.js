describe('Form Input', function() {
    it('Navigate to page', function(){
        cy.visit('http://localhost:3000/pizza')
    })

    it('Name', function() {
        cy.get('input[name="name"]')
    })

    it('Size', function() {
        cy.get('select[name="size"]')
    })
})

describe('Form Validation', function() {
    it('Navigate to page', function() {
        cy.visit('http://localhost:3000/pizza')
    })

    it('Validate name input', function() {
        cy.get('input[name="name"]')
        .type('a')
        .clear()
        cy.contains('Name is required')
    })

    it('Validate size selection', function() {
        cy.get('select[name="size"]')
        .select('small')
        .select('')
        cy.contains('Please select a pizza size')
    })

})

describe('Form Submission', function() {
    it('Navigate to page', function() {
        cy.visit('http://localhost:3000/pizza')
    })
    it('Enter first_name', function() {
        cy.get('input[name="name"]')
        .type('Test')
        cy.contains('Name is required').should('not.exist')
    })

    it('Validate size selection', function() {
        cy.get('select[name="size"]')
        .select('small')
        cy.contains('Please select a pizza size').should('not.exist')
    })

    it('Can submit multiple toppings', function() {
        cy.get('input[name="pepperoni"]')
        .check()
        cy.get('input[name="mushroom"]')
        .check()
        cy.get('input[name="sausage"]')
        .check()
    })

    it('Submit Button is Enabled', function() {
        cy.get('#submit')
        .should("not.be.disabled")
    })

    it('Submit the Form', function() {
        cy.get('#submit')
        .click()
    })

})
