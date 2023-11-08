var arrFriend = [];

arrFriend[0] = {
    Name: "Roni",
    Date: "18.09.2023",
    Phone: ""
};

arrFriend[1] = {
    Name: "Yana",
    Date: "08.11.2023",
    Phone: ""
};

arrFriend[2] = {
    Name: "Anatoliy",
    Date: "11.11.2023",
    Phone: "0963029292"
};

arrFriend[3] = {
    Name: "Vlada",
    Date: "08.11.2023",
    Phone: "0662029292"
};

arrFriend[4] = {
    Name: "Bogdan",
    Date: "04.11.2023",
    Phone: "0995052233"
};

arrFriend[5] = {
    Name: "Diana",
    Date: "11.11.2023",
    Phone: ""
};

//розрахунок терміну
function diff_days_func(text){
    //поточна дата
    var currentDate = new Date();
    //перетворення тексту в дату записану через /
    var date1 = new Date(text.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));
    //різниця в датах у мілісекундах
    var timeDiff = Math.abs(currentDate.getTime() - date1.getTime());
    //переведення в дні
    var daysDiff = Math.ceil(timeDiff / (1000*3600*24));
    //отримання різниці до переданої дати
    return daysDiff;
}

function showBirthdayInfo() {
    var currentDate = new Date();

    var info = "";

    for (var i = 0; i < arrFriend.length; i++) {
        var friend = arrFriend[i];
        var daysDiff = diff_days_func(friend.Date);

        if (daysDiff === 3) {
            info += '<span class="birthdayName">' + friend.Name + '</span> відзначає день народження через 3 дні, надішліть вітальну листівку.<br>';
        } else if (daysDiff === 1 && friend.Phone === "") {
            info += '<span class="birthdayName">' + friend.Name + '</span> святкує день народження сьогодні, але номер телефону не вказано.<br>';
        } else if (daysDiff === 1 && 'Phone' in friend){
            info += '<span class="birthdayName">' + friend.Name + '</span> святкує день народження сьогодні, зателефонуйте іменинникові на номер ' + friend.Phone + '.<br>';
        }
    }

    document.getElementById("birthdayInfo").innerHTML = info;
}