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
    background: url('/data/images/rico.PNG');
    background-size: cover;
`).
alignTo("top-center");

const continuation = new JF_Text(master).
styleClass("small_font").
alignTo("bottom-center", ".1vw");

const tree = new JF_Element(container);
tree.setID("tree-container")