let mydate = new Date();
let weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
document.getElementById("weekDay").innerHTML = weekday[mydate.getDay()];
let myyear = mydate.getFullYear();
let mymonth = mydate.getMonth() + 1;
let myday = mydate.getDate();
document.getElementById("ymd").innerHTML = myyear + "年" + mymonth + "月" + myday + "日";



let h = '0' + 9;
let m = mydate.getMinutes();
let shi = document.getElementById("shi");
let fen = document.getElementById("fen");
if (m < 10){
    m = '0' + m;
}
shi.value = h;
fen.value = m; 
onload = function () {
    setInterval(function () {
        var n = new Date;
        let mt = n.getSeconds();
        if (mt < 10) {
            mt = '0' + mt;
        }
        h = shi.value;
        m = fen.value;
        hour.innerHTML = h;
        minu.innerHTML = m;
        stime.innerHTML = mt;
    });
}
let nexttime = function () {
    let randNum = Math.floor(Math.random() * 10) + 20;
    m = parseInt(m) + randNum;
    if (m >= 60) {
        m = parseInt(m) - 60;
        h++;
    }
    if (m < 10) {
        m = '0' + m;
    }

    if (12 == h || h == 13){
        h = 14;
    }

    if (h >= 24){
        h = '0' + 9;
    }
    shi.value = h;
    fen.value = m;
}


































// function nexttime() {
//     var n = new Date;
//     if (null == ff) {
//         let randNum = Math.floor(Math.random() * 10);
//         if (10 <= randNum < 20) {
//             randNum += 10;
//         }
//         if (0 <= randNum < 10) {
//             randNum += 15;
//         }
//         ff = j + randNum;
//         if (ff >= 60) {
//             ff = parseInt(ff) - 60;
//             nn++;
//         }
//     } else {
//         let randNum = Math.floor(Math.random() * 10);
//         if (10 <= randNum < 20) {
//             randNum += 10;
//         }
//         if (0 <= randNum < 10) {
//             randNum += 15;
//         }

//         ff += randNum;
//         if (ff >= 60) {
//             ff = parseInt(ff) - 60;
//             nn++;
//         }
//     }
// }


