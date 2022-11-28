// masters instructions
introduction = async () =>
{
    showPicture("/data/images/master.png");

    await saySlow("Willkommen in der großen Bobliothek des Wissens.");
    await waitForClick();

   await saySlow("Ich bin Professor Ocir.");
    await waitForClick();

    await saySlow("Mein damaliger Schüler Rico hat euch zu mir geschickt?");
    await waitForClick();

    await saySlow("Ihr wollt also mein neuer Lehrling werden.");
    await waitForClick();

    await saySlow("Das trifft sich gut.");
    await waitForClick();

    await saySlow("Ich habe nämlich nach einen neuen Schüler gesucht.");
    await waitForClick();

    await saySlow("Ich bin gerade dabei\n das Geheimnis der Suchalgorithmen zu erforschen.");
    await waitForClick();

    await saySlow("Wisst ihr was?");
    await waitForClick();

    await saySlow("Ich werde euch alles beibringen\n was ich bis jetzt herausgefunden habe.");
    await waitForClick();

    await saySlow("Zuerst werde ich euch das Gesetz des Vergleichs beibringen.");
    await waitForClick();

    await saySlow("Für den Einstieg,\n in diese Thema würde sich die Naive-Suche eignen.");
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


