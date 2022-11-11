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
const master = new JF_Element(container).
styleClass("master standard_font").
alignTo("top-center");

const continuation = new JF_Text(master).
styleClass("small_font").
alignTo("bottom-center");

// notes
const notes = new JF_Element(container).
styleClass("notes small_font").
alignTo("bottom-center", "1vw").
applyText("Aufgabe: -");


/*
    drag search pattern

    NOTE: if you want to use search.self().onmousedown, onmousemove, onmouseup, then
    override the jf_functions below in your own file.
    DO NOT OVERRIDE in this file!
 */
jf_search_onmousedown = () => {};
jf_onmousemove = () => {};
jf_onmouseup = () => {};

let jf_index = 0;  // current index of search in text
enableDragging = () =>
{
    let drag = false;
    search.self().onmousedown = e =>
    {
        drag = true;
        oldP = e.clientX;
        jf_search_onmousedown();
    }

    let oldP, newP, rectT, rectS;
    onmousemove = mouse =>
    {
        if (drag && text.getChildren().length > search.getChildren().length)
        {
            newP = mouse.clientX;
            search.moveBy(`${Math.round(newP - oldP) / container.self().clientWidth * 100}vw`);

            rectS = search.self().getBoundingClientRect();
            rectT = text.self().getBoundingClientRect();

            if (rectS.x < rectT.x) search.attachTo(text, "below-left");
            if (rectS.x > rectT.x + rectT.width - rectS.width) search.attachTo(text, "below-right");

            oldP = newP;
        }
        jf_onmousemove();
    }

    onmouseup = () =>
    {
        drag = false;

        if (rectT != null && rectS != null && text.getChildren().length > search.getChildren().length)
        {
            const childrenT =  text.getChildren().length;
            const padding = (rectT.width - childrenT * text.getChildAt(0).self().getBoundingClientRect().width) / (childrenT + 1);

            let min = 9999, distance, bounds;
            for (let i = 0; i < text.getChildren().length - search.getChildren().length + 1; ++i)
            {
                bounds = text.getChildren()[i].self().getBoundingClientRect();
                // padding * <x> regelt Punkt, ab dem M auf Child von T nach rechts geschoben wird
                distance = rectS.x - bounds.x + bounds.width / 2 - padding * 1.5; // hier: gleicher Platz
                distance = distance < 0 ? distance * -1 : distance;

                if (distance < min)
                {
                    min = distance;
                    jf_index = i;
                }
            }

            search.attachTo(text, "below-left");
            search.moveBy(`calc(${jf_index} * (${childSize[0]} + ${childPadding}))`)
        }
        jf_onmouseup();
    }

    text.childrenStyle("cursor: pointer;");
    search.childrenStyle("cursor: pointer;");
}

disableDragging = () =>
{
    search.self().onmousedown = () => {};
    onmouseup = () => {};
    onmousemove = () => {};

    text.childrenStyle("cursor: default;");
    search.childrenStyle("cursor: default;");
}

/*
    Master says text, click on master to continue
    uses master.self().onclick
*/
let next = false;
waitUserInput = async () =>
{
    while (next === false) await new Promise(res => setTimeout(res, 50));
    next = false; // reset var
}

waitForClick = async (obj = document.body) =>
{
    continuation.applyText("(mit Maus klicken)").style(`
        animation: continuation 3s infinite alternate;
        animation-delay: 3s;
    `);
    obj.onclick = () => next = true;
    await waitUserInput();
    obj.onclick = () => {};
    continuation.applyText("").css("animation", "");
}

waitForKeyPressed = async (key = "b") =>
{
    continuation.applyText(`(Taste ${key} drücken)`).style(`
        animation: continuation 3s infinite alternate;
        animation-delay: 5s;
    `);
    onkeydown = e => next = e.key === key;
    await waitUserInput();
    onkeydown = () => {};
    continuation.applyText("").css("animation", "");
}

saySlow = async (text = "",  wait = 75) =>
{
    let speedUp = false;
    onclick = () => speedUp = true;

    let sayed = "";
    for (let i = 0; i < text.length; ++i)
    {
        sayed += text[i];
        master.applyText(sayed);
        if (text[i] !== " " && !speedUp) await new Promise(res => setTimeout(res, wait));
    }

    onclick = () => {};

    return new Promise(res => setTimeout(res, 50));
}

move = (fields = 1) =>
{
    search.moveBy(`calc((${childSize[0]} + ${childPadding}) * ${fields})`);
}

task = (task = "-") =>
{
    notes.applyText("Aufgabe: " + task)
}

textSelect = (indizes = []) =>
{
    for (let i = 0; i < text.getChildren().length; ++i)
    {
        if (indizes.includes(i)) text.getChildren()[i].self().classList.add("childText_selected");
        else text.getChildren()[i].self().classList.remove("childText_selected");
    }
}

searchSelect = (indizes = []) =>
{
    for (let i = 0; i < search.getChildren().length; ++i)
    {
        if (indizes.includes(i)) search.getChildren()[i].self().classList.add("childSearch_selected");
        else search.getChildren()[i].self().classList.remove("childSearch_selected");
    }
}

let lastTextClicked = 0;
textSelectOnClickOn = () =>
{
    text.forEachChild(child =>
    {
        child.self().onclick = () =>
        {
            textSelect([text.getIndexOf(child)]);
            lastTextClicked = text.getIndexOf(child);
        }
        child.css("cursor", "pointer");
    });
}

textSelectOnClickOff = () =>
{
    text.forEachChild(child =>
    {
        child.self().onclick = () => {};
        child.css("cursor", "default");
    });
}
