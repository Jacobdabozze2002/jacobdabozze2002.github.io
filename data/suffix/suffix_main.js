main = async () =>
{
    // init
    const bm_examples =
        [
            {string: "SIMSALABIM", pat_examples: ["ALABIM", "ABIM", "IMSAL"]},      // Text, Beispiele für Muster
            {string: "ABRAKADABRA", pat_examples: ["ADA", "BRA", "ABRA"]},
            {string: "MAXMAUS", pat_examples: ["MAX", "MAUS", "MAU", "XMAUS"], file: main_maxmaus},
        ]

    // const example = bm_examples[Math.floor(Math.random() * bm_examples.length)];
    const example = bm_examples[2];

    // start
    await example["file"]();

    // end
    /*ending();*/
}