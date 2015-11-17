var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '67ffc2a1-a9bf-4b2b-a135-acea3712d888', label: 'VALUE\nFALSE', color: '#31b0d5', title: 'Name: VALUE<br>Value: FALSE<br>Type: CONSTANT_VALUE<br>Id: 67ffc2a1-a9bf-4b2b-a135-acea3712d888<br>Formula Expression: Formula String: VALUE; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5c5dd9ac'},
{id: '4b150459-b095-452e-a3f2-4ac33e06e040', label: 'D4\nFALSE', color: '#31b0d5', title: 'Name: D4<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 4b150459-b095-452e-a3f2-4ac33e06e040<br>Formula Expression: Formula String: VALUE; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5c5dd9ac'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '67ffc2a1-a9bf-4b2b-a135-acea3712d888', to: '4b150459-b095-452e-a3f2-4ac33e06e040'}
                            ]);