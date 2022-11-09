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
    "Steuerung",
    "Bist Du bereit?"
];

introduction = async () =>
{
    await say(bm_intro_messages);
    main();
}


