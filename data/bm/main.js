main = async () =>
{
    // init
    const bm_examples =
    [
        ["Abrakadabra", "ada", abrakadabra],      // Text, Muster, Index
    ]

    const example = bm_examples[Math.floor(Math.random() * bm_examples.length)];

    text.removeChildren().addChildrenByText(example[0]);
    search.removeChildren().addChildrenByText(example[1]);

    // start
    await example[2]();

    // clean up
    text.removeChildren();
    search.removeChildren();

    // end
    ending();
}



