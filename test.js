var count = 0;

function cc(card) {
    // Only change code below this line
    if (card >= 2 && card <= 6) {
        count++;
    } else if (card < 10) {
    } else {
        count--;
    }
    var result;
    if (count > 0) {
        result = count + " Bet";
    } else {
        result = count + " Hold";
    }
    return result;
    // Only change code above this line
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
