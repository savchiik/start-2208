/*
4.
- При завантаженні сторінки показати користувачеві поле введення (`input`) з написом `Price`. Це поле буде служити для введення числових значень
- Поведінка поля має бути такою:
- При фокусі на полі введення – у нього має з'явитися рамка зеленого кольору. При втраті фокусу вона пропадає.
- Коли забрали фокус з поля - його значення зчитується, над полем створюється `span`, в якому має бути виведений текст: 
. 
Поруч із ним має бути кнопка з хрестиком (`X`). Значення всередині поля введення фарбується зеленим.
- При натисканні на `Х` - `span` з текстом та кнопка `X` повинні бути видалені.
- Якщо користувач ввів число менше 0 - при втраті фокусу підсвічувати поле введення червоною рамкою, 
під полем виводити фразу - `Please enter correct price`. `span` зі значенням при цьому не створюється.
*/
const container = document.createElement("div");
container.classList.add("text-container");
let containerIsIn = false;

const span = document.createElement("span");

const erorrP = document.createElement("p");
erorrP.innerText = "Введіть правильну ціну!";

const btn = document.createElement("button");
btn.innerText = "x";
btn.addEventListener("click", () => {
    document.body.removeChild(container);
    containerIsIn = false;
})

function showSpan (input) {
    if (input.value<0){
        input.classList.add("red-text");
        input.classList.add("red");
        if (containerIsIn===true){
            document.body.removeChild(container);
            containerIsIn = true;
        }
        document.body.append(erorrP);
    }else{
        input.classList.add("green-text");
        span.innerText = input.value;
        container.append(span, btn)
        document.body.prepend(container)
        containerIsIn = true;
        document.body.removeChild(erorrP);
    }
    
}

function showInput (){
    const input = document.createElement("input");
    input.type = "number";
    input.placeholder = "Price";
    input.addEventListener("focus", () => {
        input.classList.add("green");
        input.classList.remove("red");
        input.classList.remove("green-text");
        input.classList.remove("red-text");
    })
    input.addEventListener("blur", (e) => {
        input.classList.remove("green");
        input.classList.remove("red");
        e.target.value!=="" ? showSpan(e.target) : alert("Введіть ціну в інпут!")
    })
    
    document.body.append(input)   

} 

export default showInput;