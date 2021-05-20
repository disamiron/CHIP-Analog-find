//                  0           1       2       3
var modelCap = ["К10-69В","К10-79","К10-83","К10-84В"];
//                      0       1     2      3      4       5
var typeDielectric = ["МП0", "Н20", "Н30", "Н90", "М47", "М1500"];
//                      0       1       2
var typeDielectricImp = ["NP0", "X7R (X5R)", "X7R (X5R)", "X7R (X5R)"];
//                      0           1       2       3       4           5       6       7       8           9           10      11
var typeShellOtech = ["1608М", "2012М", "3216М", "3225М", "4025М", "4532М", "5750М", "8060М", "10050М", "10080М", "120100М", "140100М"];
//                  0       1       2       3       4       5       6       7       8         9          10
// var typeShell = ["0201", "0402", "0603", "0805", "1206", "1210", "1812", "2220", "3224", "10.0x8.0", "12.0x10.0"];
//                  0       1       2       3       4       5       6       7       8         9       10            11          12          13
var typeShell = ["0201", "0402", "0603", "0805", "1206", "1210", "4025М", "1812", "2220", "3224", "10.0x5.0", "10.0x8.0", "12.0x10.0", "14.0x10.0"];
//              0       1     2     3     4      5      6     7        8     9
var voltage = ["6.3", "10", "16", "25", "50", "100", "250", "500", "1000", "1500", "2000"];
//                0       1     2
var unitBase = ["пФ", "мкФ", "нФ"];
//                      0           1           2       3       4       5           6       7
var percentBase = ["+-0,25 пФ", "+-0,5 пФ", "+-1%", "+-5%", "+-10%", "+-20%", "+50-20%", "+80-20%"];
//
var e24 = [0.47,1,2.2,4.7,10,16,24,33,47,56,100,120,150,180,220,240,270,300,330,390,430,470,560,620,680,750,820,910,1000,1100,1200,1300,1500,1600,1800,2000,2200,2400,2700,3000,3300,3600,3900,4300,4700,5100,5600,6200,6800,7500,8200,9100,10000,11000,12000,13000,15000,16000,18000,20000,22000,24000,27000,30000,33000,36000,39000,43000,47000,51000,56000,62000,68000,75000,82000,91000,100000,110000,120000,130000,150000,160000,180000,200000,220000,240000,270000,330000,390000,470000,560000,680000,820000,1000000,1200000,1500000,1800000,2200000,2700000,3300000,3900000,4700000,5600000,6800000,10000000,15000000,22000000,33000000,47000000]
var e12 = [47,56,100,120,150,180,220,270,330,390,470,560,680,820,1000,1200,1500,1800,2200,2700,3300,3900,4700,5600,6800,8200,10000,12000,15000,18000,22000,27000,33000,39000,47000,56000,68000,82000,100000,120000,150000,180000,220000,270000,330000,390000,470000,560000,680000,820000,1000000,1200000,1500000,1800000,2200000,3300000,3900000,4700000,5600000,6800000,10000000,15000000,22000000,33000000,47000000]

