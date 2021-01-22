// github repo Link: https://github.com/ahmedriaz-engineer/assignment-3

// convert kilometerToMeter

function kilometerToMeter(kilo) {
    if (kilo < 0) {
        return "Distance is always positive";
    }
    else {
        var meter = kilo * 1000;
        return meter;
    }
}


// budgetCalculator Problem

function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return "Enter Valid input which is not negative";
    }
    else {
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        var totalAmount = watchPrice + phonePrice + laptopPrice;
        return totalAmount;
    }
}


// hotel cost calculator

function hotelCost(day) {
    var totalCost = 0;
    if (day <= 10) {
        totalCost = day * 100;
    }
    if (day < 1) {
        return "It needs minimum 1day to stay at hotel, so enter valid day";
    }
    else if (day <= 20) {
        var first10Day = 10 * 100;
        var remaining = day - 10;
        var second10Day = remaining * 80;
        totalCost = first10Day + second10Day;
    }
    else {
        var first10Day = 10 * 100;
        var second10Day = 10 * 80;
        var remaining = day - 20;
        var After20Day = remaining * 50;
        totalCost = first10Day + second10Day + After20Day;
    }
    return totalCost;
}


//Largest friend Name

function megaFriend(name) {
    var nameLength = 0;
    var largeName;
    if (name.length == 0) {
        return "Enter some name or word in array";
    }

    for (var i = 0; i < name.length; i++) {
        if (name[i].length > nameLength) {
            var nameLength = name[i].length;
            largeName = name[i];
        }
    }
    return largeName;
}