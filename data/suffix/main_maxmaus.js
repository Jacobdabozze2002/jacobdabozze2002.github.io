main_maxmaus = async () =>
{
    task();
    /*await sayAndWait("Seht Ihr den kleinen Punkt,\nder sich nun auf der Buchseite befindet?");
    await sayAndWait("Dieser Punkt ist der Anfang des besagten Baumes.");
    await sayAndWait("Nun, genauer gesagt repräsentiert er den Wurzelknoten.");
    await sayAndWait("Wir werden uns erst einmal damit befassen,\nwie Ihr den Baum selbstständig erweitern könnt.");
    await sayAndWait("Versucht doch einmal, den Baum um\neinen weiteren Knoten zu erweitern.");
    await sayAndWaitForTreeChange("Dazu müsst Ihr einfach den\nPunkt auf der Buchseite anklicken.");
    setTreeAllowInput(false);
    await sayAndWait("Sehr gut!");
    await sayAndWait("Seht Ihr, wie sich der Baum nun erweitert hat?");
    await sayAndWait("Probiert es doch einfach noch einmal!");
    await sayAndWaitForTreeChange("Klickt wieder auf einen der\nPunkte auf der Buchseite.");
    setTreeAllowInput(false);

    await sayAndWait("Einwandfrei!");
    await sayAndWait("Bisher wisst Ihr also, wie Ihr den Baum\nmit leeren Knoten erweitern könnt.");
    await sayAndWait("Für den Suffix-Baum ist das jedoch nicht ausreichend!");
    await sayAndWait("Wir müssen die Kanten auch mit den\nentsprechenden Buchstaben versehen.");
    setTreeAllowInput(true);
    await sayAndWait("Versucht es doch einmal selbst!");
    await saySlow("Tippt auf Eurer Tastatur einen beliebigen Buchstaben.");
    await waitForLetterPressed();
    await sayAndWait("Ihr lernt  schnell!");
    await sayAndWait("Seht Ihr den Buchstaben, der nun\noben auf der Buchseite erschienen ist?");
    await sayAndWaitForTreeChange("Klickt nun auf einen der\nPunkte auf der Buchseite.");
    await sayAndWait("Ha! Jetzt steht der Buchstabe\nauch auf der neuen Kante!");
    await sayAndWait("Jetzt wisst Ihr also, wie Ihr den Baum\nmit beschrifteten Kanten erweitern könnt.");
    await sayAndWait("Das ist wahrhaft unerlässlich, um den Baum\nmit den Suffixen zu füllen!");

    await sayAndWait("Nun fehlt nur noch eine Sache...");
    await sayAndWait("Es kann schließlich jedem passieren,\n dass er einen Fehler macht.");
    await sayAndWait("Außer mir natürlich!");
    await sayAndWait("Höhöhö!");
    await sayAndWait("Aber das ist jetzt unwichtig!");
    await sayAndWait("Wir benötigen also eine Möglichkeit,\nKnoten und Kanten zu entfernen.");*/
    await sayAndWait("Das geht ganz leicht! Klickt einfach mit Rechtsklick\nauf den Knoten, den Ihr entfernen wollt.");
    await sayAndWaitForTreeChange("Aber Vorsicht! Das funktioniert nur bei Knoten,\ndie keine Kinder haben!");
    await sayAndWait("Seht Ihr, wie der Knoten nun verschwunden ist?");

    await sayAndWait("Das war's auch schon!");
    await sayAndWait("Nun wisst Ihr, wie Ihr den Baum selbstständig\nerweitern und verändern könnt.");

}