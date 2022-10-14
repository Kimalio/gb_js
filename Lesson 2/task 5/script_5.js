'use strict';

let v1 = parseInt(prompt('Введите первое число'));
let v2 = parseInt(prompt('Введите второе число'));
let toDo = prompt('Укажите операцию: деление, умножение, сложение, вычитание');

function mathOperation(arg1, arg2, operation) {
    operation = operation.toLowerCase();
    switch (operation) {
        case 'деление':
            if (arg2 != 0) {
                return `${arg1} / ${arg2} = ${arg1 / arg2}`;
            } else {
                return `Указанный вами делитель равен нолю. Не стоит делить на него.`
            }
        case 'умножение':
            return `${arg1} * ${arg2} = ${arg1 * arg2}`;
        case 'сложение':
            return `${arg1} + ${arg2} = ${arg1 + arg2}`;
        case 'вычитание':
            return `${arg1} - ${arg2} = ${arg1 - arg2}`;
        default:
            return 'Что-то вы не то ввели. Всё не работает.'
    }
}

alert(mathOperation(v1, v2, toDo));