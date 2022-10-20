class Icon extends Image
{
    constructor(iconPath = "", parent = null)
    {
        super();
        this.src = iconPath;
        parent.appendChild(this);
    }

    /**
     * To be edited.
     */
    hide()
    {
        this.style.visibility = "hidden";
    }

    /**
     * To be edited.
     */
    show()
    {
        this.style.visibility = "visible";
    }
}

class Health
{
    #initialHP;
    #hp;
    #isAlive;
    #icons;
    /**
     * To be edited.
     */
    onDeath = () => {};
    /**
     * To be edited.
     */
    onDecreaseHP = (hp, icon) => {};
    /**
     * To be edited.
     */
    onRestoreHP = () => {};

    constructor(initialHP = 3, iconPath = "", bgID = "hp")
    {
        this.#initialHP = initialHP;
        this.#hp = initialHP;
        this.#isAlive = true;

        this.#icons = [];
        for (let i = 0; i < this.#initialHP; ++i)
        {
            this.#icons.push(new Icon(iconPath, document.getElementById(bgID)));
        }
    }

    restoreHP()
    {
        this.#isAlive = true;

        this.#hp = this.#initialHP;
        for (let i = 0; i < this.#icons.length; ++i)
        {
            this.#icons[i].show();
        }

        this.onRestoreHP();
    }

    decreaseHP()
    {
        if (!this.#isAlive)
        {
            return;
        }

        this.#hp = this.#hp - 1 < 0 ? 0 : this.#hp - 1;
        this.onDecreaseHP(this.#hp, this.#icons[this.#hp].hide());

        if (this.#hp === 0)
        {
            this.#isAlive = false;
            this.onDeath();
        }
    }

    alive()
    {
        return this.#isAlive;
    }

    getIcons()
    {
        return this.#icons;
    }

    getHP()
    {
        return this.#hp;
    }
}