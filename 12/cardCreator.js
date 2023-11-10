//cardCreator.js: Модуль для создания карточек.

export function createCard(data, properties) {
    const card = document.createElement("div");
    card.classList.add("card");

    properties.forEach(prop => {
        const propEl = document.createElement("div");
        propEl.innerText = `${prop.label}: ${data[prop.key]}`;
        card.appendChild(propEl);
    });

    document.body.appendChild(card);
}