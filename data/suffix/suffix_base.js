// DEFs
const childSize = ["3.5vw", "6vw"];
const childPadding = "1vw";

// main container
const container = new JF_Window().
    styleClass("standard_jf_window_style");

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
alignTo("bottom-center", "1.6vw");

// tasks
const tasks = new JF_Element(container).
styleClass("tasks small_font").
alignTo("bottom-center", "1vw").
applyText("Aufgabe: -");

// notes
const notes = new JF_Element(container);
notes.styleClass("notes standard_font").
style(`
    background: url('/data/images/notizzettel.png');
    background-size: cover;
`).
alignTo("bottom-right").
applyText("j = ja\nn = nein\nb = bereit").
moveTextBy("0px", ".7vw");

// picture for master and puzzle
const pic = new JF_Element(container).
styleClass("pic").
alignTo("bottom-center", "7vw");

// tree canvas
const tree = new JF_Element(container).
setID("tree-container").
alignTo("top-center", "20vw");

// input text field
const input_text = new JF_Element(container).
styleClass("standard_font").
style('font-size: 3vw;').
setID("input_text").
alignTo("bottom-center", "34vw").
applyText("");


let next = false;
waitUserInput = async () => {
    while (next === false) await new Promise(res => setTimeout(res, 50));
    next = false; // reset var
}

waitForClick = async (obj = document.body) => {
    continuation.applyText("(mit Maus klicken)").style(`
        animation: continuation 3s infinite alternate;
        animation-delay: 3s;
    `);
    obj.onclick = () => next = true;
    obj.oncontextmenu = () => next = true;
    await waitUserInput();
    obj.onclick = () => {};
    obj.oncontextmenu = () => {};
    continuation.applyText("").css("animation", "");
}

waitForTreeChange = async () => {
    setTreeAllowInput(true);
    continuation.applyText("(auf Baum klicken)").style(`
        animation: continuation 3s infinite alternate;
        animation-delay: 3s;
    `);
    task("Baum verändern");
    while (true) {
        let oldTree = root.getTreeString();
        console.log(oldTree);
        await waitForClick();
        await new Promise(res => setTimeout(res, 50));
        if (root.getTreeString() !== oldTree) break;
    }
}

waitForTreeString = async (treeString = "") => {
    setTreeAllowInput(true);
    while (true) {
        await waitForTreeChange();
        console.log(root.getTreeString());
        if (root.getTreeString() === treeString) break;
    }
}

waitForKeyPressed = async (key = "b") => {
    continuation.applyText(`(Taste ${key} drücken)`).style(`
        animation: continuation 3s infinite alternate;
        animation-delay: 2s;
    `);
    onkeydown = e => next = e.key === key;
    await waitUserInput();
    onkeydown = () => {};
    continuation.applyText("").css("animation", "");
}

waitForLetterPressed = async () => {
    setTreeAllowInput(true);
    continuation.applyText(`(Beliebigen Buchstaben drücken)`).style(`
        animation: continuation 3s infinite alternate;
        animation-delay: 2s;
    `);
    while (true) {
        let oldInputText = input_text.self().innerText;
        console.log(oldInputText);
        await new Promise(res => setTimeout(res, 50));
        if (input_text.self().innerText !== oldInputText) break;
    }
}

let lastKeyPressed = "";
waitFor1of2KeysPressed = async (keys = ["j", "n"]) => {
    continuation.applyText(`(Taste ${keys[0]} oder ${keys[1]} drücken)`).style(`
        animation: continuation 3s infinite alternate;
        animation-delay: 2s;
    `);
    onkeydown = e =>
    {
        if (e.key === keys[0] || e.key === keys[1])
        {
            next = true;
            lastKeyPressed = e.key;
        }
    };
    await waitUserInput();
    onkeydown = () => {};
    continuation.applyText("").css("animation", "");
}

saySlow = async (text = "",  wait = 75) => {
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

task = (task = "-") => {
    tasks.applyText("Aufgabe: " + task)
}

// load picture for master or puzzle
showPicture = (path = "") => {
    pic.style(`
        visibility: visible;
        background: url(${path});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    `);
}

hidePicture = () => {
    pic.css("visibility", "hidden");
}

sayAndWait = async (text = "") => {
    await saySlow(text);
    await waitForClick();
}

sayAndWaitForTreeChange = async (text = "") => {
    await saySlow(text);
    await waitForTreeChange();
}