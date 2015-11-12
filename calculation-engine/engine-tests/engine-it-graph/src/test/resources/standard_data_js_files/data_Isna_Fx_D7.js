var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3162cf64-3071-415a-b92d-3a88c4e577a8', label: 'ISNA\nFALSE', color: '#f0ad4e', title: 'Name: ISNA<br>Value: FALSE<br>Type: FUNCTION<br>Id: 3162cf64-3071-415a-b92d-3a88c4e577a8<br>Formula Expression: Formula String: ISNA(A5); Formula Values: ISNA(5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@290d210d'},
{id: '58a70bf2-74a5-4069-a201-d791d8c9a7a7', label: 'A5\n5.0', color: '#31b0d5', title: 'Name: A5<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: 58a70bf2-74a5-4069-a201-d791d8c9a7a7<br>Formula Expression: Formula String: A5; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@290d210d'},
{id: '525a13ca-8c15-4bb3-9f7b-aebc719a828b', label: 'D7\nFALSE', color: '#31b0d5', title: 'Name: D7<br>Value: FALSE<br>Type: CELL_WITH_FORMULA<br>Id: 525a13ca-8c15-4bb3-9f7b-aebc719a828b<br>Formula Expression: Formula String: ISNA(A5); Formula Values: ISNA(5.0); Formula Ptg: 5.0 ISNA ; Ptgs: A5 ISNA  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@290d210d'},
{id: 'e69b13dc-a564-42ef-8ead-e823682bb9f8', label: 'C5\n5.0', color: '#31b0d5', title: 'Name: C5<br>Value: 5.0<br>Type: CELL_WITH_REFERENCE<br>Id: e69b13dc-a564-42ef-8ead-e823682bb9f8<br>Formula Expression: Formula String: A5; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A5 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@290d210d'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '58a70bf2-74a5-4069-a201-d791d8c9a7a7', to: 'e69b13dc-a564-42ef-8ead-e823682bb9f8'},
{from: 'e69b13dc-a564-42ef-8ead-e823682bb9f8', to: '3162cf64-3071-415a-b92d-3a88c4e577a8'},
{from: '3162cf64-3071-415a-b92d-3a88c4e577a8', to: '525a13ca-8c15-4bb3-9f7b-aebc719a828b'}
                            ]);