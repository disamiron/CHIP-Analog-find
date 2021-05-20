//ОФОРМЛЕНИЕ
var button = document.querySelector(".start");
var answer = document.querySelector(".answer");
var div1069 = document.querySelector(".chip_board");
var space = document.createElement("p1");
    space.innerHTML = "В ";

//КОРПУС
var shell = document.createElement("select");
    var shell0201 = document.createElement("option");
        shell0201.innerHTML = "0201";
    var shell0402 = document.createElement("option");
        shell0402.innerHTML = "0402";
        shell0402.selected = "true";
    var shell0603 = document.createElement("option");
        shell0603.innerHTML = "0603";
    var shell0805 = document.createElement("option");
        shell0805.innerHTML = "0805";
    var shell1206 = document.createElement("option");
        shell1206.innerHTML = "1206";
    var shell1210 = document.createElement("option");
        shell1210.innerHTML = "1210";
    var shell1812 = document.createElement("option");
        shell1812.innerHTML = "1812";
    var shell2220 = document.createElement("option");
        shell2220.innerHTML = "2220";

    shell.append(shell0201,shell0402,shell0603,shell0805,shell1206,shell1210,shell1812,shell2220)
div1069.append(shell);

//ТИП ДИЭЛЕКТРИКА
var typeD = document.createElement("select");
    var typeNP0 = document.createElement("option");
        typeNP0.innerHTML = "NP0";
    var typeX5R = document.createElement("option");
        typeX5R.innerHTML = "X5R";
    var typeX7R = document.createElement("option");
        typeX7R.innerHTML = "X7R";
        typeX7R.selected = "true";
    
    typeD.append(typeNP0,typeX5R,typeX7R);
div1069.append(typeD);

//НОМИНАЛЬНОЕ НАПРЯЖЕНИЕ
var voltageChip = document.createElement("select");
    var voltage10 = document.createElement("option");
        voltage10.innerHTML = "10";
    var voltage16 = document.createElement("option");
        voltage16.innerHTML = "16";
    var voltage25 = document.createElement("option");
        voltage25.innerHTML = "25";
    var voltage50 = document.createElement("option");
        voltage50.innerHTML = "50";
        voltage50.selected = "true";
    var voltage100 = document.createElement("option");
        voltage100.innerHTML = "100";
    var voltage250 = document.createElement("option");
        voltage250.innerHTML = "250";
    var voltage500 = document.createElement("option");
        voltage500.innerHTML = "500";

    voltageChip.append(voltage10,voltage16,voltage25,voltage50,voltage100,voltage250,voltage500);
div1069.append(voltageChip);
div1069.append(space);


//ЕМКОСТЬ
var capacity = document.createElement("input");
div1069.append(capacity);

//ЕДЕНИЦЫ ИЗМЕРЕНИЯ ЕМКОСТИ
var unitCap = document.createElement("select");
    var unitPf = document.createElement("option");
    unitPf.innerHTML = "пФ";
    var unitMkf = document.createElement("option");
    unitMkf.innerHTML = "мкФ";

    unitCap.append(unitPf,unitMkf);
div1069.append(unitCap);

//ДОПУСТИМОЕ ОТКЛОНЕНИЕ
var percent = document.createElement("select");
    var percent0 = document.createElement("option");
    percent0.innerHTML = "+-0.25пФ";
    var percent1 = document.createElement("option");
    percent1.innerHTML = "+-0.5пФ";
    var percent2 = document.createElement("option");
    percent2.innerHTML = "+-5%";
    var percent3 = document.createElement("option");
    percent3.innerHTML = "+-10%";
    percent3.selected = "true"
    var percent4 = document.createElement("option");
    percent4.innerHTML = "+-20%";

    percent.append(percent0,percent1,percent2,percent3,percent4);
div1069.append(percent);

button.addEventListener('click', function(event) {
    answer.style.color="black";
    if (capacity.value) {
        answer.innerHTML = "";
        answer.append(korpus(shell.value, typeD.value, voltageChip.value, capacity.value, unitCap.value));
        // var chip = korpus(shell.value, typeD.value, voltageChip.value, capacity.value, unitCap.value);
        // if (chip) {
        //     answer.innerHTML = "Кондесатор CHIP "+ chip +" "+ capacity.value + " " + unitCap.value +" " + percent.value;
        // } else {
        //     answer.innerHTML = "Некорректные данные"; 
        // } 
    } else {
        answer.innerHTML = "Проверьте правильность заполения формы";
    }
    
});


//shell, type, volt, oppacity, unit
