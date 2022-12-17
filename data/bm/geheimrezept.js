geheimrezept = async () =>
{

    hidePicture();

    task();
    await saySlow("Das sieht doch gar nicht so schlecht aus!");
    await waitForClick();

    await saySlow("Vielleicht kommen wir dieses Mal sogar schneller durch,\ndenn direkt beim ersten Vergleich gibt es ein Match!");
    await waitForClick();

    await saySlow("Schaut einmal genauer hin!");
    textSelect([3]);
    searchSelect([3]);
    await waitForClick();

    await saySlow("Die Zeichen stimmen überein!");
    await waitForClick();

    await saySlow("Nun schauen wir, ob auch beim nächsten\nVergleich ein Match auftritt.");
    await waitForClick();

    await saySlow("Dazu betrachten wir nun die Buchstaben <h> und <z>.");
    textSelect([2,3]);
    searchSelect([2,3]);
    await waitForClick();

    //Zeichen stimmen nicht überein (l und h)

    await saySlow("Leider ist dem nicht so, die Zeichen stimmen nicht überein!");
    await waitForClick();

    await saySlow("Wir müssen wohl oder übel einen Schritt zurückgehen.");
    textSelect([3]);
    searchSelect([3]);
    await waitForClick();

    await saySlow("Die Regeln zum Verschieben sind gar nicht so schwierig.");
    await waitForClick();

    await saySlow("Das Zeichen <e> muss über seinem nächsten Vorkommen\nin [reze] liegen.");
    await waitForClick();

    await saySlow("Sollte <e> kein zweites Mal vorkommen, dann verschieben\nwir [reze] um seine volle Länge.");
    await waitForClick();

    let completed = false;
    while (!completed) {

        await saySlow("Dann verschiebt doch einmal das Muster.");
        enableDragging();
        task("Muster an die richtige Stelle verschieben");
        await waitForClick();

        await saySlow("Sagt mir Bescheid, wenn Ihr fertig seid.");
        await waitForKeyPressed("b");
        disableDragging();
        task();

        if (jf_index !== 2) {
            await saySlow("Denkt noch einmal nach.");
            move(-jf_index);
            await waitForClick();

            await saySlow("Nur wenn das zu vergleichende Zeichen <e> nicht noch\neinmal vorkommt, wird es um seine volle Länge verschoben.");
            await waitForClick();

            await saySlow("Was ist dementsprechend zu tun, sollte das Zeichen\nvorher erneut vorkommen?");
            await waitForClick();
        }
        else completed = true;
    }

    searchSelect([3]);

    await saySlow("Ausgezeichnet! Als hättet Ihr nie etwas anderes gemacht.");
    await waitForClick();

    await saySlow("Der Buchstabe <e> kam ein zweites Mal vor.");
    await waitForClick();

    completed = false;
    while (!completed) {
        await saySlow("Dann zeigt doch mal, welches Zeichen im Text als\nNächstes verglichen wird.");
        textSelect();
        textSelectOnClickOn();
        task("Zeichen im Text auswählen");
        await waitForClick();

        await saySlow("Lasst Euch ruhig Zeit.");
        await waitForKeyPressed("b");
        textSelectOnClickOff();
        task();

        //Nutzer klickt <m> aus dem zu untersuchenden Text aus [5], warten bis "b" gedrückt wurde
        if (lastTextClicked !== 5) {
            //falls falsch
            await saySlow("Das war leider falsch geraten.");
            await waitForClick();

            await saySlow("Überlegt ein weiteres Mal.");
            await waitForClick();

            await saySlow("Welches Zeichen wird <e> als nächstes gegenübergestellt?");
            await waitForClick();
        }
        else completed = true;
    }
    //falls korrekt
    await saySlow("Das war hervorragend!");
    await waitForClick();

    await saySlow("Ich wusste doch, dass ich den Richtigen zu meinem Schüler\nmachte.");
    await waitForClick();

    await saySlow("Doch leider ist das kein Match.");
    searchSelect([3]);
    await waitForClick();

    await saySlow("Ihr müsst das Muster wohl erneut verschieben.");
    await waitForClick();

    await saySlow("Erinnert Ihr Euch noch an die Regeln?");
    await waitForClick();

    await saySlow("Kleiner Tipp: Ihr müsst schauen,\nob das Zeichen <m> ein weiteres Mal in <reze> vorkommt.");
    await waitForClick();

    completed = false;
    while (!completed) {
        await saySlow("Dann zeigt mir Euer Können!");
        await waitForClick();

        await saySlow("Verschiebt das Muster an die richtige Stelle.");
        enableDragging();
        task("Muster an die richtige Stelle verschieben");
        await waitForClick();

        await saySlow("Lasst Euch nicht hetzen.");
        await waitForKeyPressed("b");
        disableDragging();
        task();

        if (jf_index !== 6) {
            await saySlow("Und das ist nicht korrekt!");
            move(-jf_index + 2);
            await waitForClick();

            await saySlow("Ich weiß, es scheint zuerst schwer, aber das ist es nicht.");
            await waitForClick();

            await saySlow("Nun hört mir zu!");
            await waitForClick();

            await saySlow(" Ich werde es Euch noch einmal erklären.");
            await waitForClick();

            await saySlow("Wenn <m> nicht wieder in [reze] vorkommt,\nwird das Muster um seine volle Länge verschoben.");
            await waitForClick();

            await saySlow("Dann probiert es sogleich nochmal!");
            await waitForClick();
        }
        else completed = true;
    }

    await saySlow("Ihr müsst wahrlich ein Naturtalent sein!");
    await waitForClick();

    completed = false;
    while (!completed) {
        textSelect([9]);
        await saySlow("Nun beantwortet mir meine Frage:\nGibt es diesesmal ein Match?");
        await waitForClick();

        await saySlow("Ja oder Nein? So schwer ist das nicht.");
        task("mit \"ja\" oder \"nein\" antworten")
        await waitFor1of2KeysPressed(["j", "n"]);
        task();
        //warten auf Eingabe "J" für Ja oder "N" für Nein --> J ist die Richtige Wahl

        //falls falsch
        if (lastKeyPressed !== "j") {
            await saySlow("Das war leider falsch geraten...");
            await waitForClick();

            await saySlow("Schaut doch genau hin!");
            textSelect([9]);
            searchSelect([3]);
            await waitForClick();

            await saySlow("Es werden das zehnte Zeichen des Textes und das vierte\nZeichen des Suchmusters verglichen.");
            await waitForClick();

            await saySlow("Probiert es also erneut.");
            await waitForClick();
        }
        else completed = true;
    }
    //falls korrekt

    await saySlow("Ihr habt Recht!");
    await waitForClick();

    await saySlow("Wir haben erneut ein Match gefunden.");
    await waitForClick();

    await saySlow("Nun schauen wir, ob auch der nächste Vergleich ein Match ist.");
    textSelect([8,9]);
    searchSelect([2,3]);
    await waitForClick();

    await saySlow("Wir haben ein zweites Match gefunden!");
    await waitForClick();

    await saySlow("Und hier ist auch schon unser drittes!");
    textSelect([7,8,9]);
    searchSelect([1,2,3]);
    await waitForClick();

    completed = false;
    while (!completed) {
        await saySlow("Ist der letzte Vergleich ebenfalls eines?");
        await waitForClick();

        await saySlow("Beantwortet mir meine Frage mit Ja oder Nein.");
        task("mit \"ja\" oder \"nein\" antworten")
        await waitFor1of2KeysPressed(["j", "n"]);
        task();
        //warten auf Eingabe "J" für Ja oder "N" für Nein --> J ist die Richtige Wahl

        //falls falsch
        if (lastKeyPressed !== "j") {
            await saySlow("Habt Ihr denn nicht aufgepasst?");
            await waitForClick();

            await saySlow("Öffnet Eure Augen!");
            textSelect([6,7,8,9]);
            searchSelect([0,1,2,3]);
            await waitForClick();

            await saySlow("Und jetzt beantwortet mir meine Frage erneut.");
            await waitForClick();
        }
        else completed = true;
    }

    await saySlow("Und das ist...");
    await waitForClick();

    await saySlow("RICHTIG! Wundervoll und damit ist es geschafft!");
    textSelect();
    searchSelect();
    await waitForClick();

    await saySlow("Ihr habt wahrlich Köpfchen bewiesen.");
    await waitForClick();

    // return to main
    return new Promise(res => setTimeout(res, 50));
}