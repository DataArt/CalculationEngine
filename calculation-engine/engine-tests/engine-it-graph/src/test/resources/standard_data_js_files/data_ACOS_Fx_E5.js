var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '59e7f834-25da-4310-94fb-35e9c23d32b1', label: 'ACOS\n1.359221367036801', color: '#f0ad4e', title: 'Name: ACOS<br>Value: 1.359221367036801<br>Type: FUNCTION<br>Id: 59e7f834-25da-4310-94fb-35e9c23d32b1<br>Formula Expression: Formula String: ACOS(C2); Formula Values: ACOS(0.21); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e802ef9'},
{id: '8bdc8737-a25c-4dde-bcd2-9ffab8cf18b5', label: 'E5\n1.359221367036801', color: '#31b0d5', title: 'Name: E5<br>Value: 1.359221367036801<br>Type: CELL_WITH_FORMULA<br>Id: 8bdc8737-a25c-4dde-bcd2-9ffab8cf18b5<br>Formula Expression: Formula String: ACOS(C2); Formula Values: ACOS(0.21); Formula Ptg: 0.21 ACOS ; Ptgs: C2 ACOS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e802ef9'},
{id: 'ebc33a00-351f-4c74-aaf8-64e3c8ea0d25', label: 'C2\n0.21', color: '#31b0d5', title: 'Name: C2<br>Value: 0.21<br>Type: CELL_WITH_VALUE<br>Id: ebc33a00-351f-4c74-aaf8-64e3c8ea0d25<br>Formula Expression: Formula String: C2; Formula Values: 0.21; Formula Ptg: 0.21; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@1e802ef9'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '59e7f834-25da-4310-94fb-35e9c23d32b1', to: '8bdc8737-a25c-4dde-bcd2-9ffab8cf18b5'},
{from: 'ebc33a00-351f-4c74-aaf8-64e3c8ea0d25', to: '59e7f834-25da-4310-94fb-35e9c23d32b1'}
                            ]);