main = async () =>
{
    // init
    const kmp_examples =
        [
            ["ONIONIONSON", "ONIONS", Test],      // Text, Muster, Index
            ["ABCABCABDAB","ABCABD", zweiterText]
        ]

    const example = kmp_examples[Math.floor(Math.random() * kmp_examples.length)];

    text.removeChildren().addChildrenByText(example[0]);
    search.removeChildren().addChildrenByText(example[1]);

    // start
    await waitForClick();
    await example[2]();

    // clean up
    text.removeChildren();
    search.removeChildren();
    abc.removeChildren();   //warum geht das nicht????????
    abc2.removeChildren();  //warum geht das nicht????????


    // end
    ending();       //wechselt nicht zu ending wahrscheinlich wegen clean up
}