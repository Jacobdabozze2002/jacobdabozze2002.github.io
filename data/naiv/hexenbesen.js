hexenbesen = async () =>
{
    task();
    await saySlow("Beginnen wir!");
    await waitForClick();

    await saySlow("Wie ihr seht ist gleich am Anfang ein Mismatch aufgetreten.");
    await waitForClick();

    // Zeichen <e> und <H> werden makiert

    await saySlow("Seht genau hin.");
    textSelect([0]);
    searchSelect([0]);
    await waitForClick();

    // Auftreten eines Mismatch, <eng> soll ein nach rechts verschoben werden
    let completed = false;
    while (!completed)
    {

        await saySlow("Die Zeichen <H> und <e> stimmen nicht überein!");
        await waitForClick();

        await saySlow("Immer wenn ein Mismatch aufttrit muss [enb]\n ein Zeichen weiter nach rechts verschoben werden.");
        await waitForClick();

        await saySlow("Verschiebt nun das Muster den Regeln entsprechend!");
        enableDragging();
        task("Muster an richtige Stelle verschieben");
        await waitForClick();

        await saySlow("Gebt mir Bescheid, sobald die Arbeit getan ist.");
        await waitForKeyPressed("b");
        disableDragging();
        task();

        if (jf_index !== 1)
        {
            await saySlow("Nein, nein, nein versucht es nochmal.");
            move(-jf_index);
            await waitForClick();
        }
        else completed = true;



    }

    await saySlow("Hervorragend!");
    await waitForClick();

    // Zeichen <e> soll im Text ausgewählt werden

    completed = false;
    while (!completed)
    {
        textSelect([0]);
        await saySlow("Nach der Regel müsste jetzt welches Zeichen über <e> stehen.");
        textSelectOnClickOn();
        task("Zeichen im Text auswählen");
        await waitForClick();

        await saySlow("Sagt, wenn Ihr bereit seid.");
        await waitForKeyPressed("b");
        textSelectOnClickOff();
        task();

        if (lastTextClicked !== 1)
        {
            await saySlow("Ich zweifel langsan an eurer Intelligenz.");
            await waitForClick();
        }
        else completed = true;
    }

    await saySlow("Richtig!");
    await waitForClick();

    await saySlow("Oho, wie ihr seht haben wir ein Match gefunden.");
    await waitForClick();

    await saySlow("Damit kommen wir zum folgenden Schritt.");
    await waitForClick();

    completed = false;
    while (!completed)
    {
        await saySlow("Es werden die Zeichen <x> und <n> mit herbeigezogen.");
        textSelect([1,2]);
        searchSelect([0,1]);
        await waitForClick();

        await saySlow("Leider ist ein weiteres Mismatch aufgetreten.");
        await waitForClick();

        await saySlow("Da die weitern Zeichen nicht übereinstimmen.");
        await waitForClick();

        await saySlow("Müsste was passieren? ");
        textSelect([1]);
        searchSelect([0]);
        enableDragging();
        task("Muster an richtige Stelle verschieben");
        await waitForClick();

        await saySlow("Keine Sorge, ich warte auf Euch.");
        await waitForKeyPressed("b");
        disableDragging();
        task();

        if (jf_index !== 2)
        {   await saySlow("Denkt dran!");
            await waitForClick();
            await saySlow("Immer wenn ein Mismatch aufttrit muss [enb]\n EIN ZEICHEN weiter nach rechts verschoben werden.");
            move(-jf_index);
            move(1);
            await waitForClick();
        }
        else completed = true;
    }

    await saySlow("Ihr werdet immer besser!");
    await waitForClick();

    completed = false;
    while (!completed)
    {

        await saySlow("Nach der Regel müsste jetzt welches Zeichen über <e> stehen.");
        textSelectOnClickOn();
        task("Zeichen im Text auswählen");
        await waitForClick();

        await saySlow("Sagt, wenn Ihr bereit seid.");
        await waitForKeyPressed("b");
        textSelectOnClickOff();
        task();

        if (lastTextClicked !== 2)
        {
            await saySlow("Wollt ihr mich ärgern!");
            await waitForClick();
        }
        else completed = true;
    }

    await saySlow("Nicht schlecht!");
    await waitForClick();

    await saySlow("Kommen wir zum nächsten Teil.");
    await waitForClick();

    completed = false;
    while (!completed)
    {
        await saySlow("Handelt es sich hierbei um ein Match?");
        await waitForClick();

        await saySlow("Ja oder nein?");
        task("mit \"ja\" oder \"nein\" antworten")
        await waitFor1of2KeysPressed(["j","n"]);
        task();

        if (lastKeyPressed !== "n")
        {
            await saySlow("Ihr habt einen weiteren Versuch");
            await waitForClick();
        }
        else completed = true;
    }

    await saySlow("Ha ha ha! ");
    await waitForClick();

    await saySlow("Ich bin stolz auf euch.");
    await waitForClick();

    await saySlow("Ihr wisst sicherlich auch,\nwelche Frage wir uns als nächstes stellen.");
    await waitForClick();
    textSelect([2]);


    completed = false;
    while (!completed) {

        await saySlow("Ihr wisst sicher was jetzt passiert");
        enableDragging();
        task("Muster an richtige Stelle verschieben");
        await waitForClick();

        await saySlow("Keine Sorge, ich warte auf Euch.");
        await waitForKeyPressed("b");
        disableDragging();
        task();


        if (jf_index !== 3) {
            await saySlow("Wollt ihr mich ärgern!");
            await waitForClick();
            await saySlow("Nochmal!");
            move(-jf_index);
            move(2);
            await waitForClick();
        } else completed = true;
    }
    await saySlow("Ich denke ihr habt nun verstanden wie es geht.");
    await waitForClick();

    await saySlow("Wir haben es fast geschaft!");
    await waitForClick();

    await saySlow("Ein leztes mal noch.");
    await waitForClick();



    completed = false;
    while (!completed)
    {
        textSelect([2]);
        await saySlow("Welches Zeichen steht über <e>.");
        textSelectOnClickOn();
        task("Zeichen im Text auswählen");
        await waitForClick();

        await saySlow("Sagt, wenn Ihr bereit seid.");
        await waitForKeyPressed("b");
        textSelectOnClickOff();
        task();

        if (lastTextClicked !== 3)
        {
            await saySlow("Ich zweifel langsan an eurer Intelligenz.");
            await waitForClick();
        }
        else completed = true;
    }

    await saySlow("Richtig!");
    await waitForClick();

    await saySlow("Was haben wir den hier?");
    textSelect([3,4]);
    searchSelect([0,1]);
    await waitForClick();

    await saySlow("und oho seht mal.");
    textSelect([3,4,5]);
    searchSelect([0,1,2]);
    await waitForClick();

    await saySlow("Was denkt ihr?");
    await waitForClick();



    completed = false;
    while (!completed)
    {

        await saySlow("Ist dies das gesuchte Wort?");
        await waitForClick();

        await saySlow("Ja oder nein?");
        task("mit \"ja\" oder \"nein\" antworten")
        await waitFor1of2KeysPressed(["j","n"]);
        task();

        if (lastKeyPressed !== "j")
        {
            await saySlow("DAS KANN DOCH NICHT DEIN ERNST SEIN!!!!!!");
            await waitForClick();
        }
        else completed = true;
    }

    await saySlow("Ihr habt euch gut geschlagen.");
    await waitForClick();

    // return to main
    return new Promise(res => setTimeout(res, 50));


}