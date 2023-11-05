/*
5. Дано інпути. Зробіть так, щоб усі інпути втрати фокусу перевіряли свій вміст на правильну кількість символів. 
Скільки символів має бути в інпуті, зазначається в атрибуті data-length. 
Якщо вбито правильну кількість, то межа інпуту стає зеленою, якщо неправильна – червоною.
*/

const clearButton = document.getElementById('clear');

function showInputs () {
    for (let i = 1; i<=10; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = i===1 ? `Інпут для ${i} символу` : `Інпут для ${i} символів`;
        input.dataset.length = `${i}`;
        input.addEventListener("blur", (e) => {
            e.target.value.length === parseInt(e.target.dataset.length) ? 
            (e.target.classList.add("green"), e.target.classList.remove("red")) : 
            (e.target.classList.add("red"), e.target.classList.remove("green"));
        })
        document.body.append(input);
    }
}


clearButton.addEventListener("click", () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.value = '';
        input.style.borderColor = 'black';
    });
});

export default showInputs;