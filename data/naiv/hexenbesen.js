hexenbesen = async () =>
{
    task();
    await saySlow("Dann beginnen wir doch einmal ganz von vorn.");
    await waitForClick();

    await saySlow("Unsere Suchmaske wurde an Position 0 des Textes angelegt.");
    await waitForClick();

    await saySlow("Das Zeichen <e> wird\n mit dem darüberliegenden Zeichen des Textes verglichen.");
    await waitForClick();

    // Zeichen <e> und <H> werden makiert

    await saySlow("Seht genau hin!");
    textSelect([0]);
    searchSelect([0]);
    await waitForClick();

    // Auftreten eines Mismatch, <eng> soll ein nach rechts verschoben werden
    let completed = false;
    while (!completed)
    {

        await saySlow("Die Zeichen <H> und <e> stimmen nicht überein!");
        await waitForClick();

        await saySlow("Immer wenn ein sogenanntes Mismatch auftritt.");
        await waitForClick();

        await saySlow("Muss das Suchmuster\n ein Zeichen weiter nach rechts verschoben werden.");
        await waitForClick();

        await saySlow("Verschiebt nun das Muster nach den Regeln der Naive-Suche.");
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
        await saySlow("Welches Zeichen wird nun mit <e> verglichen?");
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
            move(-jf_index);
            await waitForClick();
        }
        else completed = true;
    }

    await saySlow("Richtig!");
    await waitForClick();

    await saySlow("Oho, wie Ihr seht haben wir ein Match gefunden.");
    await waitForClick();

    await saySlow("Damit kommen wir zum folgenden Schritt.");
    await waitForClick();

    completed = false;
    while (!completed)
    {
        await saySlow("Es werden die Zeichen <x> und <n> mit verglichen.");
        textSelect([1,2]);
        searchSelect([0,1]);
        await waitForClick();

        await saySlow("Leider ist ein erneutes Mismatch aufgetreten.");
        await waitForClick();

        await saySlow("Was geschiet als nächstes?");
        await waitForClick();

        await saySlow("Erinnert Ihr euch daran?");
        await waitForClick();

        await saySlow("Ein Tipp: es muss etwas verschoben werden.");
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
            await saySlow("Immer wenn ein Mismatch aufttrit muss das Suchmuster\n EIN ZEICHEN weiter nach rechts verschoben werden.");
            move(-jf_index);
            move(1);
            await waitForClick();
        }
        else completed = true;
    }

    await saySlow("Ihr werdet immer besser!");
    await waitForClick();

    await saySlow("Das zieht sich wirklich. Dabei hatte wir schon ein Match.");
    await waitForClick();

    completed = false;
    while (!completed)
    {

        await saySlow("Vielleicht solltet Ihr es weiter probieren.")
        await waitForClick();


        await saySlow("Welches Zeichen wird jetzt mit <e> verglichen?");
        textSelectOnClickOn();
        task("Zeichen im Text auswählen");
        await waitForClick();

        task("Zeichen im Text auswählen");
        await waitForClick();

        await saySlow("Sagt, wenn Ihr bereit seid.");
        await waitForKeyPressed("b");
        textSelectOnClickOff();
        task();

        if (lastTextClicked !== 2)
        {
            await saySlow("Wollt Ihr mich ärgern!");
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

    await saySlow("Ich bin stolz auf Euch.");
    await waitForClick();

    completed = false;
    while (!completed) {

        await saySlow("Ihr wisst sicherlich was nun kommt.");
        await waitForClick();
        textSelect([2]);
        enableDragging();
        task("Muster an richtige Stelle verschieben");
        await waitForClick();

        await saySlow("Keine Sorge, ich warte auf Euch.");
        await waitForKeyPressed("b");
        disableDragging();
        task();


        if (jf_index !== 3) {
            await saySlow("Wollt Ihr mich ärgern!");
            await waitForClick();
            await saySlow("Nochmal!");
            move(-jf_index);
            move(2);
            await waitForClick();
        } else completed = true;
    }
    await saySlow("Ich denke Ihr habt nun verstanden wie es geht.");
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

    await saySlow("Na wenn das mal kein Zufall ist..");
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