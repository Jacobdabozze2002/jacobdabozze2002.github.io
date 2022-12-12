ending = async () =>
{
    task();
    await saySlow("Das habt Ihr super gemacht!");
    await waitForClick();

    await saySlow("Ihr habt den Knuth-Morris-Pratt Algorithmus gemeistert.");
    await waitForClick();

    await saySlow("Für Eure hervorragende Leistung, \nbekommt Ihr ein weiteres Puzzleteil.");
    showPicture("/data/images/puzzle/puzzle_step2.png");
    await waitForClick();

    await saySlow("Jetzt können wir zur nächsten Herausforderung gehen.");
    await waitForClick();

    // DEFs
    const pages = restoreVar("pages");

    hidePicture();

    // nächste Seite freischalten
    pages[2][1] = true;
    storeVar(pages, "pages");

    // zur Startseite zurückkehren
    openPage("index");
}
