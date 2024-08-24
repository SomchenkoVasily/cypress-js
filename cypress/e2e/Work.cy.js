describe('Авторизация', function () {

    it('верный логин и пароль', function () {
         cy.visit('https://login.qa.studio/');//открыть сайт авторизации
         cy.get('#mail').type('german@dolnikov.ru');//найти окно ввода для почты и саму почту ввести
         cy.get('#pass').type('iLoveqastudio1');//найти окно ввода пароля и ввод пароля
        cy.get('#loginButton').click();//найти кнопку входа и нажать на неё
        cy.get('#message'); cy.get('#messageHeader');//появилось окно с успешной авторизацией
        cy.get('#exitMessageButton > .exitIcon').should('be.visible').wait(5000).click() ;//которое содержит крестик, и он работает(задержка 5 сек)
     })
 }) 


 //Напиши проверку на позитивный кейс авторизации:
//а) Ввести правильный логин
//б) Ввести правильный пароль
//в) Нажать войти
//г) Проверить нужный текст и наличие кнопки крестик