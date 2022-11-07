// masters instructions
const intro_messages =
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

introduction = () =>
{
    // ersten Text anzeigen
    master.applyText(intro_messages[0]);

    // bei Click nächsten Text anzeigen
    let index = 1;
    master.self().onclick = () =>
    {
        if (index === intro_messages.length)
        {
            // handler entfernen
            master.self().onclick = () => {};

            // zusammenrollen und text entfernen
            master.applyText("");

            // main laden
            main();
        }

        master.applyText(intro_messages[index++]);
    }
}


