zweiterText = async () =>
{
    let completed = false;

    const abc2 = new JF_PatternContainer(container);
    abc2.childrenStyleClass("child standard_font").
    sizingByChildren(true,childSize).
    padding(childPadding).
    addChildren("6").
    attachTo(search, "bottom-center")

    //Erklärung

    task();

    await saySlow("Ich habe für Euch das Muster ein wenig erweitert.");
    await waitForClick();

    await saySlow("In diese neuen Felder müsst Ihr gleich Zahlen eintragen.");
    await waitForClick();

    await saySlow("Das Ziel ist es, die längste Zeichenkette im\nMuster zu finden, die sich wiederholt.");
    await waitForClick();

    await saySlow("Die richtige Zahl ergibt sich aus\nden Antworten zu zwei Fragen:");
    await waitForClick();

    await saySlow("Erstens:\nIst dieses Zeichen schon einmal im Muster vorgekommen?");
    await waitForClick();

    await saySlow("Wenn Ihr diese Frage mit 'Nein' beantwortet, \ndann bekommt dieses Zeichen eine 0 zugewiesen.");
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

    await saySlow("Sobald ein Zeichen eine 0 bekommen hat,\nfangt Ihr wieder von 0 zu zählen an.");
    await waitForClick();

    await saySlow("Zudem müsst Ihr stets überprüfen, ob die Zeichenkette,\nwelche Ihr gerade bildet, schon genau so einmal vorkam.");
    await waitForClick();

    await saySlow("Wenn dies nicht der Fall ist,\nfangt Ihr auch wieder von 0 zu zählen an.");
    await waitForClick();


    //Zahlen eingeben
    await saySlow("Noch ein kleiner tipp für Euch. \nDas erste Zeichen bekommt immer eine 0 zugewiesen.");
    await waitForClick();

    await saySlow("Gib nun die richtige Zahl für <A> ein");
    await waitForKeyPressed("0");
    abc2.removeChildren().
    addChildrenByText("0").
    addChildren("5")

    await saySlow("Das zweite Zeichen schafft Ihr ganz leicht.");
    await waitForClick();

    await saySlow("Gib nun die richtige Zahl <B> ein");
    await waitForKeyPressed("0");
    abc2.
    removeChildren().
    addChildrenByText("00").
    addChildren("4")

    await saySlow("Auch bei dem dritten Zeichen, \nmüsst Ihr noch nicht viel überlegen.");
    await waitForClick();

    await saySlow("Gib nun die richtige Zahl für <C> ein");
    await waitForKeyPressed("0");
    abc2.
    removeChildren().
    addChildrenByText("000").
    addChildren("3")

    await saySlow("Leider geht es nicht immer so leicht.");
    await waitForClick();

    await saySlow("Bei dem vierten Zeichen sollte Euch etwas auffallen.");
    await waitForClick();

    await saySlow("Wir errinern uns an die beiden Fragen: \n1. Ist dieses Zeichen schon mal im Muster vorgekommen?");
    await waitForClick();

    await saySlow("2. Wie viele Zeichen waren vor diesem Zeichen, \nwelche auch schon mal im Muster vorkamen?");
    await waitForClick();

    await saySlow("Gib nun die richtige Zahl für <A> ein");
    await waitForKeyPressed("1");
    abc2.
    removeChildren().
    addChildrenByText("0001").
    addChildren("2")

    await saySlow("Auf bei dem fünften Zeichen sollte Euch etwas auffallen.");
    await waitForClick();

    await saySlow("Auch hier errinern wir uns an die Fragen: \n1. Ist dieses Zeichen schon mal im Muster vorgekommen?");
    await waitForClick();

    await saySlow("2. Wie viele Zeichen waren vor diesem Zeichen, \nwelche auch schon mal im Muster vorkamen?");
    await waitForClick();

    await saySlow("Gib nun die richtige Zahl für <B> ein");
    await waitForKeyPressed("2");
    abc2.
    removeChildren().
    addChildrenByText("00012").
    addChildren("1")

    await saySlow("Bei dem letzten Zeichen wird es wieder einfach.");
    await waitForClick();

    await saySlow("Gib nun die richtige Zahl für <D> ein");
    await waitForKeyPressed("0");
    abc2.
    removeChildren().
    addChildrenByText("000120")


    await saySlow("Super! Ihr habt den schweren Teil geschafft.");
    await waitForClick();

    await saySlow("Jetzt könnt Ihr mit dem Vergleichen beginnen.");
    await waitForClick();

    // Vergleich

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

//1

    completed = false;
    while (!completed)
    {
        await saySlow("Sind die ersten beiden Zeichen ein Match?");
        task("mit \"ja\" oder \"nein\" antworten")
        textSelect([0]);
        searchSelect([0]);
        await waitFor1of2KeysPressed(["j", "n"]);
        task();

        if (lastKeyPressed !== "j")
        {
            await saySlow("Denkt einmal etwas schärfer nach!");
            await waitForClick();
        }
        else completed = true;
    }

    await saySlow("Ich sehe Ihr habt Euch gemerkt \nwie die Naive Suche funktioniert.");
    await waitForClick();
//2

    completed = false;
    while (!completed)
    {
        await saySlow("Sind die nächsten beiden Zeichen ein Match?");
        task("mit \"ja\" oder \"nein\" antworten")
        textSelect([1]);
        searchSelect([1]);
        await waitFor1of2KeysPressed(["j", "n"]);
        task();

        if (lastKeyPressed !== "j")
        {
            await saySlow("Das ist nicht Korrekt. Nochmal!");
            await waitForClick();
        }
        else completed = true;
    }

    await saySlow("Weiter so, das war Richtig!");
    await waitForClick();
//3

    completed = false;
    while (!completed)
    {
        await saySlow("Sind die nächsten beiden Zeichen ein Match?");
        task("mit \"ja\" oder \"nein\" antworten")
        textSelect([2]);
        searchSelect([2]);
        await waitFor1of2KeysPressed(["j", "n"]);
        task();

        if (lastKeyPressed !== "j")
        {
            await saySlow("Denkt einmal etwas schärfer nach!");
            await waitForClick();
        }
        else completed = true;
    }

    await saySlow("Sehr schön!");
    await waitForClick();
//4

    completed = false;
    while (!completed)
    {
        await saySlow("Sind die nächsten beiden Zeichen ein Match?");
        task("mit \"ja\" oder \"nein\" antworten")
        textSelect([3]);
        searchSelect([3]);
        await waitFor1of2KeysPressed(["j", "n"]);
        task();

        if (lastKeyPressed !== "j")
        {
            await saySlow("Das ist nicht Korrekt. Nochmal!");
            await waitForClick();
        }
        else completed = true;
    }

    await saySlow("Ihr kommt schnell voran. Das Freut mich!");
    await waitForClick();

//5
    completed = false;
    while (!completed)
    {
        await saySlow("Sind die nächsten beiden Zeichen ein Match?");
        task("mit \"ja\" oder \"nein\" antworten")
        textSelect([4]);
        searchSelect([4]);
        await waitFor1of2KeysPressed(["j", "n"]);
        task();

        if (lastKeyPressed !== "j")
        {
            await saySlow("Das ist Falsch, versucht nachzudenken!");
            await waitForClick();
        }
        else completed = true;
    }

    await saySlow("Weiter so, das war Richtig!");
    await waitForClick();

//6 Mismatch
    completed = false;
    while (!completed)
    {
        await saySlow("Sind die nächsten beiden Zeichen ein Match?");
        task("mit \"ja\" oder \"nein\" antworten")
        textSelect([5]);
        searchSelect([5]);
        await waitFor1of2KeysPressed(["j", "n"]);
        task();

        if (lastKeyPressed !== "n")
        {
            await saySlow("Das ist Falsch, versucht nachzudenken!");
            await waitForClick();
        }
        else completed = true;
    }

//verschieben
    completed = false;
    while (!completed)
    {
        await saySlow("Da Ein Mismatch aufgetreten ist, \nmüsst Ihr das Muster verschieben.");
        await waitForClick();

        await saySlow("Errinert Euch dafür an die Rechnung: \nIndex - vorherige zugewiesene Zahl");
        await waitForClick();

        await saySlow("Verschiebt nun das Muster den Regeln entsprechend!");
        enableDragging();
        task("Muster an richtige Stelle verschieben");
        await waitForClick();

        await saySlow("Gebt mir Bescheid, sobald Ihr fertig seid.");
        await waitForKeyPressed("b");
        disableDragging();
        task();

        if (jf_index !== 3)
        {
            await saySlow("Das stimmt so nicht! Probiert es nochmal.");
            move(-jf_index);
            await waitForClick();
        }
        else completed = true;
    }
//vergleich nach verschieben
    completed = false;
    while (!completed)
    {
        textSelect();
        searchSelect();
        await saySlow("Ihr errinert Euch, das wir jetzt schon ein paar Zeichen haben, \nwelche beim Vergleich übereinstimmen.");
        await waitForClick();

        await saySlow("Welches Zeichen müssen wir im Suchtext nun vergleichen?");
        textSelectOnClickOn();
        task("Zeichen im Text auswählen");
        await waitForClick();

        await saySlow("Sagt, wenn Ihr bereit seid.");
        await waitForKeyPressed("b");
        textSelectOnClickOff();
        task();

        if (lastTextClicked !== 5)
        {
            await saySlow("Wir gehen nochmal einen Schritt zurück \nund Ihr probiert das lieber nochmal.");
            await waitForClick();
        }
        else completed = true;
    }

    await saySlow("Nun könnt Ihr weiter vergleichen.");
    await waitForClick();

//6 again
    completed = false;
    while (!completed)
    {
        await saySlow("Sind die beiden Zeichen ein Match?");
        task("mit \"ja\" oder \"nein\" antworten")
        textSelect([5]);
        searchSelect([2]);
        await waitFor1of2KeysPressed(["j", "n"]);
        task();

        if (lastKeyPressed !== "j")
        {
            await saySlow("Seht nochmal genauer hin!");
            await waitForClick();
        }
        else completed = true;
    }

    await saySlow("Nur so und nicht anders.");
    await waitForClick();

//7
    completed = false;
    while (!completed)
    {
        await saySlow("Sind die nächsten beiden Zeichen ein Match?");
        task("mit \"ja\" oder \"nein\" antworten")
        textSelect([6]);
        searchSelect([3]);
        await waitFor1of2KeysPressed(["j", "n"]);
        task();

        if (lastKeyPressed !== "j")
        {
            await saySlow("Das ist Falsch, strengt Euch etwas an!");
            await waitForClick();
        }
        else completed = true;
    }

    await saySlow("Wenn Ihr so weiter macht, \ndann habt Ihr diesen Suchalgorithmus bald gemeistert");
    await waitForClick();

//8
    completed = false;
    while (!completed)
    {
        await saySlow("Sind die nächsten beiden Zeichen ein Match?");
        task("mit \"ja\" oder \"nein\" antworten")
        textSelect([7]);
        searchSelect([4]);
        await waitFor1of2KeysPressed(["j", "n"]);
        task();

        if (lastKeyPressed !== "j")
        {
            await saySlow("So schwer kann es doch nicht sein. Nochmal!");
            await waitForClick();
        }
        else completed = true;
    }

    await saySlow("Sehr schön!");
    await waitForClick();

//9
    completed = false;
    while (!completed)
    {
        await saySlow("Sind die nächsten beiden Zeichen ein Match?");
        task("mit \"ja\" oder \"nein\" antworten")
        textSelect([8]);
        searchSelect([5]);
        await waitFor1of2KeysPressed(["j", "n"]);
        task();

        if (lastKeyPressed !== "j")
        {
            await saySlow("Wollt Ihr es nicht verstehen oder könnt Ihr es nicht?");
            await waitForClick();
        }
        else completed = true;
    }

    //ende

    await saySlow("Ihr habt es Geschafft!\nDas gesuchte Muster wurde gefunden.");
    await waitForClick();

    abc2.removeChildren();
    abc2.style("display: none;")

    // return to main
    return new Promise(res => setTimeout(res, 50));
}

