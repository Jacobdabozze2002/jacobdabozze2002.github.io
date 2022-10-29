const game_window = new JF_Window().
style(`
    width: 95%;
    border: thin solid black;
    background: lightblue;
`);


for (let i = 0, max = 20, element; i < max;)
{
    element = new JF_Window(game_window).
    style(`
        width: calc(100% / ${max});
        border: thin solid orange;
        border-radius: 10%;
        background: black;
        color: white;
    `).
    aspectRatio("2 / 3").
    alignTo("center-left").moveBy(`calc(100% / ${max} * ${i})`).
    applyText( ++i + "")
}





