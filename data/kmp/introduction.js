// masters instructions
introduction = async () =>
{

    showPicture("/data/images/master3.png");

    await saySlow("Willkommen zurück, mein Lehrling!");
    await waitForClick();

    await saySlow("Ich habe einen neuen Suchalgorithmus für Euch.");
    await waitForClick();

    await saySlow("Der Suchalgorithmus heißt: \nKnuth-Morris-Pratt Algorithmus.");
    await waitForClick();

    await saySlow("Dieser kann in vielen Fällen schneller\nsein als die Naive-Suche.");
    await waitForClick();

    await saySlow("Das liegt daran, dass der Algorithmus\nsich wiederholende Zeichenketten zu Nutze macht.");
    await waitForClick();

    await saySlow("Dies benögtigt zwar ein wenig Vorbereitung,\naber das rentiert sich bei langen Texten schnell.");
    await waitForClick();

    await saySlow("Zur Hilfe habe ich für Euch das Muster ein wenig erweitert.");
    await waitForClick();

    await saySlow("Das Ziel ist es die längste Zeichenkette im Muster zu finden, \ndie sich wiederholt.");
    await waitForClick();

    await saySlow("In den neuen Feldern müsst Ihr gleich\ndie entsprechenden Zahlen einfügen.");
    await waitForClick();

    await saySlow("Die richtige Zahl ergibt sich aus den Antworten zu zwei Fragen:");
    await waitForClick();

    await saySlow("Erstens:\nIst dieses Zeichen schon einmal im Muster vorgekommen?");
    await waitForClick();

    await saySlow("Wenn Ihr diese Frage mit Nein beantwortet, \ndann bekommt dieses Zeichen eine 0 zugewiesen.");
    await waitForClick();

    await saySlow("Ansonsten wisst Ihr, dass das Zeichen\nauf jeden Fall eine Zahl bekommt.");
    await waitForClick();

    await saySlow("Zweitens:");
    await waitForClick();

    await saySlow("Wie viele Zeichen waren vor diesem Zeichen,\nwelche auch schon mal im Muster vorkamen?");
    await waitForClick();

    await saySlow("Nun müsst Ihr zählen, wie viele Zeichen davor bereits\neine andere Zahl als 0 bekommen haben.");
    await waitForClick();

    await saySlow("Diese Zahl addiert Ihr dann mit 1,\num die gesuchte Zahl zu erhalten.");
    await waitForClick();

    await saySlow("Nun habt Ihr die Länge der Zeichenkette.");
    await waitForClick();

    await saySlow("Aber Vorsicht!");
    await waitForClick();

    await saySlow("Hierbei müsst Ihr noch einige Dinge beachten.");
    await waitForClick();

    await saySlow("Sobald ein Zeichen eine 0 bekommen hat,\nfangt Ihr wieder von 1 zu zählen an.");
    await waitForClick();

    await saySlow("Zudem müsst Ihr stets überprüfen, ob die Zeichenkette,\nwelche Ihr gerade bildet, schon genau so einmal vorkam.");
    await waitForClick();

    await saySlow("Wenn dies nicht der Fall ist,\nfangt Ihr wieder von 1 zu zählen an.");
    await waitForClick();

    await saySlow("Als nächstes kommen wir zum Vergleichen der Zeichen.");
    await waitForClick();

    await saySlow("Hierbei wird erst wie bei der Naiven Suche \nvon links nach rechts verglichen.");
    await waitForClick();

    await saySlow("Sollte es zu einem Mismatch kommen,\nmüsst Ihr ein bisschen rechnen.");
    await waitForClick();

    await saySlow("Den Index des Zeiches, welches Ihr gerade verglichen hattet,\nminus der zugewiesenen Zahl des vorherigen Zeichens.");
    await waitForClick();

    await saySlow("Um diese Zahl kann das Muster nun verschoben werden.");
    await waitForClick();

    await saySlow("Nach dem Verschieben gibt es noch eine Besonderheit,\nfalls die zugewiesene Zahl nicht 0 war.");
    await waitForClick();

    await saySlow("Denn in diesem Fall wissen wir schon,\ndass gewisse Zeichen gleich sind.");
    await waitForClick();

    await saySlow("Die Anzahl der gleichen Zeichen\nentspricht der Zugewiesenen Zahl.");
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