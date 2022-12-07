// masters instructions
introduction = async () =>
{

    showPicture("/data/images/master3.png");

    await saySlow("Willkommen zurück, mein Lehrling!");
    await waitForClick();

    await saySlow("Ich habe einen neuen Suchalgorithmus für euch.");
    await waitForClick();

    await saySlow("Der Suchalgorithmus heißt: \nKnuth-Morris-Pratt Algorithmus.");
    await waitForClick();

    await saySlow("Dieser kann in vielen fällen schneller sein, \nals die Naive suche.");
    await waitForClick();

    await saySlow("Das geht dadurch, das der Algorithmus, \nsich wiederholende Zeichenketten zu nutze macht.");
    await waitForClick();

    await saySlow("Dies benögtigt zwar eine kleine vorbereitung, \naber es Rentiert sich bei langen Texten schnell.");
    await waitForClick();

    await saySlow("Zur Hilfe habe ich für euch das Muster ein wenig erweitert.");
    await waitForClick();

    await saySlow("Das Ziel ist es die längste Zeichenkette im Muster zu finden, \ndie sich wiederholt.");
    await waitForClick();

    await saySlow("In den neuen Felder müsst ihr gleich, \ndie entsprechenden Zahlen einfügen.");
    await waitForClick();

    await saySlow("Die richtige Zahl setzt sich zusammen aus 2 Fragen:");
    await waitForClick();

    await saySlow("1. Ist dieses Zeichen schon mal im Muster vorgekommen?");
    await waitForClick();

    await saySlow("Wenn ihr diese Frage mit nein beantwortet, \ndann bekommt dieses Zeichen eine 0. zugewiesen.");
    await waitForClick();

    await saySlow("Ansonsten wisst ihr das, dass Zeichen \nauf jedenfall eine Zahl bekommt.");
    await waitForClick();

    await saySlow("2. Wie viele Zeichen waren vor diesem Zeichen, \nwelche auch schon mal im Muster vorkamen?");
    await waitForClick();

    await saySlow("Nun müsst ihr Zählen wie viele Zeichen schon davor \neine andere zahl als 0 bekommen haben.");
    await waitForClick();

    await saySlow("Diese Zahl addiert ihr dann mit 1, \num die gesuchte Zahl zu erhalten.");
    await waitForClick();

    await saySlow("Diese Zahl gibt euch die länge der Zeichenkette.");
    await waitForClick();

    await saySlow("Hierbei müsst ihr noch ein paar Dinge beachten.");
    await waitForClick();

    await saySlow("Sobald ein Zeichen eine 0 bekommen hat \nfangt ihr wieder an von 1 zu zählen.");
    await waitForClick();

    await saySlow("Ihr müsst auch immer überprüfen ob die Zeichenkette, \nwelche ihr gerade bildet auch genau so schon mal vorkam.");
    await waitForClick();

    await saySlow("Wenn dies nicht der Fall ist, \nmüsst ihr wieder bei 1 anfangen zu zählen.");
    await waitForClick();

    await saySlow("Als nächstes geht es zum Vergleichen der Zeichen.");
    await waitForClick();

    await saySlow("Hierbei wird erst wie bei Naiven Suche \nvon links nach rechts verglichen.");
    await waitForClick();

    await saySlow("Sollte es zu einem Mismatch kommen, \ndann müsst ihr ein bisschen rechnen.");
    await waitForClick();

    await saySlow("Den Index des Zeiches, welches ihr gerade verglichen hattet \nminus der Zugewisenen Zahl des vorherigen Zeichens.");
    await waitForClick();

    await saySlow("Um diese Zahl kann das Muster nun verschoben werden.");
    await waitForClick();

    await saySlow("Nach dem Verschieben gibt es noch eine Besonderheit, \nfalls die zugewisene Zahl nicht 0 war.");
    await waitForClick();

    await saySlow("Denn in diesem Fall wissen wir schon, \ndas gewisse Zeichen gleich sind.");
    await waitForClick();

    await saySlow("Die Anzahl der gleichen Zeichen \nentspricht der Zugewiesenen Zahl.");
    await waitForClick();

    let completed = false;
    while (!completed)
    {
        await saySlow("Nun denn - können wir beginnen?");
        await waitFor1of2KeysPressed(["j","n"]);

        if (lastKeyPressed !== "j")
        {
            await saySlow("Wollt Ihr zurück zur Startseite?");
            await waitFor1of2KeysPressed(["j","n"]);

            if (lastKeyPressed === "j")
            {
                openPage("index");
            }
        }
        else completed = true;
    }
    hidePicture();
    await saySlow("So lasst mich einen Text für Euch wählen.");

    main();
}