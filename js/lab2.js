
function info() {
    alert(title);
}

function calculate() {
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    var operation = document.getElementById('operation').value.toLowerCase();

    var result;

    switch (operation) {
        case 'сума':
            result = number1 + number2;
            break;
        case 'різниця':
            result = number1 - number2;
            break;
        case 'добуток':
            result = number1 * number2;
            break;
        case 'ділення':
            result = number1 / number2;
            break;
        default:
            alert('Неправильно введена операція (введіть "сума", "різниця", "добуток" чи "ділення").');
            return;
    }

    alert('Результат: ' + result);
}