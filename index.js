const template = document.getElementById("template");
const title = document.getElementById("title");
const details = document.getElementById("details");
const turret = document.getElementById("turret");
const hull = document.getElementById("hull");
const paint = document.getElementById("paint");
const protection = document.getElementById("protection");
const rewards = document.getElementById("rewards");
const notes = document.getElementById("notes");

[title, details, turret, hull, paint, protection, rewards, notes].forEach(input =>
{
    input.addEventListener("keyup", _ =>
    {
        reload_template();
    })
})

function copy()
{
    navigator.clipboard.writeText(template.value);
}

function reload_template()
{
    template.value = "";
    template.value += `# ${title.value || "no title"}\n** **\n`;

    template.value += `**Details:**\n`;
    template.value += `${details.value || "no details"}\n\n`;

    template.value += `**Equipment:**\n`;
    template.value += `Turret: ${turret.value || "no restriction"}\n`;
    template.value += `Hull: ${hull.value || "no restriction"}\n`;
    template.value += `Paint: ${paint.value || "no restriction"}\n`;
    template.value += `Protection: ${protection.value || "no restriction"}\n\n`;

    template.value += `**Rewards:**\n`;
    template.value += `${rewards.value || "no winners"}\n\n`;

    template.value += `**Notes:**\n`;
    template.value += `${notes.value || "no notes"}`;
}

reload_template();

