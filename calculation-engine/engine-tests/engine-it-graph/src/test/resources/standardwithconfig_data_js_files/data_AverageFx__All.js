var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'ff17b67a-1fe9-45b5-940e-80cedc59ba2d', label: 'E5\n5.2', color: '#31b0d5', title: 'Name: E5<br>Value: 5.2<br>Type: CELL_WITH_FORMULA<br>Id: ff17b67a-1fe9-45b5-940e-80cedc59ba2d<br>Formula Expression: Formula String: AVERAGE(A1:E1); Formula Values: AVERAGE(12.0, 2.0, 3.0, 4.0, 5.0); Formula Ptg: 12.0, 2.0, 3.0, 4.0, 5.0 AVERAGE ; Ptgs: A1:E1 AVERAGE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@308d8de8'},
{id: '6764f0db-de9f-4fa8-b006-b62baa7e1ff1', label: 'A1:E1\n[[12.0, 2.0, 3.0, 4.0, 5.0]]', color: '#31b0d5', title: 'Name: A1:E1<br>Value: [[12.0, 2.0, 3.0, 4.0, 5.0]]<br>Type: RANGE<br>Id: 6764f0db-de9f-4fa8-b006-b62baa7e1ff1<br>Formula Expression: Formula String: A1:E1; Formula Values: [[12.0, 2.0, 3.0, 4.0, 5.0]]; Formula Ptg: [[12.0, 2.0, 3.0, 4.0, 5.0]]; Ptgs: A1:E1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@308d8de8'},
{id: '2c4ce2af-f9fe-4e48-82b7-ca8b532a2dd9', label: 'AVERAGE\n5.2', color: '#f0ad4e', title: 'Name: AVERAGE<br>Value: 5.2<br>Type: FUNCTION<br>Id: 2c4ce2af-f9fe-4e48-82b7-ca8b532a2dd9<br>Formula Expression: Formula String: AVERAGE(A1:E1); Formula Values: AVERAGE(12.0, 2.0, 3.0, 4.0, 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@308d8de8'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '2c4ce2af-f9fe-4e48-82b7-ca8b532a2dd9', to: 'ff17b67a-1fe9-45b5-940e-80cedc59ba2d'},
{from: '6764f0db-de9f-4fa8-b006-b62baa7e1ff1', to: '2c4ce2af-f9fe-4e48-82b7-ca8b532a2dd9'}
                            ]);