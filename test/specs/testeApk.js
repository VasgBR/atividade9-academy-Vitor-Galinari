describe("Testes de fluxo e utilização do aplicativo API Demos", async () => {
    afterEach(() => {
        driver.reset();
    });
    // O driver.reset() em um afterEach() faz com que após cada cenário de teste o emulador retorne para a tela principal, protegendo os testes de serem executados no fluxo correto e permitindo que cada cenário seja independente um do outro

    it('Fluxo e utilização do aplicativo em App/Alert Dialogs/OK CANCEL DIALOG WITH MESSAGE', async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); 
        // Seguindo o fluxo o primeiro passo é clicar em App

        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        // O segundo passo é clicar em Alert Dialogs

        await $('id=two_buttons').click();
        // Terceiro passo é clicar em OK CANCEL DIALOG WITH MESSAGE

        const modal = await $('id=android:id/content').isDisplayed();
        expect(modal).toBe(true);
        // Aqui é verificado se o Modal é visível

        await $('id=android:id/button1').click();
        // Aqui é testado o botão OK dentro do Modal

        await $('id=two_buttons').click();
        await $('id=android:id/button2').click();
        // Aqui é testado o botão CANCEL dentro do Modal
    });

    it('Fluxo e utilização do aplicativo em App/Alert Dialogs/LIST DIALOG', async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); 
        // Seguindo o fluxo o primeiro passo é clicar em App

        await $('android=new UiSelector().text("Alert Dialogs").className("android.widget.TextView")').click();
        // O segundo passo é clicar em Alert Dialogs

        await $('id=select_button').click();
        // Terceiro passo é clicar em LIST DIALOG

        const modal = await $('android.widget.FrameLayout').isDisplayed();
        expect(modal).toBe(true);
        // Aqui é verificado se o Modal é visível

        const commandOne = await $('android=new UiSelector().text("Command one").className("android.widget.TextView")').isDisplayed();
        expect(commandOne).toBe(true);
        // Aqui é verificado se a opção Command One é visível dentro do Modal

        const commandTwo = await $('android=new UiSelector().text("Command two").className("android.widget.TextView")').isDisplayed();
        expect(commandTwo).toBe(true);
        // Aqui é verificado se a opção Command Two é visível dentro do Modal

        const commandThree = await $('android=new UiSelector().text("Command three").className("android.widget.TextView")').isDisplayed();
        expect(commandThree).toBe(true);
        // Aqui é verificado se a opção Command Three é visível dentro do Modal

        const commandFour = await $('android=new UiSelector().text("Command four").className("android.widget.TextView")').isDisplayed();
        expect(commandFour).toBe(true);
        // Aqui é verificado se a opção Command Four é visível dentro do Modal
    });

    it('Fluxo e utilização do aplicativo em App/Fragment/Hide and Show', async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); 
        // Seguindo o fluxo o primeiro passo é clicar em App

        await $('android=new UiSelector().text("Fragment").className("android.widget.TextView")').click();
        // Seguindo o fluxo o segundo passo é clicar em Fragment

        await $('android=new UiSelector().text("Hide and Show").className("android.widget.TextView")').click();
        // Seguindo o fluxo o terceiro passo é clicar em Hide and Show

        const demonstration = await $('android=new UiSelector().text("Demonstration of hiding and showing fragments.").className("android.widget.TextView")').isDisplayed();
        expect(demonstration).toBe(true);
        // Aqui é verificado se o título Demonstration of hiding and showing fragments é visível

        await $('id=frag1hide').click();
        // Aqui é testado o primeiro botão HIDE

        await $('id=frag1hide').click();
        // Aqui é testado o primeiro botão SHOW

        await $('id=frag2hide').click();
        // Aqui é testado o primeiro botão HIDE

        await $('id=frag2hide').click();
        // Aqui é testado o primeiro botão SHOW
    });

    it('Fluxo e utiliação do aplicativo em App/Action Bar/Display options/DISPLAY_HOME_AS_UP', async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); 
        // Seguindo o fluxo o primeiro passo é clicar em App

        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        // Seguindo o fluxo o segundo passo é clicar em Action Bar

        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        // Seguindo o fluxo o terceiro passo é clicar em Display Options

        await $('id=toggle_home_as_up').click();
        // Seguindo o fluxo o passo final é clicar em DISPLAY_HOME_AS_UP

        const setaVoltarPagina = await $('android.widget.ImageButton').isDisplayed();
        expect(setaVoltarPagina).toBe(true);
        // Aqui é verificado se a seta para voltar a página é visível após clicar na opção DISPLAY_HOME_AS_UP
    });

    it('Fluxo e utiliação do aplicativo em App/Action Bar/Display options/DISPLAY_SHOW_TITLE', async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); 
        // Seguindo o fluxo o primeiro passo é clicar em App

        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        // Seguindo o fluxo o segundo passo é clicar em Action Bar

        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        // Seguindo o fluxo o terceiro passo é clicar em Display Options

        const tituloPagina = await $('android=new UiSelector().text("App/Action Bar/Display Options").className("android.widget.TextView")').isDisplayed();
        expect(tituloPagina).toBe(true);
        // Aqui é verificado se o título da página é visível antes de clicar na opção DISPLAY_SHOW_TITLE

        await $('id=toggle_show_title').click();
        // Seguindo o fluxo o passo final é clicar em DISPLAY_SHOW_TITLE
    });

    it('Fluxo e utiliação do aplicativo em App/Action Bar/Display options/DISPLAY_SHOW_CUSTOM', async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); 
        // Seguindo o fluxo o primeiro passo é clicar em App

        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        // Seguindo o fluxo o segundo passo é clicar em Action Bar

        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        // Seguindo o fluxo o terceiro passo é clicar em Display Options

        await $('id=toggle_show_custom').click();
        // Seguindo o fluxo o passo final é clicar em DISPLAY_SHOW_CUSTOM

        const customView = await $('android=new UiSelector().text("CUSTOM VIEW!").className("android.widget.Button")').isDisplayed();
        expect(customView).toBe(true);
        // Aqui é verificado se o CUSTOM VIEW! é visível após clicar no botão DISPLAY_SHOW_CUSTOM
    });

    it('Fluxo e utiliação do aplicativo em App/Action Bar/Display options/DISPLAY_SHOW_NAVIGATION', async () => {
        await $('android=new UiSelector().text("App").className("android.widget.TextView")').click(); 
        // Seguindo o fluxo o primeiro passo é clicar em App

        await $('android=new UiSelector().text("Action Bar").className("android.widget.TextView")').click();
        // Seguindo o fluxo o segundo passo é clicar em Action Bar

        await $('android=new UiSelector().text("Display Options").className("android.widget.TextView")').click();
        // Seguindo o fluxo o terceiro passo é clicar em Display Options

        await $('id=toggle_navigation').click();
        // Seguindo o fluxo o passo final é clicar em NAVIGATION

        const barraDeNavegacao = await $('android.widget.LinearLayout').isDisplayed();
        expect(barraDeNavegacao).toBe(true);
        // Aqui é verificaado se a Barra de Navegação é visível após clicar no botão NAVIGATION
    });
});