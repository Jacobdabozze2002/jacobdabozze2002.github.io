class Health
{
    #initialHP;
    #hp;
    #iconPath;
    #bgElement;
    onDeath;
    onDecreaseHP;

    constructor(initialHP = 3, iconPath = "", bgID = "hp")
    {
        this.#initialHP = initialHP;
        this.#hp = initialHP;
        this.#iconPath = iconPath;
        this.#bgElement = document.getElementById(bgID);
        this.#draw();
    }

    decreaseHP(amount = 1)
    {
        this.#hp -= amount;
        this.onDecreaseHP();

        if (this.#hp <= 0)
        {
            this.onDeath();
            this.#reset();
        }

        this.#draw();
        return this.#hp;
    }

    #reset()
    {
        this.#hp = this.#initialHP;
    }

    #draw()
    {
        this.#bgElement.innerHTML = "";

        for (let i = 0, element; i < this.#hp; ++i)
        {
            element = document.createElement("img");
            element.src = this.#iconPath;
            this.#bgElement.appendChild(element);
        }
    }
}