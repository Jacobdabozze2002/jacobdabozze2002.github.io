introduction = async () => {
    showPicture("/data/images/master4.png");
    setTreeVisible(false);
    setTreeAllowInput(false);
    document.getElementById("input_text").style.display = "none";

    await sayAndWait("Da seid Ihr ja wieder, mein Schüler!");
    await sayAndWait("Ihr habt wirklich nicht lange auf Euch warten lassen.");
    await sayAndWait("Ich bin sehr stolz auf Euch und Eure Neugier!");
    await sayAndWait("Ich möchte Euch nun in das Wissen um einen\nweiteren Algorithmus einweihen.");
    await sayAndWait("Heute geht es nämlich um den fabelhaften...");
    await sayAndWait("...ach, wie hieß er doch gleich...?");
    await sayAndWait("Ach ja! Den Algorithmus für den fantastischen...");
    await sayAndWait("... sogar ganz unglaublichen...");
    await sayAndWait("... Suffix-Baum!!!");
    await sayAndWait("Ja, genau! Den Suffix-Baum!");
    await sayAndWait("Oder wie er auf\nEnglisch auch genannt wird: \"Suffix Tree\"!");

    while (true) {
        await saySlow("Seid Ihr bereit, das Geheimnis der Suffix-Bäume zu erfahren?");
        await waitFor1of2KeysPressed(["j","n"]);

        if (lastKeyPressed !== "j") {
            await sayAndWait("Oh...");
            await saySlow("Wollt Ihr etwa zur Startseite zurückkehren?");
            await waitFor1of2KeysPressed(["j","n"]);

            if (lastKeyPressed === "j")
            {
                await sayAndWait("Nun... dann bis zum nächsten Mal!");
                openPage("index");
            }
        } else {
            break;
        }
    }

    hidePicture();

    await sayAndWait("Prima! Ich freue mich schon!");
    await sayAndWait("Dann gebt mir einen Moment, um mich vorzubereiten...");
    await sayAndWait("...");

    // Calculate suffix tree render scale
    let scale = (0.48 * window.innerWidth) / 1000;
    setRenderScale(scale);

    setTreeVisible(true);
    setTreeAllowInput(false);
    document.getElementById("input_text").style.display = "block";
    await sayAndWait("So, ich bin bereit!");

    // ending();
    main();
}