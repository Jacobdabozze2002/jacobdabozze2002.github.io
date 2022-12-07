ending = async () => {
    showPicture("/data/images/master4.png");

/*    await sayAndWait("Sooo, das war nun wirklich alles, das ich\nEuch über die Suche in Texten beibringen konnte.");
    await sayAndWait("Ich hoffe, Ihr habt es genauso spannend gefunden\nwie ich es fand, Euch das alles zu erklären.");
    await sayAndWait("Ich wünsche Euch viel Erfolg bei Euren\nweiteren Forschungen!");
    await sayAndWait("Und nun, auf Wiedersehen!");
    await sayAndWait("... Moment mal!!!");
    await sayAndWait("Ich habe Euch doch noch etwas versprochen!");
    await sayAndWait("Hier, nehmt das!");
    showPicture("/data/images/puzzle/puzzle_step4.png");
    await waitForClick();
    await sayAndWait("Jetzt hätte ich doch beinahe vergessen,\nEuch das letzte Puzzleteil zu geben!");
    await sayAndWait("Hier, nehmt es! Ich bin doch manchmal so vergesslich...");
    await sayAndWait("Warum habt Ihr mich nicht daran erinnert?");

    await sayAndWait("Nun ja, jedenfalls, viel Spaß damit!");
    await sayAndWait("......");
    await sayAndWait("......");
    await sayAndWait("Wie? Ihr wollt wissen, was sich hinter\ndem Puzzle verbirgt?");
    await sayAndWait("Aber natürlich! Ich habe Euch doch\nnicht für nichts belohnt!");
    await sayAndWait("Das wäre schließlich nicht fair!");
    await sayAndWait("Also, hier ist es:");
    await sayAndWait("Das große Geheimnis hinter dem Puzzle ist...");*/

    showPicture("/data/images/puzzle/puzzle_step5.png");
    await waitForClick();
    await sayAndWait("... ein fabelhaftes Bild von mir!");
    await sayAndWait("Gut getroffen, nicht wahr?");
    showPicture("/data/images/puzzle/puzzle_step6.png");
    await sayAndWait("Das war ich, als ich noch ein junger\nHüpfer war, wie Ihr es jetzt seid!");
    await sayAndWait("Ich hoffe, es gefällt Euch!");
    await sayAndWait("Und nun, auf Wiedersehen!");
    await sayAndWait("...");

    // nächste Seite freischalten
    pages[3][1] = true;
    storeVar(pages, "pages");

    // zur Startseite zurückkehren
    openPage("index");
}