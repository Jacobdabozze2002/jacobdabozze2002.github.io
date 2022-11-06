// DEFs
const pages = restoreVar("pages");

// main container
const container = new JF_Window().
styleClass("standard_jf_window_style");

// T 
const text = new JF_PatternContainer(container);
text.childrenStyleClass("child1").
padding("1vw").
sizingByChildren(true, ["5vw", "8vw"]).
addChildrenByText("Mississippi").
moveBy("0px", "calc(-8vw + 2 * 1vw)");

// M
const search = new JF_PatternContainer(container);
search.childrenStyleClass("child2").
padding("1vw").
sizingByChildren(true, ["5vw", "8vw"]).
addChildrenByText("sip").
attachTo(text, "below-left");

// master Text
const master = new JF_Element(container).
styleClass("master").
alignTo("top-center")

// M movement
let index = 0;
onkeydown = event =>
{
    switch (event.key) {
        case "ArrowRight":
            if (index + 1 <= text.getChildren().length - search.getChildren().length) 
            {
                search.moveBy("6vw");
                ++index;
            }
            break;
            
        case "ArrowLeft":
            if (index > 0) 
            {
                search.moveBy("-6vw");  
                --index;
            }
            break;
    }
}