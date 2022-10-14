'use script';

let v1 = parseInt(prompt('Введите первое число'));
let v2 = parseInt(prompt('Введите второе число'));

function calcTask(num1, num2) {
    if (num2 != 0) {
        return `
        ${num1} + ${num2} = ${num1 + num2}
        ${num1} - ${num2} = ${num1 - num2}
        ${num1} / ${num2} = ${num1 / num2}
        ${num1} * ${num2} = ${num1 * num2}`;
    } else {
        return `
        ${num1} + ${num2} = ${num1 + num2}
        ${num1} - ${num2} = ${num1 - num2}
        ${num1} / ${num2} = Вы пытаетесь делить на ноль. Не надо так.
        ${num1} * ${num2} = ${num1 * num2}`;
    }
}

alert(`Результат:${calcTask(v1, v2)}`);
