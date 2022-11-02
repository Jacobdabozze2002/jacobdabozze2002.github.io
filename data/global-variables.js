const default_pages =
    [
        ["naiv", true, "/data/images/level1.PNG"],
        ["bm", false, "/data/images/level1.PNG"],
        ["kmp", false, "/data/images/level1.PNG"],
        ["suffix", false, "/data/images/level1.PNG"],
        "concept"
    ];  // [<page>, <is_unlocked>, <picture>]
if (!varExists("pages")) storeVar(default_pages, "pages");

const default_font =  `
       color: white;
       font-family: 'Brush Script MT', cursive;
`;
if (!varExists("font")) storeVar(default_font, "font");

const default_JF_Window_style = `
    width: 99.5%;
    border: thin solid white;
`;
if (!varExists("JF_Window_style")) storeVar(default_JF_Window_style, "JF_Window_style");
