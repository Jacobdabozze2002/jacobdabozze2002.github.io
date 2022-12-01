main_maxmaus = async () =>
{
    task();
    /*await sayAndWait("Seht Ihr den kleinen Punkt,\nder sich nun auf der Buchseite befindet?");
    await sayAndWait("Dieser Punkt ist der Anfang des besagten Baumes.");
    await sayAndWait("Nun, genauer gesagt repräsentiert er den Wurzelknoten.");
    await sayAndWait("Wir werden uns erst einmal damit befassen,\nwie Ihr den Baum selbstständig erweitern könnt.");
    await sayAndWait("Versucht doch einmal, den Baum um\neinen weiteren Knoten zu erweitern.");*/
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
    await sayAndWait("Versucht es doch einmal selbst!");
    await saySlow("Tippt auf Eurer Tastatur einen beliebigen Buchstaben.");
    await waitForLetterPressed();
    setTreeAllowInput(false);
    let pickedLetter = input_text.self().innerText;
    await sayAndWait("Oho! "+ pickedLetter + ", eine sehr gute Wahl!");
    await sayAndWait("Seht Ihr das " + pickedLetter + ", das nun oben auf\nder Buchseite erschienen ist?");
    await sayAndWaitForTreeChange("Klickt nun auf einen der\nPunkte auf der Buchseite.");
    setTreeAllowInput(false);
    await sayAndWait("Ha! Jetzt steht es auch\nauf der neuen Kante!");
    await sayAndWait("Jetzt wisst Ihr also, wie Ihr den Baum\nmit beschrifteten Kanten erweitern könnt.");
    await sayAndWait("Das ist wahrhaft unerlässlich, um den Baum\nmit den Suffixen zu füllen!");

    await sayAndWait("Nun fehlt nur noch eine Sache...");
    await sayAndWait("Es kann schließlich jedem passieren,\n dass er einen Fehler macht.");
    await sayAndWait("Außer mir natürlich!");
    await sayAndWait("Höhöhö!");
    await sayAndWait("Aber das ist jetzt unwichtig!");
    await sayAndWait("Wir benötigen also eine Möglichkeit,\nKnoten und Kanten zu entfernen.");
    await sayAndWait("Das geht ganz leicht! Klickt einfach mit Rechtsklick\nauf den Knoten, den Ihr entfernen wollt.");
    await sayAndWaitForTreeChange("Aber Vorsicht! Das funktioniert nur bei Knoten,\ndie keine Kinder haben!");
    setTreeAllowInput(false);
    await sayAndWait("Seht Ihr, wie der Knoten nun verschwunden ist?");

    await sayAndWait("Das war's auch schon!");
    await sayAndWait("Nun wisst Ihr, wie Ihr den Baum selbstständig\nerweitern und verändern könnt.");

    await sayAndWait("Ihr seid nun endlich bereit, richtig ans Werk zu gehen!");
    await sayAndWait("Lasst mich schnell etwas aufräumen...");
    resetToRoot();
    input_text.applyText("");
    setTreeAllowInput(false);
    await sayAndWait("Einen Suffix-Baum zu erstellen ist wirklich nicht schwer!");
    await sayAndWait("Damit Ihr lernt, wie das geht, wollen\nwir uns ein Beispiel anschauen.");
    await sayAndWait("Der Text, den Ihr nutzen werdet, ist MAXMAUS");
    await sayAndWait("Durch meine lange Erfahrung als Meister weiß ich,\ndass dieser Text sehr gut zum Lernen geeignet ist!");
    await sayAndWait("Höhöhö!");

    await sayAndWait("Nun, lasst uns beginnen!");
    await sayAndWait("Ich werde Euch nun durch den gesamten Prozess führen.");
    await sayAndWait("Ihr braucht Euch also keinerlei Sorgen zu machen!");
    await sayAndWait("Ich werde Euch auch immer wieder auf Fehler hinweisen,\nvorrausgesetzt natürlich, dass Ihr welche macht.");
    await sayAndWait("Aber das wird hoffentlich nicht passieren!");
    await sayAndWait("Höhöhö!");

    await sayAndWait("Wir beginnen mit dem ersten Suffix.\nDas ist am Anfang der gesamte Text.");
    await sayAndWait("Also in diesem Fall MAXMAUS");
    await sayAndWait("Diesen können wir in seiner Gänze in den Baum einfügen.");
    await sayAndWait("Gehen wir nun also die Buchstaben von MAXMAUS durch!");
    await sayAndWaitForTreeChange("Der erste Buchstabe ist M. Tippt nun ein M\nein und klickt auf den Wurzelknoten.");
    setTreeAllowInput(false);
    await sayAndWait("Sehr gut! Ich hoffe, Ihr treibt keinen Schabernack!");
    await sayAndWait("Höhöhö!");

    await sayAndWaitForTreeChange("Der nächste Buchstabe ist ein A. Tippt es also ein und klickt\nauf den Knoten mit dem M, den Ihr soeben erstellt habt.");
    await sayAndWait("Das wiederholt Ihr nun noch einmal mit dem X,\nund dann mit dem M, und...");
    await sayAndWait("Ach! Ihr versteht schon!");
    await saySlow("Erweitert den Baum also so, dass er den gesamten\nSuffix MAXMAUS enthält! Ich warte solange...");
    await waitForTreeString("MAXMAUS");
    setTreeAllowInput(false);
    await sayAndWait("Das ging ja schnell!");

    await sayAndWait("Dann wollen wir geschwind den nächsten Suffix hinzufügen!");
    await sayAndWait("Wie ihr euch sicherlich schon denken\nkönnt, ist das der Suffix AXMAUS.");
    await sayAndWait("Ab jetzt müssen wir aber etwas aufpassen!");
    await sayAndWait("Wir müssen nämlich darauf achten, dass wir\nniemals den gleichen Knoten mehrfach erstellen!");
    await sayAndWait("Das wäre fatal! Der Suffix-Baum würde dann\nnicht mehr richtig funktionieren!");
    await sayAndWait("Also müssen wir prüfen, ob am jeweiligen Knoten schon ein\nKind mit dem entsprechenden Buchstaben existiert.");
    await sayAndWait("Und zwar angefangen bei der Wurzel!");
    await sayAndWait("In diesem Fall hängt noch kein A an der\nWurzel, nur ein M.");
    await saySlow("Also müssen wir einen neuen Knoten mit dem\nBuchstaben A an der Wurzel anhängen.");
    await waitForTreeChange();
    setTreeAllowInput(false);
    await sayAndWait("Nun machen wir mit dem Rest des Suffixes weiter.");
    await sayAndWait("Wir prüfen also, ob an dem Knoten mit dem A\nschon ein X hängt.");

    await sayAndWait("Das tut es nicht, also müssen wir einen neuen Knoten\nmit dem Buchstaben X an das A anhängen.");
    await sayAndWait("Und so weiter...");
    await saySlow("Ich warte solange, bis Ihr den Suffix AXMAUS\nin den Baum eingefügt habt.");
    await waitForTreeString("MAXMAUSAXMAUS");
    setTreeAllowInput(false);
    await sayAndWait("Hervorragend! Ihr werdet wirklich immer schneller!");

    await saySlow("Sicherlich schafft Ihr es auch, den Suffix\nXMAUS in den Baum einzufügen!");
    await waitForTreeString("MAXMAUSAXMAUSXMAUS");
    setTreeAllowInput(false);
    await sayAndWait("Sehr gut! Ihr seid wirklich ein Meister!");
    await sayAndWait("Nun...");
    await sayAndWait("Natürlich kein richtiger Meister wie Ich, höhöhöhö!");
    await sayAndWait("Aber Ihr seid auf jeden Fall schon sehr gut!");

/*    root.addChild("M");
    root.getChild(0).addChild("A");
    root.getChild(0).getChild(0).addChild("X");
    root.getChild(0).getChild(0).getChild(0).addChild("M");
    root.getChild(0).getChild(0).getChild(0).getChild(0).addChild("A");
    root.getChild(0).getChild(0).getChild(0).getChild(0).getChild(0).addChild("U");
    root.getChild(0).getChild(0).getChild(0).getChild(0).getChild(0).getChild(0).addChild("S");
    root.addChild("A");
    root.getChild(1).addChild("X");
    root.getChild(1).getChild(0).addChild("M");
    root.getChild(1).getChild(0).getChild(0).addChild("A");
    root.getChild(1).getChild(0).getChild(0).getChild(0).addChild("U");
    root.getChild(1).getChild(0).getChild(0).getChild(0).getChild(0).addChild("S");
    root.addChild("X");
    root.getChild(2).addChild("M");
    root.getChild(2).getChild(0).addChild("A");
    root.getChild(2).getChild(0).getChild(0).addChild("U");
    root.getChild(2).getChild(0).getChild(0).getChild(0).addChild("S");*/

    await sayAndWait("Machen wir weiter...");
    await sayAndWait("Nun wollen wir den Suffix MAUS hinzufügen.");
    await sayAndWait("Aber diesmal müssen wir wirklich ganz genau aufpassen!");
    await sayAndWait("Ihr habt sicherlich bemerkt, dass wir schon eine\nKante mit dem Buchstaben M an der Wurzel haben.");
    await sayAndWait("Richtet Euren Blick also auf diese Kante mit dem M!");
    await sayAndWait("Sie führt zu einem Knoten mit dem Buchstaben A.");
    await sayAndWait("Und wir wollen ja den Suffix MAUS hinzufügen!\nDas passt also!");
    await sayAndWait("Das U hingegen passt nicht, denn es gibt am A\nnoch keine Kante mit dem Buchstaben U.");

    await saySlow("Ihr seid bestimmt schon auf die Lösung gekommen!\nProbiert es einfach aus!");
    await waitForTreeString("MAXMAUSUAXMAUSXMAUS");
    setTreeAllowInput(false);

    await sayAndWait("Ach, Ihr habt es ja schon gemacht!");
    await saySlow("Fehlt nur noch das S!");
    await waitForTreeString("MAXMAUSUSAXMAUSXMAUS");
    setTreeAllowInput(false);

    await sayAndWait("Ihr seid wahrhaftig der beste Schüler, den Ich je hatte!");
    await sayAndWait("Ich bin stolz auf Euch!");
    await sayAndWait("Ich denke, Ihr schafft es auch, den Suffix\nAUS in den Baum einzufügen!");
    await saySlow("Vergesst nur nicht, auf das A zu achten!");
    await waitForTreeString("MAXMAUSUSAXMAUSUSXMAUS");
    setTreeAllowInput(false);
    await sayAndWait("Echt klasse! Und so schnell!");

    await saySlow("Gewiss schafft Ihr auch noch die letzten beiden\nSuffixe, US und S!");
    await waitForTreeString("MAXMAUSUSAXMAUSUSXMAUSUSS");
    setTreeAllowInput(false);
    await sayAndWait("100% richtig! Jetzt habt Ihr wirklich alles gelernt!");
    await sayAndWait("Der Baum ist vollständig!");
    await sayAndWait("Um ihn zu testen, könnt Ihr ja mal nachschauen,\nob Ihr beliebige Teile von MAXMAUS finden könnt!");
    await sayAndWait("Zum Beispiel MAU! Oder AXMA! Fangt einfach\nimmer bei der Wurzel an. Die Welt ist Euer!");

    await sayAndWait("Wenn Ihr das schafft, könnt euch wahrhaftig\nals Suffix-Baum-Meister bezeichnen!");
}