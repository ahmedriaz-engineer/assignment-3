
// convert kilometerToMeter
function kilometerToMeter(kilo) {
    if (kilo < 0) {
        return "Distance will always Positive"
    }
    else {
        var meter = kilo * 1000;
        return meter;
    }
}


// budgetCalculator Problem
function budgetCalculator(watch, mobile, laptop) {
    if (watch < 0 || mobile < 0 || laptop < 0) {
        return "Enter valid input which is not negative"
    }
    else {
        var watchPrice = watch * 50;
        var mobilePrice = mobile * 100;
        var laptopPrice = laptop * 500;
        var budget = watchPrice + mobilePrice + laptopPrice;
        return budget;
    }
}


//hotelCost Calculate
function hotelCost(days) {
    var cost = 0;
    var first10DayCost = 10 * 100;
    var second10DayCost = 10 * 80;
    if (days < 0) {
        return "Your staying days can't be a negative number."
    }
    else if (days <= 10) {
        var cost = days * 100;
    }
    else if (days <= 20) {
        var remainingDay = days - 10;
        var remainingDayCost = remainingDay * 80;
        var cost = first10DayCost + remainingDayCost;
    }
    else {
        var remainingDay = days - 20;
        var remainingDayCost = remainingDay * 50;
        var cost = first10DayCost + second10DayCost + remainingDayCost;
    }
    return cost;
}


//find megaFriend
function megaFriend(friendsName) {
    var largeName = friendsName[0];
    if (Array.isArray(friendsName) == false && friendsName.length == 0) {
        return "You have to give string into an array or please input some value";
    }
    else {
        for (let i = 0; i < friendsName.length; i++) {
            const name = friendsName[i];
            if (typeof name !== "string") {
                return "You have to input string value into the array"
            }
            else if (name.length > largeName.length) {
                largeName = name;
            }
        }
        return largeName;
    }
}
