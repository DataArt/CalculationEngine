var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '5d5e67c0-0950-4738-99b5-140d1de0a040', label: 'A1\n12.0', color: '#31b0d5', title: 'Name: A1<br>Value: 12.0<br>Type: CELL_WITH_FORMULA<br>Id: 5d5e67c0-0950-4738-99b5-140d1de0a040<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5bb39285'},
{id: '51339569-fd51-4454-86a3-10284e2990df', label: 'VALUE\n12.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 12.0<br>Type: CONSTANT_VALUE<br>Id: 51339569-fd51-4454-86a3-10284e2990df<br>Formula Expression: Formula String: VALUE; Formula Values: 12.0; Formula Ptg: 12.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5bb39285'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '51339569-fd51-4454-86a3-10284e2990df', to: '5d5e67c0-0950-4738-99b5-140d1de0a040'}
                            ]);