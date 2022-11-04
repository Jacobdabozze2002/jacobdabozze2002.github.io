const default_pages =
    [
        ["naiv", true, "/data/images/level1.PNG"],
        ["bm", false, "/data/images/level2.PNG"],
        ["kmp", false, "/data/images/level3.PNG"],
        ["suffix", false, "/data/images/level4.PNG"],
        "concept"
    ];  // [<page>, <is_unlocked>, <picture>]
if (!varExists("pages")) storeVar(default_pages, "pages");
