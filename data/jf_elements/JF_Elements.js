class JF_Element
{
    #self;
    #text;
    #context;

    constructor(parent = document.body, createChildText = true)
    {
        this.#self = document.createElement("div");
        this.#self.className = "JF_Element";
        this.#self.style.width = "100%";
        this.#self.style.position = "absolute";
        this.alignTo();

        if (createChildText)
        {
            this.#text = new JF_Element(this.#self, false);
            this.text().style.width = "max-content";
            this.alignTextTo();
        }

        parent.appendChild(this.#self);
    }

    saveContext = () =>
    {
        this.#context = [this.#self.style.cssText, this.text().style.cssText, this.text().innerText];
        return this;
    }

    restoreContext = () =>
    {
        this.#self.style.cssText = this.#context[0];
        this.text().style.cssText = this.#context[1];
        this.text().innerText = this.#context[2];
        return this;
    }

    appendChild = (child) =>
    {
        if (child instanceof JF_Element)
        {
            this.#self.appendChild(child.self());
        }
        else
        {
            this.#self.appendChild(child);
        }

        return this;
    }

    alignTo = (position = "center") =>
    {
        this.#self.style.left = this.#self.style.right = this.#self.style.top = this.#self.style.left = this.#self.style.transform = "";

        switch (position)
        {
            case "top-left":
                this.#self.style.left = this.#self.style.top = "0";
                break;
            case "top-center":
                this.#self.style.left = "50%";
                this.#self.style.top = "0";
                this.#self.style.transform = "translateX(-50%)";
                break;
            case "top-right":
                this.#self.style.right = this.#self.style.top = "0";
                break;
            case "center-left":
                this.#self.style.left = "0";
                this.#self.style.top = "50%";
                this.#self.style.transform = "translateY(-50%)";
                break;
            case "center":
                this.#self.style.left = this.#self.style.top = "50%";
                this.#self.style.transform = "translate(-50%, -50%)";
                break;
            case "center-right":
                this.#self.style.right = "0";
                this.#self.style.top = "50%";
                this.#self.style.transform = "translateY(-50%)";
                break;
            case "bottom-left":
                this.#self.style.left = this.#self.style.bottom = "0";
                break;
            case "bottom-center":
                this.#self.style.left = "50%";
                this.#self.style.bottom = "0";
                this.#self.style.transform = "translateX(-50%)";
                break;
            case "bottom-right":
                this.#self.style.right = this.#self.style.bottom = "0";
                break;
        }

        return this;
    }

    alignToXY = (x = "0", y = "0") =>
    {
        this.#self.style.left = this.#self.style.right = this.#self.style.top = this.#self.style.left = this.#self.style.transform = "";

        this.#self.style.left = x;
        this.#self.style.top = y;

        return this;
    }

    self = () =>
    {
        return this.#self;
    }

    text = (getClass = false) =>
    {
        if (getClass)
        {
            return this.#text;
        }
        return this.#text.self();
    }

    style = (css = "") =>
    {
        const properties = css.replace(/(\r\n|\n|\r)/gm, "").split(";");
        properties.forEach(property =>
        {
            const pair = property.split(":");
            this.#self.style[pair[0].replace(/\s/g, '')] = pair[1];
            console.log(pair)
        })

        return this;
    }

    styleText = (css = "") =>
    {
        this.#text.style(css);
        return this;
    }

    css = (attribute = "", value = "") =>
    {
        this.#self.style[attribute] = value;
        return this;
    }

    cssText = (attribute = "", value = "") =>
    {
        this.text().style[attribute] = value;
        return this;
    }

    applyText = (text = this.text().innerText) =>
    {
        this.text().innerText = text;
        return this;
    }

    textSize = (size = this.text().style.fontSize) =>
    {
        this.text().style.fontSize = size;
        return this;
    }

    textColor = (color = this.text().style.color) =>
    {
        this.text().style.color = color;
        return this;
    }

    alignTextTo = (position = "center") =>
    {
        this.#text.alignTo(position);
        return this;
    }

    alignTextToXY = (x = "0", y = "0") =>
    {
        this.#text.alignToXY(x, y);
        return this;
    }

    setID = (id = "") =>
    {
        this.#self.id = id;
        return this;
    }

    setTextID = (id = "") =>
    {
        this.text().id = id;
        return this;
    }

    width = (width = this.#self.style.width) =>
    {
        this.#self.style.width = width;
        return this;
    }

    height = (height = this.#self.style.height) =>
    {
        this.#self.style.height = height;
        return this;
    }

    border = (border = this.#self.style.border) =>
    {
        this.#self.style.border = border;
        return this;
    }

    background = (bg = this.#self.style.background) =>
    {
        this.#self.style.background = bg;
        return this;
    }

    alignText = (enableAlignment = true) =>
    {
        this.cssText("position", enableAlignment ? "absolute" : "").alignTextToXY("0", "0");
        return this;
    }

    moveBy = (x = "0px", y = "0px") =>
    {
        this.#self.style.left = `calc(${this.#self.style.left} + ${x})`;
        this.#self.style.top = `calc(${this.#self.style.top} + ${y})`;
        return this;
    }

    moveTextBy = (x = "0px", y = "0px") =>
    {
        this.#text.moveBy(x, y);
        return this;
    }
}

class JF_Window extends JF_Element
{
    constructor(parent = document.body)
    {
        super(parent);

        this.self().className = "GameWindow";
        this.self().style.aspectRatio = "16 / 9";
    }

    aspectRatio = (ratio = this.self().style.aspectRatio) =>
    {
        this.self().style.aspectRatio = ratio;
        return this;
    }
}