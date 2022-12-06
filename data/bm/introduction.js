// masters instructions
introduction = async () =>
{
    showPicture("/data/images/master2.png");

    await saySlow("Willkommen zurück, mein Schüler!");
    await waitForClick();

    await saySlow("Wie ich sehe, seid Ihr bereit.");
    await waitForClick();

    await saySlow("Ich möchte Euch nun in das Wissen einweihen.");
    await waitForClick();

    await saySlow("Das Wissen um den Algorithmus von Boyer-Moore!");
    await waitForClick();

    await saySlow("Zwei Herausforderungen konntet Ihr bereits bestehen.");
    await waitForClick();

    await saySlow("Zweimal befolgtet Ihr die Regel des Vergleichs.");
    await waitForClick();

    await saySlow("Doch dieses Mal ist es etwas anders, als zuvor!");
    await waitForClick();

    await saySlow("Wir betrachten nicht das Muster von links nach rechts,\nsondern von rechts nach links - entgegensetzt.");
    await waitForClick();

    await saySlow("Doch damit ist dem Gesetz noch nicht zur Genüge getan!");
    await waitForClick();

    await saySlow("Zwei weitere Regeln sind zu beachten:");
    await waitForClick();

    await saySlow("Das Wort der Good-Suffix-Heuristik zum einen,\ndieses der Bad-Character-Heuristik zum anderen.");
    await waitForClick();

    await saySlow("Ich werde wieder darauf zu sprechen kommen!");
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


