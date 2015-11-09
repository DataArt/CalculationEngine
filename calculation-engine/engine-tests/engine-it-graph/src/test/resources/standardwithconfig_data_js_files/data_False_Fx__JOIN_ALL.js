var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e7484e9f-cf01-4b1a-a84e-591c6b2b7fa3', label: 'VALUE\nFALSE', color: '#31b0d5', title: 'Name: VALUE<br>Value: FALSE<br>Type: CONSTANT_VALUE<br>Id: e7484e9f-cf01-4b1a-a84e-591c6b2b7fa3<br>Formula Expression: Formula String: VALUE; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@52b6319f'},
{id: '1dcd8d71-3070-4480-b92d-8c60fae3e89c', label: 'D4\nFALSE', color: '#31b0d5', title: 'Name: D4<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 1dcd8d71-3070-4480-b92d-8c60fae3e89c<br>Formula Expression: Formula String: VALUE; Formula Values: FALSE; Formula Ptg: FALSE; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@52b6319f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e7484e9f-cf01-4b1a-a84e-591c6b2b7fa3', to: '1dcd8d71-3070-4480-b92d-8c60fae3e89c'}
                            ]);