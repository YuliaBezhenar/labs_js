// Клас Машина
class Car {
    constructor(color, brand, model) {
        this.color = color;
        this.brand = brand;
        this.model = model;
    }
}

// Створення масиву об'єктів класу Машина
var carsArray = [
    new Car("Червоний", "Toyota", "Camry"),
    new Car("Синій", "Honda", "Civic"),
    new Car("Зелений", "Ford", "Focus"),
    new Car("Чорний", "BMW", "X5"),
    new Car("Білий", "Mercedes", "E-Class"),
];

function displayCarInfo() {

    var tableBody = document.querySelector('#carsTable tbody');
    
    tableBody.innerHTML = '';

    // Проходимося по кожному об'єкту в масиві і виводимо його в таблицю
    for (var i = 0; i < carsArray.length; i++) {
        var car = carsArray[i];

        var row = tableBody.insertRow(i);
        var cellColor = row.insertCell(0);
        var cellBrand = row.insertCell(1);
        var cellModel = row.insertCell(2);

        cellColor.textContent = car.color;
        cellBrand.textContent = car.brand;
        cellModel.textContent = car.model;

    // Додавання даних в таблицю
    /*for (var j = 0; j < carsArray.length; j++) {
        var carRow = table.insertRow(j + 1);
        var car = carsArray[j];

        var colorCell = carRow.insertCell(0);
        colorCell.textContent = car.color;

        var brandCell = carRow.insertCell(1);
        brandCell.textContent = car.brand;

        var modelCell = carRow.insertCell(2);
        modelCell.textContent = car.model;*/
    }

    // Виведення таблиці на сторінку
    //document.body.appendChild(table);
}


/*
// Клас Машина
        function Car(color, brand, model) {
            this.color = color;
            this.brand = brand;
            this.model = model;
        }

        // Створюємо масив об'єктів Машина
        var carsArray = [
            new Car('Червоний', 'Toyota', 'Camry'),
            new Car('Синій', 'Honda', 'Civic'),
            new Car('Чорний', 'Ford', 'Focus'),
            // Додайте більше об'єктів за потребою
        ];

        // Функція для виведення інформації про машини
        function displayCarsInfo() {
            var tableBody = document.querySelector('#carsTable tbody');

            // Очищаємо таблицю перед виведенням нової інформації
            tableBody.innerHTML = '';

            // Проходимося по кожному об'єкту в масиві і виводимо його в таблицю
            for (var i = 0; i < carsArray.length; i++) {
                var car = carsArray[i];

                var row = tableBody.insertRow(i);
                var cellColor = row.insertCell(0);
                var cellBrand = row.insertCell(1);
                var cellModel = row.insertCell(2);

                cellColor.textContent = car.color;
                cellBrand.textContent = car.brand;
                cellModel.textContent = car.model;
            }
        }
*/