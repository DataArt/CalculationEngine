var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e8982310-8b59-4c69-8b4f-970548d3eff3', label: 'E3\n1.5707963267948966', color: '#31b0d5', title: 'Name: E3<br>Alias: null<br>Value: 1.5707963267948966<br>Type: CELL_WITH_FORMULA<br>Id: e8982310-8b59-4c69-8b4f-970548d3eff3<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: 1.0 ASIN ; Ptgs: A2 ASIN  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@37f1104d'},
{id: '2bea6a7d-5e15-4394-90f0-9f266269d20a', label: 'ASIN\n1.5707963267948966', color: '#f0ad4e', title: 'Name: ASIN<br>Alias: null<br>Value: 1.5707963267948966<br>Type: FUNCTION<br>Id: 2bea6a7d-5e15-4394-90f0-9f266269d20a<br>Formula Expression: Formula String: ASIN(A2); Formula Values: ASIN(1.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@37f1104d'},
{id: 'aeb3016c-8c79-4f6c-82c5-436d2a5c878c', label: 'A2\n1.0', color: '#31b0d5', title: 'Name: A2<br>Alias: null<br>Value: 1.0<br>Type: CELL_WITH_VALUE<br>Id: aeb3016c-8c79-4f6c-82c5-436d2a5c878c<br>Formula Expression: Formula String: A2; Formula Values: 1.0; Formula Ptg: 1.0; Ptgs: A2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@37f1104d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2bea6a7d-5e15-4394-90f0-9f266269d20a', to: 'e8982310-8b59-4c69-8b4f-970548d3eff3'},
{from: 'aeb3016c-8c79-4f6c-82c5-436d2a5c878c', to: '2bea6a7d-5e15-4394-90f0-9f266269d20a'}
                            ]);