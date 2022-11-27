introduction = async () => {
    showPicture("/data/images/master.png");
    setTreeVisible(false);
    document.getElementById("input_text").style.display = "none";

    /*await saySlowAndWait("Da seid Ihr ja wieder, mein Schüler!");
    await saySlowAndWait("Ihr habt wirklich nicht lange auf Euch warten lassen.");
    await saySlowAndWait("Ich bin sehr stolz auf Euch und eure Neugier!");
    await saySlowAndWait("Ich möchte Euch nun in das Wissen um einen\nweiteren Algorithmus einweihen.");
    await saySlowAndWait("Heute geht es nämlich um den fabelhaften...");
    await saySlowAndWait("...ach, wie hier er doch gleich...?");
    await saySlowAndWait("Ach ja! Den Algorithmus für den fantastischen...");
    await saySlowAndWait("... sogar ganz unglaublichen...");
    await saySlowAndWait("... Suffix-Baum!!!");
    await saySlowAndWait("Ja, genau! Den Suffix-Baum! Oder wie er auf\nEnglisch auch genannt wird: \"Suffix Tree\"!");
*/
    while (false) {
        await saySlow("Seid ihr bereit, das Geheimnis der Suffix-Bäume zu erfahren?");
        await waitFor1of2KeysPressed(["j","n"]);

        if (lastKeyPressed !== "j") {
            await saySlowAndWait("Oh...");
            await saySlowAndWait("Wollt Ihr etwa zur Startseite zurückkehren?");
            await waitFor1of2KeysPressed(["j","n"]);

            if (lastKeyPressed === "j")
            {
                await saySlowAndWait("Nun... dann bis zum nächsten Mal!");
                openPage("index");
            }
        } else {
            break;
        }
    }

    hidePicture();

    /*await saySlowAndWait("Prima! Ich freue mich schon!");
    await saySlowAndWait("Dann gebt mir einen Moment, um mich vorzubereiten...");
    await saySlowAndWait("...");*/

    // Calculate suffix tree render scale
    let scale = (0.521 * window.innerWidth) / 1000;
    setRenderScale(scale);

    setTreeVisible(true);
    document.getElementById("input_text").style.display = "block";
    await saySlowAndWait("So, ich bin bereit!");

    main();
}