var storage = {
    1 : {   //К10-79   
        0 : {   //МП0
            2: [    //16В
                [2,750,820],
                [3,910,2400],
                [4,2700,7500],
                [5,8200,16000],
                [7,18000,30000],
                [8,33000,82000],
                [9,91000,100000],
                [11,110000,200000],
                [12,220000,330000]
            ],
            4: [    //50В
                [2,390,430],
                [3,470,1000],
                [4,1100,3600],
                [5,3900,7500],
                [7,8200,15000],
                [8,16000,51000],
                [9,56000,82000],
                [11,91000,150000],
                [12,160000,200000]
            ],
            5: [    //100В
                [2,0.47,240],
                [3,270,510],
                [4,560,2200],
                [5,2400,3300],
                [7,3600,9100],
                [8,10000,27000],
                [9,30000,33000],
                [11,36000,62000],
                [12,68000,110000]
            ],
            6: [    //250В
                [4,220,820],
                [5,910,1600],
                [7,1800,3600],
                [8,3900,8200],
                [9,9100,12000],
                [11,13000,22000],
                [12,24000,39000]
            ],
            7: [    //500В
                [4,1,200],
                [5,220,330],
                [7,360,820],
                [8,910,2400],
                [9,2700,3300],
                [11,3600,5100],
                [12,5600,9100]
            ]
        },
        2: { //Н30
            1: [    //10В
                [2,6800,10000],
                [3,15000,33000],
                [4,47000,150000],
                [5,220000,220000],
                [7,330000,680000],
                [8,1000000,1500000],
                [9,2200000,2200000],
                [11,3300000,3300000],
                [12,4700000,4700000]
            ],
            3: [    //25В
                [2,3300,4700],
                [3,6800,22000],
                [4,33000,100000],
                [5,150000,150000],
                [7,220000,330000],
                [8,470000,680000],
                [9,1000000,1000000],
                [11,1500000,1500000],
                [12,2200000,3300000]
            ],
            4: [    //50В
                [2,1000,2200],
                [3,3300,15000],
                [4,22000,47000],
                [5,68000,100000],
                [7,150000,220000],
                [8,330000,470000],
                [9,680000,680000],
                [11,1000000,1000000],
                [12,1500000,2200000]
            ],
            5: [    //100В
                [4,10000,10000],
                [5,15000,33000],
                [7,47000,68000],
                [8,100000,150000],
                [9,220000,220000],
                [11,330000,330000],
                [12,470000,470000]
            ],
            6: [    //250В
                [4,2200,6800],
                [5,10000,15000],
                [7,22000,33000],
                [8,47000,68000],
                [9,100000,100000],
                [11,150000,220000],
                [12,330000,330000]
            ],
            7: [    //500В
                [4,1000,1500],
                [5,2200,3300],
                [7,4700,6800],
                [8,10000,22000],
                [9,33000,33000],
                [11,47000,47000],
                [12,68000,68000]
            ]
        },
        3: { //Н90
            1: [    //10В
                [2,100000,100000],
                [3,150000,220000],
                [4,330000,680000],
                [5,1000000,1500000],
                [7,2200000,3300000],
                [8,4700000,6800000],
                [9,10000000,10000000],
                [11,15000000,15000000],
                [12,33000000,100000000]
            ],
            3: [    //25В
                [2,33000,68000],
                [3,100000,100000],
                [4,150000,470000],
                [5,680000,680000],
                [7,1000000,2200000],
                [8,3300000,3300000],
                [9,4700000,6800000],
                [11,10000000,10000000],
                [12,15000000,15000000]
            ],
            4: [    //50В
                [2,10000,22000],
                [3,33000,47000],
                [4,68000,150000],
                [5,220000,330000],
                [7,470000,680000],
                [8,1000000,2200000],
                [9,3300000,3300000],
                [11,4700000,4700000],
                [12,6800000,6800000]
            ]
        }
    },
    2 : {   //К10-83   
        0 : {   //МП0
            2: [    //16В
                [1,220,390],
                [2,620,1100],
                [3,1200,3300],
                [4,3600,12000],
                [5,13000,24000]
            ],
            3: [    //25В
                [1,150,200],
                [2,220,560],
                [3,620,2000],
                [4,2200,7500],
                [5,8200,18000]
            ],
            4: [    //50В
                [1,10,130],
                [2,1,200],
                [3,220,820],
                [4,910,3000],
                [5,3300,7500]
            ]
        },
        1: {    //Н20
            0: [    //6.3В
                [1,33000,39000],
                [2,82000,100000],
                [3,270000,270000],
                [4,820000,820000],
                [5,1500000,1500000],
                [7,2700000,2700000],
                [8,5600000,15000000]
            ],
            1: [    //10В
                [1,18000,27000],
                [2,47000,68000],
                [3,150000,220000],
                [4,560000,680000],
                [5,1200000,1200000],
                [7,2200000,2200000],
                [8,4700000,4700000] 
            ],
            2: [    //16В
                [1,8200,15000],
                [2,27000,39000],
                [3,100000,120000],
                [4,390000,470000],
                [5,820000,1000000],
                [7,1500000,1800000],
                [8,3900000,3900000] 
            ],
            3: [    //25В
                [1,3900,6800],
                [2,12000,22000],
                [3,56000,82000],
                [4,220000,330000],
                [5,560000,680000],
                [7,1000000,1200000],
                [8,1800000,3300000]                 
            ],
            4: [    //50В
                [1,1000,3300],
                [2,3900,10000],
                [3,12000,47000],
                [4,56000,180000],
                [5,220000,470000],
                [7,560000,820000],
                [8,1000000,1500000]                 
            ]
        },
        2: { //Н30
            2: [    //16В
                [1,10000,10000],
                [2,12000,18000],
                [3,22000,120000],
                [4,150000,390000],
                [5,470000,1200000],
                [7,1500000,1800000],
                [8,2200000,3900000]
            ],
            3: [    //25В
                [1,3900,8200],
                [2,10000,10000],
                [3,12000,100000],
                [4,120000,330000],
                [5,390000,1000000],
                [7,1200000,1500000],
                [8,1800000,4700000]
            ],
            4: [    //50В
                [1,1000,3300],
                [2,5600,6800],
                [3,8200,39000],
                [4,47000,220000],
                [5,270000,560000],
                [7,680000,1000000],
                [8,1200000,1500000]
            ],
            5: [    //100В
                [5,47000,150000],
                [7,180000,390000],
                [8,470000,1000000],
                [9,1200000,1500000]
            ],
            6: [    //250В
                [5,10000,39000],
                [7,47000,150000],
                [8,180000,470000],
                [9,560000,1000000]
            ],
            7: [    //500В
                [5,4700,8200],
                [7,10000,27000],
                [8,33000,100000],
                [9,120000,220000]
            ]
        }
    },
    3 : {   //К10-84в   
        0 : {   //МП0
            2: [    //16В
                [2,0.47,1000],
                [3,0.47,3000],
                [4,0.47,8200],
                [4,16000,16000,"+-20%"],
                [5,10,18000],
                [5,36000,36000,"+-20%"],
                [6,220,20000],
                [6,33000,33000,"+-20%"],
                [6,39000,39000,"+-20%"],
                [7,220,39000],
                [7,75000,75000,"+-20%"],
                [8,560,82000],
                [8,100000,100000,"+-20%"],
                [8,160000,160000,"+-20%"],
            ],
            3: [    //25В
                [2,0.47,820],
                [3,0.47,3000],
                [4,0.47,6800],
                [4,13000,13000,"+-20%"],
                [5,10,15000],
                [5,30000,30000,"+-20%"],
                [6,910,20000],
                [6,33000,33000,"+-20%"],
                [6,39000,39000,"+-20%"],
                [7,220,33000],
                [7,68000,68000,"+-20%"],
                [8,560,68000],
                [8,130000,130000,"+-20%"],
                [9,24000,68000],
                [9,130000,130000,"+-20%"],
                [11,68000,91000],
                [11,150000,150000,"+-20%"],
                [11,180000,180000,"+-20%"],
                [12,100000,120000],
                [12,200000,200000,"+-20%"],
                [12,240000,240000,"+-20%"]
            ],
            4: [    //50В
                [2,0.47,820],
                [3,0.47,3000],
                [4,0.47,6200],
                [4,13000,13000,"+-20%"],
                [5,2.2,15000],
                [5,30000,30000,"+-20%"],
                [6,2.2,18000],
                [6,36000,36000,"+-20%"],
                [7,220,33000],
                [7,68000,68000,"+-20%"],
                [8,470,47000],
                [8,91000,91000,"+-20%"],
                [9,6200,68000],
                [9,130000,130000,"+-20%"],
                [11,62000,91000],
                [11,150000,150000,"+-20%"],
                [11,180000,180000,"+-20%"],
                [12,100000,120000],
                [12,200000,200000,"+-20%"],
                [12,240000,240000,"+-20%"]
            ],
            5: [    //100В
                [2,0.47,430],
                [3,0.47,1300],
                [4,0.47,3900],
                [4,7500,7500,"+-20%"],
                [5,2.2,7500],
                [6,2.2,8200],
                [6,15000,15000,"+-20%"],
                [6,16000,16000,"+-20%"],
                [7,220,16000],
                [7,33000,33000,"+-20%"],
                [8,470,39000],
                [8,75000,75000,"+-20%"],
                [9,6200,43000],
                [9,68000,68000,"+-20%"],
                [9,82000,82000,"+-20%"],
                [11,36000,75000],
                [11,100000,100000,"+-20%"],
                [11,150000,150000,"+-20%"],
                [12,68000,110000],
                [12,220000,220000,"+-20%"]
            ],
            5: [    //250В
                [3,0.47,470],
                [4,0.47,1300],
                [4,2700,2700,"+-20%"],
                [5,10,3000],
                [5,6200,6200,"+-20%"],
                [6,430,1600],
                [6,2200,2200,"+-20%"],
                [6,3300,3300,"+-20%"],
                [7,220,5600],
                [7,11000,11000,"+-20%"],
                [8,470,12000],
                [8,24000,24000,"+-20%"],
                [9,3600,13000],
                [9,27000,27000,"+-20%"],
                [11,9100,22000],
                [11,43000,43000,"+-20%"],
                [12,13000,39000],
                [12,75000,75000,"+-20%"]
            ]
        },
        1: { //Н20
            2: [    //16В
                [2,330,22000],
                [3,1000,56000],
                [4,3300,180000],
                [4,390000,390000,"+-20%"],
                [5,4700,680000],
                [5,1000000,1000000,"+-20%"],
                [5,1500000,1500000,"+-20%"],
                [6,6800,680000],
                [6,1000000,1000000,"+-20%"],
                [6,1500000,1500000,"+-20%"],
                [7,10000,820000],
                [7,1800000,1800000,"+-20%"],
                [8,22000,1800000],
                [8,3300000,3300000,"+-20%"],
                [8,3900000,3900000,"+-20%"]
            ],
            3: [    //25В
                [2,330,18000],
                [3,1000,56000],
                [4,3300,180000],
                [4,390000,390000,"+-20%"],
                [5,4700,470000],
                [5,1000000,1000000,"+-20%"],
                [6,2200,680000],
                [6,1000000,1000000,"+-20%"],
                [6,1500000,1500000,"+-20%"],
                [7,10000,820000],
                [7,1800000,1800000,"+-20%"],
                [8,22000,1500000],
                [8,2200000,2200000,"+-20%"],
                [8,3300000,3300000,"+-20%"],
                [9,1500000,1500000],
                [9,2200000,2200000,"+-20%"],
                [9,3300000,3300000,"+-20%"],
                [11,1800000,1800000],
                [11,3300000,3300000,"+-20%"],
                [11,3900000,3900000,"+-20%"],
                [12,2700000,2700000],
                [12,4700000,5600000,"+-20%"]
            ],
            4: [    //50В
                [2,100,10000],
                [3,220,27000],
                [4,470,120000],
                [4,270000,270000,"+-20%"],
                [5,2200,220000],
                [5,470000,470000,"+-20%"],
                [6,22000,560000],
                [6,680000,680000,"+-20%"],
                [6,1000000,1000000,"+-20%"],
                [7,6800,680000],
                [7,1000000,1000000,"+-20%"],
                [8,10000,1500000],
                [8,2200000,2200000,"+-20%"],
                [8,3300000,3300000,"+-20%"],
                [9,330000,1500000],
                [9,2200000,2200000,"+-20%"],
                [9,3300000,3300000,"+-20%"],
                [11,680000,1800000],
                [11,3300000,3300000,"+-20%"],
                [11,3900000,3900000,"+-20%"],
                [12,1000000,2700000],
                [12,4700000,5600000,"+-20%"]
            ],
            5: [    //100В
                [2,220,1500],
                [3,470,5600],
                [4,1000,22000],
                [4,47000,47000,"+-20%"],
                [5,2200,39000],
                [5,68000,68000,"+-20%"],
                [5,82000,82000,"+-20%"],
                [6,3300,68000],
                [6,100000,100000,"+-20%"],
                [6,150000,150000,"+-20%"],
                [7,3900,82000],
                [7,180000,180000,"+-20%"],
                [8,3900,220000],
                [8,330000,330000,"+-20%"],
                [8,470000,470000,"+-20%"],
                [9,100000,330000],
                [9,470000,470000,"+-20%"],
                [9,680000,680000,"+-20%"],
                [11,220000,470000],
                [11,1000000,1000000,"+-20%"],
                [12,470000,820000],
                [12,1500000,1800000,"+-20%"]
            ],
            6: [    //250В
                [2,330,1000],
                [3,470,3900],
                [4,680,22000],
                [4,47000,47000,"+-20%"],
                [5,1000,33000],
                [5,68000,68000,"+-20%"],
                [6,1500,47000],
                [6,68000,68000,"+-20%"],
                [6,100000,100000,"+-20%"],
                [7,2200,68000],
                [7,100000,120000,"+-20%"],
                [8,10000,100000],
                [8,150000,150000,"+-20%"],
                [8,220000,220000,"+-20%"],
                [9,22000,120000],
                [9,270000,270000,"+-20%"],
                [11,68000,82000],
                [11,270000,270000,"+-20%"],
                [12,100000,220000],
                [12,330000,470000,"+-20%"]
            ],
            7: [    //500В
                [3,100,1500],
                [4,470,3900],
                [4,8200,8200,"+-20%"],
                [5,680,8200],
                [5,10000,10000,"+-20%"],
                [5,18000,18000,"+-20%"],
                [6,1000,10000],
                [6,15000,15000,"+-20%"],
                [6,22000,22000,"+-20%"],
                [7,1800,15000],
                [7,22000,22000,"+-20%"],
                [7,33000,33000,"+-20%"],
                [8,3300,33000],
                [8,47000,47000,"+-20%"],
                [8,68000,68000,"+-20%"],
                [9,4700,56000],
                [9,100000,120000,"+-20%"],
                [11,10000,68000],
                [11,150000,150000,"+-20%"],
                [12,22000,82000],
                [12,180000,180000,"+-20%"]
            ],
            8: [    //1000В
                [3,47,470],
                [4,120,1200],
                [4,2700,2700,"+-20%"],
                [6,470,4700],
                [6,6800,6800],
                [6,10000,10000,"+-20%"],
                [7,470,5600],
                [7,15000,15000,"+-20%"],
                [8,8200,15000],
                [8,33000,33000,"+-20%"],
                [10,18000,39000],
                [10,82000,82000,"+-20%"],
                [13,47000,120000],
                [13,270000,270000,"+-20%"]
            ],
            9: [    //1500В
                [3,100,100],
                [4,120,1000],
                [4,2200,2200,"+-20%"],
                [6,1200,2700],
                [6,5600,5600,"+-20%"],
                [7,1200,5600],
                [7,12000,12000,"+-20%"],
                [8,6800,10000],
                [8,22000,22000,"+-20%"],
                [10,12000,22000],
                [10,47000,47000,"+-20%"],
                [13,27000,100000],
                [13,220000,220000,"+-20%"]
            ]
        }
    }    
} 