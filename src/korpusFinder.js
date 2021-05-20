function korpus (shell, type, volt, oppacity, unit) {

var chip = typeShell.indexOf(shell);
var a = [1,1000000,1000];
var oppacityXUnit = oppacity*a[unitBase.indexOf(unit)];
var chipVolt = voltage.indexOf(volt);


var option = []
    // model:[],
    // voltage:[],
    // type:[],
    // shell:[]

var answer = [];


var otvet = document.createElement("ul");

function answerText(text,style,color) {
    var otvet1 = document.createElement("li");
    otvet1.innerHTML= text;
    if (style) {
        otvet1.style.fontWeight=style;
    };
    if (color) {
        otvet1.style.color=color;
    }
    otvet.append(otvet1);
}




// console.log(e24.indexOf(oppacityXUnit))
    // if (e24.indexOf(oppacityXUnit)!== -1){
        for(let k=0;k<=4;k++){
            if (storage[k]) {
                for (let j=0;j<=4;j++){
                    if (storage[k][j]){
                        for (let i=0;i<14;i++) {
                            if (storage[k][j][i]) {
                                for (let spr of storage[k][j][i]) {
                                    if (oppacityXUnit>=+spr[1] && oppacityXUnit<=+spr[2]) {

                                        var a = "";
                                        if (spr[3]) {
                                            a = " только " +  spr[3];
                                        };
                                        option.push({"model":modelCap[k],"voltage":voltage[i],"type":typeDielectric[j],"shell":typeShell[spr[0]],"text":a})
                                        // option.voltage.push(voltage[i]);
                                        // option.type.push(typeDielectric[j]);
                                        // option.shell.push(typeShell[spr[0]]);
                                        // var otvet1 = document.createElement("li");
                                        // //пометка о особых конденсаторах
                                        // var a = "";
                                        // if (spr[3]) {
                                        //     a = " только " +  spr[3];
                                        // }

                                        // otvet1.innerHTML= "Конденсатор " + modelCap[k] +" " +voltage[i]+"В "+oppacity+" "+unit+" "+typeDielectric[j]+" "+typeShell[spr[0]]+a;

                                        // //выделение близких и аналогов
                                        // if (chip>=spr[0]) {
                                        //     otvet1.style.fontWeight="bold";
                                        //     if(volt<=+voltage[i]) {
                                        //         otvet1.style.color="red";
                                        //     }
                                        // }
                                        // otvet.append(otvet1);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

// option.sort(function(a,b){
//     if (typeShell.indexOf(a.shell) > typeShell.indexOf(b.shell)) {
//       return 1;
//     }
//     if (typeShell.indexOf(a.shell) < typeShell.indexOf(b.shell)) {
//       return -1;
//     }
//     // a должно быть равным b
//     return 0;
//   });

// option.push({"model":modelCap[k],"voltage":voltage[i],"type":typeDielectric[j],"shell":typeShell[spr[0]]})
for (let spr of option) {
    if (spr["shell"]==shell && +spr["voltage"]>=+volt) {
        answer.push({"model":spr["model"],"voltage":spr["voltage"],"type":spr["type"],"shell":spr["shell"],"text":spr["text"]})
    }
    
}
if (answer.length) {
    answerText("Полные аналоги:","bold","#cc2323")
}

if (!answer.length) {
    answerText("Полных аналогов не найдено.","bold","#0b7506")

    for (let spr of option) {
        if (spr["shell"]==shell) {
            answer.push({"model":spr["model"],"voltage":spr["voltage"],"type":spr["type"],"shell":spr["shell"],"text":spr["text"]})
        }
    }
    if (answer.length) {
        answerText("Ближайшие аналоги в корпусе " + shell + ":","bold","#d98c1a")
    }
    // if (!answer.length) {
    //     answerText("Близких аналогов в корпусе " + shell + " не найдено.")
    // }
}



if (!answer.length) {
    for (let a=1;a<14;a++) {
        for (let spr of option) {
            if (typeShell.indexOf(spr["shell"])+a==chip || typeShell.indexOf(spr["shell"])-a==chip) {
                console.log("123123")
                answer.push({"model":spr["model"],"voltage":spr["voltage"],"type":spr["type"],"shell":spr["shell"],"text":spr["text"]})
            }
        }
        if (answer.length) {
            answerText("Ближайшие аналоги в другом корпусе:","bold","#d98c1a")
            break;
        }
    }
}

if (!answer.length) {
    answerText("Ближайших аналогов не найдено.","bold","#0b7506")
}


// var a2 = 2;
// function lastChanse () {
//     console.log("awd")
//     for (let spr of option) {
//         if (typeShell.indexOf(spr["shell"])+a2==chip || typeShell.indexOf(spr["shell"])-a2==chip) {
//             console.log("123123")
//             answer.push({"model":spr["model"],"voltage":spr["voltage"],"type":spr["type"],"shell":spr["shell"]})
//         }
//     }
//     if (answer.length) {
//         answerText("Ближайшие аналоги в другом корпусе:")
//     }
//     if (a2<14) {
//         a2++;
//         lastChanse();
//     }
//     if (a2>14) {
//         answerText("Нету");
//     }


// }





// console.log(option.shell);
    // } else {
    //     otvet.innerHTML="Нет в ряде"
    // }
    // return otvet;

// option.model.filter
// for (let spr of option) {
//     spr[0].sort();
// }
// for (let p=0;p<option.model.length;p++) {
//     if (option.shell[p]==shell) {
//         answer.model.push(option.model[p]);
//         answer.voltage.push(option.voltage[p]);
//         answer.type.push(option.type[p]);
//         answer.shell.push(option.shell[p]);
//     }
// }
for (let l=0;l<answer.length;l++) {
    answerText("Конденсатор " + answer[l]["model"] + " " + answer[l]["voltage"] + "В " + oppacity + " " + unit + " " + answer[l]["type"] + " " + answer[l]["shell"] + answer[l]["text"])
}
return otvet;


}    
