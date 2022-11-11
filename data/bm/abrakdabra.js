abrakadabra = async () =>
{
    task();
    await saySlow("Ich traue meinen Augen kaum!");
    await waitForClick();

    await saySlow("Gleich zu Beginn ist ein Mismatch aufgetreten.");
    await waitForClick();

    await saySlow("Schärft Euren Blick!");
    textSelect([2]);
    searchSelect([2]);
    await waitForClick();

    let completed = false;
    while (!completed)
    {
        await saySlow("Die Zeichen <r> und <a> stimmen nicht überein!");
        await waitForClick();

        await saySlow("Es muss dafür Sorge getragen werden,", true);
        await saySlow("dass <r> über seinem nächsten Vorkommen in [ada] liegt.");
        await waitForClick();

        await saySlow("Doch vergesst nicht!");
        await waitForClick();

        await saySlow("Lässt sich ein solches nicht mehr finden,", true);
        await saySlow("dann möge [ada] um seine volle Länge verschoben werden.");
        await waitForClick();

        await saySlow("Verschiebt nun das Muster an die richtige Stelle!");
        enableDragging();
        task("Muster an richtige Stelle verschieben");
        await waitForClick();

        await saySlow("Gebt mir ein Zeichen, sobald die Arbeit getan ist.");
        await waitForKeyPressed("b");
        disableDragging();
        task();

        if (jf_index !== 3)
        {
            await saySlow("Ich erkläre es Euch besser noch einmal.");
            move(-jf_index);
            await waitForClick();
        }
        else completed = true;
    }

    await saySlow("Tout à fait correct!");
    await waitForClick();

    completed = false;
    while (!completed)
    {
        textSelect([]);
        await saySlow("Doch könnt Ihr mir auch sagen,", true);
        await saySlow("welches Zeichen als nächstes im Text betrachtet wird?");
        await waitForClick();

        await saySlow("Denkt daran, wie wir begonnen haben!");
        await waitForClick();

        await saySlow("Wählt dieses per Klick aus!");
        textSelectOnClickOn();
        task("Zeichen im Text auswählen");
        await waitForClick();

        await saySlow("Sagt, wenn Ihr bereit seid.");
        await waitForKeyPressed("b");
        textSelectOnClickOff();
        task();

        if (lastTextClicked !== 5)
        {
            await saySlow("Ihr scheint gut im Tippen zu sein ...");
            await waitForClick();
        }
        else completed = true;
    }

    await saySlow("Ihr scheint ein flinker Lerner zu sein!");
    await waitForClick();

    await saySlow("Als ein solcher erkennt Ihr sicherlich,", true);
    await saySlow("dass wir hier ein Match vor Augen haben.");
    await waitForClick();

    await saySlow("Nun achtet aber auf den nächsten Schritt!");
    await waitForClick();

    completed = false;
    while (!completed)
    {
        await saySlow("Der Betrachtung werden <k> und <d> hinzugefügt.");
        textSelect([4,5]);
        searchSelect([1,2]);
        await waitForClick();

        await saySlow("Wie sich unschwer erkennen lässt,", true);
        await saySlow("stimmen die beiden Zeichen nicht überein.");
        await waitForClick();

        await saySlow("Wir rudern also ein wenig zurück und", true);
        await saySlow("betrachten lediglich die bisher passenden beiden.");
        textSelect([5]);
        searchSelect([2]);
        await waitForClick();

        await saySlow("Diese ergeben den String \"a\".");
        await waitForClick();

        await saySlow("Ihr prüft nun im verbleibenden Muster,", true);
        await saySlow("ob \"a\", oder ein Suffix davon, vorkommt.");
        await waitForClick();

        await saySlow("Lässt sich kein weiteres Vorkommen finden,", true);
        await saySlow("dann möge [ada] um seine volle Länge verschoben werden.");
        await waitForClick();

        await saySlow("Könnt Ihr ein solches doch ein zweites Mal erspähen,", true);
        await saySlow("dann verschiebt das Muster entsprechend.", true);
        await waitForClick();

        await saySlow("So denkt an das passende Suffix von \"a\"!");
        await waitForClick();

        await saySlow("Es sollte dann unter seinem Vorkommen", true);
        await saySlow("im betrachteten Teil vom Text liegen.");
        await waitForClick();

        await saySlow("Verschiebt nun das Muster an die richtige Stelle!");
        enableDragging();
        task("Muster an richtige Stelle verschieben");
        await waitForClick();

        await saySlow("Keine Sorge, ich warte auf Euch.");
        await waitForKeyPressed("b");
        disableDragging();
        task();

        if (jf_index !== 5)
        {
            await saySlow("Lasst es mich erneut erklären.");
            move(-jf_index);
            move(3);
            await waitForClick();
        }
        else completed = true;
    }




    // return
    return new Promise(res => setTimeout(res, 50));
}

