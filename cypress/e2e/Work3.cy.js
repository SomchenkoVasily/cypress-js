describe('Авторизация', function () {

    it('верный лог, неверный пароль ', function () {
         cy.visit('https://login.qa.studio/');//открыть сайт авторизации
         cy.get('#mail').type('german@dolnikov.ru');//найти окно ввода для почты и саму почту ввести
         cy.get('#pass').type('iLoveqastudio');//найти окно ввода пароля и ввод пароля
        cy.get('#loginButton').click();//найти кнопку входа и нажать на неё
        cy.get('#messageHeader'); //Такого логина или пароля нет
        cy.get('#exitMessageButton > .exitIcon').wait(2000).click()//Крестик есть и он кликабильный, wait на 2 сек
     })
 }) 


 //Напиши проверку на негативный кейс авторизации:
 //а) Ввести правильный логин
 //б) Ввести НЕправильный пароль
 //в) Нажать войти
 //г) Проверить нужный текст и наличие кнопки крестик
 