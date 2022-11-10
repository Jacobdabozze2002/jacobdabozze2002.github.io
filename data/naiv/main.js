main = async () =>
{

    // wenn fail, dann main oder introduction reloaden

    await example1();
    alert(213)

    // wenn finaler success, dann ending laden und handler removen
}

example1 = async () =>
{
    await saySlow("Hallo Michael!");
    await waitForClick();

    text.addChildrenByText("Suchtext_12345");
    search.addChildrenByText("Muster")

    enableDragging(); // handler einrichten
    await saySlow("Jetzt kannst Du das Muster bewegen!");
    await waitForClick();

    await saySlow("Drücke auf b, wenn Du fertig bist");
    await waitForKeyPressed("b");

    await saySlow("Gut gemacht, Arschloch!");

    return new Promise(res => setTimeout(res, 50));
}


