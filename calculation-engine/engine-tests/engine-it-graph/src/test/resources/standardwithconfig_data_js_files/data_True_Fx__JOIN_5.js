var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'b961e0ba-f3d9-4a1e-99ee-013fd35374df', label: 'C3\nTRUE', color: '#31b0d5', title: 'Name: C3<br>Value: TRUE<br>Type: CELL_WITH_FORMULA<br>Id: b961e0ba-f3d9-4a1e-99ee-013fd35374df<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@12919b7b'},
{id: '250164bc-9759-4da4-8ec0-0876409fad43', label: 'VALUE\nTRUE', color: '#31b0d5', title: 'Name: VALUE<br>Value: TRUE<br>Type: CONSTANT_VALUE<br>Id: 250164bc-9759-4da4-8ec0-0876409fad43<br>Formula Expression: Formula String: VALUE; Formula Values: TRUE; Formula Ptg: TRUE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@12919b7b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '250164bc-9759-4da4-8ec0-0876409fad43', to: 'b961e0ba-f3d9-4a1e-99ee-013fd35374df'}
                            ]);