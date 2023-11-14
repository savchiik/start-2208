const [...inputs] = document.querySelectorAll("input[type='radio']"),
    [...toppings] = document.querySelectorAll(".ingridients img"),
    pizza = {
        pizzaSize: { name: "big", price: 110 },
        pizzaSause: [],
        pizzaTopping: []
    },
    validatorREG = (value, pattern) => pattern.test(value),
    pizzaPrise = {
        pizzaSize: {
            small: 50,
            mid: 90,
            big: 110
        },
        pizzaSause: {
            sauceClassic: {
                price: 30,
                name: "Класік"
            },
            sauceBBQ: {
                price: 35,
                name: "BBQ"
            },
            sauceRikotta: {
                price: 30,
                name: "Білий"
            }

        },
        pizzaTopping: {
            moc1: {
                price: 40,
                name: "Чедер"
            },
            moc2: {
                price: 42,
                name: "Фета"
            },
            moc3: {
                price: 46,
                name: "Моцарелла"
            },
            telya: {
                price: 52,
                name: "Шинка"
            },
            vetch1: {
                price: 33,
                name: "Томати"
            },
            vetch2: {
                price: 37,
                name: "Гриби"
            }
        }
    },
    clearButton = document.getElementById("clearButton"),
    banner = document.getElementById("banner");

    function show(pizza) {
        const price = document.getElementById("price");
        const sauces = document.getElementById("sauces");
        const topping = document.getElementById("topping");
    
        const sauceEl = pizza.pizzaSause.map((sauce) => {
            const div = document.createElement("div");
    
            const sauceInfo = pizzaPrise.pizzaSause[sauce];
    
            div.innerText = `${sauceInfo.name} - ${sauceInfo.price} грн`;
    
            return div;
        });
    
        sauces.innerHTML = "";
        sauces.append(...sauceEl);
    
        const toppingEl = pizza.pizzaTopping.map((topping) => {
            const div = document.createElement("div");
            const countSpan = document.createElement("span");
            const increaseBtn = document.createElement("button");
            const decreaseBtn = document.createElement("button");
    
            countSpan.innerText = `(х ${topping.count || 0})`;
    
            increaseBtn.innerText = "+";
            increaseBtn.addEventListener("click", () => {
                topping.count = (topping.count || 0) + 1;
                show(pizza);
            });
    
            decreaseBtn.innerText = "-";
            decreaseBtn.addEventListener("click", () => {
                if (topping.count > 0) {
                    topping.count--;
                    show(pizza);
                }
            });
    
            const toppingInfo = pizzaPrise.pizzaTopping[topping.id];
            const toppingPrice = toppingInfo.price * topping.count;
    
            div.innerText = `${toppingInfo.name} - ${toppingPrice} грн`;
            div.appendChild(countSpan);
            div.appendChild(increaseBtn);
            div.appendChild(decreaseBtn);
    
            return div;
        });
    
        topping.innerHTML = "";
        topping.append(...toppingEl);
    
        let totalPrice = 0;
    totalPrice = pizza.pizzaSause.reduce((acc, s) => acc + pizzaPrise.pizzaSause[s].price, 0);
    totalPrice += pizza.pizzaSize.price;
    totalPrice += pizza.pizzaTopping.reduce((acc, t) => acc + pizzaPrise.pizzaTopping[t.id].price * t.count, 0);

    price.innerText = totalPrice;
    clearButton.style.display = (pizza.pizzaSause.length > 0 || pizza.pizzaTopping.length > 0) ? "block" : "none";
    }


inputs.forEach(input => {
    input.addEventListener("change", () => {
        pizza.pizzaSize = { name: input.value, price: pizzaPrise.pizzaSize[input.value] }
        show(pizza)
    })
})

// прцюємо з начінкою
toppings.forEach(function (topping) {
    topping.addEventListener("click", () => {
        /* console.log("Clicked Topping:", topping);  */
        addImgTable(topping.src);
        if (topping.id.includes("sauce")) {
            const sauceName = topping.id;
            pizza.pizzaSause = [sauceName];
        } else if (topping.dataset.topping === "topping") {
            const toppingId = topping.id;
            const existingTopping = pizza.pizzaTopping.find((t) => t.id === toppingId);

            if (existingTopping) {
                existingTopping.count = (existingTopping.count || 0) + 1;
            } else {
                pizza.pizzaTopping.push({ id: toppingId, count: 1 });
            }
        }
        show(pizza);
    });
});


function addImgTable(src) {
    const img = document.createElement("img");
    const table = document.querySelector(".table");
    img.src = src;
    table.append(img)
} 

// Контакти
const userName = document.getElementById("name"),
    userPhone = document.getElementById("phone"),
    userEmail = document.getElementById("email"),
    errorMessage = document.getElementById("error-message");

userName.addEventListener("input", () => {
    validateAndSetField(userName, /^[а-яґєїі-]{2,20}$/i, "userName");
    checkFormValidity();
});

userPhone.addEventListener("input", function () {
    validateAndSetField(userPhone, /^\+380\d{9}$/, "userPhone");
    checkFormValidity();
});

userEmail.addEventListener("input", function () {
    validateAndSetField(userEmail, /^[a-z.0-9-]+@[a-z.-0-9]+\.[a-z.]{2,8}$/, "userMail");
    checkFormValidity();
});

function validateAndSetField(inputField, pattern, fieldName) {
    const isValid = validatorREG(inputField.value, pattern);
    if (isValid) {
        inputField.classList.add("success");
        inputField.classList.remove("error");
        pizza[fieldName] = inputField.value;
    } else {
        inputField.classList.add("error");
        inputField.classList.remove("success");
        pizza[fieldName] = "";
    }
    return isValid;
}

function checkFormValidity() {
    const isValidForm = validateForm();
    errorMessage.innerText = isValidForm ? "" : "Будь-ласка, перевірте правильність набору данних";
}

function validateForm() {
    let isValid = true;

    if (!validateAndSetField(userName, /^[а-яґєїі-]{2,20}$/i, "userName")) {
        isValid = false;
    }

    if (!validateAndSetField(userPhone, /^\+380\d{9}$/, "userPhone")) {
        isValid = false;
    }

    if (!validateAndSetField(userEmail, /^[a-z.0-9-]+@[a-z.-0-9]+\.[a-z.]{2,8}$/, "userMail")) {
        isValid = false;
    }

    return isValid;
}

//скидка 


banner.addEventListener("click", applyDiscount);

function applyDiscount() {
  let totalPrice = 0;
  totalPrice = pizza.pizzaSause.reduce((acc, s) => acc + pizzaPrise.pizzaSause[s].price, 0);
  totalPrice += pizza.pizzaSize.price;
  totalPrice += pizza.pizzaTopping.reduce((acc, t) => acc + pizzaPrise.pizzaTopping[t.id].price * t.count, 0);

  const discountedPrice = parseFloat((totalPrice * 0.7).toFixed(2));

  price.innerText = discountedPrice;
}

//очистка
function clearSelection() {
    
    pizza.pizzaSause = [];
    pizza.pizzaTopping = [];

    
    const table = document.querySelector(".table");
    table.innerHTML = '';

    
    addImgTable("Pizza_pictures/klassicheskij-bortik_1556622914630.png");

    
    show(pizza);

    
    clearButton.style.display = "none";
}
clearButton.addEventListener("click", clearSelection);

/* const confirmOrderButton = document.querySelector('.button'); */

document.getElementById("test").onclick=function(e){
    e.preventDefault();
     /* alert("зупинено подію!"); */};

show(pizza)