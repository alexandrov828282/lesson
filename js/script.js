// Даны инпуты с числами, абзац и кнопка. По нажатию на кнопку найдите сумму чисел из инпутов и запишите эту сумму в текст абзаца.

/* <input id="inp1" type="text" value="123">
<input id="inp2" type="text" value="456">
<p id="paragraph">абзац</p>
<input id="btn1" type="submit" value="кнопка"></input> */

let elemInp1 = document.querySelector("#inp1");
let elemInp2 = document.querySelector("#inp2");
let elemBtn = document.querySelector("#btn1");
let elemP = document.querySelector("#paragraph");
let elemWarning1 = document.querySelector("#warning1");
let elemWarning2 = document.querySelector("#warning2");

elemInp1.value = "Введите первое число";
elemInp2.value = "Введите второе число";
elemBtn.value = "расчитать сумму";
elemP.innerHTML = "Здесь будет результат";

let borderWithNorm = elemInp1.style.borderWith;
let borderColorNorm = elemInp1.style.borderColor;

elemInp1.addEventListener("focus", () => {
    if (elemInp1.value == "Введите первое число") elemInp1.value = "";
});

elemInp1.addEventListener("blur", () => {
    if (elemInp1.value == "") {
        elemInp1.value = "Введите первое число";
        elemInp1.style.borderColor = borderColorNorm;
        elemInp1.style.borderWith = borderWithNorm;
        elemWarning1.style.visibility = "hidden";
    }

    if (elemInp1.value != "" && elemInp1.value != "Введите первое число") {
        if (!thisNumber(elemInp1.value)) {
            elemInp1.style.borderColor = "red";
            elemInp1.style.borderWith = "2px";
            elemWarning1.style.visibility = "visible";
        }
    }
});

function thisNumber(stringElem) {
    for (let elem of stringElem) {
        if (
            elem != "0" ||
            elem != "1" ||
            elem != "2" ||
            elem != "3" ||
            elem != "4" ||
            elem != "5" ||
            elem != "6" ||
            elem != "7" ||
            elem != "8" ||
            elem != "9"
        )
            return false;
    }
    return true;
}
