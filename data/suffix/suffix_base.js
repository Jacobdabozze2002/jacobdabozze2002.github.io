// DEFs
const childSize = ["3.5vw", "6vw"];
const childPadding = "1vw";

// main container
const container = new JF_Window().
    styleClass("standard_jf_window_style");

// T
const text = new JF_PatternContainer(container);
text.childrenStyleClass("child standard_font").
padding(childPadding).
sizingByChildren(true, childSize).
moveBy("0px", `calc(-${childSize[1]} + 5 * ${childPadding})`);

// M
const search = new JF_PatternContainer(container);
search.childrenStyleClass("child standard_font").
padding(childPadding).
sizingByChildren(true, childSize).
attachTo(text, "below-left");

// master Text
const master = new JF_Element(container);
master.styleClass("master standard_font").
style(`
    background: url('/data/images/schriftrolle.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
`).
moveTextBy("0px", "-.125vw").
alignTo("top-center", ".25vw");

const continuation = new JF_Text(master).
styleClass("small_font").
alignTo("bottom-center", ".1vw");

// tasks
const tasks = new JF_Element(container).
styleClass("tasks small_font").
alignTo("bottom-center", "1vw").
applyText("Aufgabe: -");

// notes
const notes = new JF_Element(container);
notes.styleClass("notes standard_font").
style(`
    background: url('/data/images/rico.PNG');
    background-size: cover;
`).
alignTo("bottom-right").
applyText("j = ja\nn = nein\nb = bereit").
moveTextBy("0px", ".225vw");

// picture for master and puzzle
const pic = new JF_Element(container).
styleClass("pic").
alignTo("bottom-center", "7vw");

const tree = new JF_Element(container);
tree.setID("tree-container")