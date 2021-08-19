describe("Finish Page Test", () => {
    it("should go to game page", () => {
        cy.visit("localhost:3000/finish")

        cy.get('.play-again').click()

        cy.url().should('include','localhost:3000/')
    })
})

describe("Rules Page Test", () => {
    it("should go to game page", () => {
        cy.visit("localhost:3000/rules")

        cy.get('.rule').click()

        cy.url().should('include', 'localhost:3000/')
    })
})

describe("Game Page Test", () => {
    it("should go to rules page", () => {
        cy.visit("localhost:3000")

        cy.get('#rules').click()
        cy.url().should('include', 'localhost:3000/rules')
    })

    it("should click a card then new class will add", () => {
        cy.visit("localhost:3000")

        cy.get('.card').eq(10).click().should('have.class','selectedCard')
    })

    it("should click restart then refresh", () => {
        cy.visit("localhost:3000")

        cy.get('.btn').eq(3).click()
        cy.url().should('include', 'localhost:3000/')
    })

    it("should cannot click a card then new class won't add", () => {
        cy.visit("localhost:3000")

        cy.get('.card').eq(9).click({force: true}).not('.selectedCard')
    })

    it("should click a card holder then card count will up", () => {
        cy.visit("localhost:3000")

        cy.get('.cardholder').eq(4).click()
        cy.get('.card').should('have.length', 68)
    })

    it("should remove selected class when doubleclick", () => {
        cy.visit("localhost:3000")

        cy.get('.card').eq(10).dblclick().not('.selectedCard')
    })

    it("should click a card holder 5 times then cardholders will remove", () => {
        cy.visit("localhost:3000")

        cy.get('.cardholder').eq(4).click()
        cy.get('.cardholder').eq(3).click()
        cy.get('.cardholder').eq(2).click()
        cy.get('.cardholder').eq(1).click()
        cy.get('.cardholder').eq(0).click()

        cy.get('.cardholder').should('have.length', 0)
    })

    it("should highlight 2 cards when click hint", () => {
        cy.visit("localhost:3000")

        cy.get('.btn').eq(1).click().get('.selectedCard').should('have.length', 2)
    })

    it("should flex-direction column in navbar when phone size", () => {
        cy.visit("localhost:3000")
        cy.viewport(550,750)

        cy.get('.top-nav').should('have.class', 'd-flex-col')
    })

    it("should grid row in cardholder when phone size", () => {
        cy.visit("localhost:3000")
        cy.viewport(550, 750)

        cy.get('.top').should('have.class', 'd-grid-row')
    })

    it("should start timer at 00 : 00 : 00", () => {
        cy.visit("localhost:3000")

        cy.get('.timer > :nth-child(2)').should('contain','00 : 00 : 00')
    })

    it("should score is 0", () => {
        cy.visit("localhost:3000")

        cy.get('.scoreboard').should('contain', '0')
    })

    it("should cards have right height when phone size", () => {
        cy.visit("localhost:3000")
        cy.viewport(550, 750)

        cy.get('.card').eq(10).should('have.css', 'height', '50px')
    })

    it("should cards have right width when phone size", () => {
        cy.visit("localhost:3000")
        cy.viewport(550, 750)

        cy.get('.card').eq(10).should('have.css', 'width', '36px')
    })

})