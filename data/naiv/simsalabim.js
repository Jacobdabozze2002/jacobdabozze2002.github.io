simsalabim = async () =>
{
    task();
    await saySlow("Na dann fangen wir doch einfach mal an.");
    await waitForClick();

    await saySlow("Unsere Suchmaske wurde bereits richtig angelegt.");
    await waitForClick();

    await saySlow("Doch wie es scheint, gibt es direkt ein Mismatch.");

// Text [0] und Suchmuster [0] hervorheben
    textSelect([0]);
    searchSelect([0]);
    await waitForClick();

    await saySlow("Die Zeichen <S> und <a> stimmen nicht überein.");
    await waitForClick();

    await saySlow("Immer wenn ein sogenanntes Mismatch auftritt.");
    await waitForClick();

    await saySlow("Muss das Suchmuster\n ein Zeichen weiter nach rechts verschoben werden.");
    await waitForClick();

    await saySlow("Beim ersten Mal werde ich es Euch noch einmal zeigen.");
    await waitForClick();

    await saySlow("Schaut genau hin!");
    await waitForClick();

//Verschiebe Muster automatisch um eins
    move(1);

    await saySlow("Leider ist wieder ein Mismatch aufgetreten.");
    textSelect([1]);
    await waitForClick();

    await saySlow("Lasst uns doch einmal testen, ob Ihr gut aufgepasst habt?");
    await waitForClick();

    let completed = false;
    while (!completed)
    {

        await saySlow("Verschiebt nun das Suchmuster\nan die nächste zu vergleichende Stelle.");
//verschieben ermöglichen
        enableDragging();
        task("Muster an die richtige Stelle verschieben");
        await waitForClick();

        await saySlow("Gebt Bescheid, wenn Ihr bereit seid.");
        await waitForKeyPressed("b");
        disableDragging();
        task();

        if (jf_index !== 2) {
            await saySlow("Waren Euch die Regeln doch nicht ganz klar?");
            await waitForClick();

            await saySlow("Macht Euch keinen Kopf.\n Es ist noch kein Meister vom Himmel gefallen.");
            await waitForClick();

            await saySlow("Bedenkt, dass bei der Naiven Suche\njedes Zeichen verglichen wird.");
            await waitForClick();

            await saySlow("Probiert es einfach nochmal!");
            await waitForClick();
            move(-jf_index);
            move(1);
            await waitForClick();
        }

        else completed = true;
    }

    //RICHTIG: Muster wurde um ein Zeichen verschoben (verglichen werden nun a und m)

    await saySlow("Ich hätte nichts anderes von meinem Schüler erwartet!");
    await waitForClick();

    await saySlow("Das habt Ihr gut gemacht!");
    await waitForClick();

    await saySlow("Doch schauen wir einmal genauer hin.")
//Text[2] und Suchmuster[0] hervorheben
    textSelect([2]);
    searchSelect([0]);
    await waitForClick();

    await saySlow("Scheinbar haben wir kein Match gefunden.");
    await waitForClick();

    await saySlow("Doch verzagt nicht - verschiebt es einfach erneut.");
    await waitForClick();

    completed = false;
    while (!completed) {
        await saySlow("Dann beweist mir, dass das eben nicht nur Glück war.");
        await waitForClick();

        await saySlow("Verschiebt das Muster erneut.");
//Verschieben ermöglichen und auf b warten
        enableDragging();
        task("Muster an die richtige Stelle verschieben");
        await waitForClick();

        await saySlow("Sagt, wenn Ihr fertig seid.");
        await waitForKeyPressed("b");
        disableDragging();
        task();

        //FALSCH: Um mehr als ein Zeichen verschoben
        if (jf_index !== 3) {
            await saySlow("Ich bin nicht sauer...");
            await waitForClick();

            await saySlow("...nur enttäuscht.");
            await waitForClick();

            await saySlow("Also war es eben doch nur Glück.");
            await waitForClick();

            await saySlow("Denkt noch einmal nach.");
            await waitForClick();

            await saySlow("Ich weiß, es ist zeitaufwändig.");
            await waitForClick();

            await saySlow("Dennoch müssen wir jedes Zeichen vergleichen.");
            await waitForClick();

            await saySlow("Versucht es am besten gleich noch einmal!");
            move(-jf_index);
            move(2);
            await waitForClick();
        }
        else completed = true;
    }
    await saySlow("Ihr habt den Dreh raus!");
    await waitForClick();

    await saySlow("Immer noch kein Match gefunden.");
    textSelect([3]);
    await waitForClick();

    await saySlow("Versuchen wir es weiter.");
    await waitForClick();

    completed = false;
    while (!completed) {

        await saySlow("Verschiebt das Muster erneut.");
        enableDragging();
        task("Muster an die richtige Stelle verschieben");
        await waitForClick();

        await saySlow("Sagt, wenn Ihr fertig seid.");
        await waitForKeyPressed("b");
        disableDragging();
        task();

        //FALSCH: Um mehr als ein Zeichen verschoben
        if (jf_index !== 4) {
            await saySlow("Ich zweifele langsam an Eurer Intelligenz.");
            await waitForClick();

            await saySlow("Ihr müsst jedes Zeichen vergleichen.");
            await waitForClick();

            await saySlow("Versucht es noch einmal!");
            move(-jf_index);
            move(3);
            await waitForClick();
        } else completed = true;
    }


//RICHTIG: Das Muster um eins verschoben (Verglichen werden nun a und a)

    await saySlow("Ich merke, Ihr habt es wirklich verstanden!");
    await waitForClick();

    completed = false;
    while (!completed)
    {
        await saySlow("Wie sieht es aus? Gibt es jetzt ein Match?");
        textSelect([4]);

//warten bis J oder N gedrückt wurde

        task("mit \"ja\" oder \"nein\" antworten")
        await waitFor1of2KeysPressed(["j","n"]);
        task();

        if (lastKeyPressed !== "j")
        {
            //FALSCH: N wurde gedrückt
            await saySlow("Das ist leider falsch.");
            await waitForClick();

            await saySlow("Probiert es einfach erneut.");
            move(-jf_index);
            move(4);
            await waitForClick();
        }
        else completed = true;
    }

//RICHTIG: J wurde gedrückt
    await saySlow("Exakt!");
    await waitForClick();

    await saySlow("Endlich haben wir ein Match gefunden!");
    await waitForClick();

    completed = false;
    while (!completed)
    {
        await saySlow("Welches Zeichen wird nun mit <b> verglichen?");
        textSelect([4]);
        searchSelect([0,1]);
        textSelectOnClickOn([4]);
        task("Zeichen im Text auswählen");
        await waitForClick();

        await saySlow("Sagt, wenn Ihr bereit seid.");
        await waitForKeyPressed("b");
        textSelectOnClickOff();
        task();

        if (lastTextClicked !== 5)
        {
            await saySlow("Da liegt Ihr leider falsch.");
            await waitForClick();

            await saySlow("Eben haben wir die Zeichen <a> und <a> verglichen\n und somit ein Match gefunden.");
            await waitForClick();

            await saySlow("Wenn wir von Links nach Rechts überprüfen,\n welche Zeichen werden dann wohl als nächstes verglichen?");
            move(-jf_index);
            move (4)
            await waitForClick();
        }
        else completed = true;
    }

    await saySlow("Seht Ihr, Ihr schafft das auch ohne mich.");
    await waitForClick();


    await saySlow("Sehr gut!");
    await waitForClick();

    await saySlow(" Doch leider stimmen <b> und <l> nicht überein.");
    await waitForClick();

    await saySlow("Ich hab es Euch einmal verschoben.");
    searchSelect([0]);
    move(1);
    await waitForClick();

    await saySlow("Ab hier übernehmt Ihr aber wieder.");
    await waitForClick();

    completed = false;
    while (!completed)
    {
        await saySlow("Wie sieht es aus? Gibt es jetzt ein Match?");
        textSelect([5]);

//warten bis J oder N gedrückt wurde

        task("mit \"ja\" oder \"nein\" antworten")
        await waitFor1of2KeysPressed(["j","n"]);
        task();

        if (lastKeyPressed !== "n")
        {

            await saySlow("Das ist leider falsch.");
            await waitForClick();

            await saySlow("Wir haben es eben doch schon einmal gemacht.");
            await waitForClick();

            await saySlow("Ein Match ist es nur, wenn beide Zeichen übereinstimmen.");
            move(-jf_index);
            move([5]);
            await waitForClick();

        }
        else completed = true;
    }

    await saySlow("Sehr gut!");
    await waitForClick();

    await saySlow(" Wobei es natürlich schade ist,\n dass wir kein Match finden konnten.");
    await waitForClick();

    completed = false;
    while (!completed) {

        await saySlow("Verschiebt nun erneut das Suchmuster.");
        enableDragging();
        task("Muster an die richtige Stelle verschieben");
        await waitForClick();

        await saySlow("Ich bin bereit, wenn Ihr es seid!");
        await waitForKeyPressed("b");
        disableDragging();
        task();

        //FALSCH: Um mehr als ein Zeichen verschoben
        if (jf_index !== 6) {
            await saySlow("Denkt noch einmal nach.");
            await waitForClick();

            await saySlow("Habt Ihr nicht genau hingeschaut?");
            await waitForClick();

            await saySlow("Wir machen das doch nun schon das dritte Mal.");
            await waitForClick();

            await saySlow("Ihr dürft kein Zeichen überspringen!");
            await waitForClick();

            await saySlow("Gleich noch einmal!");
            move(-jf_index);
            move(5);
            await waitForClick();
        } else completed = true;
    }

    await saySlow("Seht Ihr? So schwer ist das gar nicht.");
    await waitForClick();

    await saySlow("Was haben wir denn hier?");
    textSelect([6]);
    searchSelect([0]);
    await waitForClick();

    await saySlow("Na wenn das mal kein Zufall ist.");
    textSelect([6,7,]);
    searchSelect([0,1,]);
    await waitForClick();

    await saySlow("Drei nacheinander. Sehr schön!");
    textSelect([6,7,8]);
    searchSelect([0,1,2]);
    await waitForClick();

    await saySlow("Was denkt Ihr?");
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
            await saySlow("DAS KANN DOCH NICHT EUER ERNST SEIN!!!!!!");
            await waitForClick();
        }
        else completed = true;
    }

    await saySlow("Ihr habt Euch gut geschlagen.");
    await waitForClick();

// return to main
    return new Promise(res => setTimeout(res, 50));

}