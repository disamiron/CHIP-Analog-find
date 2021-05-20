var originalEntry = document.querySelector(".original");
var answerL = document.querySelector(".answerTable");
let list = 0;
document.getElementById('upload').addEventListener('change', handleFileSelect, false);

var base = [];

var ExcelToJSON = function() {

    this.parseExcel = function(file) {
    var reader = new FileReader();

    reader.onload = function(e) {
        var data = e.target.result;
        var workbook = XLSX.read(data, {
        type: 'binary'
        });
        workbook.SheetNames.forEach(function(sheetName) {
        // Here is your object
        var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        var json_object = JSON.stringify(XL_row_object);
        // console.log(JSON.parse(json_object));
        // console.log(JSON.parse(json_object));
        for (let string of JSON.parse(json_object).values()) {
            var table = document.createElement("tr");

            var originalEnemy = document.createElement("td");
            originalEnemy.innerHTML = string["ORIGINAL"];
            
            var listEnemy = document.createElement("td");
          //  function korpus (shell, type, volt, oppacity, unit)
            var chip = korpus(string["CHIP"], string["TYPE"], string["V"], string["C"], string["UNIT"]);
            if (chip) {
                listEnemy.append(chip);
            } else {
                listEnemy.append="Некорректные данные";
            }
            table.append(originalEnemy,listEnemy);
            answerL.appendChild(table);
        }

        jQuery( '#xlx_json' ).val( json_object );
        })
    };

    reader.onerror = function(ex) {
        console.log(ex);
    };

    reader.readAsBinaryString(file);
    };
};


function handleFileSelect(evt) {
var files = evt.target.files; // FileList object
var xl2json = new ExcelToJSON();
xl2json.parseExcel(files[0]);
}