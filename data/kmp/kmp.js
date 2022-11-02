const font = restoreVar("font");

const container = new JF_Window().
style(restoreVar("JF_Window_style"));

new JF_Text(container).
styleText(font).
textSize("5vw").
applyText("Dies ist eine Überschrift").
alignTo("top-center", "1vw");

const c2 = new JF_Element(container).
style(`
    width: 90%;
    height: 50%;
    border: thin solid white;
`);

const pattern = new JF_PatternContainer(c2);
pattern.childrenStyle(`
    background: lightblue;
    border: thin solid white;
`).
padding("1.5vw").
alignTo("top-left").
addChildrenByText("Hallo, Welt").
sizingByChildren(true, ["5vw","10vw"]).
forEachChild(child =>
{
    new JF_Text().
    styleText(font).
    textSize("2vw").
    applyText(pattern.getIndexOf(child) + 1).
    attachTo(child, "bottom-center", "0.5vw")

    child.self().onmouseenter = () => child.saveContext().background("orange");
    child.self().onmouseleave = () => child.restoreContext();
})

const pattern2 = new JF_PatternContainer(c2);
pattern2.childrenStyle(`
    background: lightblue;
    border: thin solid white;
`).
padding("1.5vw").
alignTo("bottom-left").
addChildrenByText("123").
sizingByChildren(true, ["5vw","10vw"])

new JF_Text().
style(font).
attachTo(container, "bottom-center", "5vw").
applyText("F11 drücken für Vollbild")

//alert("Öffnen Sie den Vollbildmodus für das beste Spielerlebnis")