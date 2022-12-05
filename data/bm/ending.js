ending = async () =>
{
    // DEFs
    const pages = restoreVar("pages");

    // puzzleteil bekommen
    await saySlow("Für Eure Mühen möchte ich Euch dies geben:");
    showPicture("/data/images/puzzle/puzzle_step2.png");
    await waitForClick();

    await saySlow("Nun seid Ihr des Rätsels Lösung einen Schritt näher!");
    await waitForClick();

    await saySlow("Doch Zeit für eine Pause gibt es nicht.");
    await waitForClick();

    await saySlow("Die nächste Herausforderung wartet bereits auf Euch!");
    await waitForClick();

    await saySlow("Folgt mir!");
    await waitForClick();

    hidePicture();

    // nächste Seite freischalten
    pages[3][1] = true;
    storeVar(pages, "pages");

    // zur Startseite zurückkehren
    openPage("index");
}

