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
    for (let i = 0; i < bm_intro_messages.length; ++i)
    {
        await saySlow(bm_intro_messages[i]);
        await waitForClick();
    }
    main();
}


