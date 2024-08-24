describe('Покупка аватара', function () {                                // название набора тестов
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.ru/');                         // переходим на сайт https://pokemonbattle.ru/
         cy.get('input[type="email"]').type('***');//ввод почты
         cy.get('input[type="password"]').type('***');//ввод пароля
         cy.get('.auth__button').click();//клик на войти
         cy.wait(3000);
         cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
         cy.get('[href="/shop"]').click();                               // нажимаем кнопку Магазин
         cy.get('.available > button').first().click({ force: true })
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');//ввести цифры карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');//срок
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');//код
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Vesserman Anatolik');// Имя
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type("56456");
         cy.get('.payment__submit-button').click()
        })
})