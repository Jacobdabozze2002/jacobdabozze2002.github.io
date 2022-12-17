main = async () =>
{
    // init
    const kmp_examples =
        [
            ["ONIONIONSO", "ONIONS", Test],      // Text, Muster, Index
            ["ABCABCABDA","ABCABD", zweiterText]
        ]

    // const example = kmp_examples[Math.floor(Math.random() * kmp_examples.length)];
    const example = kmp_examples[0];

    text.removeChildren().addChildrenByText(example[0]);
    search.removeChildren().addChildrenByText(example[1]);

    // start
    await waitForClick();
    await example[2]();

    // clean up
    text.removeChildren();
    search.removeChildren();

    // end
    ending();
}