ending = async () =>
{
    // DEFs
    const pages = restoreVar("pages");

    // puzzleteil bekommen

    await saySlow("Für den Anfang lief es ziemlich gut!");
    await waitForClick();

    await saySlow("Aber dies war auch zu erwarten. ");
    await waitForClick();

    await saySlow("Für Eure Mühen möchte ich Euch dies geben:");
    showPicture("/data/images/puzzle/puzzle_step1.png");
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