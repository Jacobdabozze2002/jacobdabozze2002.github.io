// Hauptfenster - 16 / 9
const container = new JF_Window().
style(`
    width: 99.5%;
    border: thin solid white;
`);

// Buttons
const levels = new JF_PatternContainer(container);
levels.childrenStyle(`
    border: thin solid white;
    border-radius: 1vw;
    background: url('/data/images/locked.PNG');
    background-size: cover;
    cursor: pointer;
`).
sizingByChildren(true, ["15vw", "15vw"]).
padding("5vw").
addChildren(4).
getChildAt(0).style(`
    background: url('/data/images/level1.PNG');
    background-size: cover;
`);

// Texte für Buttons
for (let i = 0; i < 4; ++i)
{
    new JF_Text().
    styleText(`
        color: white;
        font-family: 'Brush Script MT', cursive;
        font-size: 2vw;
    `).
    attachTo(levels.getChildAt(i), "bottom-center", "1vw").
    applyText("Level " + (i + 1));
}

// Überschrift
new JF_Text().
styleText(`
    color: white;
    font-family: 'Brush Script MT', cursive;
    font-size: 5vw;
`).
attachTo(levels, "top-center", "1vw").
applyText("SUCHALGORITHMEN");

// Link zu Konzept
new JF_Text(container).
css("cursor", "pointer").
styleText(`
    color: white;
    font-family: 'Brush Script MT', cursive;
    font-size: 1.25vw;
    text-decoration: underline
`).
alignTo("bottom-center", ".75vw").
applyText("Unser Konzept").
self().onclick = () => openPage("concept");

// Spielempfehlung
new JF_Text().
styleText(`
    color: white;
    font-family: 'Brush Script MT', cursive;
    font-size: 2vw;
`).
attachTo(container, "top-center", "7.5vw").
applyText("öffnen und schließen Sie den Vollbildmodus mit F11");

// Buttons Mouse Action
const pages = ["naiv", "bm", "kmp", "suffix"];
for (let i = 0, child; i < 4; ++i)
{
    child = levels.getChildAt(i);
    child.self().onclick = () => openPage(pages[i]);
    child.self().onmouseenter = () => child.saveContext().border("medium solid white");
    child.self().onmouseleave = () => child.restoreContext();
}
