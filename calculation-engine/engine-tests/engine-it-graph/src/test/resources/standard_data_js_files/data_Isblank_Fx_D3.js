var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'd1f5a8b9-28bc-4065-b54d-01b7d8a22d42', label: 'ISBLANK\nFALSE', color: '#f0ad4e', title: 'Name: ISBLANK<br>Value: FALSE<br>Type: FUNCTION<br>Id: d1f5a8b9-28bc-4065-b54d-01b7d8a22d42<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(6.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@234a8f27'},
{id: '3ee9d62a-cd92-4f80-9ad0-e8e02186de36', label: 'VALUE\n6.0', color: '#31b0d5', title: 'Name: VALUE<br>Value: 6.0<br>Type: CONSTANT_VALUE<br>Id: 3ee9d62a-cd92-4f80-9ad0-e8e02186de36<br>Formula Expression: Formula String: VALUE; Formula Values: 6.0; Formula Ptg: 6.0; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@234a8f27'},
{id: '9f48aa29-66af-4124-aad9-68ab361c252d', label: 'D3\nFALSE', color: '#31b0d5', title: 'Name: D3<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 9f48aa29-66af-4124-aad9-68ab361c252d<br>Formula Expression: Formula String: ISBLANK(VALUE); Formula Values: ISBLANK(6.0); Formula Ptg: 6.0 ISBLANK ; Ptgs: VALUE ISBLANK  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@234a8f27'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '3ee9d62a-cd92-4f80-9ad0-e8e02186de36', to: 'd1f5a8b9-28bc-4065-b54d-01b7d8a22d42'},
{from: 'd1f5a8b9-28bc-4065-b54d-01b7d8a22d42', to: '9f48aa29-66af-4124-aad9-68ab361c252d'}
                            ]);