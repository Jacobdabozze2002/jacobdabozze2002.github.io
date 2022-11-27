main = async () =>
{
    // init
    const bm_examples =
        [
            {string: "simsalabim", pat_examples: ["ala", "abi", "ims"]},      // Text, Beispiele für Muster
            {string: "abrakadabra", pat_examples: ["ada", "bra", "abr"]},      // Text, Beispiele für Muster
        ]

    // const example = bm_examples[Math.floor(Math.random() * bm_examples.length)];

    // start
    await waitForClick();
    /*await example[2]();*/

    // clean up
    text.removeChildren();
    search.removeChildren();

    // end
    /*ending();*/
}