function partitionOn(pred, items) {
    var falseArray = [];
    var trueArray = [];
    var midPoint;
    for (i of items) {
        if (pred(i)) {
            trueArray.push(i);
        }
        else {
            falseArray.push(i);
        }
    }
    midPoint = falseArray.length;
    items.length = 0;
    Array.prototype.push.apply(items, falseArray.concat(trueArray));
    return midPoint;
}
