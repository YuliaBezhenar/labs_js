//клас машини
class Car {
    constructor(color, brand, model) {
        this.color = color;
        this.brand = brand;
        this.model = model;
    }

    show() {
        let html = "";
        html+="<tr>";
        html+="<td>" + this.color + "</td>";
        html+="<td>" + this.brand + "</td>";
        html+="<td>" + this.model + "</td>";
        html+="</tr>";
        return html;
    }
}

//створення масиву об'єктів класу
var carsArray = [
    new Car("Червоний", "Toyota", "Camry"),
    new Car("Чорний", "Honda", "Civic"),
    new Car("Синій", "Ford", "Focus"),
    new Car("Сірий", "Mazda", "CX-30"),
    new Car("Білий", "Mercedes", "E-Class"),
];

function displayCarInfo() {
    //таблиця
    var table = "";
    table+="<table class='lab4_table'>";
    table += "<tr class=> <th>Колір</th> <th>Марка</th> <th>Модель</th> </tr> "
    for (var i=0; i< carsArray.length; i++){
            table+=carsArray[i].show();
    }
    table+="</table>";
    document.getElementById('result').innerHTML=table;
    html="";
}