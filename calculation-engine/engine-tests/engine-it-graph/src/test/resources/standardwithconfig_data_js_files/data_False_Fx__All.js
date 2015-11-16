var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '84a22b44-0b65-48ea-9dd6-61065a0bba79', label: 'D4\nFALSE', color: '#31b0d5', title: 'Name: D4<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 84a22b44-0b65-48ea-9dd6-61065a0bba79<br>Formula Expression: Formula String: VALUE; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@512319dc'},
{id: '5e68f75c-47fa-4776-b809-e33abfb90d2e', label: 'VALUE\nFALSE', color: '#31b0d5', title: 'Name: VALUE<br>Value: FALSE<br>Type: CONSTANT_VALUE<br>Id: 5e68f75c-47fa-4776-b809-e33abfb90d2e<br>Formula Expression: Formula String: VALUE; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@512319dc'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '5e68f75c-47fa-4776-b809-e33abfb90d2e', to: '84a22b44-0b65-48ea-9dd6-61065a0bba79'}
                            ]);