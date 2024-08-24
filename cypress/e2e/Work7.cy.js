describe('Авторизация и е2е покемонов', function () {

    it('открыть сайт', function () {
         cy.visit('https://login.qa.studio/');//открыть сайт авторизации
         cy.get('#mail').type('german@dolnikov.ru');//найти окно ввода для почты и саму почту ввести
         cy.get('#pass').type('iLoveqastudio1');//найти окно ввода пароля и ввод пароля
        cy.get('#loginButton').click();//найти кнопку входа и нажать на неё
        cy.get('#message'); cy.get('#messageHeader');//появилось окно с успешной авторизацией
        cy.get('#exitMessageButton > .exitIcon').should('be.visible').wait(5000).click() ;//которое содержит крестик, и он работает(задержка 5 сек)
     })
 }) 

    it('восстановление пароля, логика', function () {
         cy.visit('https://login.qa.studio/');//открыть сайт авторизации
         cy.get('#forgotEmailButton').click();//нажать забыли пароль
         cy.get('#forgotForm')//окно восстановления пароля
         cy.get('#mailForgot').type('german@dolnikov.ru');// ввести свою почту
         cy.get('#restoreEmailButton').click()//найти и кликнуть "отправить код"
         cy.get('#messageHeader')// сообщение успешно отправили пароль на имейл
         cy.get('#exitMessageButton > .exitIcon').wait(2000).click()//закрыть предыдущее окно, автотест не перенаправляет на исходное окно!
     })
 

    it('верный лог, неверный пароль', function () {
         cy.visit('https://login.qa.studio/');//открыть сайт авторизации
         cy.get('#mail').type('german@dolnikov.ru');//найти окно ввода для почты и саму почту ввести
         cy.get('#pass').type('iLoveqastudio');//найти окно ввода пароля и ввод пароля
        cy.get('#loginButton').click();//найти кнопку входа и нажать на неё
        cy.get('#messageHeader'); //Такого логина или пароля нет
        cy.get('#exitMessageButton > .exitIcon').wait(2000).click()//Крестик есть и он кликабильный, wait на 2 сек
     })

    it('неверный логин, верный пароль', function () {
         cy.visit('https://login.qa.studio/');//открыть сайт авторизации
         cy.get('#mail').type('german@dolniko.ru');//найти окно ввода для почты и саму почту ввести неверную
         cy.get('#pass').type('iLoveqastudio1');//найти окно ввода пароля и ввеcти пароль
        cy.get('#loginButton').click();//найти кнопку входа и нажать на неё
        cy.get('#messageHeader'); //Такого логина или пароля нет
        cy.get('#exitMessageButton > .exitIcon').wait(2000).click()//Крестик есть и он кликабильный, wait на 2 сек
     })

    it('без@', function () {
         cy.visit('https://login.qa.studio/');//открыть сайт авторизации
         cy.get('#mail').type('germandolnikov.ru');//найти окно ввода для почты и саму почту ввести неверную
         cy.get('#pass').type('iLoveqastudio1');//найти окно ввода пароля и ввоcти пароль
        cy.get('#loginButton').click();//найти кнопку входа и нажать на неё
        cy.get('#messageHeader'); //Нужно исправить проблему валидации
        cy.get('#exitMessageButton > .exitIcon').wait(2000).click()//Крестик есть и он кликабильный, wait на 2 сек
     })


    it('неверный регистр', function () {
         cy.visit('https://login.qa.studio/');//открыть сайт авторизации
         cy.get('#mail').type('GerMan@Dolnikov.ru');//найти окно ввода для почты и саму почту ввести неверную
         cy.get('#pass').type('iLoveqastudio1');//найти окно ввода пароля и ввоcти пароль
        cy.get('#loginButton').click();//найти кнопку входа и нажать на неё
        cy.get('#messageHeader'); //Такого логина или пароля нет
        cy.get('#exitMessageButton > .exitIcon').wait(5000).click()//Крестик есть и он кликабильный, wait на 2 сек
     })
 
     it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
      cy.visit('https://pokemonbattle.ru/');                         // переходим на сайт https://pokemonbattle.ru/
      cy.get('input[type="email"]').type('USER_LOGIN');//ввод почты
      cy.get('input[type="password"]').type('USER_PASSWORD');//ввод пароля
      cy.get('.auth__button').click();//клик на войти
      cy.wait(3000);
      cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
      cy.get('[href="/shop"]').click();                               // нажимаем кнопку Магазин
      cy.get('.available > button').first().click({ force: true })
      cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');//ввести цифры карты
      cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');//срок
      cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');//код
      cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Vesserman Anatolik');// Имя
      cy.get('.pay-btn').click();//клик кнопку купить
      cy.get('#cardnumber').type("56456");//ввести код
      cy.get('.payment__submit-button').click()//клик кнопку
     })




 