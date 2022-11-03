const font = restoreVar("font");

// main container
const container = new JF_Window().
style(restoreVar("JF_Window_style"));

// T 
const text = new JF_PatternContainer(container);
text.childrenStyle(`
    border: thin solid white;
    color: white;
`).
padding("1vw").
sizingByChildren(true, ["5vw", "8vw"]).
addChildrenByText("Mississippi").
moveBy("0px", "calc(-8vw + 2 * 1vw)").
forEachChild(child => 
{
    child.self().onmouseenter = () => child.saveContext().background("coral");
    child.self().onmouseleave = () => child.restoreContext();
})

// M
const search = new JF_PatternContainer(container);
search.childrenStyle(`
    border: thin solid white;
    color: white;
    cursor: pointer;
`).
padding("1vw").
sizingByChildren(true, ["5vw", "8vw"]).
addChildrenByText("sip").
attachTo(text, "below-left").
forEachChild(child =>
{
    child.self().onmouseenter = () => child.saveContext().background("purple");
    child.self().onmouseleave = () => child.restoreContext();
});

 