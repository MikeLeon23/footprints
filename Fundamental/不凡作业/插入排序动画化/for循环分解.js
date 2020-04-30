for (var i = 1; i < heightArr.length; i++) {
    var j = i;
    var num = liEle[j].offsetHeight;
    liEle[j].style.bottom = "-200px";
    while(j > 0 && liEle[j-1].offsetHeight > num) {
        var temp = liEle[j-1].offsetLeft;
        liEle[j-1].style.left = liEle[j].offsetLeft + "px";
        liEle[j].style.left = temp + "px";
        liEle[j].parentNode.insertBefore(liEle[j], liEle[j-1]);
        j--;
    }
    liEle[j].style.bottom = "0px";
}
var i = 1;
var flag = true;
var timer = setInterval(function(){
    if(i < heightArr.length){
        if(flag){
            var j = i;
        }
        var num = liEle[j].offsetHeight
        liEle[j].style.bottom = "-200px"
        if(j > 0 && liEle[j-1].offsetHeight > num){
            var temp = liEle[j-1].offsetLeft;
            liEle[j-1].style.left = liEle[j].offsetLeft + "px";
            liEle[j].style.left = temp + "px";
            liEle[j].parentNode.insertBefore(liEle[j], liEle[j-1]);
            j--;
            flag = false;
        }else{
            liEle[j].style.bottom = "0px";
            i++;
            flag = true;
        }
    }else{
        clearInterval(timer)
    }

}, 1000)


// 定时器模拟循环
Btns.onclick = function(){

}