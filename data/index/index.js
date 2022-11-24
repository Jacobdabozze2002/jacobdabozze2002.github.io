// DEFs
const pages = restoreVar("pages");

// Hauptfenster - 16 / 9
const container = new JF_Window().
styleClass("standard_jf_window_style");

// Buttons
const levels = new JF_PatternContainer(container);
levels.
childrenStyleClass("child").
sizingByChildren(true, ["15vw", "15vw"]).
addChildren(4).
padding("5vw").
forEachChild(child =>
{
    let i = levels.getIndexOf(child);
    
    child.style(`
        background: ${pages[i][1] ? `url(${pages[i][2]})` : "url('/data/images/locked.PNG')"};
        background-size: cover;
    `);

    new JF_Text().
    styleClass("standard_font2").
    attachTo(child, "bottom-center", "1vw").
    applyText("Level " + (i + 1));
    
    child.self().onclick = () => pages[i][1] ? openPage(pages[i][0]) : null;
});

// Überschrift
new JF_Text().
styleClass("standard_font2").
textSize("5vw").
attachTo(levels, "top-center", "2vw").
applyText("Master Ocir's Grand Search");

// Link zu Konzept
new JF_Text(container).
styleClass("standard_font2 link").
applyText("Unser Konzept").
alignTo("bottom-center", ".75vw").
self().onclick = () => openPage(pages[4]);

// Spielempfehlung
new JF_Text().
styleClass("standard_font2").
attachTo(container, "top-center", "7.5vw").
applyText("öffnen und schließen Sie den Vollbildmodus mit F11");
