var isPalindrome = function(x) {
    if(x < 0){
        return false;
    }else{
        var a = x + "";
        var b = a.split("").reverse().join("");
        return b==a;
    }
};