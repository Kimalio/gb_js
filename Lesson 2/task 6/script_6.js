'use strict';

let roubles = prompt('Сколько денег вносите на свой счёт');

/**
 * 
 * @param {string} amount Число, но тип строка. Количество денег, которые вносит пользователь
 * @returns {`${number} + string`} Возвращает конкатенированное значение кол-ва денег и слова рубль в соответствующем падеже
 */

function depostiting(amount) {
    let teens = ['11', '12', '13', '14', '15', '16', '17', '18', '19'];
    if (teens.includes(amount.slice(-2))) {
        return `${amount} рублей`;
    } else if (amount.endsWith(1)) {
        return `${amount} рубль`;
    } else if (amount.endsWith(2) || amount.endsWith(3) || amount.endsWith(4)) {
        return `${amount} рубля`;
    } else {
        return `${amount} рублей`;
    }
}

alert(`Ваша сумма ${depostiting(roubles)} успешно зачислена.`)
