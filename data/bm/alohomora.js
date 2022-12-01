alohomora = async () =>
{
    task();
    await saySlow("Das sieht doch gar nicht so schlecht aus.");
    await waitForClick();

    await saySlow("Vielleicht sind wir dieses Mal sogar schneller durch,\ndenn direkt beim ersten Vergleich gab es ein Match!");
    await waitForClick();

    await saySlow("Schau einmal genauer hin!");
    textSelect([2]);
    searchSelect([2]);
    await waitForClick();

    await saySlow("Die Zeichen stimmen überein!");
    await waitForClick();

    await saySlow("Nun schauen wir doch einmal,\nob auch beim nächsten Vergleich ein Match auftritt.");
    await waitForClick();

    await saySlow("Dazu betrachten wir nun die Buchstaben <l> und <h>.");
    textSelect([1,2]);
    searchSelect([1,2]);
    await waitForClick();

    //Zeichen stimmen nicht überein (l und h)

    await saySlow("So ein Mist!");
    await waitForClick();

    await saySlow("Leider scheinen diese beiden nicht zusammen zu passen.");
    await waitForClick();

    await saySlow("Wir müssen wohl wieder einen Schritt zurückgehen.");
    await waitForClick();

    await saySlow("Verschiebe das Muster doch einmal zu der nächsten zu vergleichenden Stelle");
    await waitForClick();

    await saySlow("Dafür prüfen wir, ob ein Suffix von \"o\" noch einmal vorkommt.");
    await waitForClick();

    await saySlow("Sollten wir kein weiteres Vorkommen finden, dann wird [oho] um seine volle Länge verschoben.");
    await waitForClick();

    await saySlow("Dann verschieb doch einmal das Muster");
    await waitForClick();

    await saySlow("Sag mir Bescheid, wenn du fertig bist");

    //Muster verschieben aktivieren, warten bis Taste "b" gedrückt wurde, richtig: Muster bis nach o verschieben [4]

    //falls falsch
    await saySlow("Denk noch einmal nach.");
    await waitForClick();

    await saySlow("Sollte das zu vergleichende Zeichen nicht noch einmal vorkommen, wird es um seine volle Länge verschoben.");
    await waitForClick();

    await saySlow("Was ist also zu tun, wenn das Zeichen doch vorher erneut vorkommt?");
    await waitForClick();

    //return zu Aufgabe

    //falls korrekt
    await saySlow("Ausgezeichnet! Als hättest du nie etwas anderes gemacht.");
    await waitForClick();

    await saySlow("Der zuvor schon einmal zu vergleichende Buchstabe <o> kam noch einmal vor.");
    await waitForClick();

    await saySlow("Dann zeig doch mal, welches Zeichen als nächstes verglichen wird.");
    await waitForClick();

    await saySlow("Lass dir ruhig Zeit.");

    //Nutzer klickt <h> aus dem zu untersuchenden Text aus [3], warten bis "b" gedrückt wurde

    //falls falsch
    await saySlow("Das war leider das falsche Zeichen.");
    await waitForClick();

    await saySlow("Schau nochmal genauer hin.");
    await waitForClick();
    // beide o´s nochmal markieren?
    await saySlow("Soeben hatten wir ein Match. Wir müssen also weiter vergleichen und wie du weißt vergleichen wir von rechts nach links.");
    await waitForClick();
    //return zu Aufgabe

    //falls korrekt
    await saySlow("Das war hervorragend. Ich wusste doch, dass ich den richtigen zu meinem Schüler machte.");
    await waitForClick();

    await saySlow("Dazu kommt noch, dass es scheinbar wieder ein Match ist.");
    await waitForClick();

    await saySlow("Also betrachten wir nun noch die letzte Stelle.");
    await waitForClick();

    //Text <o> [1] und Muster <o> [0] hervorheben

    await saySlow("Nun beantworte mir die Frage: Ist auch der dritte Vergleich ein Match?");
    await waitForClick();

    await saySlow("Ja oder Nein? So schwer ist das nicht.");

    //warten auf Eingabe "J" für Ja oder "N" für Nein --> J ist die Richtige Wahl

    //falls falsch
    await saySlow("Das war leider falsch geraten...");
    await waitForClick();

    await saySlow("Schau noch einmal genauer hin");
    await waitForClick();

    await saySlow("Es werden das 3. Zeichen des Textes und das 1. Zeichen des Suchmusters verglichen.");
    await waitForClick();

    await saySlow("Probieren wir es also noch einmal.");
    await waitForClick();
    // --> return zur Aufgabe

    //falls korrekt
    await saySlow("Und das ist...");
    await waitForClick();

    await saySlow("RICHTIG! Wundervoll und damit haben wir es geschafft!");
    await waitForClick();

    await saySlow("Du hast wahrlich Köpfchen bewiesen.");
    await waitForClick();

    await saySlow("Für deine Mühen hast du dir das nun redlich verdient:");
    await waitForClick();

    // return to main
    return new Promise(res => setTimeout(res, 50));
}
