let app, rico, bullets, isRunning;
function init()
{
    app = new PIXI.Application
    ({
        width: window.innerWidth, height: window.innerHeight, resizeTo: window, backgroundAlpha: 0
    });
    document.body.appendChild(app.view);

    rico = PIXI.Sprite.from("/data/images/rico.PNG");
    rico.anchor.set(.5, 1);
    rico.x = window.innerWidth / 2;
    rico.y = window.innerHeight;
    rico.tint = 0x00aa00;
    app.stage.addChild(rico);

    bullets = [];
    isRunning = false;
}

onmousemove = (event) =>
{
    rico.x = event.clientX;
}

let bullet, intensity = 1;
onclick = (event) =>
{
    if (!isRunning)
    {
        return;
    }

    bullet = PIXI.Sprite.from("/data/images/rico.PNG");
    bullet.anchor.set(.5, 1);
    bullet.width = 5;
    bullet.height = 5;
    bullet.x = rico.x;
    bullet.y = rico.y - rico.height;
    bullet.tint = 0x00ff00;
    app.stage.addChild(bullet);
    bullets.push(bullet);

    $("body").css("background-size", "" + intensity++ + "%");
}

const bulletSpeed = 10;
function gameLoop(delta)
{
    for (let i = 0; i < bullets.length;)
    {
        bullets[i].y -= bulletSpeed * delta;

        if (bullets[i].y < 0)
        {
            app.stage.removeChildAt(app.stage.children.indexOf(bullets[i]));
            bullets.shift();
            continue;
        }

        ++i;
    }
}

let canEliminate = false;
function ELIMINATE()
{
    if (!canEliminate)
    {
        canEliminate = true;

        document.getElementById("start").innerText = "!!!LEFT CLICK TO KILL!!!";
    }
    else
    {
        init();
        app.ticker.add((delta) => gameLoop(delta));

        document.getElementById("bg").removeChild(document.getElementById("start"));
        isRunning = true;
    }
}





