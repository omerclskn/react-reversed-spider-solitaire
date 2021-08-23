describe("Finish Page Test", () => {
    it("should go to game page", () => {
        cy.visit("localhost:3000/finish")

        cy.get('.play-again').click()

        cy.url().should('include','localhost:3000/')
    })
})

describe("Rules Page Test", () => {
    it("should show rules", () => {
        cy.visit("localhost:3000/")

        cy.get('#rules').click()

        cy.get('.context').should('have.css', 'display', 'block')
    })

    it("should close rules", () => {
        cy.visit("localhost:3000/")

        cy.get('#rules').click()
        cy.get('.rule').click()

        cy.get('.context').should('have.css', 'display', 'none')
    })
})

describe('Component Length Test', () => {
    it("should have 5 cardholder", () => {
        cy.visit("localhost:3000")

        cy.get('.cardholder').should('have.length', 5)
    })

    it("should have 8 blank card for completion", () => {
        cy.visit("localhost:3000")

        cy.get('.blank').should('have.length', 8)
    })

    it("should have 59 cards - 54 for board card 5 for cardholder", () => {
        cy.visit("localhost:3000")

        cy.get('.card').should('have.length', 59)
    })
})


describe("Game Page Test", () => {

    it("should click a card then new class will add", () => {
        cy.visit("localhost:3000")

        cy.get('.card').eq(10).click().should('have.class','selectedCard')
    })

    it("should have 5 buttons", () => {
        cy.visit("localhost:3000")

        cy.get('.btn').should('have.length', 5)
    })

    it("should click restart then refresh", () => {
        cy.visit("localhost:3000")

        cy.get('.btn').eq(3).click()
        cy.url().should('include', 'localhost:3000/')
    })

    it("should click a nonclickable card then new class won't add", () => {
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

    it("should score is 0", () => {
        cy.visit("localhost:3000")

        cy.get('.scoreboard').should('contain', '0')
    })
})

describe('Timer Test', () => {
    it("should start timer at 00 : 00 : 00", () => {
        cy.visit("localhost:3000")

        cy.get('.timer > :nth-child(2)').should('contain', '00 : 00 : 00')
    })

    it("should timer is 00 : 00 : 05 when wait 5 sec", () => {
        cy.visit("localhost:3000")
        cy.wait(5000)
        cy.get('.timer > :nth-child(2)').should('contain', '00 : 00 : 05')
    })
})


describe('Game Page Responsive Tests', () => {
    // width < 910
    it("should cards have right height when 750 x 550 size", () => {
        cy.visit("localhost:3000")
        cy.viewport(550, 750)

        cy.get('.card').eq(10).should('have.css', 'height', '50px')
    })

    it("should cards have right width when 750 x 550 size", () => {
        cy.visit("localhost:3000")
        cy.viewport(550, 750)

        cy.get('.card').eq(10).should('have.css', 'width', '36px')
    })

    // width > 910
    it("should cards have right height when 1000 x 750 size", () => {
        cy.visit("localhost:3000")
        cy.viewport(1000, 750)

        cy.get('.card').eq(10).should('have.css', 'height', '90px')
    })

    it("should cards have right width when 1000 x 750 size", () => {
        cy.visit("localhost:3000")
        cy.viewport(1000, 750)

        cy.get('.card').eq(10).should('have.css', 'width', '65px')
    })

    // width > 1150
    it("should cards have right height when 1200 x 750 size", () => {
        cy.visit("localhost:3000")
        cy.viewport(1200, 750)

        cy.get('.card').eq(10).should('have.css', 'height', '125px')
    })

    it("should cards have right width when 1200 x 750 size", () => {
        cy.visit("localhost:3000")
        cy.viewport(1200, 750)

        cy.get('.card').eq(10).should('have.css', 'width', '90px')
    })

    it("should flex-direction column in navbar when phone size", () => {
        cy.visit("localhost:3000")
        cy.viewport(550, 750)

        cy.get('.top-nav').should('have.class', 'd-flex-col')
    })

    it("should grid row in cardholder when phone size", () => {
        cy.visit("localhost:3000")
        cy.viewport(550, 750)

        cy.get('.top').should('have.class', 'd-grid-row')
    })
})

describe('Dynamic Margin Test for Card', () => {
    it('should increase by 25', () => {
        cy.visit('localhost:3000')

        cy.get('.card').eq(10).should('have.css', 'margin-top', '125px')

    })

    it('should increase by 15 when phone size', () => {
        cy.visit('localhost:3000')
        cy.viewport(550, 750)

        cy.get('.card').eq(10).should('have.css', 'margin-top', '75px')

    })
})

describe('Dynamic Margin Test for CardHolder', () => {
    it('should increase by 30', () => {
        cy.visit('localhost:3000')

        cy.get('.cardholder').eq(4).should('have.css', 'margin-left', '120px')

    })

    it('should increase by 15 when phone size', () => {
        cy.visit('localhost:3000')
        cy.viewport(550, 750)

        cy.get('.cardholder').eq(4).should('have.css', 'margin-left', '60px')

    })
})

describe('Background Tests', () => {
    it('should display spider background', () => {
        cy.visit('localhost:3000')

        cy.get('.blank').eq(0).should('have.css', 'background-image', 'url("http://localhost:3000/static/media/spider.b1884072.png")')
    })

    it('should display cards background', () => {
        cy.visit('localhost:3000')

        cy.get('.cardholder').eq(0).should('have.css', 'background-image', 'url("http://localhost:3000/static/media/closed_card-spider.ff62acf7.png")')
    })

    it('should display body background', () => {
        cy.visit('localhost:3000')

        cy.get('body').should('have.css', 'background-image', 'url("http://localhost:3000/static/media/spider-web-background.207c3fc6.png")')
    })
})
