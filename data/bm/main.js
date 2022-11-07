bm_main = () =>
{
    bm_initHandler(); // handler einrichten

    // wenn fail, dann main oder introduction reloaden
    // wenn finaler success, dann ending laden und handler removen

}

bm_initHandler = () =>
{
    // movement + checks
    let index = 0;

    onkeydown = event =>
    {
        switch (event.key) {
            case "ArrowRight":
                if (index + 1 <= text.getChildren().length - search.getChildren().length)
                {
                    search.moveBy(`calc(${childSize[0]} + ${childPadding})`);
                    ++index;
                }
                break;

            case "ArrowLeft":
                if (index > 0)
                {
                    search.moveBy(`calc(-${childSize[0]} - ${childPadding})`);
                    --index;
                }
                break;
        }
    }
}

bm_removeHandler = () =>
{
    onkeydown = () => {};
}

