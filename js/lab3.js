function addCountries() {
    var inputField = document.getElementById('countriesInput');
    var countries = inputField.value;

    if (countries === "") {
        alert("Напишіть країни через кому в поле введення");
        return;
    }

    var countriesArray = countries.split(',');

    var countriesList = document.getElementById('countriesList');

    //додаємо кожну країну в список
    countriesArray.forEach(function(country) {
        var countryName = country;
        if (countryName !== "") {
            var listItem = document.createElement('li');
            listItem.textContent = countryName;
            countriesList.appendChild(listItem);
        }
    });

    inputField.value = "";
}

function MaxCell() {
    var table = document.getElementById('Table');

    var maxNumber = -Infinity; //число
    var max; //комірка таблиці (результат)

    //проходимо через кожен рядок таблиці
    for (var i = 0; i < table.rows.length; i++) {
        //проходимо через кожну комірку в рядку
        for (var j = 0; j < table.rows[i].cells.length; j++) {
            var currentNumber = parseFloat(table.rows[i].cells[j].textContent);
            if (!isNaN(currentNumber) && currentNumber > maxNumber) {
                maxNumber = currentNumber;
                max = table.rows[i].cells[j];
            }
        }
    }

    if (max) {
        max.style.backgroundColor = 'red'; //робимо червоним
    }
}