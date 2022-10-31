const game_window = new JF_Window().
style(`
    width: 95%;
    border: medium solid orange;
    border-radius: .5vw;
    background: black;
`);

const container = new JF_PatternContainer(game_window);
with (container)
{
    style(`
        border: medium solid darkorange;
        border-radius: 1vw;
`   );
    childrenStyle(`
        border: thin solid orange;
        border-radius: 3vw;
        color: white;
        font-size: 2.25vw;
`   );
    padding("1.25vw");

    sizingByChildren(true, ["5vw", "5vw"]);
    addChildrenByText("Jacob");

    forEachChild(child =>
    {
        child.self().onmouseenter = () => child.saveContext().style(`
            width: 5.75vw;
            height: 5.75vw;
            font-size: 4vw;
            border: thin solid white;
        `).
        moveBy("-.375vw").
        moveTextBy("0px", "-.25vw");
        
        child.self().onmouseleave = () => child.restoreContext();
    });
}

const text = new JF_Text().
style(`
    color: white;
    font-size: 3vw;
`).
attachTo(container, "top-center", "1vw").
applyText("Sein Name sei ...");

