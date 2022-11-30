ending = async () =>
{
    // DEFs
    const pages = restoreVar("pages");

    // puzzleteil bekommen

    await saySlow("Nun für den Anfang lief es zimlich gut!");
    await waitForClick();

    await saySlow("Aber, dies war auch zuerwarten. ");
    await waitForClick();

    await saySlow("Für Eure Mühen möchte ich Euch dies geben:");
    showPicture("/data/images/puzzle-teil-3.png");
    await waitForClick();

    await saySlow("Die nächste Herausforderung wartet bereits auf Euch!");
    await waitForClick();

    await saySlow("Folgt mir!");
    await waitForClick();

    hidePicture();

    // nächste Seite freischalten
    pages[1][1] = true;
    storeVar(pages, "pages");

    // zur Startseite zurückkehren
    openPage("index");
}