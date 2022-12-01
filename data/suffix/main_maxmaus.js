main_maxmaus = async () =>
{
    task();
    /*await sayAndWait("Seht ihr den kleinen Punkt,\nder sich nun auf der Buchseite befindet?");
    await sayAndWait("Dieser Punkt ist der Anfang des besagten Baumes.");
    await sayAndWait("Nun, genauer gesagt repräsentiert er den Wurzelknoten.");
    await sayAndWait("Wir werden uns erst einmal damit befassen,\nwie Ihr den Baum selbstständig erweitern könnt.");
    await sayAndWait("Versucht doch einmal, den Baum um\neinen weiteren Knoten zu erweitern.");*/
    await sayAndWaitForTreeChange("Dazu müsst Ihr einfach den\nPunkt auf der Buchseite anklicken.");
    setTreeAllowInput(false);
    await sayAndWait("Sehr gut!");
    await sayAndWait("Seht ihr, wie sich der Baum nun erweitert hat?");
    await sayAndWait("Probiert es doch einfach noch einmal!");
    await sayAndWaitForTreeChange("Klickt wieder auf einen beliebigen\nPunkt auf der Buchseite.");
    setTreeAllowInput(false);

    await sayAndWait("Einwandfrei!");
    await sayAndWait("Bisher wisst Ihr also, wie Ihr den Baum\nmit leeren Knoten erweitern könnt.");
    await sayAndWait("Für den Suffix-Baum ist das jedoch nicht ausreichend!");
    await sayAndWait("Wir müssen die Kanten auch mit den\nentsprechenden Buchstaben versehen.");
    setTreeAllowInput(true);
    await sayAndWait("Versucht es doch einmal selbst!");
    await sayAndWait("Tippt auf Eurer Tastatur einen beliebigen Buchstaben.");

}