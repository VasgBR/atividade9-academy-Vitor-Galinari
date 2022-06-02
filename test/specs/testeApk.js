describe("Testes de fluxo e utilização do aplicativo API Demos", async () => {
    xit('Fluxo e utilização do aplicativo em App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE', async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); 
        //Seguindo o fluxo o primeiro passo é clicar em App

        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        //O segundo passo é clicar em Alert Dialogs

        await $('id=two_buttons').click();
        //Terceiro passo é clicar em OK CANCEL DIALOG WITH MESSAGE

        const visibilidadePopUp = await $('id=android:id/content').isDisplayed();
        expect(visibilidadePopUp).toBe(true);
        //Aqui é verificado se o Modal é visível

        await $('id=android:id/button1').click();
        //Aqui é testado o botão OK dentro do Modal

        await $('id=two_buttons').click();
        await $('id=android:id/button2').click();
        //Aqui é testado o botão CANCEL dentro do Modal
    })

    xit('Fluxo e utilização do aplicativo em App/Alert Dialogs/LIST DIALOG', async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); 
        //Seguindo o fluxo o primeiro passo é clicar em App

        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        //O segundo passo é clicar em Alert Dialogs

        await $('id=select_button').click();
        //Terceiro passo é clicar em LIST DIALOG

        const visibilidadePopUp = await $('android.widget.FrameLayout').isDisplayed();
        expect(visibilidadePopUp).toBe(true);
        //Aqui é verificado se o Modal é visível

        const visibilidadeCommandOne = await $('android=new UiSelector().text("Command one").className("android.widget.TextView")').isDisplayed();
        expect(visibilidadeCommandOne).toBe(true);
        //Aqui é verificado se a opção Command One é visível dentro do Modal

        const visibilidadeCommandTwo = await $('android=new UiSelector().text("Command two").className("android.widget.TextView")').isDisplayed();
        expect(visibilidadeCommandTwo).toBe(true);
        //Aqui é verificado se a opção Command Two é visível dentro do Modal

        const visibilidadeCommandThree = await $('android=new UiSelector().text("Command three").className("android.widget.TextView")').isDisplayed();
        expect(visibilidadeCommandThree).toBe(true);
        //Aqui é verificado se a opção Command Three é visível dentro do Modal

        const visibilidadeCommandFour = await $('android=new UiSelector().text("Command four").className("android.widget.TextView")').isDisplayed();
        expect(visibilidadeCommandFour).toBe(true);
        //Aqui é verificado se a opção Command Four é visível dentro do Modal
    })
});