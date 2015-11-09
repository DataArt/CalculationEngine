var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'eb89e650-9767-4560-b0e0-7cc9ce17b263', label: 'VALUE\nFALSE', color: '#31b0d5', title: 'Name: VALUE<br>Value: FALSE<br>Type: CONSTANT_VALUE<br>Id: eb89e650-9767-4560-b0e0-7cc9ce17b263<br>Formula Expression: Formula String: VALUE; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ff3275b'},
{id: 'e77ed3e6-c1d2-4be8-b9aa-4ae8ea6a8329', label: 'D4\nFALSE', color: '#31b0d5', title: 'Name: D4<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: e77ed3e6-c1d2-4be8-b9aa-4ae8ea6a8329<br>Formula Expression: Formula String: VALUE; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@3ff3275b'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'eb89e650-9767-4560-b0e0-7cc9ce17b263', to: 'e77ed3e6-c1d2-4be8-b9aa-4ae8ea6a8329'}
                            ]);