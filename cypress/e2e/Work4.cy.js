describe('Авторизация', function () {

    it('неверный логин, верный пароль', function () {
         cy.visit('https://login.qa.studio/');//открыть сайт авторизации
         cy.get('#mail').type('german@dolniko.ru');//найти окно ввода для почты и саму почту ввести неверную
         cy.get('#pass').type('iLoveqastudio1');//найти окно ввода пароля и ввоcти пароль
        cy.get('#loginButton').click();//найти кнопку входа и нажать на неё
        cy.get('#messageHeader'); //Такого логина или пароля нет
        cy.get('#exitMessageButton > .exitIcon').wait(2000).click()//Крестик есть и он кликабильный, wait на 2 сек
     })
 }) 


 //Напиши проверку на негативный кейс авторизации:
//а) Ввести НЕправильный логин
//б) Ввести правильный пароль
//в) Нажать войти
//г) Проверить нужный текст и наличие кнопки крестик
 