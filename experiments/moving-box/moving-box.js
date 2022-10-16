const string_container = document.getElementById("string");
const pattern_container = document.getElementById("pattern");

const str_letters = string_container.getElementsByClassName("letter");
const pat_letters = pattern_container.getElementsByClassName("letter");

let string = "ABCABDAB";
let pattern = "ABD";

for (let i = 0; i < string.length; i++) {
    const letter = document.createElement("div");
    letter.classList.add("letter");
    letter.innerText = string[i];
    string_container.appendChild(letter);
}

for (let i = 0; i < pattern.length; i++) {
    const letter = document.createElement("div");
    letter.classList.add("letter");
    letter.innerText = pattern[i];
    pattern_container.appendChild(letter);
}

let idx_str = 0;
let idx_pat = 0;
let pat_offset = 0;

function updateHighlights() {
    for (let i = 0; i < str_letters.length; i++) {
        str_letters[i].classList.remove("highlight");
    }
    str_letters[idx_str].classList.add("highlight");

    for (let i = 0; i < pat_letters.length; i++) {
        pat_letters[i].classList.remove("highlight");
    }
    pat_letters[idx_pat].classList.add("highlight");
}

function movePattern() {
    let style = getComputedStyle(str_letters[0]);
    let single_offset = parseInt(style.width, 10) +
                        parseInt(style.paddingRight, 10) * 2 +
                        parseInt(style.borderWidth, 10) * 2 +
                        parseInt(style.marginRight, 10);

    pattern_container.style.marginLeft = `${pat_offset * single_offset}px`;
}

function increaseStr() {
    idx_str++;
    if (idx_str >= str_letters.length) {
        idx_str = 0;
    }
    updateHighlights();
}

function increasePat() {
    idx_pat++;
    if (idx_pat >= pat_letters.length) {
        idx_pat = 0;
    }
    updateHighlights();
}

function decreaseStr() {
    idx_str--;
    if (idx_str < 0) {
        idx_str = str_letters.length - 1;
    }
    updateHighlights();
}

function decreasePat() {
    idx_pat--;
    if (idx_pat < 0) {
        idx_pat = pat_letters.length - 1;
    }
    updateHighlights();
}

function increaseOff() {
    pat_offset++;
    if (pat_offset > string.length - pattern.length) {
        pat_offset = 0;
    }
    movePattern();
}

function decreaseOff() {
    pat_offset--;
    if (pat_offset < 0) {
        pat_offset = string.length - pattern.length;
    }
    movePattern();
}

function reset() {
    idx_str = 0;
    idx_pat = 0;
    pat_offset = 0;
    updateHighlights();
    movePattern();
}

function compare(auto_increase=false) {
    if (string[idx_str] === pattern[idx_pat]) {
        createLog("Match!")
        if (auto_increase) {
            increaseStr();
        }
    } else {
        createLog("No Match!")

    }
}

updateHighlights();

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowRight":
            increasePat();
            break;
        case "ArrowLeft":
            decreasePat();
            break;
        case "d":
            increaseStr();
            break;
        case "a":
            decreaseStr();
            break;
        case "w":
            increaseOff();
            break;
        case "s":
            decreaseOff();
            break;
        case "Space":
            compare();
    }
});

// Start: Console Functionality
const console = document.getElementById("console");

let b1 = document.createElement("div");
b1.classList.add("blocker");
b1.style.top = "0";
console.appendChild(b1);

let b2 = document.createElement("div");
b2.classList.add("blocker");
b2.style.bottom = "0";
console.appendChild(b2);

function resize()
{
    b1.style.width = "calc(" + (console.offsetWidth) + "px - 1em)";
    b2.style.width = "calc(" + (console.offsetWidth) + "px - 1em)";
}

function createLog(message)
{
    let log = document.createElement("div");
    log.innerText = new Date().toLocaleTimeString() + " | " + message;
    console.appendChild(log);
    console.scrollTop = console.scrollHeight - console.clientHeight;
}

resize();
onresize = resize;
// End: Console Functionality
