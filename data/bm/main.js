main = async () =>
{
    // init
    enableDragging();

    const example = bm_examples[Math.floor(Math.random() * bm_examples.length)];

    text.removeChildren().addChildrenByText(example[0]);
    search.removeChildren().addChildrenByText(example[1]);

    textSelect([example[1].length - 1]);
    searchSelect([example[1].length - 1]);


    // game


}

const bm_examples =
[
    ["Abrakadabra", "ada", 0]       // Text, Muster, Index
]

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

