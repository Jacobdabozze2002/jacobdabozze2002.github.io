alohomora = async () =>
{
    hidePicture();

    task();
    await saySlow("Das sieht doch gar nicht so schlecht aus.");
    await waitForClick();

    await saySlow("Vielleicht sind wir dieses Mal sogar schneller durch, denn\ndirekt beim ersten Vergleich gab es ein Match!");
    await waitForClick();

    await saySlow("Schaut einmal genauer hin!");
    textSelect([2]);
    searchSelect([2]);
    await waitForClick();

    await saySlow("Die Zeichen stimmen überein!");
    await waitForClick();

    await saySlow("Nun schauen wir, ob auch beim nächsten Vergleich ein\nMatch auftritt.");
    await waitForClick();

    await saySlow("Dazu betrachten wir nun die Buchstaben <l> und <h>.");
    textSelect([1,2]);
    searchSelect([1,2]);
    await waitForClick();

    //Zeichen stimmen nicht überein (l und h)

    await saySlow("Leider ist dem nicht so!");
    await waitForClick();

    await saySlow("Wir müssen wohl oder übel einen Schritt zurückgehen.");
    textSelect();
    searchSelect();
    await waitForClick();

    await saySlow("Die Regeln zum Verschieben sind gar nicht so schwierig.");
    await waitForClick();

    await saySlow("Das Zeichen <o> muss über seinem nächsten Vorkommen\nin [oho] liegen.");
    await waitForClick();

    await saySlow("Sollte <o> kein zweites Mal vorkommen, dann verschieben\nwir [oho] um seine volle Länge.");
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

            await saySlow("Nur wenn das zu vergleichende Zeichen <o> nicht noch\neinmal vorkommt, wird es um seine volle Länge verschoben.");
            await waitForClick();

            await saySlow("Was ist dementsprechend zu tun, sollte das Zeichen\nvorher erneut vorkommen?");
            await waitForClick();
        }
        else completed = true;
    }

    await saySlow("Ausgezeichnet! Als hättet Ihr nie etwas anderes gemacht.");
    await waitForClick();

    await saySlow("Der Buchstabe <o> kam noch einmal vor.");
    await waitForClick();

    completed = false;
    while (!completed) {
        await saySlow("Dann zeigt doch mal, welches Zeichen im Text als\nNächstes verglichen wird.");
        textSelectOnClickOn();
        task("Zeichen im Text auswählen");
        await waitForClick();

        await saySlow("Lasst Euch ruhig Zeit.");
        await waitForKeyPressed("b");
        textSelectOnClickOff();
        task();

        //Nutzer klickt <h> aus dem zu untersuchenden Text aus [3], warten bis "b" gedrückt wurde
        if (lastTextClicked !== 3) {
            //falls falsch
            await saySlow("Das war leider das falsche Zeichen.");
            textSelect();
            await waitForClick();

            await saySlow("Schaut noch mal einmal genauer hin.");
            await waitForClick();

            // beide o´s nochmal markieren?
            textSelect([4]);
            searchSelect([2]);

            await saySlow("Soeben hatten wir ein Match.");
            await waitForClick();

            await saySlow("Es muss also weiter verglichen werden und wie Ihr wisst\nvon rechts nach links.");
            await waitForClick();
        }
        else completed = true;
    }
    //falls korrekt
    await saySlow("Das war hervorragend!");
    await waitForClick();

    await saySlow("Ich wusste doch, dass ich den Richtigen zu meinem Schüler\nmachte.");
    await waitForClick();

    await saySlow("Dazu kam es scheinbar zu einem weiteren Match.");
    textSelect();
    searchSelect();
    await waitForClick();

    await saySlow("Betrachtet nun noch die letzte Stelle.");
    //Text <o> [2] und Muster <o> [0] hervorheben
    textSelect([2]);
    searchSelect([0]);
    await waitForClick();

    completed = false;
    while (!completed) {
        await saySlow("Nun beantwortet mir meine Frage:\nIst auch der dritte Vergleich ein Match?");
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
            await waitForClick();

            await saySlow("Es werden das dritte Zeichen des Textes und das erste\nZeichen des Suchmusters verglichen.");
            await waitForClick();

            await saySlow("Probiert es also erneut.");
            await waitForClick();
        }
        else completed = true;
    }
    //falls korrekt
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
