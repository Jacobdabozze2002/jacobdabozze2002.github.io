const game_window = new JF_Window().
style(`
    width: 95%;
    border: medium solid orange;
    border-radius: .5vw;
    background: black;
`);

with (new JF_PatternContainer(game_window))
{
    style(`
        border: medium solid darkorange;
        border-radius: 1vw;
`   );
    childrenStyle(`
        border: thin solid orange;
        border-radius: .5vw;
        color: white;
`   );
    padding(".75vw");

    sizingByChildren(true, ["3vw", "10vw"]);
    addChildrenByText("Jacob war hier!");

    forEachChild(child =>
    {
        child.self().onmouseenter = () => child.saveContext().background("orangered");
        child.self().onmouseleave = () => child.restoreContext();
    });
}








