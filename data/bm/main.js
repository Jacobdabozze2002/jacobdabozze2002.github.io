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

    textSelect([example[1].length - 1]);
    searchSelect([example[1].length - 1]);

    // start
    let success = false;
    await example[2]();

    // handle success/ failure
}


abrakadabra = async () =>
{
    await saySlow("Guck mal! Gleich zu Beginn ist ein Mismatch aufgetreten.")
    await waitForClick(master.self());

    enableDragging();
    await saySlow("Du kannst nun das Muster verschieben!");
    await waitForClick();

    await saySlow("Drücke b, damit ich bescheid weiß, wenn Du fertig bist!");
    await waitForKeyPressed("b");

    await saySlow("Gut gemacht!");

    // return
    return new Promise(res => setTimeout(res, 50));
}



textSelect = (indizes = []) =>
{
    for (let i = 0; i < text.getChildren().length; ++i)
    {
        if (indizes.includes(i)) text.getChildren()[i].self().classList.add("childText_selected");
        else text.getChildren()[i].self().classList.remove("childText_selected");
    }
}

searchSelect = (indizes = []) =>
{
    for (let i = 0; i < search.getChildren().length; ++i)
    {
        if (indizes.includes(i)) search.getChildren()[i].self().classList.add("childSearch_selected");
        else search.getChildren()[i].self().classList.remove("childSearch_selected");
    }
}

move = (fields = 1) =>
{
    search.moveBy(`calc((${childSize[0]} + ${childPadding}) * ${fields})`);
}

