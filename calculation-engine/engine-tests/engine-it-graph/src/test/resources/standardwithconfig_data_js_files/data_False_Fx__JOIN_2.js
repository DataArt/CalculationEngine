var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '09ed52f0-c8c4-4847-ac98-0634e43d9b07', label: 'VALUE\nFALSE', color: '#31b0d5', title: 'Name: VALUE<br>Value: FALSE<br>Type: CONSTANT_VALUE<br>Id: 09ed52f0-c8c4-4847-ac98-0634e43d9b07<br>Formula Expression: Formula String: VALUE; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@738a815c'},
{id: '444ab66c-b261-4244-b6e3-ab343b776967', label: 'D4\nFALSE', color: '#31b0d5', title: 'Name: D4<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 444ab66c-b261-4244-b6e3-ab343b776967<br>Formula Expression: Formula String: VALUE; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@738a815c'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '09ed52f0-c8c4-4847-ac98-0634e43d9b07', to: '444ab66c-b261-4244-b6e3-ab343b776967'}
                            ]);