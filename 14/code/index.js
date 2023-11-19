window.addEventListener("DOMContentLoaded", () => {
    const preloader = document.querySelector(".preloader");
    setTimeout(() => { preloader.classList.add("hide") }, 3000)
})
let carsData;
let currentPageIndex = 0;
const locationPlanet = "https://rickandmortyapi.com/api/location";
const randomIDLocation = Math.floor(Math.random() * 126) + 1;
const body = document.querySelector(".characters .body")
/*
const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("+")
    }, 13000)
    setTimeout(() => {
        reject("+")
    }, 5000)
})

pro.then((info)=>{
    console.log(info);
}).catch(()=>{})
*/

//const req = fetch("https://rickandmortyapi.com/api/location");
/*
req.then((data)=>{
   return data.json()
}).then(data => {
    console.log(data);
})
*/

const req = async function (url) {
    const data = await fetch(url);
    if (data.status === 200) {
        return data.json()
    } else {
        throw new Error("Error Fetch :" + data.status)
    }
}

function showRandomLoaction({ name, type, dimension, created }) {
    document.querySelector("#name .data").innerHTML = name;
    document.querySelector("#type .data").innerHTML = type;
    document.querySelector("#dimension .data").innerHTML = dimension;
    document.querySelector("#created .data").innerHTML = created;
}

/* req("https://rickandmortyapi.com/api/character/")
    .then(cars => {
        if (!Array.isArray(cars.results)) throw new Error("Ми отримали не масив :(")
        nextAndPrev(cars.info)
        cars.results.map(car => {
            createElementCharacters(car)
        })
    }) */
    req("https://rickandmortyapi.com/api/character/")
    .then(cars => {
        if (!Array.isArray(cars.results)) throw new Error("Ми отримали не масив :(")
        carsData = cars; 
        nextAndPrev();
        updateDisplayedCards(); 
    });

function createElementCharacters({ image, name, status, id }) {
    const card = document.createElement("div"),
    imageEL = document.createElement("img"),
    nameEL = document.createElement("div"),
    statusEL = document.createElement("div"),
    go = document.createElement("button"),
    addFavirite = document.createElement("button"),
    info = document.createElement("div"),
    starIcon = document.createElement("i");

    

    card.classList.add("card");
    imageEL.classList.add("card-image");
    go.classList.add("go");
    addFavirite.classList.add("start");
    info.classList.add("characters-iformation");
    starIcon.classList.add("fa-solid", "fa-star");
    addFavirite.appendChild(starIcon);

    card.append(imageEL, go, addFavirite, info);
    info.append(nameEL, statusEL);
    body.append(card);
    
    

    imageEL.src = image;
    imageEL.alt = name;
    go.textContent = "Go";
    nameEL.innerHTML = `<div><div class="bold">Name</div><div>${name}</div></div>`;
    statusEL.innerHTML = `<div><div class="bold">Status</div><div>${status}</div></div>`;

    imageEL.addEventListener("click", () => {
        // клик для увеличения изображения
        const modal = document.getElementById("myModal");
        const modalImage = document.getElementById("modalImage");
        modal.style.display = "block";
        modalImage.src = image;
    });

    // закрыть на крестик
    const closeModal = document.querySelector(".close");
    closeModal.addEventListener("click", () => {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
    });

    // закрытие вне картинки
    window.addEventListener("click", (event) => {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


/* ............................................................ */
// Відобразити модалку з даними.

/* function createElementCharactersDop({ image, name, status, id }) {
    const card1 = document.createElement("div"),
        imageEL1 = document.createElement("img"),
        nameEL1 = document.createElement("div"),
        statusEL1 = document.createElement("div"),
        info1 = document.createElement("div");

    card1.classList.add("card1");
    imageEL1.classList.add("card-image1");
    info1.classList.add("characters-iformation1");

    card1.append(imageEL1, info1);
    info1.append(nameEL1, statusEL1);
    body.append(card1);

    imageEL1.src = image;
    imageEL1.alt = name;
    nameEL1.innerHTML = `<div><div class="bold">Name</div><div>${name}</div></div>`;
    statusEL1.innerHTML = `<div><div class="bold">Status</div><div>${status}</div></div>`;
} */

    // Создаем переменные для нового модального окна
const modal3 = document.getElementById("myModal3");
const modalImage3 = document.getElementById("modalImage3");
const modalBox3 = document.getElementById("modalBox3");



// Обработчики событий для кнопки "GO" и закрытия модального окна
go.addEventListener("click", () => {
    modal3.style.display = "flex";
        modalImage3.src = image;
   /*  try { */
        
        /* const apiUrl = "https://rickandmortyapi.com/api/character/";
        const apiData = await fetchData(apiUrl);

        if (apiData) {
            // Очистка содержимого модального окна перед новым запросом
            modalBox3.innerHTML = "";
            createElementCharactersDop(apiData.results[0]);
        } else {
            console.error("Invalid API data format or empty results array.");
        }
    } catch (error) {
        console.error("Error:", error);
    } */
/* }); */});
    const closeButton3 = document.querySelector(".close3");
    closeButton3.addEventListener("click", () => {
    const modal3 = document.getElementById("myModal3");
    modal3.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        const modal3 = document.getElementById("myModal3");
        if (event.target === modal3) {
            modal3.style.display = "none";
        }
});
/* async function fetchData(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (Array.isArray(data.results) && data.results.length > 0) {
            return data;
        } else {
            throw new Error("Invalid API data format or empty results array.");
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return null;
    }
} */

    // записати почтоного пересонажа до себе в локальне сховище.
    addFavirite.addEventListener("click", () => {
        addFavirite.classList.add("filled");

        const existingFavorites = JSON.parse(localStorage.getItem("favorite")) || [];
        const newCharacter = { id, image, name, status };

        const isAlreadyFavorited = existingFavorites.some((character) => character.id === newCharacter.id);

        if (!isAlreadyFavorited) {
            existingFavorites.push(newCharacter);
        } else {
            const indexToRemove = existingFavorites.findIndex((character) => character.id === newCharacter.id);
            existingFavorites.splice(indexToRemove, 1);
            addFavirite.classList.remove("filled");
        }

        localStorage.setItem("favorite", JSON.stringify(existingFavorites));
        console.log("тест:", existingFavorites);
    });
}
//При настиску оновити дані карточок, показати нову порцію

function nextAndPrev() {
    const _next = document.getElementById("next");
    const _prev = document.getElementById("prev");

    _next.addEventListener("click", (event) => {
        event.preventDefault();
        if (currentPageIndex < carsData.results.length - 3) {
            currentPageIndex++;
            updateDisplayedCards();
        }
    });

    _prev.addEventListener("click", (event) => {
        event.preventDefault();
        if (currentPageIndex > 0) {
            currentPageIndex--;
            updateDisplayedCards();
        }
    });
}
function updateDisplayedCards() {
    
    body.innerHTML = "";
    const displayedCards = carsData.results.slice(currentPageIndex, currentPageIndex + 3);
    displayedCards.forEach(car => {
        createElementCharacters(car);
    });
}

req(locationPlanet + "/" + randomIDLocation)
    .then((data) => {
        showRandomLoaction(data);
        nextAndPrev();
    });