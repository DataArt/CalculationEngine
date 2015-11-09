var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e71cbdbf-1f2e-4aa2-9f28-a773edd076a3', label: 'VALUE\nFALSE', color: '#31b0d5', title: 'Name: VALUE<br>Value: FALSE<br>Type: CONSTANT_VALUE<br>Id: e71cbdbf-1f2e-4aa2-9f28-a773edd076a3<br>Formula Expression: Formula String: VALUE; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5c5dd9ac'},
{id: '067e92da-580c-4e88-8915-f3a3769058a4', label: 'D4\nFALSE', color: '#31b0d5', title: 'Name: D4<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 067e92da-580c-4e88-8915-f3a3769058a4<br>Formula Expression: Formula String: VALUE; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@5c5dd9ac'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e71cbdbf-1f2e-4aa2-9f28-a773edd076a3', to: '067e92da-580c-4e88-8915-f3a3769058a4'}
                            ]);