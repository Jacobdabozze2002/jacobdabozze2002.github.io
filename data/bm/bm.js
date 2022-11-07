// DEFs
const childSize = ["3.5vw", "6vw"];
const childPadding = "1vw";

// main container
const container = new JF_Window().
styleClass("standard_jf_window_style");

// T 
const text = new JF_PatternContainer(container);
text.childrenStyleClass("child1 standard_font").
padding(childPadding).
sizingByChildren(true, childSize).
addChildrenByText("Mississippi").
moveBy("0px", `calc(-${childSize[1]} + 2 * ${childPadding})`);

// M
const search = new JF_PatternContainer(container);
search.childrenStyleClass("child2 standard_font").
padding(childPadding).
sizingByChildren(true, childSize).
addChildrenByText("sip").
attachTo(text, "below-left");

// master Text
const master = new JF_Element(container).
styleClass("master standard_font").
alignTo("top-center");

// notes
const notes = new JF_Element(container).
styleClass("notes standard_font").
alignTo("bottom-right").
applyText("note 1 \nnote 2\nnote 3");


// introduction laden
introduction();

