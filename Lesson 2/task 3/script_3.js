'use strict';

let a = parseInt(prompt('Введите первое число'));
let b = parseInt(prompt('Введите второе число'));

function Calc(num1, num2) {
    if (num1 >= 0 && num2 >= 0) {
        return num1 - num2;
    } else if (num1 < 0 && num2 < 0) {
        return num1 * num2;
    } else if ((num1 < 0 && num2 >= 0) || (num1 >= 0 && num2 < 0)) {
        return num1 + num2;
    }
}

alert(`Вот, что получилось: ${Calc(a, b)}`);
