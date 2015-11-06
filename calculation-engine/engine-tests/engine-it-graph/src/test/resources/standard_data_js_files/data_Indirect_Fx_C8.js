var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e03c5767-279d-4d71-8828-ebd8b5a65480', label: 'C8\n62.0', color: '#31b0d5', title: 'Name: C8<br>Value: 62.0<br>Type: CELL_WITH_FORMULA<br>Id: e03c5767-279d-4d71-8828-ebd8b5a65480<br>Formula Expression: Formula String: INDIRECT(VALUE & A5); Formula Values: INDIRECT(B & 5.0); Formula Ptg: B 5.0 & INDIRECT ; Ptgs: VALUE A5 & INDIRECT  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@213860b8'},
{id: 'e8ee4f8c-f067-4933-821c-c503029ca1f5', label: 'A5\n5.0', color: '#31b0d5', title: 'Name: A5<br>Value: 5.0<br>Type: CELL_WITH_VALUE<br>Id: e8ee4f8c-f067-4933-821c-c503029ca1f5<br>Formula Expression: Formula String: A5; Formula Values: 5.0; Formula Ptg: 5.0; Ptgs: A5 Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@213860b8'},
{id: '05ffdfac-ffd2-4048-9656-63bea590d6c7', label: 'VALUE\nB', color: '#31b0d5', title: 'Name: VALUE<br>Value: B<br>Type: CONSTANT_VALUE<br>Id: 05ffdfac-ffd2-4048-9656-63bea590d6c7<br>Formula Expression: Formula String: VALUE; Formula Values: B; Formula Ptg: B; Ptgs: VALUE Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@213860b8'},
{id: 'b9309b74-5bb0-47c7-80c0-b3186b6e5526', label: 'INDIRECT\n62.0', color: '#f0ad4e', title: 'Name: INDIRECT<br>Value: 62.0<br>Type: FUNCTION<br>Id: b9309b74-5bb0-47c7-80c0-b3186b6e5526<br>Formula Expression: Formula String: INDIRECT(VALUE & A5); Formula Values: INDIRECT(B & 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 3 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@213860b8'},
{id: '28c017d2-4c03-4b51-a1b7-93b37be92444', label: '&\nB5', color: '#f0ad4e', title: 'Name: &<br>Value: B5<br>Type: OPERATOR<br>Id: 28c017d2-4c03-4b51-a1b7-93b37be92444<br>Formula Expression: Formula String: VALUE & A5; Formula Values: B & 5.0; Formula Ptg: ; Ptgs:  Index in Ptgs: 2 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@213860b8'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'e8ee4f8c-f067-4933-821c-c503029ca1f5', to: '28c017d2-4c03-4b51-a1b7-93b37be92444'},
{from: 'b9309b74-5bb0-47c7-80c0-b3186b6e5526', to: 'e03c5767-279d-4d71-8828-ebd8b5a65480'},
{from: '05ffdfac-ffd2-4048-9656-63bea590d6c7', to: '28c017d2-4c03-4b51-a1b7-93b37be92444'},
{from: '28c017d2-4c03-4b51-a1b7-93b37be92444', to: 'b9309b74-5bb0-47c7-80c0-b3186b6e5526'}
                            ]);