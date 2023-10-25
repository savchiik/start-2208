window.onload = function () {
    const div = document.getElementById("thisDiv");
    let divStyle = getComputedStyle(div);
    console.log(`Зовнішній відступ = ${divStyle.margin}`);

    div.onclick = () => alert(`Зовнішній відступ = ${divStyle.margin}`);
}