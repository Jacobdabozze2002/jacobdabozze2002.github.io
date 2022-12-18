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

    await saySlow("Dieser kann in vielen Fällen schneller\nsein, als die Naive-Suche.");
    await waitForClick();

    await saySlow("Das liegt daran, dass der Algorithmus\nsich wiederholende Zeichenketten zu Nutze macht.");
    await waitForClick();

    await saySlow("Dies benötigt zwar ein wenig Vorbereitung,\naber das rentiert sich bei langen Texten schnell.");
    await waitForClick();

    let completed = false;
    while (!completed)
    {
        await saySlow("Wollen wir zu einem Beispiel wechseln?");
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