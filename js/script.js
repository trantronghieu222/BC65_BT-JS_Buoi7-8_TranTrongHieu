/* --------------- Xử lý thêm mảng --------------- */
var arrA = [];
document.getElementById("btnThem").onclick = function () {
    var n = +document.getElementById("inputN").value;
    arrA.push(n);
    document.querySelector("#inputN").value = "";
    document.getElementById("result").innerHTML = arrA;
}

/* --------------- Câu 1 --------------- */
document.querySelector("#btnSumPositive").onclick = function () {
    var sum = 0;
    for (var i = 0; i < arrA.length; i++) {
        if (arrA[i] > 0) {
            sum += arrA[i];
        }
    }
    document.querySelector("#result__bai1").innerHTML = sum;
}

/* --------------- Câu 2 --------------- */
document.querySelector("#btnCountPositive").onclick = function () {
    var count = 0;
    for (var i = 0; i < arrA.length; i++) {
        if (arrA[i] > 0) {
            count++;
        }
    }
    document.querySelector("#result__bai2").innerHTML = `Tổng số dương: ${count}`;
}

/* --------------- Câu 3 --------------- */
document.querySelector("#btnMin").onclick = function () {
    var min = arrA[0];
    for (var i = 0; i < arrA.length; i++) {
        if (arrA[i] < min) {
            min = arrA[i];
        }
    }
    document.querySelector("#result__bai3").innerHTML = `Số nhỏ nhất: ${min}`;
}

/* --------------- Câu 4 --------------- */
function findNumberPositiveFirst(arr) {
    var numberPositiveFirst;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            numberPositiveFirst = arr[i];
            break;
        }
    }
    return numberPositiveFirst;
}
document.querySelector("#btnMinPositive").onclick = function () {
    var minNumber = findNumberPositiveFirst(arrA);
    for (var i = 0; i < arrA.length; i++) {
        if (arrA[i] < minNumber && arrA[i] > 0) {
            minNumber = arrA[i];
        }
    }

    if (minNumber == null) {
        document.querySelector("#result__bai4").innerHTML = "Không có số dương trong mảng";
    }
    else {
        document.querySelector("#result__bai4").innerHTML = `Số dương nhỏ nhất: ${minNumber}`;
    }
}

/* --------------- Câu 5 --------------- */
document.querySelector("#btnLastEvenNumver").onclick = function () {
    var lastEven;
    for (var i = arrA.length - 1; i >= 0; i--) {
        if (arrA[i] % 2 == 0) {
            lastEven = arrA[i];
            break;
        }
    }
    if (lastEven == null) {
        document.querySelector("#result__bai5").innerHTML = "Số chẵn cuối cùng là: -1";
    }
    else {
        document.querySelector("#result__bai5").innerHTML = `Số chẵn cuối cùng là: ${lastEven}`;
    }
}

/* --------------- Câu 6 --------------- */
document.querySelector("#btnSwap").onclick = function () {
    var vt1 = +document.querySelector("#locate1").value;
    var vt2 = +document.querySelector("#locate2").value;
    var temp;
    if (arrA[vt1] == null || arrA[vt2] == null) {
        alert("Vị trí không hợp lệ");
    }
    else {
        temp = arrA[vt1];
        arrA[vt1] = arrA[vt2];
        arrA[vt2] = temp;
    }
    document.querySelector("#result__bai6").innerHTML = arrA;
}

/* --------------- Câu 7 --------------- */
function sortUp(arr) {
    var temp;
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
document.querySelector("#btnSortUp").onclick = function () {
    sortUp(arrA);
    document.querySelector("#result__bai7").innerHTML = arrA;
}

/* --------------- Câu 8 --------------- */
function checkPrimeNumbers(n) {
    if (n < 2) {
        return 0;
    }
    else {
        for (var i = 2; i < Math.sqrt(n); i++) {
            if (n % i == 0) {
                return 0;
            }
        }
    }
    return 1;
}
document.querySelector("#btnFirstPrime").onclick = function () {
    var firstPrime;
    for (var i = 0; i < arrA.length; i++) {
        if (checkPrimeNumbers(arrA[i]) == 1) {
            firstPrime = arrA[i];
            break;
        }
    }
    if (firstPrime == null) {
        document.querySelector("#result__bai8").innerHTML = "-1";

    }
    else {
        document.querySelector("#result__bai8").innerHTML = `số nguyên tố đầu tiên: ${firstPrime}`;
    }
}

/* --------------- Câu 9 --------------- */
var arr2 = [];
document.querySelector("#btnThemSoThuc").onclick = function () {
    var soThucN = +document.querySelector("#soThucN").value;
    arr2.push(soThucN);
    document.querySelector("#soThucN").value = "";
    document.querySelector("#result2").innerHTML = arr2;
}
document.querySelector("#btnDemSoNguyen").onclick = function () {
    var count = 0;
    for(var i = 0; i< arr2.length; i++){
        if(Number.isInteger(arr2[i])){
            count++;
        }
    }
    document.querySelector("#result__bai9").innerHTML = `Số nguyên: ${count}`;
}

/* --------------- Câu 10 --------------- */
document.querySelector("#btnSoSanh").onclick = function () {
    var soDuong = 0;
    var soAm = 0;
    var soSanhStr = "";
    for (var i = 0; i < arrA.length; i++) {
        if (arrA[i] > 0) {
            soDuong++;
        }
        else {
            soAm++;
        }
    }
    if (soDuong > soAm) {
        soSanhStr = "Số dương > Số âm";
    }
    else if(soDuong < soAm){
        soSanhStr = "Số dương < Số âm";

    }
    else {
        soSanhStr = "Số dương = Số âm";
    }
    document.querySelector("#result__bai10").innerHTML = soSanhStr;
}