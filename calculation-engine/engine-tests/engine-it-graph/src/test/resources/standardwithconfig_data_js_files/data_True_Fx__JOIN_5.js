var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'be840b82-6f38-4502-837e-b727a844cffc', label: 'C3\nTRUE', color: '#31b0d5', title: 'Name: C3<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: be840b82-6f38-4502-837e-b727a844cffc<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@12919b7b'},
{id: '8b006779-3961-434d-b557-5c296b8ccea6', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: 8b006779-3961-434d-b557-5c296b8ccea6<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@12919b7b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '8b006779-3961-434d-b557-5c296b8ccea6', to: 'be840b82-6f38-4502-837e-b727a844cffc'}
                            ]);