class Window
{
    #self;
    #titlebar;
    #body;
    #offsetX;
    #offsetY;

    constructor(x, y, w, h, title)
    {
        const b_size = "3px";

        this.#self = document.createElement("div");
        this.#self.style.position = "absolute";
        this.#self.style.left = x;
        this.#self.style.top = y;
        this.#self.style.width = w;
        this.#self.style.height = h;
        this.#self.style.border= `${b_size} outset black`;
        this.#self.style.background = "rgba(150, 150, 150, .75)";
        document.body.appendChild(this.#self);

        this.#titlebar = document.createElement("div");
        this.#titlebar.innerText = title;
        this.#titlebar.style.position = "absolute";
        this.#titlebar.style.width = "100%";
        this.#titlebar.style.height = "15px";
        this.#titlebar.style.boxSizing = "border-box";
        this.#titlebar.style.paddingLeft = "2px";
        this.#titlebar.style.background = "grey";
        this.#titlebar.style.cursor = "pointer";
        this.#titlebar.style.fontSize = "small";
        this.#self.appendChild(this.#titlebar);

        this.#body = document.createElement("div");
        this.#body.style.position = "absolute";
        this.#body.style.top = "15px";
        this.#body.style.width = "100%";
        this.#body.style.height = "calc(100% - 15px)";
        this.#self.appendChild(this.#body);

        const move = (e) =>
        {
            let x = e.clientX - this.#offsetX;
            let y = e.clientY - this.#offsetY;
            const w = this.#self.offsetWidth;
            const h = this.#self.offsetHeight;

            if (x < 0)
                x = 0;
            else if (x > window.innerWidth - w)
                x = window.innerWidth - w;

            if (y < 0)
                y = 0;
            else if (y > window.innerHeight - h)
                y = window.innerHeight - h;

            this.#self.style.left = `${x}px`;
            this.#self.style.top = `${y}px`;
        };

        const remove = (e) =>
        {
            document.removeEventListener("mousemove", move);
        }

        this.#titlebar.addEventListener("mousedown", (e) =>
        {
            this.#offsetX = e.clientX - this.#self.offsetLeft;
            this.#offsetY = e.clientY - this.#self.offsetTop;
            document.addEventListener("mouseup", remove);
            document.addEventListener("mousemove", move);
        });

    }
}