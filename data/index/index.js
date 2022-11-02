// DEFs
const pages = restoreVar("pages");
const font = restoreVar("font");


// Hauptfenster - 16 / 9
const container = new JF_Window().
style(restoreVar("JF_Window_style"));

// Buttons
const levels = new JF_PatternContainer(container);
levels.padding("5vw").
addChildren(4).
sizingByChildren(true, ["15vw", "15vw"]).
forEachChild(child =>
{
    let i = levels.getIndexOf(child);
    
    child.style(`
        border: thin solid white;
        border-radius: 1vw;
        cursor: pointer;
        background: ${pages[i][1] ? `url(${pages[i][2]})` : "url('/data/images/locked.PNG')"};
        background-size: cover;
    `);

    // Texte für Buttons
    new JF_Text().
    styleText(font).textSize("2vw").
    attachTo(child, "bottom-center", "1vw").
    applyText("Level " + (i + 1));

    // Buttons Mouse Action
    child.self().onclick = () => pages[i][1] ? openPage(pages[i][0]) : null;
    child.self().onmouseenter = () => child.saveContext().border("medium solid white");
    child.self().onmouseleave = () => child.restoreContext();
});

// Überschrift
new JF_Text().
styleText(font).textSize("5vw").
attachTo(levels, "top-center", "1vw").
applyText("SUCHALGORITHMEN");

// Link zu Konzept
new JF_Text(container).
css("cursor", "pointer").
styleText(font).textSize("1.25vw").cssText("text-decoration", "underline").
alignTo("bottom-center", ".75vw").
applyText("Unser Konzept").
self().onclick = () => openPage(pages[4]);

// Spielempfehlung
new JF_Text().
styleText(font).textSize("2vw").
attachTo(container, "top-center", "7.5vw").
applyText("öffnen und schließen Sie den Vollbildmodus mit F11");


