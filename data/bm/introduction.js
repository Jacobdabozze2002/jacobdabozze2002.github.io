// masters instructions
const bm_intro_messages =
[
    "Story I",
    "Story II",
    "Story III",
    "von rechts nach links",
    "BC-Heuristik I",
    "BC-Heuristik II",
    "GS-Heuristik I",
    "GS-Heuristik II",
    "Bist Du bereit?"
];

bm_introduction = () =>
{
    // ersten Text anzeigen
    master.applyText(bm_intro_messages[0]);

    // bei Click nächsten Text anzeigen
    let index = 1;
    master.self().onclick = () =>
    {
        if (index === bm_intro_messages.length)
        {
            // handler entfernen
            master.self().onclick = () => {};

            // zusammenrollen und text entfernen
            master.applyText("");

            // main laden
            bm_main();
        }

        master.applyText(bm_intro_messages[index++]);
    }
}


