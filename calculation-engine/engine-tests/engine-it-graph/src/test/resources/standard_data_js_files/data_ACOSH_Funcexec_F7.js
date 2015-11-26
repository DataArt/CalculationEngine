var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '52377471-5b3a-4dd7-bd28-5fda4a700548', label: 'VALUE\nDEVDEF', color: '#31b0d5', title: 'Name: VALUE<br>Alias: null<br>Value: DEVDEF<br>Type: CONSTANT_VALUE<br>Id: 52377471-5b3a-4dd7-bd28-5fda4a700548<br>Formula Expression: Formula String: VALUE; Formula Values: DEVDEF; Formula Ptg: DEVDEF; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6c64cb25'},
{id: 'be46093d-7db3-40ce-9390-30f00509a2ec', label: 'FUNCEXEC\n5.192925985263684', color: '#f0ad4e', title: 'Name: FUNCEXEC<br>Alias: null<br>Value: 5.192925985263684<br>Type: FUNCTION<br>Id: be46093d-7db3-40ce-9390-30f00509a2ec<br>Formula Expression: Formula String: FUNCEXEC(C2, VALUE); Formula Values: FUNCEXEC(90.0, DEVDEF); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6c64cb25'},
{id: 'a6f1558d-b811-4ad3-bb74-c5969ee4c904', label: 'F7\n5.192925985263684', color: '#31b0d5', title: 'Name: F7<br>Alias: null<br>Value: 5.192925985263684<br>Type: CELL_WITH_FORMULA<br>Id: a6f1558d-b811-4ad3-bb74-c5969ee4c904<br>Formula Expression: Formula String: FUNCEXEC(C2, VALUE); Formula Values: FUNCEXEC(90.0, DEVDEF); Formula Ptg: 90.0, DEVDEF FUNCEXEC ; Ptgs: C2, VALUE FUNCEXEC  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6c64cb25'},
{id: '8b99f58d-71ec-457f-b2b3-a3fe25b337ed', label: 'C2\n90.0', color: '#31b0d5', title: 'Name: C2<br>Alias: null<br>Value: 90.0<br>Type: CELL_WITH_VALUE<br>Id: 8b99f58d-71ec-457f-b2b3-a3fe25b337ed<br>Formula Expression: Formula String: C2; Formula Values: 90.0; Formula Ptg: 90.0; Ptgs: C2 Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@6c64cb25'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8b99f58d-71ec-457f-b2b3-a3fe25b337ed', to: 'be46093d-7db3-40ce-9390-30f00509a2ec'},
{from: 'be46093d-7db3-40ce-9390-30f00509a2ec', to: 'a6f1558d-b811-4ad3-bb74-c5969ee4c904'},
{from: '52377471-5b3a-4dd7-bd28-5fda4a700548', to: 'be46093d-7db3-40ce-9390-30f00509a2ec'}
                            ]);