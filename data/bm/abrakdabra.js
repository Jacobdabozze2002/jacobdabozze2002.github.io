abrakadabra = async () =>
{
    task();
    await saySlow("Oho?!");
    await waitForClick();

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

        await saySlow("Es muss dafür Sorge getragen werden,\ndass <r> über seinem nächsten Vorkommen in [ada] liegt.");
        await waitForClick();

        await saySlow("Lässt sich kein zweites Vorkommen von <r> finden,\ndann möge [ada] um seine volle Länge verschoben werden.");
        await waitForClick();

        await saySlow("Verschiebt nun das Muster den Regeln entsprechend!");
        enableDragging();
        task("Muster an richtige Stelle verschieben");
        await waitForClick();

        await saySlow("Gebt mir Bescheid, sobald die Arbeit getan ist.");
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
        textSelect([2]);
        await saySlow("Doch könnt Ihr mir auch sagen,\nwelches Zeichen als nächstes im Text betrachtet wird?");
        await waitForClick();

        await saySlow("Denkt einmal ganz scharf nach!");
        await waitForClick();

        await saySlow("Erinnert Ihr Euch noch daran,\nwie wir zu Beginn verglichen haben?");
        await waitForClick();

        await saySlow("So wählt den Buchstaben im Text,\nwelchen wir <a> als nächstes gegenüberstellen!");
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

    await saySlow("Als ein solcher erkennt Ihr sicherlich,\ndass wir hier ein Match vor Augen haben.");
    await waitForClick();

    await saySlow("Nun achtet aber auf die folgenden Schritte!");
    await waitForClick();

    completed = false;
    while (!completed)
    {
        await saySlow("Der Betrachtung werden <k> und <d> hinzugefügt.");
        textSelect([4,5]);
        searchSelect([1,2]);
        await waitForClick();

        await saySlow("Wie sich unschwer erkennen lässt,\nstimmen die beiden Buchstaben nicht überein.");
        await waitForClick();

        await saySlow("Wir rudern also ein wenig zurück\nund fassen lediglich die bisher passenden zusammen.");
        textSelect([5]);
        searchSelect([2]);
        await waitForClick();

        await saySlow("Diese ergeben den String \"a\".");
        await waitForClick();

        await saySlow("Im verbleibenden Muster ist nun zu prüfen,\nob ein Suffix von \"a\" erneut vorkommt.");
        await waitForClick();

        await saySlow("Lässt sich kein weiteres Vorkommen finden,\ndann möge [ada] um seine volle Länge verschoben werden.");
        await waitForClick();

        await saySlow("Doch könnt Ihr ein weiteres Suffix des Strings ausmachen,\ndann bewegt das Muster derlei:");
        await waitForClick();

        await saySlow("Das zweite Suffix von \"a\" sollte unter\n seinem Vorkommen im markierten Teil vom Text liegen.");
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

    await saySlow("Zu wissen, was man weiß und zu wissen,\nwas man tut, das ist Wissen!");
    await waitForClick();

    await saySlow("Ihr liegt wieder einmal völlig richtig!");
    await waitForClick();

    await saySlow("Daher erahnt Ihr sicherlich auch,\nwelche Frage wir uns als nächstes stellen.");
    await waitForClick();
    textSelect([7]);

    completed = false;
    while (!completed)
    {
        await saySlow("Handelt es sich hierbei um ein Match?");
        await waitForClick();

        await saySlow("Ja oder nein?\nSo schwer kann das doch nicht sein!");
        task("mit \"ja\" oder \"nein\" antworten")
        await waitFor1of2KeysPressed(["j","n"]);
        task();

        if (lastKeyPressed !== "j")
        {
            await saySlow("Denkt einmal etwas schärfer nach!");
            await waitForClick();
        }
        else completed = true;
    }

    await saySlow("Ich irrte mich nicht, als ich mich dazu entschloss,\nEuch zu meinem Lehrling zu machen!");
    await waitForClick();

    await saySlow("Wir sind kurz vor dem großen Fund!");
    await waitForClick();

    await saySlow("Denn so seht doch nur hier ...");
    textSelect([6,7]);
    searchSelect([1,2]);
    await waitForClick();

    completed = false;
    while (!completed)
    {
        await saySlow("... und seht doch nur da!");
        textSelect([5,6,7]);
        searchSelect([0,1,2]);
        await waitForClick();

        await saySlow("Ist es nicht mehr als offensichtlich?");
        await waitForClick();

        await saySlow("Im Text muss nun ein weiteres Zeichen markiert werden.");
        await waitForClick();

        await saySlow("Ha ha ha ha!");
        await waitForClick();

        await saySlow("Zweifelt Ihr etwa?");
        await waitForClick();

        await saySlow("Wählt dieses Zeichen mit einem Klick.");
        textSelectOnClickOn([5,6,7]);
        task("Zeichen im Text auswählen");
        await waitForClick();

        await saySlow("Ich warte, während Ihr wankt!");
        await waitForKeyPressed("b");
        textSelectOnClickOff();
        task();

        if (![5,6,7].includes(lastTextClicked))
        {
            textSelect([6,7]);
            searchSelect([1,2]);
            await saySlow("Leichtgläubig seid Ihr!");
            await waitForClick();

            await saySlow("Mir verbleibt dazu nur zu sagen:");
            await waitForClick();

            await saySlow("So seht doch nur hier ...");
            textSelect([6,7]);
            searchSelect([1,2]);
            await waitForClick();

            lastTextClicked = 5;
        }
        else completed = true;
    }

    await saySlow("Einen Schüler wie euch hat man nicht alle Tage!");
    await waitForClick();

    await saySlow("Ihr erkanntet nicht nur meine List,\nsondern konntet auch das Muster finden!");
    await waitForClick();

    await saySlow("Ich kann wahrlich stolz auf Euch sein!");
    await waitForClick();

    // return to main
    return new Promise(res => setTimeout(res, 50));
}

