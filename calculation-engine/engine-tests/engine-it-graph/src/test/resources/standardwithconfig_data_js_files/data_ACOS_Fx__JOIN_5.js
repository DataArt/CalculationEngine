var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '43417d2d-a030-44b5-b686-471a5192dfb5', label: 'ACOS\n1.359221367036801', color: '#f0ad4e', title: 'Name: ACOS<br>Value: 1.359221367036801<br>Type: FUNCTION<br>Id: 43417d2d-a030-44b5-b686-471a5192dfb5<br>Formula Expression: Formula String: ACOS(C2); Formula Values: ACOS(0.21); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a2f7a61'},
{id: '5579575b-58f6-459a-8b15-e5d38c262b17', label: 'E5\n1.359221367036801', color: '#31b0d5', title: 'Name: E5<br>Value: 1.359221367036801<br>Type: CELL_WITH_FORMULA<br>Id: 5579575b-58f6-459a-8b15-e5d38c262b17<br>Formula Expression: Formula String: ACOS(C2); Formula Values: ACOS(0.21); Formula Ptg: 0.21 ACOS ; Ptgs: C2 ACOS  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a2f7a61'},
{id: 'cf180571-ae4f-4e71-9ce5-624fabd6be5b', label: 'C2\n0.21', color: '#31b0d5', title: 'Name: C2<br>Value: 0.21<br>Type: CELL_WITH_VALUE<br>Id: cf180571-ae4f-4e71-9ce5-624fabd6be5b<br>Formula Expression: Formula String: C2; Formula Values: 0.21; Formula Ptg: 0.21; Ptgs: C2 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@2a2f7a61'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: 'cf180571-ae4f-4e71-9ce5-624fabd6be5b', to: '43417d2d-a030-44b5-b686-471a5192dfb5'},
{from: '43417d2d-a030-44b5-b686-471a5192dfb5', to: '5579575b-58f6-459a-8b15-e5d38c262b17'}
                            ]);