class Health
{
    #initialHP;
    #hp;
    #iconPath;
    #icons;
    #bgElement;
    onDeath = () => {};
    onRevival = () => {};
    /**
     * @Param hp = momentane HP
     */
    onDecreaseHP = (hp) => {};

    constructor(initialHP = 3, iconPath = "", bgID = "hp")
    {
        this.#initialHP = initialHP;
        this.#hp = initialHP;
        this.#iconPath = iconPath;
        this.#icons = [];
        this.#bgElement = document.getElementById(bgID);
        this.#draw();
    }

    decreaseHP(amount = 1)
    {
        this.#hp -= amount;
        this.#hp = this.#hp < 0 ? 0 : this.#hp;
        this.onDecreaseHP(this.#hp);
        this.#draw();

        if (this.#hp === 0)
        {
            this.onDeath();
            this.#reset();
            this.#draw();
            this.onRevival();
        }

        return this.#hp;
    }

    redraw()
    {
        this.#draw();
    }

    getIcons()
    {
        return this.#icons;
    }

    getHP()
    {
        return this.#hp;
    }

    #reset()
    {
        this.#hp = this.#initialHP;
    }

    #draw()
    {
        this.#bgElement.innerHTML = "";
        this.#icons = [];

        for (let i = 0, element; i < this.#hp; ++i)
        {
            element = document.createElement("img");
            element.src = this.#iconPath;
            this.#bgElement.appendChild(element);
            this.#icons.push(element);
        }
    }
}