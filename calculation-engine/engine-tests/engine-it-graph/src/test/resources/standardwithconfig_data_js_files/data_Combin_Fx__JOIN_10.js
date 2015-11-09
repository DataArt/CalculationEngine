var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '546c1894-c278-44c2-9ba3-fba50b131f4f', label: 'VALUE\n1.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 1.0<br>Type: CONSTANT_VALUE<br>Id: 546c1894-c278-44c2-9ba3-fba50b131f4f<br>Formula Expression: Formula String: VALUE; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: VALUE Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@29394966'},
{id: '936ca874-a8a0-4447-b5d8-f1490971e71d', label: 'COMBIN\n3.0', color: '#f0ad4e', title: 'Name: COMBIN<br>Value: 3.0<br>Type: FUNCTION<br>Id: 936ca874-a8a0-4447-b5d8-f1490971e71d<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(1.0, 3.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@29394966'},
{id: 'cbcdfb95-a0b1-49ed-af77-ab9871fbc3ea', label: 'VALUE\n3.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 3.0<br>Type: CONSTANT_VALUE<br>Id: cbcdfb95-a0b1-49ed-af77-ab9871fbc3ea<br>Formula Expression: Formula String: VALUE; Formula Values: 3.0; Formula Ptg: 3.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@29394966'},
{id: '34511977-09fa-44b9-bedb-ba5d1e228456', label: 'E6\n3.0', color: '#31b0d5', title: 'Name: E6<br>Value: 3.0<br>Type: CELL_WITH_FORMULA<br>Id: 34511977-09fa-44b9-bedb-ba5d1e228456<br>Formula Expression: Formula String: COMBIN(VALUE, VALUE); Formula Values: COMBIN(1.0, 3.0); Formula Ptg: 1.0, 3.0 COMBIN ; Ptgs: VALUE, VALUE COMBIN  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@29394966'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '546c1894-c278-44c2-9ba3-fba50b131f4f', to: '936ca874-a8a0-4447-b5d8-f1490971e71d'},
{from: 'cbcdfb95-a0b1-49ed-af77-ab9871fbc3ea', to: '936ca874-a8a0-4447-b5d8-f1490971e71d'},
{from: '936ca874-a8a0-4447-b5d8-f1490971e71d', to: '34511977-09fa-44b9-bedb-ba5d1e228456'}
                            ]);