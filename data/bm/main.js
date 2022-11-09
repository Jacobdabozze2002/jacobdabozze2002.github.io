main = () =>
{
    // init
    chooseExample();
    enableDragging();
    enableMouseOver();


}

const bm_examples =
[
    ["Mississippi", "sissi"],
    ["Banana", "nan"],
    ["Ananas", "nas"],
    ["Hexenbesen", "enbe"],
    ["Alohomora", "mora"]
]

chooseExample = () =>
{
    const example = bm_examples[Math.floor(Math.random() * bm_examples.length)];
    text.removeChildren().addChildrenByText(example[0]);
    search.removeChildren().addChildrenByText(example[1]);
}

enableMouseOver = () =>
{
    text.forEachChild(child => child.self().classList.add("childText"));
    search.forEachChild(child => child.self().classList.add("childSearch"));
}

disableMoueOver = () =>
{
    text.forEachChild(child => child.self().classList.remove("childText"));
    search.forEachChild(child => child.self().classList.remove("childSearch"));
}



