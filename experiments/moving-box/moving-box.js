const string_container = document.getElementById("string");
const pattern_container = document.getElementById("pattern");

const str_letters = string_container.getElementsByClassName("letter");
const pat_letters = pattern_container.getElementsByClassName("letter");

let string = "ABCABDAB";
let pattern = "ABC";

// Start: Health (+ Events)
const health = new Health(3, "/data/images/heart.png", "hp");
health.onDecreaseHP = (hp) =>
{
    createLog("HP: " + hp);
}
health.onDeath = () =>
{
    createLog("DEAD");
    reset();
}
health.onRevival = () =>
{
    createLog("REVIVED");
}
// End: Health (+ Events)

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
    let total_offset = 0;
    for (let i = 0; i < pat_offset; i++) {
        let style = getComputedStyle(str_letters[i]);
        let single_offset = parseInt(style.width, 10) +
            parseInt(style.paddingRight, 10) * 2 +
            parseInt(style.borderWidth, 10) * 2 +
            parseInt(style.marginRight, 10);
        total_offset += single_offset;
    }

    pattern_container.style.marginLeft = `${total_offset}px`;
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
    if (idx_str === idx_pat + pat_offset && string[idx_str] === pattern[idx_pat]) {
        createLog("Match!")
        if (auto_increase) {
            increaseStr();
        }
    } else {
        createLog("No Match!")
        health.decreaseHP();
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
        case "c":
            compare();
    }
});

// Start: Console Functionality
const console_view = document.getElementById("console");

let b1 = document.createElement("div");
b1.classList.add("blocker");
b1.style.top = "0";
console_view.appendChild(b1);

let b2 = document.createElement("div");
b2.classList.add("blocker");
b2.style.bottom = "0";
console_view.appendChild(b2);

const h_before = console_view.clientHeight;
console_view.style.height = h_before + "px";
const h_after = console_view.clientHeight;
console_view.style.height = (2 * h_before - h_after) + "px";

function resize() {
    b1.style.width = "calc(" + (console_view.offsetWidth) + "px - 1em)";
    b2.style.width = "calc(" + (console_view.offsetWidth) + "px - 1em)";
}

function createLog(message) {
    let log = document.createElement("div");
    log.innerText = new Date().toLocaleTimeString() + " | " + message;
    console_view.appendChild(log);
    console_view.scrollTop = console_view.scrollHeight - console_view.clientHeight;
}

resize();
onresize = resize;
// End: Console Functionality


