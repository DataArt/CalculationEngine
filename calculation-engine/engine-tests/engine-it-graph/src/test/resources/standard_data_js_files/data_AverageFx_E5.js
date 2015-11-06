var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: 'e65a6373-ec5f-42e1-84b0-a54b2f667752', label: 'AVERAGE\n5.2', color: '#f0ad4e', title: 'Name: AVERAGE<br>Value: 5.2<br>Type: FUNCTION<br>Id: e65a6373-ec5f-42e1-84b0-a54b2f667752<br>Formula Expression: Formula String: AVERAGE(A1:E1); Formula Values: AVERAGE(12.0, 2.0, 3.0, 4.0, 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@50f6ac94'},
{id: '819a7b60-d0ae-421b-a907-7c28b1cdcc1c', label: 'E5\n5.2', color: '#31b0d5', title: 'Name: E5<br>Value: 5.2<br>Type: CELL_WITH_FORMULA<br>Id: 819a7b60-d0ae-421b-a907-7c28b1cdcc1c<br>Formula Expression: Formula String: AVERAGE(A1:E1); Formula Values: AVERAGE(12.0, 2.0, 3.0, 4.0, 5.0); Formula Ptg: 12.0, 2.0, 3.0, 4.0, 5.0 AVERAGE ; Ptgs: A1:E1 AVERAGE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@50f6ac94'},
{id: '6fff7a62-05c8-48ea-9a32-272ed898101c', label: 'A1:E1\n[[12.0, 2.0, 3.0, 4.0, 5.0]]', color: '#31b0d5', title: 'Name: A1:E1<br>Value: [[12.0, 2.0, 3.0, 4.0, 5.0]]<br>Type: RANGE<br>Id: 6fff7a62-05c8-48ea-9a32-272ed898101c<br>Formula Expression: Formula String: A1:E1; Formula Values: [[12.0, 2.0, 3.0, 4.0, 5.0]]; Formula Ptg: [[12.0, 2.0, 3.0, 4.0, 5.0]]; Ptgs: A1:E1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@50f6ac94'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '6fff7a62-05c8-48ea-9a32-272ed898101c', to: 'e65a6373-ec5f-42e1-84b0-a54b2f667752'},
{from: 'e65a6373-ec5f-42e1-84b0-a54b2f667752', to: '819a7b60-d0ae-421b-a907-7c28b1cdcc1c'}
                            ]);