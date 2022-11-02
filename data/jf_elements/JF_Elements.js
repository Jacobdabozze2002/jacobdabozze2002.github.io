class JF_Element
{
    #self;
    #text;
    #context;

    constructor(parent = document.body, createChildText = true)
    {
        this.#self = document.createElement("div");
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

    alignTo = (position = "center", offset = "0px") =>
    {
        this.#self.style.left = this.#self.style.right = this.#self.style.top = this.#self.style.left = this.#self.style.transform = "";

        switch (position)
        {
            case "top-left":
                this.#self.style.left = this.#self.style.top = `calc(0px + ${offset})`;
                break;
            case "top-center":
                this.#self.style.left = "50%";
                this.#self.style.top = `calc(0px + ${offset})`;
                this.#self.style.transform = "translateX(-50%)";
                break;
            case "top-right":
                this.#self.style.right = this.#self.style.top = `calc(0px + ${offset})`;
                break;
            case "center-left":
                this.#self.style.left = `calc(0px + ${offset})`;
                this.#self.style.top = "50%";
                this.#self.style.transform = "translateY(-50%)";
                break;
            case "center":
                this.#self.style.left = this.#self.style.top = "50%";
                this.#self.style.transform = "translate(-50%, -50%)";
                break;
            case "center-right":
                this.#self.style.right = `calc(0px + ${offset})`;
                this.#self.style.top = "50%";
                this.#self.style.transform = "translateY(-50%)";
                break;
            case "bottom-left":
                this.#self.style.left = this.#self.style.bottom = `calc(0px + ${offset})`;
                break;
            case "bottom-center":
                this.#self.style.left = "50%";
                this.#self.style.bottom = `calc(0px + ${offset})`;
                this.#self.style.transform = "translateX(-50%)";
                break;
            case "bottom-right":
                this.#self.style.right = this.#self.style.bottom = `calc(0px + ${offset})`;
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

    alignTextTo = (position = "center", offset = "0px") =>
    {
        this.#text.alignTo(position, offset);
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
    
    attachTo = (parent = null, position = "top-center", offset = "0px") =>
    {
        parent.appendChild(this);
        
        switch (position) 
        {
            case "top-left":
                this.alignTo("top-left");
                this.#self.style.transform = `translate(calc(-100% - ${offset}), calc(-100% - ${offset}))`;
                break;
            case "top-center":
                this.alignTo("top-center");
                this.#self.style.transform = `translate(-50%, calc(-100% - ${offset}))`;
                break;
            case "top-right":
                this.alignTo("top-right");
                this.#self.style.transform = `translate(calc(100% + ${offset}), calc(-100% - ${offset}))`;
                break;
            case "center-left":
                this.alignTo("center-left");
                this.#self.style.transform = `translate(calc(-100% - ${offset}), -50%)`;
                break;
            case "center-right":
                this.alignTo("center-right");
                this.#self.style.transform = `translate(calc(100% + ${offset}), -50%)`;
                break;
            case "bottom-left":
                this.alignTo("bottom-left");
                this.#self.style.transform = `translate(calc(-100% - ${offset}), calc(100% + ${offset}))`;
                break;
            case "bottom-center":
                this.alignTo("bottom-center");
                this.#self.style.transform = `translate(-50%, calc(100% + ${offset}))`;
                break;
            case "bottom-right":
                this.alignTo("bottom-right");
                this.#self.style.transform = `translate(calc(100% + ${offset}), calc(100% + ${offset}))`;
                break;
        }
        
        return this;
    }
}

class JF_Text extends JF_Element
{
    constructor(parent = document.body)
    {
        super(parent);
        this.alignText(false);
        this.width("max-content");
    }
}

class JF_Window extends JF_Element
{
    constructor(parent = document.body)
    {
        super(parent);

        this.self().style.aspectRatio = "16 / 9";
    }

    aspectRatio = (ratio = this.self().style.aspectRatio) =>
    {
        this.self().style.aspectRatio = ratio;
        return this;
    }
}

class JF_PatternContainer extends JF_Element
{
    #children;
    #style;
    #padding;
    #sizingByChildren;
    #cDim;

    constructor(parent = document.body)
    {
        super(parent);

        this.#children = [];
        this.#style = "";
        this.#padding = "0px";
        this.#sizingByChildren = false;
        this.#cDim = ["0px", "0px"];
    }

    childrenStyle = (css = "") =>
    {
        this.#style = css;
        this.#children.forEach(child => child.style(css));
        this.resize();
        return this;
    }

    resize = () =>
    {
        const amount = this.#children.length;
        let i = 0;

        if (this.#sizingByChildren)
        {
            this.width(`calc(${this.#cDim[0]} * ${amount} + ${this.#padding} * ${amount + 1})`);
            this.height(`calc(${this.#cDim[1]} + ${this.#padding} * 2)`);
        }

        this.#children.forEach(child =>
        {
            const width = `(100% - ${this.#padding} * ${amount + 1}) / ${amount}`;

            child.style(`
                width: calc(${width});
                height: calc(100% - ${this.#padding} * 2);
            `).
            alignTo("center-left").
            moveBy(`
                calc(${width} * ${i} + ${this.#padding} * ${++i} - .5px)
            `);
        });

        return this;
    }

    addChildren = (amount = 1) =>
    {
        for (let i = 0, child; i < amount; ++i)
        {
            child = new JF_Element(this).style(this.#style);
            this.#children.push(child);
        }

        this.resize();
        return this;
    }

    addChildrenByText = (text = "") =>
    {
        for (let i = 0, child; i < text.length; ++i)
        {
            child = new JF_Element(this).style(this.#style).applyText("" + text.charAt(i));
            this.#children.push(child);
        }

        this.resize();
        return this;
    }

    padding = (size = "0px") =>
    {
        this.#padding = size;
        this.resize();
        return this;
    }

    forEachChild = (func = () => {}) =>
    {
        this.#children.forEach(child => func(child));
        return this;
    }

    getChildren = () =>
    {
        return this.#children;
    }

    getIndexOf = (child = null) =>
    {
        return this.#children.indexOf(child);
    }

    getChildAt = (index = 0) =>
    {
        return this.#children[index];
    }

    textOverChildren = (text = "") =>
    {
        for (let i = 0, char; i < this.#children.length; ++i)
        {
            char = text.charAt(i);

            if (char !== "")
            {
                this.#children[i].applyText("" + char);
            }
        }

        return this;
    }

    removeChildren = () =>
    {
        for (let i = this.#children.length; i > 0; ++i)
        {
            this.#children.pop().self().remove();
        }

        this.resize();
        return this;
    }

    removeChildAt = (index = 0) =>
    {
        this.#children[index].self().remove();
        this.#children.splice(index, 1);
        this.resize();
        return this;
    }

    sizingByChildren = (enable = false, dimension = ["0px", "0px"]) =>
    {
        this.#sizingByChildren = enable;
        this.#cDim = dimension;
        this.resize();
        return this;
    }
}

