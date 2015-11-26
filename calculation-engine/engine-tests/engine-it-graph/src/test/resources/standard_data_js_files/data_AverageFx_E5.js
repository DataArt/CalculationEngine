var nodes = new vis.DataSet([
                             /* {id: a, label: b, ...}, */
{id: '3d0696c1-f072-4dc2-8b25-5f3b1a2be46f', label: 'AVERAGE\n5.2', color: '#f0ad4e', title: 'Name: AVERAGE<br>Alias: null<br>Value: 5.2<br>Type: FUNCTION<br>Id: 3d0696c1-f072-4dc2-8b25-5f3b1a2be46f<br>Formula Expression: Formula String: AVERAGE(A1:E1); Formula Values: AVERAGE(12.0, 2.0, 3.0, 4.0, 5.0); Formula Ptg: ; Ptgs:  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f2cfe3f'},
{id: '3566511b-376b-40d5-b844-32d2a6bd9136', label: 'E5\n5.2', color: '#31b0d5', title: 'Name: E5<br>Alias: null<br>Value: 5.2<br>Type: CELL_WITH_FORMULA<br>Id: 3566511b-376b-40d5-b844-32d2a6bd9136<br>Formula Expression: Formula String: AVERAGE(A1:E1); Formula Values: AVERAGE(12.0, 2.0, 3.0, 4.0, 5.0); Formula Ptg: 12.0, 2.0, 3.0, 4.0, 5.0 AVERAGE ; Ptgs: A1:E1 AVERAGE  Index in Ptgs: 1 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f2cfe3f'},
{id: '0542757e-c26f-4182-9be5-8a5fb2a7f2d5', label: 'A1:E1\n[[12.0, 2.0, 3.0, 4.0, 5.0]]', color: '#31b0d5', title: 'Name: A1:E1<br>Alias: null<br>Value: [[12.0, 2.0, 3.0, 4.0, 5.0]]<br>Type: RANGE<br>Id: 0542757e-c26f-4182-9be5-8a5fb2a7f2d5<br>Formula Expression: Formula String: A1:E1; Formula Values: [[12.0, 2.0, 3.0, 4.0, 5.0]]; Formula Ptg: [[12.0, 2.0, 3.0, 4.0, 5.0]]; Ptgs: A1:E1 Index in Ptgs: 0 <br>Source Object Id: org.apache.poi.xssf.usermodel.XSSFEvaluationWorkbook@7f2cfe3f'}
                            ]);


var edges = new vis.DataSet([
                             /* {from: id_a, to: id_b}, */
{from: '0542757e-c26f-4182-9be5-8a5fb2a7f2d5', to: '3d0696c1-f072-4dc2-8b25-5f3b1a2be46f'},
{from: '3d0696c1-f072-4dc2-8b25-5f3b1a2be46f', to: '3566511b-376b-40d5-b844-32d2a6bd9136'}
                            ]);