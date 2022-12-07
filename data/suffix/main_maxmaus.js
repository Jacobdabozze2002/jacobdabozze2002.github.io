main_maxmaus = async () =>
{
    hidePicture();
    setTask();
    await sayAndWait("Seht Ihr den kleinen Punkt, der sich\nnun auf der Buchseite befindet?");
    await sayAndWait("Dieser Punkt ist der Anfang des besagten Baumes.");
    await sayAndWait("Nun, genauer gesagt repräsentiert er den Wurzelknoten.");
    await sayAndWait("Der Wurzelknoten ist immer der Anfang eines\nBaumes und hat keine Vorgänger.");
    await sayAndWait("Nun, wir werden uns erst einmal damit befassen,\nwie Ihr den Baum selbstständig erweitern könnt.");
    await sayAndWait("Versucht doch einmal, den Baum um\neinen weiteren Knoten zu erweitern.");
    await saySlow("Dazu müsst Ihr einfach den Punkt\nauf der Buchseite anklicken.");
    setTask("Baum um einen Knoten erweitern");
    await setContinuation("auf Wurzel klicken");
    await waitForTreeChange();
    setTreeAllowInput(false);
    setTask();
    await setContinuation();
    await sayAndWait("Sehr gut!");
    await sayAndWait("Seht Ihr, wie sich der Baum nun erweitert hat?");
    await sayAndWait("Probiert es doch einfach noch einmal!");
    await saySlow("Klickt wieder auf einen der\nPunkte auf der Buchseite.");
    setTask("Baum um einen Knoten erweitern");
    await setContinuation("auf Knoten klicken");
    await waitForTreeChange();
    setTreeAllowInput(false);
    setTask();
    await setContinuation();

    await sayAndWait("Einwandfrei!");
    await sayAndWait("Bisher wisst Ihr also, wie Ihr den Baum\nmit leeren Knoten erweitern könnt.");
    await sayAndWait("Für den Suffix-Baum ist das jedoch nicht ausreichend!");
    await sayAndWait("Wir müssen die Kanten auch mit den\nentsprechenden Buchstaben versehen.");
    await sayAndWait("Versucht es doch einmal selbst!");
    await saySlow("Tippt auf Eurer Tastatur einen beliebigen Buchstaben.");
    setTask("Buchstaben auf Kante schreiben");
    await setContinuation("Buchstaben tippen");
    await waitForLetterPressed();
    setTreeAllowInput(false);
    let pickedLetter = input_text.self().innerText;
    await sayAndWait("Oho! "+ pickedLetter + ", eine sehr gute Wahl!");
    await sayAndWait("Seht Ihr das " + pickedLetter + ", das nun oben auf\nder Buchseite erschienen ist?");
    await sayAndWaitForTreeChange("Klickt nun auf einen der\nPunkte auf der Buchseite.");
    setTreeAllowInput(false);
    await sayAndWait("Ha! Jetzt steht das " + pickedLetter + " auch\nauf der neuen Kante!");
    setTask();
    await sayAndWait("Jetzt wisst Ihr also, wie Ihr den Baum\nmit beschrifteten Kanten erweitern könnt.");
    await sayAndWait("Das ist wahrhaft unerlässlich, um den Baum\nmit den Suffixen zu füllen!");

    await sayAndWait("Nun fehlt nur noch eine Sache...");
    await sayAndWait("Es kann schließlich jedem passieren,\n dass er einen Fehler macht.");
    await sayAndWait("Außer mir natürlich!");
    await sayAndWait("Höhöhö!");
    await sayAndWait("Aber das ist jetzt unwichtig!");
    await sayAndWait("Wir benötigen also eine Möglichkeit,\nKnoten und Kanten zu entfernen.");
    await sayAndWait("Das geht ganz leicht! Klickt einfach mit Rechtsklick\nauf den Knoten, den Ihr entfernen wollt.");
    await saySlow("Aber Vorsicht! Das funktioniert nur bei\nKnoten, die keine Kinder haben!");
    setTask("Knoten entfernen");
    await setContinuation("Knoten rechtsklicken");
    setTreeAllowInput(true);
    // Warten bis ein Knoten gelöscht wurde
    while (true) {
        let oldTree = root.getTreeString();
        await waitForTreeChange();
        if (root.getTreeString().length < oldTree.length) {
            break;
        }
    }
    setTreeAllowInput(false);
    setTask();

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
    await sayAndWait("Der Text, den Ihr nutzen werdet, ist MAXMAUS!");
    await sayAndWait("Durch meine lange Erfahrung als Meister weiß ich,\ndass dieser Text sehr gut zum Lernen geeignet ist!");
    await sayAndWait("Höhöhö!");

    await sayAndWait("Nun, lasst uns beginnen!");
    await sayAndWait("Ich werde Euch nun durch den gesamten Prozess führen.");
    await sayAndWait("Ihr braucht Euch also keinerlei Sorgen zu machen!");

    await sayAndWait("Nun denn, wir beginnen mit dem ersten Suffix.\nDas ist am Anfang der gesamte Text.");
    await sayAndWait("Also in diesem Fall MAXMAUS");
    await sayAndWait("Diesen können wir in seiner Gänze in den Baum einfügen.");
    await sayAndWait("Gehen wir nun also die Buchstaben von MAXMAUS durch!");
    await saySlow("Der erste Buchstabe ist M. Tippt nun ein M\nein und klickt auf den Wurzelknoten.");
    setTask("Ersten Buchstaben einfügen");
    await setContinuation("M anhängen");
    await waitForTreeChange();
    setTreeAllowInput(false);
    setTask();
    await sayAndWait("Sehr gut! Ich hoffe, Ihr treibt keinen Schabernack!");
    await sayAndWait("Höhöhö!");

    if (root.getTreeString() === "M") {
        await saySlow("Der nächste Buchstabe ist ein A. Tippt es also ein und klickt\nauf den Knoten mit dem M, den Ihr soeben erstellt habt.");
    } else {
        await sayAndWait("Der nächste Buchstabe ist ein A. Tippt es also ein und klickt\nauf den Knoten mit dem M, den Ihr soeben erstellt habt.");
        await saySlow("Übrigens, da Ihr vorher \"versehentlich\" kein M\nhinzugefügt habt, solltet Ihr das jetzt noch ändern.");
    }
    setTask("Zweiten Buchstaben einfügen");
    await setContinuation("A anhängen");
    await waitForTreeString("MA");
    setTask();

    await sayAndWait("Gut, das wiederholt Ihr nun noch einmal mit dem X,\nund dann mit dem M, und dann...");
    await sayAndWait("Ach was!");
    await sayAndWait("Ihr versteht schon!");
    await saySlow("Erweitert den Baum also so, dass er den gesamten\nSuffix MAXMAUS enthält! Ich warte solange...");

    setTask("MAXMAUS vollständig einfügen");
    await setContinuation("XMAUS anhängen");
    await waitForTreeString("MAXMAUS");
    setTask();
    setTreeAllowInput(false);
    await sayAndWait("Das ging ja schnell!");

    await sayAndWait("Dann wollen wir geschwind den nächsten Suffix hinzufügen!");
    await sayAndWait("Wie Ihr Euch sicherlich schon denken\nkönnt, ist das der Suffix AXMAUS.");
    await sayAndWait("Ab jetzt müssen wir aber etwas aufpassen!");
    await sayAndWait("Wir müssen nämlich darauf achten, dass wir\nniemals den gleichen Knoten mehrfach erstellen!");
    await sayAndWait("Das wäre fatal! Der Suffix-Baum würde dann\nnicht mehr richtig funktionieren!");
    await sayAndWait("Also müssen wir prüfen, ob am jeweiligen Knoten schon ein\nKind mit dem entsprechenden Buchstaben existiert.");
    await sayAndWait("Und zwar angefangen bei der Wurzel!");
    await sayAndWait("In diesem Fall hängt noch kein A an der\nWurzel, nur ein M.");
    await saySlow("Also müssen wir einen neuen Knoten mit dem\nBuchstaben A an der Wurzel anhängen.");
    setTask("Suffix AXMAUS einfügen");
    await setContinuation("A an Wurzel anhängen");
    await waitForTreeChange();
    setTreeAllowInput(false);
    await sayAndWait("Nun machen wir mit dem Rest des Suffixes weiter.");
    await sayAndWait("Wir prüfen also, ob an dem Knoten mit dem A\nschon ein X hängt.");

    await sayAndWait("Das tut es nicht, also müssen wir einen neuen Knoten\nmit dem Buchstaben X an das A anhängen.");
    await sayAndWait("Und so weiter...");
    await saySlow("Ich warte solange, bis Ihr den Suffix AXMAUS\nin den Baum eingefügt habt.");
    await setContinuation("XMAUS anhängen");
    await waitForTreeString("MAXMAUSAXMAUS");
    setTreeAllowInput(false);
    await sayAndWait("Hervorragend! Ihr werdet wirklich immer schneller!");
    setTask();

    await saySlow("Sicherlich schafft Ihr es auch, den Suffix\nXMAUS in den Baum einzufügen!");
    setTask("Suffix XMAUS einfügen");
    await setContinuation("XMAUS an Wurzel hängen");
    await waitForTreeString("MAXMAUSAXMAUSXMAUS");
    setTreeAllowInput(false);
    await sayAndWait("Sehr gut! Ihr seid wirklich ein Meister!");
    setTask();
    await sayAndWait("Nun...");
    await sayAndWait("Natürlich kein richtiger Meister wie Ich, höhöhöhö!");
    await sayAndWait("Aber Ihr seid auf jeden Fall schon sehr gut!");

    await sayAndWait("Machen wir weiter...");
    await sayAndWait("Nun wollen wir den Suffix MAUS hinzufügen.");
    setTask("Suffix MAUS einfügen");
    await sayAndWait("Aber diesmal müssen wir wirklich ganz genau aufpassen!");
    await sayAndWait("Ihr habt sicherlich bemerkt, dass wir schon eine\nKante mit dem Buchstaben M an der Wurzel haben.");
    await sayAndWait("Richtet Euren Blick also auf diese Kante mit dem M!");
    await sayAndWait("Sie führt zu einer Kante mit dem Buchstaben A.");
    await sayAndWait("Und wir wollen schließlich den Suffix MAUS\nhinzufügen! Das passt also!");
    await sayAndWait("Das U hingegen passt nicht, denn es gibt am A\nnoch keine Kante mit dem Buchstaben U.");

    await saySlow("Ihr seid bestimmt schon auf die Lösung gekommen!\nProbiert es einfach aus!");
    await setContinuation("U an A anhängen");
    await waitForTreeString("MAXMAUSUAXMAUSXMAUS");
    setTreeAllowInput(false);

    await sayAndWait("Ach, Ihr habt es ja schon gemacht!");
    await saySlow("Fehlt nur noch das S!");
    await setContinuation("S an U anhängen");
    await waitForTreeString("MAXMAUSUSAXMAUSXMAUS");
    setTreeAllowInput(false);

    await sayAndWait("Ihr seid wahrhaftig der beste Schüler, den Ich je hatte!");
    setTask();
    await sayAndWait("Ich bin stolz auf Euch!");
    await sayAndWait("Ich denke, Ihr schafft es auch, den Suffix\nAUS in den Baum einzufügen!");
    await saySlow("Vergesst nur nicht, auf das A zu achten!");
    setTask("Suffix AUS einfügen");
    await setContinuation("AUS an Wurzel anhängen");
    await waitForTreeString("MAXMAUSUSAXMAUSUSXMAUS");
    setTreeAllowInput(false);
    await sayAndWait("Echt klasse! Und so schnell!");
    setTask();

    await saySlow("Gewiss schafft Ihr auch noch die letzten beiden\nSuffixe, US und S!");
    await setContinuation("US und S anhängen");
    await waitForTreeString("MAXMAUSUSAXMAUSUSXMAUSUSS");
    setTreeAllowInput(false);
    await sayAndWait("100% richtig! Jetzt habt Ihr wirklich alles gelernt!");
    await sayAndWait("Der Baum ist vollständig!");
    await sayAndWait("Um ihn zu testen, könnt Ihr ja mal nachschauen,\nob Ihr beliebige Teile von MAXMAUS finden könnt!");
    setTask("Baum testen");
    await sayAndWait("Zum Beispiel MAU! Oder AXMA! Fangt einfach\nimmer bei der Wurzel an. Die Welt ist Euer!");

    await sayAndWait("Wenn Ihr das schafft, könnt Euch wahrhaftig\nals Suffix-Baum-Meister bezeichnen!");
    setTask();

    ending();
}