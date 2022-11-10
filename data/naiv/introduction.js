// masters instructions
const naiv_intro_messages =
[
    "Hier cklicken um wieter zu kommen",
    "In diesem Beispiel lernst du wie die Naive-Such funktioniert",
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
    for (let i = 0; i < naiv_intro_messages.length; ++i)
    {
         await saySlow(naiv_intro_messages[i]);
         await waitForClick();
    }

    main();
}


