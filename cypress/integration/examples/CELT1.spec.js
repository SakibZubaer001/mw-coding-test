/// <reference types="cypress"/>

describe('CELT test', () => {
    it('Log in as Admin and Creates a question', () => {
        cy
            .visit('https://lms.celt.vip/login')
            .get('input#example-input-1').type('elgunulu@gmail.com')
            .get('input#example-input-2').type('12345678')
            .get('button.btn.btn-primary.font-weight-bold.px-9.py-4.my-3.font-size-3').click()
            .get('span.menu-text').contains('Exams ').click()
            .get("a[href='/super-admin/exams/701/edit'").click()
            .get("a.v-tab").contains('Questions ').click()
            .get('button.mx-2.plus-btn.v-btn.v-btn--contained.v-btn--fab.v-btn--round.theme--dark.v-size--small.primary').click()
            .get("input[id='input-1424']").type('What is the Capital city of Bangladesh ?')
            .get('div.ProseMirror').type('Hint: Its a very crowded city')
            .get('#input-894').type('Single choice{enter}')
            .get('#input-900').type('10')
            .get('#input-1148').type('London')
            .get('#input-1155').type('Dhaka')
            .get('#input-1162').type('Chicago')
            .get('#__BVID__1159').click()
            .get('span.v-btn__content').contains(' Save ').click()


    })
})