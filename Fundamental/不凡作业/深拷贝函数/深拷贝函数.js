function deepClone(obj) {
    if (obj === null) {
        return null;
    }

    var newObj = obj instanceof Array ? [] : {};
    for (var i in obj) {
        if (typeof obj[i] === "object") {
            if (newObj instanceof Array) {
                newObj.push(deepClone(obj[i]));
            } else {
                newObj[i] = deepClone(obj[i]);
            }
        } else {
            if (newObj instanceof Array) {
                newObj.push(obj[i]);
            } else {
                newObj[i] = obj[i];
            }
        }
    }
    return newObj;
}