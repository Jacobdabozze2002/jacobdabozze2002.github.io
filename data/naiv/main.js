main = async () =>
{
    // init
   const naiv_examples =
       [
            ["Hexenbesen", "enb", hexenbesen],      // Text, Muster, Index
       ]

    const example = naiv_examples[Math.floor(Math.random() * naiv_examples.length)];

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

